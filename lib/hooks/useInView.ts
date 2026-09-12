"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Triggers a one-time "in view" state when the element scrolls into the
 * viewport, used to drive the .reveal / .is-visible entrance animation
 * defined in globals.css. Disconnects after the first intersection so it
 * doesn't keep observing once a section has already appeared.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
