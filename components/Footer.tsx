import Logo from "./Logo";
import { whatsappHref } from "@/lib/site";

const NAV_LINKS = ["#problem", "#solution", "#demo", "#pricing", "#faq", "#audit"];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-ground-2">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-10">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo size="sm" />
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
              Build. Automate. Ship.
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted">
              Custom WhatsApp AI automation for Nigerian businesses.
              Practical, tested, and built around your workflow.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Navigation
            </p>
            <div className="space-y-2">
              {NAV_LINKS.map((href) => (
                <a
                  key={href}
                  href={href}
                  className="block text-sm text-muted transition-colors duration-150 hover:text-text"
                >
                  {href.replace("#", "").replace(/^\w/, (c) => c.toUpperCase())}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Contact
            </p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center gap-2 text-sm text-whatsapp"
            >
              WhatsApp us
            </a>
            <div className="space-y-2">
              <a
                href="/privacy-policy"
                className="block text-xs text-muted transition-colors duration-150 hover:text-text"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="block text-xs text-muted transition-colors duration-150 hover:text-text"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} BuildShip AI. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
