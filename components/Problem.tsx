import { Hourglass, RefreshCw, MoonStar, TriangleAlert, ListTree } from "lucide-react";
import Reveal from "./Reveal";

const PROBLEMS = [
  {
    icon: Hourglass,
    title: "Slow response time",
    body: "Customers ask the same questions again and again — and wait too long for an answer.",
  },
  {
    icon: RefreshCw,
    title: "Repetitive enquiries",
    body: "Busy teams respond late, miss follow-ups, or simply forget.",
  },
  {
    icon: MoonStar,
    title: "After-hours gaps",
    body: "Enquiries arrive outside business hours with no one available to respond.",
  },
  {
    icon: TriangleAlert,
    title: "Lost leads",
    body: "Potential customers disappear before anyone qualifies or follows up with them.",
  },
  {
    icon: ListTree,
    title: "No tracking",
    body: "Customer conversations are scattered and difficult to track consistently.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="border-t border-border px-5 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            The problem
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl">
            Your customers are already asking.{" "}
            <span className="italic text-muted">
              The problem is what happens when nobody can answer immediately.
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-ground-2 p-6 transition-colors duration-300 hover:border-white/15">
                <Icon size={22} strokeWidth={1.5} className="mb-3 text-muted" />
                <h3 className="mb-2 text-base font-semibold text-text">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
