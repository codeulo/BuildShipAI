"use client";

import { useEffect, useState } from "react";
import { Home, Check, CheckCheck } from "lucide-react";
import Reveal from "./Reveal";
import { useInView } from "@/lib/hooks/useInView";

type ChatMsg = {
  from: "customer" | "ai" | "system";
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
};

const CHAT: ChatMsg[] = [
  {
    from: "customer",
    text: "Hi, I'm looking for a 3-bedroom apartment in Lekki.",
    time: "09:12",
  },
  {
    from: "ai",
    text: "Sure. What's your budget range and preferred move-in timeline?",
    time: "09:12",
    status: "read",
  },
  {
    from: "customer",
    text: "Up to ₦5m yearly. I want to move next month.",
    time: "09:13",
  },
  {
    from: "ai",
    text: "Thanks. I can help narrow that down. Would you prefer Lekki Phase 1, Ikate or Chevron?",
    time: "09:13",
    status: "read",
  },
  {
    from: "system",
    text: "Lead captured → Budget: ₦5m → Area: Lekki → Timeline: 1 month",
    time: "09:13",
  },
  {
    from: "ai",
    text: "Great. I've captured your requirements. A property consultant will contact you with suitable options.",
    time: "09:14",
    status: "read",
  },
];

export default function Demo() {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (!inView || visible >= CHAT.length) return;
    const t = setTimeout(
      () => setVisible((v) => v + 1),
      visible === 0 ? 400 : 1100,
    );
    return () => clearTimeout(t);
  }, [inView, visible]);

  return (
    <section id="demo" className="border-t border-border px-5 py-24 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        <Reveal className="mb-12 max-w-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Interactive demo
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl">
            See it in action.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-muted">
            A realistic real estate enquiry flow — qualification, lead capture,
            and human handoff.
          </p>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            This is a demonstration flow. Production workflows are customized to
            the client&apos;s approved information and escalation rules.
          </p>
        </Reveal>

        <div ref={ref} className="mx-auto w-full max-w-[340px]">
          {/* Phone frame */}
          <div
            className="overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            style={{ background: "#0b141a" }}
          >
            {/* WhatsApp header */}
            <div
              className="flex items-center gap-2.5 px-3 py-2.5"
              style={{ background: "#1f2c34" }}
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                style={{ background: "rgba(22,199,132,0.15)" }}
              >
                <Home size={13} className="text-whatsapp" strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium text-text">
                  Premier Homes Lekki
                </p>
                <p className="text-[10px] text-whatsapp">
                  ● AI Assistant · online
                </p>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15.5 10.5l-3.5 3.5-3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Chat area with WhatsApp wallpaper feel */}
            <div
              className="relative space-y-1.5 px-3 py-3"
              style={{
                minHeight: "400px",
                background: "linear-gradient(180deg, #0b141a 0%, #0b141a 100%)",
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(255,255,255,0.015) 0%, transparent 40%),
                  radial-gradient(circle at 80% 70%, rgba(255,255,255,0.015) 0%, transparent 40%)
                `,
              }}
            >
              {/* Date chip */}
              <div className="flex justify-center pb-1">
                <span
                  className="rounded-md px-2 py-0.5 text-[9px] uppercase tracking-wide text-white/45"
                  style={{ background: "#1f2c34" }}
                >
                  Today
                </span>
              </div>

              {/* Encryption notice */}
              <div className="flex justify-center pb-2">
                <span
                  className="max-w-[85%] rounded-md px-2.5 py-1 text-center text-[9px] leading-relaxed text-white/40"
                  style={{ background: "#1f2c34" }}
                >
                  🔒 Messages are end-to-end encrypted
                </span>
              </div>

              {CHAT.slice(0, visible).map((msg, i) => (
                <div key={i}>
                  {msg.from === "system" ? (
                    <div className="flex justify-center py-1">
                      <div
                        className="max-w-[85%] rounded-md px-2.5 py-1.5 text-center"
                        style={{ background: "#1f2c34" }}
                      >
                        <p className="font-mono text-[9px] leading-relaxed text-accent">
                          {msg.text}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`flex ${
                        msg.from === "customer"
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      <div
                        className={`relative max-w-[80%] rounded-lg px-2 py-1.5 pr-14 shadow-sm ${
                          msg.from === "customer"
                            ? "rounded-tl-none"
                            : "rounded-tr-none"
                        }`}
                        style={{
                          background:
                            msg.from === "customer" ? "#1f2c34" : "#005c4b",
                        }}
                      >
                        {/* Tail */}
                        <div
                          className={`absolute top-0 h-2.5 w-2.5 ${
                            msg.from === "customer" ? "-left-2" : "-right-2"
                          }`}
                          style={{
                            background:
                              msg.from === "customer" ? "#1f2c34" : "#005c4b",
                            clipPath:
                              msg.from === "customer"
                                ? "polygon(100% 0, 0 0, 100% 100%)"
                                : "polygon(0 0, 100% 0, 0 100%)",
                          }}
                        />
                        <p className="text-[12.5px] leading-[1.35] text-white/95">
                          {msg.text}
                        </p>
                        {/* Time + ticks */}
                        <div className="absolute bottom-1 right-1.5 flex items-center gap-0.5">
                          <span className="text-[9px] text-white/55">
                            {msg.time}
                          </span>
                          {msg.from === "ai" && msg.status && (
                            <CheckCheck
                              size={11}
                              strokeWidth={2.2}
                              className="text-[#53bdeb]"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {visible < CHAT.length && (
                <div className="flex justify-start">
                  <div
                    className="flex items-center gap-1 rounded-lg rounded-tl-none px-2.5 py-2"
                    style={{ background: "#1f2c34" }}
                  >
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-1 w-1 animate-bounce rounded-full bg-white/60"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input bar */}
            <div
              className="flex items-center gap-2 px-2 py-2"
              style={{ background: "#1f2c34" }}
            >
              <div className="flex flex-1 items-center rounded-full bg-[#2a3942] px-3 py-1.5">
                <span className="text-[11px] text-white/35">Message</span>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-whatsapp">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#0b141a">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
