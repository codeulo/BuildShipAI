import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Free audit",
    body: "We review where enquiries and repetitive work happen in your business.",
  },
  {
    n: "02",
    title: "Workflow design",
    body: "We define what AI should answer, ask, and escalate — based on your rules.",
  },
  {
    n: "03",
    title: "Build",
    body: "We implement the agreed automation around your business.",
  },
  {
    n: "04",
    title: "Test & deploy",
    body: "We test realistic conversations before launch. Nothing goes live unreviewed.",
  },
  {
    n: "05",
    title: "Support",
    body: "We monitor and improve the workflow after launch.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-border bg-ground-2 px-5 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Process
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl">
            How it works.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-ground-3 p-5">
                <div className="mb-4 font-mono text-3xl font-semibold leading-none text-border-strong">
                  {s.n}
                </div>
                <h3 className="mb-2 text-base font-semibold text-text">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
