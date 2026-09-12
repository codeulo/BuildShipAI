import { Home, ShoppingCart, Wrench, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const USE_CASES = [
  {
    sector: "Real estate",
    icon: Home,
    scenarios: [
      "Property enquiries by area and budget",
      "Inspection booking",
      "Agent handoff for serious buyers",
    ],
  },
  {
    sector: "Online retail",
    icon: ShoppingCart,
    scenarios: [
      "Order status & tracking",
      "Product availability",
      "Returns and complaints triage",
    ],
  },
  {
    sector: "Service businesses",
    icon: Wrench,
    scenarios: [
      "Appointment scheduling",
      "Quote requests",
      "FAQ for service terms and pricing",
    ],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="border-t border-border px-5 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Verticals
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl">
            Built for Nigerian SMBs.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {USE_CASES.map(({ sector, icon: Icon, scenarios }, i) => (
            <Reveal key={sector} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-ground-2 p-6">
                <Icon size={26} strokeWidth={1.5} className="mb-4 text-accent" />
                <h3 className="mb-4 font-display text-xl font-semibold text-text">
                  {sector}
                </h3>
                <ul className="space-y-2.5">
                  {scenarios.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-muted">
                      <ArrowRight size={14} className="mt-0.5 shrink-0 text-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
