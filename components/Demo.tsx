"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {Play, ArrowLeft, Home, ShoppingBag} from "lucide-react";
import {whatsappHref} from "@/lib/site";

type FlowStep = {
  question: string;
  options: string[];
};

type FlowConfig = {
  key: string;
  vertical: string;
  icon: typeof Home;
  assistantLabel: string;
  headerName: string;
  screenshot: string;
  screenshotAlt: string;
  caption: string;
  steps: FlowStep[];
  resultEmoji: string;
  resultTitle: string;
  resultLine: (answers: string[]) => string;
  followUpLine: string;
};

const FLOWS: FlowConfig[] = [
  {
    key: "real-estate",
    vertical: "Real estate",
    icon: Home,
    assistantLabel: "AI Sales Assistant",
    headerName: "Premier Homes Lekki",
    screenshot: "/demo-real-estate.png",
    screenshotAlt:
      "WhatsApp chat showing an AI assistant qualifying a real estate lead — capturing budget, area and move-in timeline before handing off to a property consultant.",
    caption: "Qualifies budget, area and timeline, then hands off to a consultant.",
    steps: [
      {
        question: "Hi! What type of property are you looking for?",
        options: ["3 Bedroom Apartment", "2 Bedroom Apartment", "Office", "Land"],
      },
      {
        question: "Which area are you interested in?",
        options: ["Lekki", "Ikoyi", "Yaba", "Ikeja"],
      },
      {
        question: "What's your approximate budget?",
        options: ["₦2M", "₦5M", "₦10M", "₦20M+"],
      },
      {
        question: "Are you looking to rent or buy?",
        options: ["Rent", "Buy"],
      },
      {
        question: "When are you looking to move?",
        options: ["Within 1 month", "1–3 months", "3+ months", "Just exploring"],
      },
    ],
    resultEmoji: "🔥",
    resultTitle: "Lead Qualified",
    resultLine: (a) => `${a[0]} in ${a[1]} · ${a[3]} at ${a[2]} · Moving ${a[4]?.toLowerCase()}`,
    followUpLine: "A property consultant will contact you on WhatsApp shortly.",
  },
  {
    key: "online-retail",
    vertical: "Online retail",
    icon: ShoppingBag,
    assistantLabel: "AI Shopping Assistant",
    headerName: "StyleHub",
    screenshot: "/demo-online-retail.png",
    screenshotAlt:
      "WhatsApp chat showing an AI shopping assistant recommending sneakers within budget and adding one to cart.",
    caption: "Recommends in-stock products within budget and takes the order.",
    steps: [
      {
        question: "Hi! What are you shopping for today?",
        options: ["Sneakers", "Sandals", "Boots", "Sports shoes"],
      },
      {
        question: "What size do you wear (EU)?",
        options: ["40", "41", "42", "43"],
      },
      {
        question: "What's your budget?",
        options: ["Under ₦50k", "₦50k–₦80k", "₦80k–₦120k", "₦120k+"],
      },
      {
        question: "Preferred color?",
        options: ["White", "Black", "Grey", "No preference"],
      },
      {
        question: "Delivery or pickup?",
        options: ["Delivery", "Pickup"],
      },
    ],
    resultEmoji: "🛍️",
    resultTitle: "Order Ready",
    resultLine: (a) =>
      `Size ${a[1]} ${a[0]?.toLowerCase()} in ${a[3]?.toLowerCase()} · ${a[2]} · ${a[4]}`,
    followUpLine: "We've saved your picks — checkout continues on WhatsApp.",
  },
];

