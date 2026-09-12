type StatusPillProps = {
  children: React.ReactNode;
  tone?: "accent" | "muted" | "whatsapp";
};

const toneClasses = {
  accent: "bg-accent-dim text-accent border-accent-dim",
  muted: "bg-ground-3 text-muted border-border",
  whatsapp: "bg-whatsapp-dim text-whatsapp border-whatsapp-dim",
};

const dotClasses = {
  accent: "bg-accent",
  muted: "bg-muted",
  whatsapp: "bg-whatsapp",
};

export default function StatusPill({ children, tone = "accent" }: StatusPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-widest ${toneClasses[tone]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotClasses[tone]}`} />
      {children}
    </span>
  );
}
