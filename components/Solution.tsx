import { Check } from "lucide-react";
import Reveal from "./Reveal";

const SOLUTION_ITEMS = [
  "Instant answers to approved FAQs",
  "Lead and customer information capture",
  "Qualification questions",
  "Product/service enquiries",
  "Appointment or inspection requests",
  "Follow-up workflows",
  "Human handoff when AI should stop",
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="border-t border-border bg-ground-2 px-5 py-24 md:px-10"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            The solution
          </p>
          <h2 className="mb-5 font-display text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl">
            Automate the repetitive part.
            <br />
            <span className="italic text-muted">Keep humans in control.</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            We design each automation around your specific business — what it
            should answer, what it should ask, and exactly when it should
            hand the conversation to your team.
          </p>
        </Reveal>

        <Reveal delay={150} className="space-y-3">
          {SOLUTION_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-ground-3 px-5 py-3.5"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent bg-accent-dim">
                <Check size={11} strokeWidth={2.5} className="text-accent" />
              </span>
              <span className="text-sm text-text">{item}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