export default function Demo() {
  const [activeKey, setActiveKey] = useState(FLOWS[0].key);
  const [isInteractive, setIsInteractive] = useState(false);
  const flow = FLOWS.find((f) => f.key === activeKey) ?? FLOWS[0];

  function handleTabChange(key: string) {
    setActiveKey(key);
    setIsInteractive(false);
  }

  return (
    <section className="border-b border-hairline">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <StatusEyebrow />
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl">
            See real qualification flows
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            From first message to a qualified lead handed to a human — no guesswork, no wandering
            conversation. Try one yourself.
          </p>

          <div className="flex justify-center py-10">
            <ConnectorArrow />
          </div>

          <p className="mt-10 max-w-lg text-sm leading-relaxed text-muted-dim">
            These are demonstration flows. Production workflows are customized to the client&apos;s
            approved information and escalation rules.
          </p>
        </div>

        <div className="mx-auto">
          {/* Segmented toggle */}
          <div className="mx-auto flex w-fit gap-1 rounded-full border border-hairline bg-surface p-1">
            {FLOWS.map((f) => {
              const Icon = f.icon;
              const active = f.key === activeKey;
              return (
                <button
                  key={f.key}
                  onClick={() => handleTabChange(f.key)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                    active
                      ? "bg-signal text-accent underline underline-offset-8"
                      : "text-muted hover:text-text"
                  }`}>
                  <Icon size={15} strokeWidth={2} />
                  {f.vertical}
                </button>
              );
            })}
          </div>

          {/* Single phone stage */}
          <div className="mt-4 flex justify-center">
            <DemoPhone
              key={flow.key}
              flow={flow}
              isInteractive={isInteractive}
              onActivate={() => setIsInteractive(true)}
              onDeactivate={() => setIsInteractive(false)}
            />
          </div>

          <p className="mx-auto mt-6 max-w-xs text-center text-sm leading-relaxed text-muted">
            {flow.caption}
          </p>
        </div>
      </div>
    </section>
  );
}

function ConnectorArrow() {
  return (
    <div className="mt-8 flex justify-center lg:justify-start lg:pl-2" aria-hidden="true">
      <svg width="72" height="110" viewBox="0 0 72 110" fill="none" className="text-muted-dim/60">
        <defs>
          <linearGradient id="connectorFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="35%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
          <marker
            id="connectorArrowhead"
            markerWidth="7"
            markerHeight="7"
            refX="3.5"
            refY="3.5"
            orient="auto-start-reverse">
            <path
              d="M0.5 0.5 L6.5 3.5 L0.5 6.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </marker>
        </defs>

        <path
          d="M16 4 C 16 34, 62 30, 58 60 C 55 84, 22 82, 26 102"
          stroke="url(#connectorFade)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#connectorArrowhead)"
          pathLength={1}
          className="connector-path"
        />
      </svg>

      <style>{`
        .connector-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 0;
        }
        @media (prefers-reduced-motion: no-preference) {
          .connector-path {
            stroke-dashoffset: 1;
            animation: connector-draw 1.1s ease-out 0.2s forwards;
          }
        }
        @keyframes connector-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}

function DemoPhone({
  flow,
  isInteractive,
  onActivate,
  onDeactivate,
}: {
  flow: FlowConfig;
  isInteractive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative aspect-[2/3] w-full max-w-[300px] overflow-hidden">
      {/* Static screenshot layer */}
      <button
        type="button"
        onClick={onActivate}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        aria-label={`Try the ${flow.assistantLabel}`}
        className={`absolute inset-0 block cursor-pointer text-left transition-all duration-300 ${
          isInteractive ? "pointer-events-none scale-95 opacity-0" : "scale-100 opacity-100"
        }`}>
        <Image
          src={flow.screenshot}
          alt={flow.screenshotAlt}
          fill
          className={`object-cover transition-transform duration-300 ${
            isHovering ? "scale-[1.02]" : "scale-100"
          }`}
          sizes="(min-width: 1024px) 300px, 80vw"
          priority
        />

        {/* Hover overlay (desktop) */}
        <div
          className={`pointer-events-none absolute inset-0 hidden items-center justify-center transition-opacity duration-200 sm:flex ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}>
          <span className="flex items-center gap-2 rounded-full bg-signal px-4 py-2 text-sm font-semibold text-[#0B1512] shadow-lg">
            <Play size={13} fill="#0B1512" strokeWidth={0} />
            Try it out now
          </span>
        </div>

        {/* Mobile persistent affordance */}
        <span className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-signal px-3.5 py-1.5 text-xs font-semibold text-[#0B1512] shadow-lg sm:hidden">
          <Play size={11} fill="#0B1512" strokeWidth={0} />
          Try it out now
        </span>
      </button>

      {/* Interactive layer, wrapped in matching device chrome */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isInteractive ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}>
        {isInteractive && <PhoneChrome flow={flow} onBack={onDeactivate} />}
      </div>
    </div>
  );
}

function PhoneChrome({flow, onBack}: {flow: FlowConfig; onBack: () => void}) {
  return (
    <div className="relative h-full w-full rounded-[2.4rem] bg-black p-2.5">
      {/* Notch */}
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

      {/* Screen */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.9rem] bg-surface">
        <InteractiveChatFrame flow={flow} onBack={onBack} />
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 z-10 h-1 w-24 -translate-x-1/2 rounded-full bg-white/25" />
    </div>
  );
}

function InteractiveChatFrame({flow, onBack}: {flow: FlowConfig; onBack: () => void}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const isComplete = stepIndex >= flow.steps.length;

  function handleSelect(option: string) {
    setAnswers((prev) => [...prev, option]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setStepIndex((i) => i + 1);
    }, 650);
  }

  function handleRestart() {
    setStepIndex(0);
    setAnswers([]);
    setIsTyping(false);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onBack();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onBack]);

  useEffect(() => {
    bodyRef.current?.scrollTo({top: bodyRef.current.scrollHeight, behavior: "smooth"});
  }, [stepIndex, isTyping]);

  return (
    <>
      {/* Header — extra top padding clears the notch */}
      <div className="flex items-center gap-2.5 border-b border-hairline bg-surface-raised px-3.5 pb-3 pt-7">
        <button
          onClick={onBack}
          aria-label="Back to preview"
          className="shrink-0 text-muted transition-colors hover:text-text">
          <ArrowLeft size={18} />
        </button>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal-dim font-display text-sm font-bold text-signal">
          {flow.headerName.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-medium text-text">{flow.headerName}</p>
          <p className="flex items-center gap-1 text-[11px] text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {flow.assistantLabel} · online
          </p>
        </div>
      </div>

      {/* Chat body */}
      <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto px-3.5 py-4">
        {flow.steps.slice(0, stepIndex).map((step, i) => (
          <div key={i} className="space-y-2">
            <AiBubble text={step.question} />
            <CustomerBubble text={answers[i]} />
          </div>
        ))}

        {!isComplete && (
          <div className="space-y-2.5">
            <AiBubble text={flow.steps[stepIndex].question} />
            {isTyping ? (
              <TypingBubble />
            ) : (
              <div className="flex flex-wrap gap-1.5 pl-1">
                {flow.steps[stepIndex].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    className="rounded-full border border-hairline-strong bg-surface-raised px-3 py-1.5 text-xs text-text transition-colors hover:border-signal hover:text-signal">
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {isComplete && (
          <div className="space-y-2.5 pt-1">
            <div className="flex justify-center">
              <span className="rounded-full bg-signal-dim px-3.5 py-1.5 text-xs font-semibold text-signal">
                {flow.resultEmoji} {flow.resultTitle}
              </span>
            </div>
            <AiBubble text={flow.resultLine(answers)} />
            <AiBubble text={flow.followUpLine} />
          </div>
        )}
      </div>

      {/* Footer — extra bottom padding clears the home indicator */}
      <div className="flex items-center gap-3 border-t border-hairline bg-surface-raised px-3.5 pb-5 pt-2.5">
        {isComplete ? (
          <>
            <button
              onClick={handleRestart}
              className="text-xs text-muted transition-colors hover:text-text">
              Start over
            </button>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto rounded-full bg-signal px-3.5 py-1.5 text-xs font-semibold text-[#0B1512] transition-colors hover:bg-[#2C9E6C]">
              Continue on WhatsApp
            </a>
          </>
        ) : (
          <p className="text-[11px] text-muted-dim">
            Step {stepIndex + 1} of {flow.steps.length}
          </p>
        )}
      </div>
    </>
  );
}

function AiBubble({text}: {text: string}) {
  return (
    <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-surface-raised px-3 py-2 text-[13px] leading-relaxed text-text/90">
      {text}
    </div>
  );
}

function CustomerBubble({text}: {text: string}) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-lg rounded-tr-sm bg-signal-dim px-3 py-2 text-[13px] text-text">
        {text}
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-lg rounded-tl-sm bg-surface-raised px-3 py-2.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted"
          style={{animationDelay: `${i * 0.15}s`}}
        />
      ))}
    </div>
  );
}

function StatusEyebrow() {
  return (
    <span className="text-xs text-accent uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
      Live product demo
    </span>
  );
}
