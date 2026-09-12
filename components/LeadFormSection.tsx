import LeadForm from "./LeadForm";
import Reveal from "./Reveal";

export default function LeadFormSection() {
  return (
    <section id="audit" className="border-t border-border px-5 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Free audit
          </p>
          <h2 className="mb-3 font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl">
            Request Your Free
            <br />
            Automation Audit.
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            15 minutes. No pitch. We review your workflow and tell you what
            automation can realistically do for your business.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
