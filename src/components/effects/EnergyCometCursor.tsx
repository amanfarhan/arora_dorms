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
  spriteIndex: number;
  isSpark: boolean;
}

/**
 * EnergyCometCursor
 * 
 * Premium luminous comet cursor tailored for Aurora Dome Solutions.
 * Features:
 * - Bright cyan-blue luminous nucleus & soft blue-violet halo acting as the custom cursor pointer
 * - Flowing particle wake during cursor movement with organic drift and gentle upward lift
 * - Hover intensification on clickable elements, buttons, links, and cards
 * - Auto-hides over text inputs/textareas to preserve native I-beam readability
 * - Pre-rendered GPU sprites for 120fps performance and zero garbage collection stalls
 * - Safe touch & reduced-motion safeguards
 */
export default function EnergyCometCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Enable custom cursor CSS styles (cursor: none on fine pointers)
    document.documentElement.classList.add("energy-comet-active");

    // Pre-render offscreen glow sprites once at startup for instant GPU blitting
    const createGlowSprite = (r: number, g: number, b: number) => {
      const sprite = document.createElement("canvas");
      sprite.width = 48;
      sprite.height = 48;
      const sCtx = sprite.getContext("2d");
      if (!sCtx) return sprite;

      const grad = sCtx.createRadialGradient(24, 24, 0, 24, 24, 24);
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
      grad.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, 0.5)`);
      grad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, 0.12)`);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");

      sCtx.fillStyle = grad;
      sCtx.beginPath();
      sCtx.arc(24, 24, 24, 0, Math.PI * 2);
      sCtx.fill();
      return sprite;
    };

    const sprites = [
      createGlowSprite(34, 211, 238),  // 0: Neon Cyan
      createGlowSprite(96, 165, 250),  // 1: Electric Blue
      createGlowSprite(165, 180, 252), // 2: Cosmic Periwinkle
      createGlowSprite(192, 132, 252), // 3: Aurora Violet
      createGlowSprite(232, 121, 249), // 4: Magenta
      createGlowSprite(255, 255, 255), // 5: Spark White
    ];

    // Pre-render cursor head glow halo sprite
    const headGlowSprite = document.createElement("canvas");
    headGlowSprite.width = 80;
    headGlowSprite.height = 80;
    const hCtx = headGlowSprite.getContext("2d");
    if (hCtx) {
      const g = hCtx.createRadialGradient(40, 40, 0, 40, 40, 40);
      g.addColorStop(0, "rgba(34, 211, 238, 0.9)");
      g.addColorStop(0.25, "rgba(96, 165, 250, 0.5)");
      g.addColorStop(0.6, "rgba(192, 132, 252, 0.2)");
      g.addColorStop(1, "rgba(3, 5, 10, 0)");
      hCtx.fillStyle = g;
      hCtx.beginPath();
      hCtx.arc(40, 40, 40, 0, Math.PI * 2);
      hCtx.fill();
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.25);
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

    let mouseX = -100;
    let mouseY = -100;
    let prevMouseX = -100;
    let prevMouseY = -100;
    let isHoveringInteractive = false;
    let isOverTextInput = false;
    let haloScale = 1.0;
    let targetHaloScale = 1.0;
    let animId: number | null = null;

    const maxParticles = prefersReducedMotion ? 12 : 55;
    const particles: TrailParticle[] = [];

    const spawnParticle = (
      x: number,
      y: number,
      backwardAngle: number,
      isInteractive: boolean
    ) => {
      if (particles.length >= maxParticles) {
        particles.shift();
      }

      const isSpark = Math.random() < 0.12;
      const spriteIndex = isSpark ? 5 : Math.floor(Math.random() * (sprites.length - 1));

      const spread = (Math.random() - 0.5) * 0.75;
      const moveAngle = backwardAngle + spread;
      const speed = (Math.random() * 0.7 + 0.3) * (isInteractive ? 1.25 : 0.95);

      const vx = Math.cos(moveAngle) * speed;
      const vy = Math.sin(moveAngle) * speed - 0.08;

      const baseSize = isSpark
        ? Math.random() * 2.2 + 1.8
        : Math.random() * 3.4 + (isInteractive ? 3.0 : 2.2);

      const maxLife = Math.floor(Math.random() * 8 + (isInteractive ? 20 : 16));

      particles.push({
        x: x + (Math.random() - 0.5) * 2,
        y: y + (Math.random() - 0.5) * 2,
        vx,
        vy,
        baseSize,
        alpha: Math.random() * 0.25 + (isInteractive ? 0.8 : 0.65),
        maxLife,
        age: 0,
        spriteIndex,
        isSpark,
      });
    };

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      if ("pointerType" in e && e.pointerType === "touch") return;

      const currentX = e.clientX;
      const currentY = e.clientY;

      if (prevMouseX === -100) {
        prevMouseX = currentX;
        prevMouseY = currentY;
      }

      mouseX = currentX;
      mouseY = currentY;

      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;
      const dist = Math.hypot(dx, dy);

      // Emit particles on physical movement
      if (dist > 1.2 && !isOverTextInput) {
        const moveAngle = Math.atan2(dy, dx);
        const backwardAngle = moveAngle + Math.PI;

        const stepSize = isHoveringInteractive ? 7 : 9;
        const steps = Math.min(Math.floor(dist / stepSize), 4);

        for (let i = 0; i <= steps; i++) {
          const t = steps > 0 ? i / steps : 0;
          const interpX = prevMouseX + dx * t;
          const interpY = prevMouseY + dy * t;
          spawnParticle(interpX, interpY, backwardAngle, isHoveringInteractive);
        }

        prevMouseX = mouseX;
        prevMouseY = mouseY;
      }

      if (!animId) {
        animId = requestAnimationFrame(render);
      }
    };

    const handlePointerOver = (e: Event) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      isOverTextInput = !!target.closest(
        'input, textarea, select, [contenteditable="true"]'
      );

      const interactive = !!target.closest(
        'a, button, [role="button"], .solution-card, .industry-card, .plasma-card, .glass-card, [data-purpose="experience-card"], [data-interactive]'
      );
      isHoveringInteractive = interactive;
      targetHaloScale = isHoveringInteractive ? 1.4 : 1.0;
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
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for interactive halo expansion
      haloScale += (targetHaloScale - haloScale) * 0.18;

      // =========================================================================
      // 1. Continuous Luminous Comet Nucleus & Head at Cursor Position
      // =========================================================================
      if (mouseX > 0 && mouseY > 0 && !isOverTextInput) {
        ctx.globalCompositeOperation = "screen";

        // Soft outer halo blitted from pre-rendered sprite
        const haloRadius = 24 * haloScale;
        ctx.globalAlpha = isHoveringInteractive ? 0.85 : 0.6;
        ctx.drawImage(
          headGlowSprite,
          mouseX - haloRadius,
          mouseY - haloRadius,
          haloRadius * 2,
          haloRadius * 2
        );

        // Electric-blue core glow
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "rgba(34, 211, 238, 0.85)";
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 3.2 * haloScale, 0, Math.PI * 2);
        ctx.fill();

        // Small, intense bright white nucleus dot
        ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================================
      // 2. Trailing Comet Dust Particles (Blitted instantly from pre-rendered sprites)
      // =========================================================================
      if (particles.length > 0) {
        ctx.globalCompositeOperation = "lighter";

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.age++;

          const lifeRatio = 1 - p.age / p.maxLife;
          if (lifeRatio <= 0) {
            particles.splice(i, 1);
            continue;
          }

          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.94;
          p.vy *= 0.94;

          const currentAlpha = p.alpha * Math.pow(lifeRatio, 1.4);
          const currentSize = p.baseSize * (0.35 + 0.65 * lifeRatio);

          ctx.globalAlpha = Math.min(Math.max(currentAlpha, 0), 1);
          const sprite = sprites[p.spriteIndex];
          ctx.drawImage(
            sprite,
            p.x - currentSize,
            p.y - currentSize,
            currentSize * 2,
            currentSize * 2
          );
        }
      }

      ctx.globalAlpha = 1.0;
      ctx.globalCompositeOperation = "source-over";

      // Keep loop running as long as mouse is in window or particles are active
      if (particles.length > 0 || (mouseX > 0 && mouseY > 0)) {
        animId = requestAnimationFrame(render);
      } else {
        animId = null;
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      document.documentElement.classList.remove("energy-comet-active");
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      id="energy-comet-canvas"
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999999,
        pointerEvents: "none",
      }}
    />
  );
}
