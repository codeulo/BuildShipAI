"use client";

import { track } from "@vercel/analytics";

/**
 * Thin wrapper around Vercel Analytics' custom event tracking, so call
 * sites don't import @vercel/analytics directly and event names stay
 * consistent in one place.
 */
export function trackEvent(name: string, props?: Record<string, string>) {
  track(name, props);
}
