import Button from "./Button";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-28 pt-20 md:px-10 md:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(22,199,132,0.1) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-dim bg-accent-dim2 px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            WhatsApp AI automation — for Nigerian businesses
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-text md:text-7xl">
            Stop Losing
            <br />
            <span className="italic text-accent">Customers</span>
            <br />
            on WhatsApp.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Let AI handle repetitive customer enquiries while your team
            focuses on serious customers.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            We build custom WhatsApp automation that answers common
            questions, captures customer details, qualifies leads, and hands
            serious conversations to your team.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#audit" size="lg" showArrow event="hero_primary_cta" className="w-full sm:w-auto">
              Get a Free Automation Audit
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              size="lg"
              event="hero_secondary_cta"
              className="w-full sm:w-auto"
            >
              See How It Works
            </Button>
          </div>

          <p className="mt-5 font-mono text-xs text-muted">
            No commitment. A 15-minute conversation about your workflow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
