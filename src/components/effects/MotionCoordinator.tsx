"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionCoordinator() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Accessibility check: Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    // 2. Section and Card Reveal Animation via IntersectionObserver
    // Note: Homepage hero is explicitly excluded to preserve it intact.
    const revealTargets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], .reveal-on-scroll, .industry-card, .solution-card"
    );

    if (prefersReducedMotion) {
      // If user prefers reduced motion, reveal all immediately
      revealTargets.forEach((el) => el.classList.add("is-revealed"));
    } else {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              // Check if parent has multiple items to calculate stagger
              const siblings = el.parentElement
                ? Array.from(el.parentElement.children)
                : [];
              const index = siblings.indexOf(el);
              const customDelay = el.getAttribute("data-reveal-delay");
              const delay = customDelay
                ? parseInt(customDelay, 10)
                : Math.min(index * 75, 450);

              setTimeout(() => {
                el.classList.add("is-revealed");
              }, delay);

              obs.unobserve(el);
            }
          });
        },
        {
          rootMargin: "0px 0px -50px 0px",
          threshold: 0.08,
        }
      );

      revealTargets.forEach((target) => {
        // Exclude hero sections from reveal observers
        if (target.closest('[data-purpose="hero-section"]')) {
          target.classList.add("is-revealed");
          return;
        }
        observer.observe(target);
      });
    }

    // 3. Pointer-driven Holographic Tilt & Glare (disabled on touch / reduced-motion)
    if (prefersReducedMotion || isTouch) return;

    let activeCard: HTMLElement | null = null;
    let cardRect: DOMRect | null = null;
    let animationFrameId: number | null = null;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handlePointerOver = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        ".industry-card, .solution-card, .plasma-card, .aurora-card-interactive, [data-holographic]"
      );
      if (target) {
        activeCard = target;
        cardRect = target.getBoundingClientRect();
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!activeCard || !cardRect) return;

      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;

      // Calculate percentage positions for glare gradient
      const mouseXPercent = Math.max(0, Math.min(100, (x / cardRect.width) * 100));
      const mouseYPercent = Math.max(0, Math.min(100, (y / cardRect.height) * 100));

      activeCard.style.setProperty("--mouse-x", `${mouseXPercent.toFixed(1)}%`);
      activeCard.style.setProperty("--mouse-y", `${mouseYPercent.toFixed(1)}%`);

      // Calculate subtle physical tilt (max 4.5 degrees)
      const xNorm = (x / cardRect.width) - 0.5;
      const yNorm = (y / cardRect.height) - 0.5;

      targetTiltX = -yNorm * 5; // tilt up/down
      targetTiltY = xNorm * 5;  // tilt left/right

      if (!animationFrameId) {
        updateTilt();
      }
    };

    const updateTilt = () => {
      if (!activeCard) {
        animationFrameId = null;
        return;
      }

      // Smooth lerp damping
      currentTiltX += (targetTiltX - currentTiltX) * 0.15;
      currentTiltY += (targetTiltY - currentTiltY) * 0.15;

      const isFeatured = activeCard.classList.contains("plasma-card-featured") || activeCard.hasAttribute("data-tilt");
      const maxDistance = isFeatured ? 6 : 3.5;
      const clampedX = Math.max(-maxDistance, Math.min(maxDistance, currentTiltX));
      const clampedY = Math.max(-maxDistance, Math.min(maxDistance, currentTiltY));

      activeCard.style.transform = `perspective(1000px) rotateX(${clampedX.toFixed(
        2
      )}deg) rotateY(${clampedY.toFixed(2)}deg) translateY(-5px)`;

      // Continue animating until settled
      if (
        Math.abs(targetTiltX - currentTiltX) > 0.02 ||
        Math.abs(targetTiltY - currentTiltY) > 0.02
      ) {
        animationFrameId = requestAnimationFrame(updateTilt);
      } else {
        animationFrameId = null;
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (activeCard && (!related || !activeCard.contains(related))) {
        const cardToReset = activeCard;
        targetTiltX = 0;
        targetTiltY = 0;
        currentTiltX = 0;
        currentTiltY = 0;

        cardToReset.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
        cardToReset.style.setProperty("--mouse-x", "50%");
        cardToReset.style.setProperty("--mouse-y", "50%");

        activeCard = null;
        cardRect = null;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    };

    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerout", handlePointerOut);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [pathname]);

  return null;
}
