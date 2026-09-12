// Central place for values that will likely change per deployment.
// Replace WHATSAPP_NUMBER with the real WhatsApp Business number before launch.
export const WHATSAPP_NUMBER = ""; // TODO: replace with real WhatsApp Business number
export const WHATSAPP_PREFILL =
  "Hi BuildShip AI, I want a free automation audit. My business is ";

export function whatsappHref(prefill: string = WHATSAPP_PREFILL) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefill)}`;
}

export const BUSINESS_TYPES = [
  "Real estate",
  "Online retail",
  "Service business",
  "Other",
] as const;

export const ENQUIRY_RANGES = ["1–5", "6–15", "16–30", "30–50", "50+"] as const;
