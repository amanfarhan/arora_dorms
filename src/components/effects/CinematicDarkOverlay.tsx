"use client";

import React from "react";
import { usePathname } from "next/navigation";

/**
 * CinematicDarkOverlay
 * 
 * Global premium dark translucent overlay rendered at z-[1] across all pages.
 * Features:
 * - 25–35% baseline translucent depth tint preserving cosmic energy brilliance
 * - Theatrical perimeter vignette for immersive cinematic depth
 * - Top navigation & bottom viewport scrims for pristine legibility
 * - Route-aware adaptive center softening for content-heavy pages
 * - Cosmic color harmonizer wash
 * - Strictly pointer-events-none (0% UI interference)
 */
export default function CinematicDarkOverlay() {
  const pathname = usePathname();

  // Content-dense pages benefit from a gentle central softening behind long-form text
  const isContentHeavyPage =
    pathname?.startsWith("/about") ||
    pathname?.startsWith("/start-a-project") ||
    pathname?.startsWith("/contact") ||
    pathname?.startsWith("/solutions/") ||
    pathname?.startsWith("/technology-dome-systems");

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-[1] overflow-hidden"
    >
      {/* Layer 1: Global Translucent Depth Tint (28-35% general darkening preserving luminous aurora) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020408]/35 via-[#030610]/22 to-[#020408]/40" />

      {/* Layer 2: Theatrical Perimeter Vignette (Edge Darkening for cinematic contrast) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 50%, transparent 40%, rgba(2, 4, 10, 0.45) 72%, rgba(1, 2, 6, 0.85) 100%)",
        }}
      />

      {/* Layer 3: Top Navigation Scrim (Guarantees Header & Logo Readability) */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#020408]/85 via-[#020408]/35 to-transparent" />

      {/* Layer 4: Bottom Viewport Shadow (Atmospheric Grounding Anchor) */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#010205]/90 via-[#010205]/35 to-transparent" />

      {/* Layer 5: Route-Aware Center Reading Scrim (Softens direct center on reading-heavy pages) */}
      {isContentHeavyPage && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(2, 4, 10, 0.45) 0%, transparent 75%)",
          }}
        />
      )}

      {/* Layer 6: Subtle Cosmic Color Harmonizer (Soft Blue-Violet & Cyan Refraction Wash) */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-color-dodge pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 82% 18%, rgba(129, 140, 248, 0.08) 0%, transparent 48%), radial-gradient(circle at 18% 82%, rgba(34, 211, 238, 0.06) 0%, transparent 48%)",
        }}
      />
    </div>
  );
}
