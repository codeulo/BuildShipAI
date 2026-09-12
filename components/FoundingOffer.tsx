import Button from "./Button";
import StatusPill from "./StatusPill";
import Reveal from "./Reveal";

export default function FoundingOffer() {
  return (
    <section
      id="pricing"
      className="border-t border-border px-5 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "var(--color-ground-2)",
              border: "1px solid rgba(22,199,132,0.2)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
            }}
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
              {/* Left: message */}
              <div className="text-center md:text-left">
                <StatusPill>Founding Client Program</StatusPill>

                <h2 className="mt-6 mb-4 font-display text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl">
                  We&apos;re working with the{" "}
                  <span className="italic text-accent">first 3 businesses</span>{" "}
                  at a reduced price.
                </h2>

                <p
                  className="mx-auto max-w-md text-sm leading-relaxed md:mx-0"
                  style={{ color: "var(--color-muted)" }}
                >
                  Final pricing depends on the workflow, integrations, and
                  scope. A free audit comes first — no obligation.
                </p>
              </div>

              {/* Right: price + CTA */}
              <div className="border-l-2 border-border pl-8">
                <p
                  className="mb-2 font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--color-muted)" }}
                >
                  Starting from
                </p>

                <p
                  className="mb-6 font-display text-5xl font-bold md:text-6xl"
                  style={{ color: "var(--color-text)" }}
                >
                  ₦100,000
                </p>

                <Button
                  href="#audit"
                  size="lg"
                  showArrow
                  event="founding_cta_click"
                >
                  Apply for the Founding Client Program
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
