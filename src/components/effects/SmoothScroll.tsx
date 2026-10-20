"use client";

import { useEffect } from "react";

/**
 * SmoothScroll
 * 
 * Provides luxurious, silky-smooth momentum wheel scrolling for desktop mice.
 * Eliminates jarring 100px discrete wheel steps on Windows without breaking
 * native touch scrolling, internal scroll containers, or anchor links.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Accessibility check: respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Don't override touch screens (they already have hardware momentum scrolling)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isRunning = false;
    let animId: number | null = null;

    const onWheel = (e: WheelEvent) => {
      // Don't intercept pinch-to-zoom or browser keyboard shortcuts
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      // Allow natural scrolling inside internal scrollable elements (like modal or drawer)
      let el = e.target as HTMLElement | null;
      while (el && el !== document.body && el !== document.documentElement) {
        const overflowY = window.getComputedStyle(el).overflowY;
        if (
          (overflowY === "auto" || overflowY === "scroll") &&
          el.scrollHeight > el.clientHeight
        ) {
          const canScrollDown =
            e.deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1;
          const canScrollUp = e.deltaY < 0 && el.scrollTop > 1;
          if (canScrollDown || canScrollUp) {
            return;
          }
        }
        el = el.parentElement;
      }

      e.preventDefault();

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Dampen discrete wheel ticks (typically +/- 100px on Windows)
      const delta = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
      targetY = Math.max(0, Math.min(maxScroll, targetY + delta * 0.95));

      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(updateScroll);
      }
    };

    const updateScroll = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) > 0.5) {
        currentY += diff * 0.09; // Luxurious smooth damping factor
        window.scrollTo(0, Math.round(currentY));
        animId = requestAnimationFrame(updateScroll);
      } else {
        currentY = targetY;
        window.scrollTo(0, Math.round(currentY));
        isRunning = false;
        animId = null;
      }
    };

    const onSyncScroll = () => {
      // Sync target when scroll was initiated externally (e.g. anchor link or spacebar)
      if (!isRunning) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onSyncScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onSyncScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return null;
}
