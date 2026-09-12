"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Do I need to replace my staff?",
    a: "No. The system is designed to automate repetitive first-line work and hand conversations to people when needed. Your team stays in control.",
  },
  {
    q: "Can it work with WhatsApp?",
    a: "Yes, where the required WhatsApp Business/API setup is available and approved for your use case.",
  },
  {
    q: "Can it answer every question?",
    a: "No — and it shouldn't. It answers only from approved business information and escalates uncertain or sensitive cases to your team.",
  },
  {
    q: "How much does it cost?",
    a: "Founding-client implementations start from ₦100,000. Final pricing depends on scope — that's why the audit comes first.",
  },
  {
    q: "How long does setup take?",
    a: "We can only give a realistic estimate after the audit. Complexity varies by business.",
  },
  {
    q: "Can you connect other tools?",
    a: "Potentially, depending on your workflow and supported integrations. We'll scope this during the audit.",
  },
  {
    q: "Will AI make mistakes?",
    a: "It can. The service includes explicit boundaries, testing, and human escalation, rather than claiming AI is infallible.",
  },
  {
    q: "What happens to my customer data?",
    a: "We don't store customer conversation data beyond what your workflow requires. Data handling terms are defined per client.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-border bg-ground-2 px-5 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl">
            Common questions.
          </h2>
        </Reveal>

        <Reveal delay={150} className="space-y-2">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-border"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150 ${
                    isOpen ? "bg-ground-3" : "bg-ground"
                  }`}
                >
                  <span className="text-sm font-medium text-text">
                    {item.q}
                  </span>
                  <Plus
                    size={16}
                    className={`shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid bg-ground-3 transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
