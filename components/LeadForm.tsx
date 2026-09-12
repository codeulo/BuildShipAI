"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Loader2 } from "lucide-react";
import Button from "./Button";
import {
  whatsappHref,
  WHATSAPP_PREFILL,
  BUSINESS_TYPES,
  ENQUIRY_RANGES,
} from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  business: string;
  businessType: string;
  whatsapp: string;
  website: string;
  enquiriesPerDay: string;
  biggestTask: string;
  message: string;
  consent: boolean;
};

const INITIAL_STATE: FormState = {
  name: "",
  business: "",
  businessType: "",
  whatsapp: "",
  website: "",
  enquiriesPerDay: "",
  biggestTask: "",
  message: "",
  consent: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(): Partial<Record<keyof FormState, string>> {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.business.trim()) e.business = "Business name is required";
    if (!form.businessType) e.businessType = "Select a business type";
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp number is required";
    else if (!/^[\d\s+\-()]{7,}$/.test(form.whatsapp))
      e.whatsapp = "Enter a valid WhatsApp number";
    if (!form.enquiriesPerDay) e.enquiriesPerDay = "Required";
    if (!form.biggestTask.trim())
      e.biggestTask = "Tell us your biggest repetitive task";
    if (!form.consent) e.consent = "Please confirm your consent";
    return e;
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");
    setErrorMessage("");
    trackEvent("audit_form_submit");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          businessName: form.business,
          businessType: form.businessType,
          whatsappNumber: form.whatsapp,
          website: form.website,
          enquiriesPerDay: form.enquiriesPerDay,
          repetitiveTask: form.biggestTask,
          message: form.message,
          consent: form.consent,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent-dim bg-ground-2 px-8 py-16 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-accent-dim">
          <CheckCircle2 size={24} className="text-accent" strokeWidth={2.2} />
        </div>
        <h3 className="mb-2 font-display text-2xl font-bold text-text">
          Request received.
        </h3>
        <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted">
          We&apos;ll review your details and send a WhatsApp message within 24
          hours to schedule your free audit.
        </p>
        <Button
          href={whatsappHref()}
          variant="secondary"
          className="mt-6"
          showArrow
        >
          Message us on WhatsApp instead
        </Button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border-strong bg-ground-3 px-4 py-3 text-sm text-text placeholder:text-muted/60 transition-colors duration-150";

  const errorText = (msg?: string) =>
    msg ? <p className="mt-1 text-xs text-red-400">{msg}</p> : null;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
              Your name *
            </label>
            <input
              className={inputClass}
              type="text"
              placeholder="Emeka Okafor"
              value={form.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateField("name", e.target.value)
              }
            />
            {errorText(errors.name)}
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
              Business name *
            </label>
            <input
              className={inputClass}
              type="text"
              placeholder="Premier Homes Ltd"
              value={form.business}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateField("business", e.target.value)
              }
            />
            {errorText(errors.business)}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Business type *
          </label>
          <select
            className={inputClass}
            value={form.businessType}
            onChange={(e) => updateField("businessType", e.target.value)}
          >
            <option value="">Select your industry</option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errorText(errors.businessType)}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
              WhatsApp number *
            </label>
            <input
              className={inputClass}
              type="tel"
              placeholder="+234 801 234 5678"
              value={form.whatsapp}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateField("whatsapp", e.target.value)
              }
            />
            {errorText(errors.whatsapp)}
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
              Website / social
            </label>
            <input
              className={inputClass}
              type="text"
              placeholder="instagram.com/yourbusiness"
              value={form.website}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateField("website", e.target.value)
              }
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Approx. WhatsApp enquiries per day *
          </label>
          <select
            className={inputClass}
            value={form.enquiriesPerDay}
            onChange={(e) => updateField("enquiriesPerDay", e.target.value)}
          >
            <option value="">Select a range</option>
            {ENQUIRY_RANGES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errorText(errors.enquiriesPerDay)}
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Biggest repetitive customer task *
          </label>
          <input
            className={inputClass}
            type="text"
            placeholder="Answering property availability questions every day"
            value={form.biggestTask}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateField("biggestTask", e.target.value)
            }
          />
          {errorText(errors.biggestTask)}
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Anything else? (optional)
          </label>
          <textarea
            className={inputClass}
            rows={3}
            placeholder="Any extra context about your workflow or challenges…"
            value={form.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              updateField("message", e.target.value)
            }
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            checked={form.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded accent-[#16C784]"
          />
          <label
            htmlFor="consent"
            className="text-xs leading-relaxed text-muted"
          >
            I agree that BuildShip AI may contact me via WhatsApp regarding this
            audit request. We don&apos;t share your details with third parties.
            Read our{" "}
            <a href="/privacy-policy" className="legal-link">
              privacy policy
            </a>
            .
          </label>
        </div>
        {errorText(errors.consent)}

        {status === "error" && (
          <p className="text-center text-sm text-red-400" role="alert">
            {errorMessage}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full"
          showArrow={status !== "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending…
            </>
          ) : (
            "Request My Free Automation Audit"
          )}
        </Button>
      </form>

      <div className="flex flex-col justify-center rounded-2xl border border-border bg-ground-3 p-6 sm:p-8">
        <MessageCircle size={26} className="text-whatsapp" strokeWidth={1.75} />
        <h3 className="mt-4 font-display text-xl font-bold text-text">
          Prefer WhatsApp?
        </h3>
        <p className="mt-2 leading-relaxed text-muted">
          Message us directly and we&apos;ll pick it up from there.
        </p>
        <p className="mt-4 rounded-lg bg-ground px-4 py-3 font-mono text-xs leading-relaxed text-muted">
          &ldquo;{WHATSAPP_PREFILL}__&rdquo;
        </p>
        <Button
          href={whatsappHref()}
          variant="secondary"
          className="mt-5 border-whatsapp-dim text-whatsapp hover:border-whatsapp/40"
          showArrow
          event="whatsapp_cta_click"
        >
          Open WhatsApp
        </Button>
      </div>
    </div>
  );
}
