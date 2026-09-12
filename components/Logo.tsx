export default function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  const text = size === "sm" ? "text-sm" : "text-base";

  return (
    <span className="flex items-center gap-2.5">
      <span className={`flex ${box} items-center justify-center rounded-md bg-accent`}>
        <svg width="55%" height="55%" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6h3M7 3.5l3 2.5-3 2.5"
            stroke="#06110C"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`font-display font-bold tracking-tight text-text ${text}`}>
        BuildShip<span className="text-accent">AI</span>
      </span>
    </span>
  );
}
