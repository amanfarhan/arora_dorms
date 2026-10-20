"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface CosmicStar {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
}

interface DepthParticle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  baseSize: number;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  spriteIndex: number;
  color: { r: number; g: number; b: number };
}

interface ElectricArc {
  segments: { x: number; y: number }[];
  life: number;
  maxLife: number;
}

interface EnergyRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

export default function CinematicEnergyBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Accessibility check: respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Palette: Deep Midnight Foundation + Electric Blue, Cyan, Aurora Violet, Magenta, Periwinkle
    const colors = {
      electricBlue: { r: 96, g: 165, b: 250 },
      neonCyan: { r: 34, g: 211, b: 238 },
      auroraViolet: { r: 192, g: 132, b: 252 },
      restrainedMagenta: { r: 232, g: 121, b: 249 },
      cosmicPeriwinkle: { r: 165, g: 180, b: 252 },
    };

    // Pre-render offscreen particle glow sprites (0 runtime gradient overhead)
    const createGlowSprite = (r: number, g: number, b: number) => {
      const sprite = document.createElement("canvas");
      sprite.width = 64;
      sprite.height = 64;
      const sCtx = sprite.getContext("2d");
      if (!sCtx) return sprite;
      const grad = sCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.95)`);
      grad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.5)`);
      grad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, 0.12)`);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      sCtx.fillStyle = grad;
      sCtx.beginPath();
      sCtx.arc(32, 32, 32, 0, Math.PI * 2);
      sCtx.fill();
      return sprite;
    };

    const sprites = [
      createGlowSprite(34, 211, 238),  // 0: Cyan
      createGlowSprite(96, 165, 250),  // 1: Electric Blue
      createGlowSprite(192, 132, 252), // 2: Aurora Violet
      createGlowSprite(232, 121, 249), // 3: Restrained Magenta
      createGlowSprite(165, 180, 252), // 4: Cosmic Periwinkle
    ];

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
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

    // Pointer and interactive physics state
    let mouseX = width * 0.5;
    let mouseY = height * 0.35;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let mouseVelocity = 0;
    let prevMouseX = mouseX;
    let prevMouseY = mouseY;

    let animId: number | null = null;
    let isTabVisible = true;

    // 1. Cosmic Dust & Micro-Stars (Layer 0)
    const starCount = 48;
    const stars: CosmicStar[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.3 + 0.5,
        baseAlpha: Math.random() * 0.4 + 0.2,
        twinkleSpeed: Math.random() * 0.025 + 0.015,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.06,
        vy: -Math.random() * 0.08 - 0.02,
      });
    }

    // 2. Multi-Depth Floating Particles (Layer 2)
    const particleCount = Math.min(Math.floor((width * height) / 32000), 38);
    const particles: DepthParticle[] = [];

    const colorPalette = [
      colors.neonCyan,
      colors.electricBlue,
      colors.auroraViolet,
      colors.restrainedMagenta,
      colors.cosmicPeriwinkle,
    ];

    for (let i = 0; i < particleCount; i++) {
      const z = Math.random() < 0.4 ? 0 : Math.random() < 0.75 ? 1 : 2;
      const baseSize =
        z === 0
          ? Math.random() * 1.4 + 0.9
          : z === 1
          ? Math.random() * 2.0 + 1.5
          : Math.random() * 2.8 + 2.2;

      const speed = z === 0 ? 0.18 : z === 1 ? 0.35 : 0.55;
      const spriteIndex = Math.floor(Math.random() * sprites.length);
      const color = colorPalette[spriteIndex];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        vx: (Math.random() - 0.5) * speed * 0.6,
        vy: -Math.random() * speed - 0.12,
        baseSize,
        alpha: z === 0 ? 0.45 : z === 1 ? 0.65 : 0.85,
        pulseSpeed: Math.random() * 0.025 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        spriteIndex,
        color,
      });
    }

    // 3. Interactive ripples & electric micro-arcs
    const ripples: EnergyRipple[] = [];
    const arcs: ElectricArc[] = [];
    let nextArcCountdown = Math.floor(Math.random() * 90 + 60);

    const createElectricArc = () => {
      if (particles.length < 2) return;
      let p1: DepthParticle | null = null;
      let p2: DepthParticle | null = null;

      for (let attempt = 0; attempt < 8; attempt++) {
        const c1 = particles[Math.floor(Math.random() * particles.length)];
        const c2 = particles[Math.floor(Math.random() * particles.length)];
        if (c1 !== c2) {
          const dist = Math.hypot(c1.x - c2.x, c1.y - c2.y);
          if (dist > 60 && dist < 220) {
            p1 = c1;
            p2 = c2;
            break;
          }
        }
      }

      if (!p1 || !p2) return;

      const segments: { x: number; y: number }[] = [];
      const numSegments = 5;
      const dx = (p2.x - p1.x) / numSegments;
      const dy = (p2.y - p1.y) / numSegments;

      segments.push({ x: p1.x, y: p1.y });
      for (let s = 1; s < numSegments; s++) {
        const perpX = -dy * (Math.random() - 0.5) * 0.7;
        const perpY = dx * (Math.random() - 0.5) * 0.7;
        segments.push({
          x: p1.x + dx * s + perpX,
          y: p1.y + dy * s + perpY,
        });
      }
      segments.push({ x: p2.x, y: p2.y });

      arcs.push({
        segments,
        life: 0,
        maxLife: Math.floor(Math.random() * 4 + 3),
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handlePointerDown = (e: PointerEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 6,
        maxRadius: Math.min(width, height) * 0.32,
        alpha: 0.8,
        speed: 4.8,
      });
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animId) {
        animId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let time = 0;

    const render = () => {
      if (!isTabVisible) {
        animId = null;
        return;
      }

      time += 0.016;

      // Pointer physics interpolation
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      mouseVelocity = Math.hypot(targetMouseX - prevMouseX, targetMouseY - prevMouseY);
      prevMouseX = targetMouseX;
      prevMouseY = targetMouseY;

      ctx.clearRect(0, 0, width, height);

      // =========================================================================
      // 0. LAYER 0: Cosmic Dust & Twinkling Micro-Stars
      // =========================================================================
      ctx.save();
      for (let s = 0; s < stars.length; s++) {
        const star = stars[s];
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = 0.5 + Math.sin(star.twinklePhase) * 0.5;
        const starAlpha = star.baseAlpha * twinkle;

        star.x += star.vx;
        star.y += star.vy;

        if (star.y < -5) star.y = height + 5;
        if (star.x < -5) star.x = width + 5;
        if (star.x > width + 5) star.x = -5;

        ctx.fillStyle = `rgba(224, 231, 255, ${starAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // =========================================================================
      // 1. LAYER 1: Volumetric Atmospheric Nebula Blooms (Soft Screen Blends)
      // =========================================================================
      ctx.globalCompositeOperation = "screen";

      // Bloom 1: Cyan-Blue Nebula (Upper Left / Center-Left)
      const b1X = width * 0.25 + Math.sin(time * 0.25) * 80;
      const b1Y = height * 0.28 + Math.cos(time * 0.22) * 60;
      const b1R = Math.min(width, height) * 0.55;
      const g1 = ctx.createRadialGradient(b1X, b1Y, 0, b1X, b1Y, b1R);
      g1.addColorStop(0, "rgba(34, 211, 238, 0.22)");
      g1.addColorStop(0.4, "rgba(59, 130, 246, 0.12)");
      g1.addColorStop(1, "rgba(2, 4, 8, 0)");
      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.arc(b1X, b1Y, b1R, 0, Math.PI * 2);
      ctx.fill();

      // Bloom 2: Aurora Violet & Magenta Nebula (Center-Right / Lower-Right)
      const b2X = width * 0.76 + Math.cos(time * 0.24) * 90;
      const b2Y = height * 0.52 + Math.sin(time * 0.28) * 70;
      const b2R = Math.min(width, height) * 0.52;
      const g2 = ctx.createRadialGradient(b2X, b2Y, 0, b2X, b2Y, b2R);
      g2.addColorStop(0, "rgba(192, 132, 252, 0.2)");
      g2.addColorStop(0.35, "rgba(232, 121, 249, 0.1)");
      g2.addColorStop(0.7, "rgba(99, 102, 241, 0.05)");
      g2.addColorStop(1, "rgba(2, 4, 8, 0)");
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(b2X, b2Y, b2R, 0, Math.PI * 2);
      ctx.fill();

      // Bloom 3: Pointer Interactive Ambient Flare
      if (mouseX > 0 && mouseY > 0) {
        const pointerR = 260 + Math.min(mouseVelocity * 2.0, 90);
        const gP = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, pointerR);
        gP.addColorStop(0, "rgba(56, 189, 248, 0.18)");
        gP.addColorStop(0.4, "rgba(147, 51, 234, 0.08)");
        gP.addColorStop(1, "rgba(2, 4, 8, 0)");
        ctx.fillStyle = gP;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, pointerR, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================================
      // 2. LAYER 2: Ethereal Aurora Energy Ribbons (Soft, Translucent & Organic)
      // =========================================================================
      // Ribbon 1: Electric Blue Flow (Mid-Upper)
      ctx.beginPath();
      const w1Y = height * 0.35;
      const w1Amp = 38 + Math.sin(time * 0.6) * 14;
      ctx.moveTo(0, w1Y);

      for (let x = 0; x <= width; x += 40) {
        const pDist = Math.abs(x - mouseX);
        const pull = pDist < 260 ? Math.cos((pDist / 260) * (Math.PI / 2)) * (mouseY - w1Y) * 0.18 : 0;
        const y = w1Y + Math.sin(x * 0.0022 + time * 0.7) * w1Amp + Math.cos(x * 0.0044 - time * 0.35) * 18 + pull;
        ctx.lineTo(x, y);
      }

      // Soft wide ambient glow (never harsh)
      ctx.strokeStyle = "rgba(96, 165, 250, 0.12)";
      ctx.lineWidth = 24;
      ctx.stroke();

      ctx.strokeStyle = "rgba(96, 165, 250, 0.32)";
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Ribbon 2: Vivid Cyan Flow (Mid-Lower)
      ctx.beginPath();
      const w2Y = height * 0.62;
      const w2Amp = 42 + Math.cos(time * 0.5) * 16;
      ctx.moveTo(0, w2Y);

      for (let x = 0; x <= width; x += 40) {
        const pDist = Math.abs(x - mouseX);
        const pull = pDist < 260 ? Math.cos((pDist / 260) * (Math.PI / 2)) * (mouseY - w2Y) * 0.15 : 0;
        const y = w2Y + Math.sin(x * 0.0026 - time * 0.65) * w2Amp + Math.sin(x * 0.0014 + time * 0.3) * 20 + pull;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(34, 211, 238, 0.1)";
      ctx.lineWidth = 22;
      ctx.stroke();

      ctx.strokeStyle = "rgba(34, 211, 238, 0.28)";
      ctx.lineWidth = 2.0;
      ctx.stroke();

      // Ribbon 3: Aurora Violet & Magenta Flow (Lower)
      ctx.beginPath();
      const w3Y = height * 0.82;
      const w3Amp = 36 + Math.sin(time * 0.75) * 14;
      ctx.moveTo(0, w3Y);

      for (let x = 0; x <= width; x += 40) {
        const y = w3Y + Math.cos(x * 0.003 + time * 0.75) * w3Amp + Math.sin(x * 0.0016 - time * 0.4) * 18;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(232, 121, 249, 0.08)";
      ctx.lineWidth = 20;
      ctx.stroke();

      ctx.strokeStyle = "rgba(192, 132, 252, 0.25)";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // =========================================================================
      // 3. LAYER 3: Hardware-Blitted 3D Floating Particles (Ultra-Fast 60fps)
      // =========================================================================
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.pulsePhase += p.pulseSpeed;
        const pulse = 0.85 + Math.sin(p.pulsePhase) * 0.25;

        // Pointer gentle repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < 140 && dist > 0) {
          const force = (1 - dist / 140) * 1.5;
          p.x += (dx / dist) * force * (p.z + 1);
          p.y += (dy / dist) * force * (p.z + 1);
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        const currentAlpha = p.alpha * pulse;
        const currentSize = p.baseSize * pulse;

        // Hardware blit from pre-rendered sprite
        const halo = currentSize * (p.z === 2 ? 4.2 : 2.8);
        const sprite = sprites[p.spriteIndex];
        ctx.globalAlpha = Math.min(currentAlpha * 0.75, 1);
        ctx.drawImage(sprite, p.x - halo, p.y - halo, halo * 2, halo * 2);

        // Core dot
        ctx.globalAlpha = Math.min(currentAlpha * 1.0, 1);
        const { r, g, b } = p.color;
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize * 0.75, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;

      // =========================================================================
      // 4. LAYER 4: Transient Electric Micro-Arcs
      // =========================================================================
      nextArcCountdown--;
      if (nextArcCountdown <= 0) {
        createElectricArc();
        nextArcCountdown = Math.floor(Math.random() * 90 + 60);
      }

      for (let a = arcs.length - 1; a >= 0; a--) {
        const arc = arcs[a];
        arc.life++;

        if (arc.life >= arc.maxLife) {
          arcs.splice(a, 1);
          continue;
        }

        const arcAlpha = 1 - arc.life / arc.maxLife;

        ctx.beginPath();
        ctx.moveTo(arc.segments[0].x, arc.segments[0].y);
        for (let s = 1; s < arc.segments.length; s++) {
          ctx.lineTo(arc.segments[s].x, arc.segments[s].y);
        }

        // Soft core
        ctx.strokeStyle = `rgba(255, 255, 255, ${arcAlpha * 0.7})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Corona
        ctx.strokeStyle = `rgba(34, 211, 238, ${arcAlpha * 0.45})`;
        ctx.lineWidth = 4.0;
        ctx.stroke();
      }

      // =========================================================================
      // 5. LAYER 5: Interactive Click Shockwave Ripples
      // =========================================================================
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.93;

        if (rip.alpha <= 0.02 || rip.radius >= rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 211, 238, ${rip.alpha * 0.6})`;
        ctx.lineWidth = 2.0;
        ctx.stroke();
      }

      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-0"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
