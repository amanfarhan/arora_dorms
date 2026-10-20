"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  alpha: number;
  maxLife: number;
  age: number;
  color: { r: number; g: number; b: number };
  isSpark: boolean;
  decay: number;
}

export default function EnergyParticleCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. Accessibility & device checks
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Palette: Electric Blue, Cyan, Blue-Violet, Cosmic Periwinkle
    const palette = [
      { r: 96, g: 165, b: 250 },  // Electric Blue (#60a5fa)
      { r: 34, g: 211, b: 238 },  // Neon Cyan (#22d3ee)
      { r: 165, g: 180, b: 252 }, // Cosmic Periwinkle (#a5b4fc)
      { r: 192, g: 132, b: 252 }, // Aurora Violet (#c084fc)
      { r: 129, g: 140, b: 248 }, // Deep Indigo Glow (#818cf8)
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
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let animId: number | null = null;

    // Particle pool / active list
    const maxParticles = 140;
    const particles: Particle[] = [];

    const spawnParticle = (
      x: number,
      y: number,
      angle: number,
      speed: number,
      isInteractive: boolean
    ) => {
      if (particles.length >= maxParticles) {
        particles.shift();
      }

      const color = palette[Math.floor(Math.random() * palette.length)];
      const isSpark = Math.random() < (isInteractive ? 0.28 : 0.14);

      // Subtle perpendicular drift
      const spread = (Math.random() - 0.5) * (isInteractive ? 1.6 : 1.1);
      const moveAngle = angle + Math.PI / 2 * (Math.random() > 0.5 ? 1 : -1) * 0.4 + spread;
      const particleSpeed = (Math.random() * 0.8 + 0.3) * (isInteractive ? 1.3 : 1.0);

      const vx = Math.cos(moveAngle) * particleSpeed + (Math.random() - 0.5) * 0.3;
      const vy = Math.sin(moveAngle) * particleSpeed + (Math.random() - 0.5) * 0.3 - 0.15; // gentle upward energy drift

      const baseSize = isSpark
        ? Math.random() * 1.0 + 0.8
        : Math.random() * 2.2 + (isInteractive ? 1.8 : 1.3);

      const maxLife = Math.floor(Math.random() * 20 + (isInteractive ? 34 : 26));

      particles.push({
        x: x + (Math.random() - 0.5) * 3,
        y: y + (Math.random() - 0.5) * 3,
        vx,
        vy,
        size: baseSize,
        baseSize,
        alpha: Math.random() * 0.25 + (isInteractive ? 0.75 : 0.65),
        maxLife,
        age: 0,
        color,
        isSpark,
        decay: 1 / maxLife,
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
      }, 70);

      // Distance and speed calculation
      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;
      const dist = Math.hypot(dx, dy);

      if (dist > 1.5) {
        const angle = Math.atan2(dy, dx);
        // Interpolate along movement vector for silky smooth fluid trail
        const stepSize = isHoveringInteractive ? 6 : 9;
        const steps = Math.min(Math.floor(dist / stepSize), 8);

        for (let i = 0; i <= steps; i++) {
          const t = steps > 0 ? i / steps : 0;
          const interpX = prevMouseX + dx * t;
          const interpY = prevMouseY + dy * t;
          spawnParticle(interpX, interpY, angle, dist, isHoveringInteractive);
        }

        prevMouseX = mouseX;
        prevMouseY = mouseY;
      }

      // Ensure animation loop is running
      if (!animId) {
        animId = requestAnimationFrame(render);
      }
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .solution-card, .industry-card, .glass-card, [data-interactive]'
      );
      isHoveringInteractive = !!interactive;
    };

    const handlePointerOut = () => {
      isHoveringInteractive = false;
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

      // Additive blending for luminous cosmic energy glow
      ctx.globalCompositeOperation = "lighter";

      // Optional subtle cursor focal glow when cursor is within window
      if (mouseX > 0 && mouseY > 0) {
        const glowRadius = isHoveringInteractive ? 28 : 18;
        const glowAlpha = isHoveringInteractive ? 0.22 : 0.12;

        const focalGrad = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          glowRadius
        );
        focalGrad.addColorStop(
          0,
          isHoveringInteractive
            ? `rgba(165, 180, 252, ${glowAlpha})`
            : `rgba(96, 165, 250, ${glowAlpha})`
        );
        focalGrad.addColorStop(
          0.5,
          `rgba(34, 211, 238, ${glowAlpha * 0.4})`
        );
        focalGrad.addColorStop(1, "rgba(5, 7, 11, 0)");

        ctx.fillStyle = focalGrad;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age++;

        const lifeRatio = 1 - p.age / p.maxLife;

        if (lifeRatio <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Apply velocities with subtle organic friction
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Size & opacity curve: quick fade-in, smooth quadratic falloff
        const currentAlpha = p.alpha * Math.pow(lifeRatio, 1.4);
        const currentSize = p.baseSize * (0.6 + 0.4 * lifeRatio);

        // Core particle color
        const { r, g, b } = p.color;

        // Draw soft ambient outer glow for non-sparks
        if (!p.isSpark && currentSize > 1.2) {
          const outerGlowRadius = currentSize * 3.5;
          const glowGrad = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            outerGlowRadius
          );
          glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.5})`);
          glowGrad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.15})`);
          glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, outerGlowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw bright central core
        ctx.fillStyle = p.isSpark
          ? `rgba(255, 255, 255, ${currentAlpha * 0.95})`
          : `rgba(${r}, ${g}, ${b}, ${currentAlpha})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Reset composite operation to default
      ctx.globalCompositeOperation = "source-over";

      // If there are still active particles or the mouse is moving, keep animating
      if (particles.length > 0 || isMoving) {
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
