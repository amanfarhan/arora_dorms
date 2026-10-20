"use client";

import React, { useEffect, useRef } from "react";

interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseSize: number;
  alpha: number;
  maxLife: number;
  age: number;
  color: { r: number; g: number; b: number };
  isSpark: boolean;
}

/**
 * EnergyCometCursor
 * 
 * Premium luminous comet cursor tailored for Aurora Dome Solutions.
 * Features:
 * - Bright cyan-blue luminous nucleus with electric-blue core & soft blue-violet halo
 * - Delicate, short comet tail of electric-blue & violet particles that fade smoothly
 * - Motion-responsive emission (no continuous emission when stationary)
 * - Smooth hover intensification on buttons, links, and interactive cards
 * - Auto-hides over text inputs/textareas to preserve native I-beam readability
 * - Zero CPU/GPU lag with optimized canvas rendering & touch / reduced-motion safeguards
 */
export default function EnergyCometCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. Accessibility & device checks: disable on touch or reduced-motion
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Enable custom cursor styles on desktop
    document.documentElement.classList.add("energy-comet-active");

    // Palette: Cyan, Electric Blue, Blue-Violet, Restrained Spark
    const palette = [
      { r: 34, g: 211, b: 238 },  // Neon Cyan
      { r: 96, g: 165, b: 250 },  // Electric Blue
      { r: 165, g: 180, b: 252 }, // Cosmic Periwinkle
      { r: 192, g: 132, b: 252 }, // Aurora Violet
      { r: 232, g: 121, b: 249 }, // Restrained Magenta accent
    ];

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Cursor tracking state
    let mouseX = -100;
    let mouseY = -100;
    let prevMouseX = -100;
    let prevMouseY = -100;
    let isMoving = false;
    let isHoveringInteractive = false;
    let isOverTextInput = false;
    let haloScale = 1.0;
    let targetHaloScale = 1.0;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let animId: number | null = null;

    // Particles array (max 60 particles for clean, refined comet trail)
    const maxParticles = 60;
    const particles: TrailParticle[] = [];

    const spawnParticle = (
      x: number,
      y: number,
      backwardAngle: number,
      velocity: number,
      isInteractive: boolean
    ) => {
      if (particles.length >= maxParticles) {
        particles.shift();
      }

      const color = palette[Math.floor(Math.random() * palette.length)];
      const isSpark = Math.random() < 0.12;

      // Small perpendicular spread for organic cosmic trail
      const spread = (Math.random() - 0.5) * 0.75;
      const moveAngle = backwardAngle + spread;
      const speed = (Math.random() * 0.75 + 0.3) * (isInteractive ? 1.2 : 0.9);

      // Trailing velocity with gentle deceleration
      const vx = Math.cos(moveAngle) * speed;
      const vy = Math.sin(moveAngle) * speed - 0.08; // subtle cosmic upward drift

      // Refined particle size (tiny: 0.8px to 2.1px)
      const baseSize = isSpark
        ? Math.random() * 0.8 + 0.6
        : Math.random() * 1.3 + (isInteractive ? 1.0 : 0.8);

      // Short, concentrated lifespan: 14 to 24 frames (~250-400ms)
      const maxLife = Math.floor(Math.random() * 10 + (isInteractive ? 20 : 16));

      particles.push({
        x: x + (Math.random() - 0.5) * 2,
        y: y + (Math.random() - 0.5) * 2,
        vx,
        vy,
        baseSize,
        alpha: Math.random() * 0.25 + (isInteractive ? 0.75 : 0.65),
        maxLife,
        age: 0,
        color,
        isSpark,
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (prevMouseX === -100) {
        prevMouseX = currentX;
        prevMouseY = currentY;
      }

      mouseX = currentX;
      mouseY = currentY;
      isMoving = true;

      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMoving = false;
      }, 60);

      // Distance and speed calculation
      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;
      const dist = Math.hypot(dx, dy);

      // Emit particles ONLY during actual movement (never when stationary)
      if (dist > 1.2 && !isOverTextInput) {
        const moveAngle = Math.atan2(dy, dx);
        const backwardAngle = moveAngle + Math.PI;

        // Smoothly interpolate along motion vector to prevent gaps during swift flicks
        const stepSize = isHoveringInteractive ? 7 : 10;
        const steps = Math.min(Math.floor(dist / stepSize), 5);

        for (let i = 0; i <= steps; i++) {
          const t = steps > 0 ? i / steps : 0;
          const interpX = prevMouseX + dx * t;
          const interpY = prevMouseY + dy * t;
          spawnParticle(interpX, interpY, backwardAngle, dist, isHoveringInteractive);
        }

        prevMouseX = mouseX;
        prevMouseY = mouseY;
      }

      if (!animId) {
        animId = requestAnimationFrame(render);
      }
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isTextControl = !!target.closest('input, textarea, select, [contenteditable="true"]');
      isOverTextInput = isTextControl;

      const interactive = target.closest(
        'a, button, [role="button"], .solution-card, .industry-card, .plasma-card, .glass-card, [data-purpose="experience-card"], [data-interactive]'
      );
      isHoveringInteractive = !!interactive;
      targetHaloScale = isHoveringInteractive ? 1.35 : 1.0;
    };

    const handlePointerOut = () => {
      isHoveringInteractive = false;
      isOverTextInput = false;
      targetHaloScale = 1.0;
    };

    const handleMouseLeave = () => {
      mouseX = -100;
      mouseY = -100;
      prevMouseX = -100;
      prevMouseY = -100;
      isMoving = false;
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for interactive halo expansion
      haloScale += (targetHaloScale - haloScale) * 0.15;

      // =========================================================================
      // 1. Luminous Comet Head at Cursor Position
      // =========================================================================
      if (mouseX > 0 && mouseY > 0 && !isOverTextInput) {
        ctx.globalCompositeOperation = "screen";

        // Soft Blue-Violet Outer Halo
        const outerHaloRadius = 18 * haloScale;
        const gHalo = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          outerHaloRadius
        );
        gHalo.addColorStop(0, "rgba(56, 189, 248, 0.35)");
        gHalo.addColorStop(0.35, "rgba(96, 165, 250, 0.22)");
        gHalo.addColorStop(0.7, "rgba(192, 132, 252, 0.12)");
        gHalo.addColorStop(1, "rgba(3, 5, 10, 0)");

        ctx.fillStyle = gHalo;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, outerHaloRadius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle Electric-Blue Core Glow
        const coreGlowRadius = 6.5 * haloScale;
        const gCore = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          coreGlowRadius
        );
        gCore.addColorStop(0, "rgba(34, 211, 238, 0.85)");
        gCore.addColorStop(0.5, "rgba(96, 165, 250, 0.5)");
        gCore.addColorStop(1, "rgba(96, 165, 250, 0)");

        ctx.fillStyle = gCore;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, coreGlowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Small, Bright Cyan-Blue Luminous Point (Nucleus)
        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 1.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(34, 211, 238, 0.8)";
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================================
      // 2. Trailing Comet Dust Particles (Flowing Wake)
      // =========================================================================
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age++;

        const lifeRatio = 1 - p.age / p.maxLife;

        if (lifeRatio <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Apply friction to slow particles naturally into space
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Smooth cubic/quadratic fade-out curve
        const currentAlpha = p.alpha * Math.pow(lifeRatio, 1.5);
        const currentSize = p.baseSize * (0.35 + 0.65 * lifeRatio);

        const { r, g, b } = p.color;

        // Soft outer glow for particles
        if (currentSize > 0.9) {
          const haloR = currentSize * 2.8;
          const gP = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR);
          gP.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.45})`);
          gP.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = gP;
          ctx.beginPath();
          ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
          ctx.fill();
        }

        // Central core particle
        ctx.fillStyle = p.isSpark
          ? `rgba(255, 255, 255, ${currentAlpha * 0.95})`
          : `rgba(${r}, ${g}, ${b}, ${currentAlpha})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      // Keep animation running as long as mouse is in window or particles are fading out
      if (particles.length > 0 || (mouseX > 0 && mouseY > 0)) {
        animId = requestAnimationFrame(render);
      } else {
        animId = null;
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      document.documentElement.classList.remove("energy-comet-active");
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (idleTimer) clearTimeout(idleTimer);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-[99999]"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
