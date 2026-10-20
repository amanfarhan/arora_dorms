"use client";

import React, { useEffect, useRef } from "react";

interface DepthParticle {
  x: number;
  y: number;
  z: number; // 0 = distant background, 1 = midground, 2 = foreground
  vx: number;
  vy: number;
  baseSize: number;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  color: { r: number; g: number; b: number };
}

interface ElectricArc {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
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

  useEffect(() => {
    // 1. Accessibility guard: respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Palette: Vivid Electric Blue, Neon Cyan, Aurora Violet, Deep Cosmic Periwinkle
    const colors = {
      electricBlue: { r: 96, g: 165, b: 250 },
      neonCyan: { r: 34, g: 211, b: 238 },
      auroraViolet: { r: 192, g: 132, b: 252 },
      cosmicPeriwinkle: { r: 165, g: 180, b: 252 },
      deepIndigo: { r: 99, g: 102, b: 241 },
    };

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
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

    // Pointer and interactive physics state
    let mouseX = width * 0.5;
    let mouseY = height * 0.35;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let mouseVelocity = 0;
    let prevMouseX = mouseX;
    let prevMouseY = mouseY;

    // Scroll tracking & velocity surge
    let scrollY = window.scrollY || 0;
    let targetScrollY = scrollY;
    let prevScrollY = scrollY;
    let scrollVelocity = 0;
    let scrollSurge = 0;

    let animId: number | null = null;
    let isTabVisible = true;

    // Base intensity factor (highest in hero, tempered in dense content)
    let intensity = 1.0;

    // Particles across 3 depth planes
    const particleCount = Math.min(Math.floor((width * height) / 16000), 85);
    const particles: DepthParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const z = Math.random() < 0.4 ? 0 : Math.random() < 0.75 ? 1 : 2;
      const baseSize =
        z === 0
          ? Math.random() * 1.3 + 0.7
          : z === 1
          ? Math.random() * 2.0 + 1.2
          : Math.random() * 2.8 + 2.0;

      const speed = z === 0 ? 0.16 : z === 1 ? 0.35 : 0.58;
      const colorChoices = [
        colors.electricBlue,
        colors.neonCyan,
        colors.cosmicPeriwinkle,
        colors.auroraViolet,
      ];
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        vx: (Math.random() - 0.5) * speed * 0.8,
        vy: -Math.random() * speed - 0.12, // gentle constant upward cosmic float
        baseSize,
        alpha: z === 0 ? 0.4 : z === 1 ? 0.65 : 0.9,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        color,
      });
    }

    // Interactive shockwave ripples
    const ripples: EnergyRipple[] = [];

    // Electric micro-arcs pool
    const arcs: ElectricArc[] = [];
    let nextArcCountdown = Math.floor(Math.random() * 100 + 60);

    const createElectricArc = () => {
      if (particles.length < 2) return;
      let p1: DepthParticle | null = null;
      let p2: DepthParticle | null = null;

      for (let attempt = 0; attempt < 10; attempt++) {
        const candidate1 = particles[Math.floor(Math.random() * particles.length)];
        const candidate2 = particles[Math.floor(Math.random() * particles.length)];
        if (candidate1 !== candidate2) {
          const dist = Math.hypot(candidate1.x - candidate2.x, candidate1.y - candidate2.y);
          if (dist > 50 && dist < 220) {
            p1 = candidate1;
            p2 = candidate2;
            break;
          }
        }
      }

      if (!p1 || !p2) return;

      const segments: { x: number; y: number }[] = [];
      const numSegments = 7;
      const dx = (p2.x - p1.x) / numSegments;
      const dy = (p2.y - p1.y) / numSegments;

      segments.push({ x: p1.x, y: p1.y });
      for (let s = 1; s < numSegments; s++) {
        const perpX = -dy * (Math.random() - 0.5) * 0.9;
        const perpY = dx * (Math.random() - 0.5) * 0.9;
        segments.push({
          x: p1.x + dx * s + perpX,
          y: p1.y + dy * s + perpY,
        });
      }
      segments.push({ x: p2.x, y: p2.y });

      arcs.push({
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        segments,
        life: 0,
        maxLife: Math.floor(Math.random() * 6 + 4), // ultra-fast flash 4-10 frames
      });
    };

    // Event listeners
    const handlePointerMove = (e: PointerEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handlePointerDown = (e: PointerEvent) => {
      // Spawn expanding energy ripple on click
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 6,
        maxRadius: Math.min(width, height) * 0.32,
        alpha: 0.85,
        speed: 5.2,
      });

      // Trigger electric discharge near click
      createElectricArc();
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY || 0;
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animId) {
        animId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
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

      // Scroll physics & surge
      scrollVelocity = Math.abs(targetScrollY - prevScrollY);
      prevScrollY = targetScrollY;
      scrollY += (targetScrollY - scrollY) * 0.1;

      // Scroll velocity causes momentary brightness surge
      if (scrollVelocity > 5) {
        scrollSurge = Math.min(scrollSurge + scrollVelocity * 0.012, 0.45);
      }
      scrollSurge *= 0.92;

      // Calculate base section intensity (100% in hero, 65% in dense content)
      const isTopHero = scrollY < 650;
      const targetIntensity = isTopHero ? 1.0 : 0.65;
      intensity += (targetIntensity - intensity) * 0.04;

      const effectiveIntensity = Math.min(intensity + scrollSurge, 1.25);

      ctx.clearRect(0, 0, width, height);

      // =========================================================================
      // 1. LAYER 1: Volumetric Cosmic Energy Blooms
      // =========================================================================
      ctx.globalCompositeOperation = "screen";

      // Bloom A: Electric Blue (top-left slow orbit)
      const bloom1X = width * 0.22 + Math.sin(time * 0.35) * 90;
      const bloom1Y = height * 0.28 + Math.cos(time * 0.3) * 70;
      const bloom1R = Math.min(width, height) * 0.48;
      const grad1 = ctx.createRadialGradient(bloom1X, bloom1Y, 0, bloom1X, bloom1Y, bloom1R);
      grad1.addColorStop(0, `rgba(59, 130, 246, ${0.22 * effectiveIntensity})`);
      grad1.addColorStop(0.5, `rgba(99, 102, 241, ${0.11 * effectiveIntensity})`);
      grad1.addColorStop(1, "rgba(5, 7, 11, 0)");
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(bloom1X, bloom1Y, bloom1R, 0, Math.PI * 2);
      ctx.fill();

      // Bloom B: Neon Cyan (drifting right/mid)
      const bloom2X = width * 0.78 + Math.cos(time * 0.32) * 110;
      const bloom2Y = height * 0.52 + Math.sin(time * 0.38) * 80;
      const bloom2R = Math.min(width, height) * 0.45;
      const grad2 = ctx.createRadialGradient(bloom2X, bloom2Y, 0, bloom2X, bloom2Y, bloom2R);
      grad2.addColorStop(0, `rgba(34, 211, 238, ${0.19 * effectiveIntensity})`);
      grad2.addColorStop(0.55, `rgba(6, 182, 212, ${0.08 * effectiveIntensity})`);
      grad2.addColorStop(1, "rgba(5, 7, 11, 0)");
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(bloom2X, bloom2Y, bloom2R, 0, Math.PI * 2);
      ctx.fill();

      // Bloom C: Aurora Violet (lower ambient aura)
      const bloom3X = width * 0.48 + Math.sin(time * 0.22) * 130;
      const bloom3Y = height * 0.82 + Math.cos(time * 0.26) * 60;
      const bloom3R = Math.min(width, height) * 0.52;
      const grad3 = ctx.createRadialGradient(bloom3X, bloom3Y, 0, bloom3X, bloom3Y, bloom3R);
      grad3.addColorStop(0, `rgba(168, 85, 247, ${0.16 * effectiveIntensity})`);
      grad3.addColorStop(0.6, `rgba(129, 140, 248, ${0.07 * effectiveIntensity})`);
      grad3.addColorStop(1, "rgba(5, 7, 11, 0)");
      ctx.fillStyle = grad3;
      ctx.beginPath();
      ctx.arc(bloom3X, bloom3Y, bloom3R, 0, Math.PI * 2);
      ctx.fill();

      // Bloom D: Pointer Interactive Follower Field
      if (mouseX > 0 && mouseY > 0) {
        const pointerR = 260 + Math.min(mouseVelocity * 2.8, 120);
        const gradPointer = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, pointerR);
        gradPointer.addColorStop(0, `rgba(56, 189, 248, ${0.16 * effectiveIntensity})`);
        gradPointer.addColorStop(0.45, `rgba(147, 51, 234, ${0.07 * effectiveIntensity})`);
        gradPointer.addColorStop(1, "rgba(5, 7, 11, 0)");
        ctx.fillStyle = gradPointer;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, pointerR, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================================
      // 2. LAYER 2: Flowing Plasma Wave Currents & Luminous Ribbons
      // =========================================================================
      ctx.globalCompositeOperation = "lighter";

      // Wave Ribbon 1: Electric Blue / Periwinkle Main Stream
      ctx.beginPath();
      const wave1BaseY = height * 0.36;
      const wave1Amp = (50 + Math.sin(time * 0.6) * 18) * effectiveIntensity;
      ctx.moveTo(0, wave1BaseY);

      for (let x = 0; x <= width; x += 25) {
        const pointerDistX = Math.abs(x - mouseX);
        const pointerPull =
          pointerDistX < 280
            ? Math.cos((pointerDistX / 280) * (Math.PI / 2)) * (mouseY - wave1BaseY) * 0.22
            : 0;

        const y =
          wave1BaseY +
          Math.sin(x * 0.0025 + time * 0.85) * wave1Amp +
          Math.cos(x * 0.005 - time * 0.45) * 22 +
          pointerPull;
        ctx.lineTo(x, y);
      }

      // Main beam
      ctx.strokeStyle = `rgba(96, 165, 250, ${0.34 * effectiveIntensity})`;
      ctx.lineWidth = 3.5;
      ctx.stroke();

      // Outer glow envelope
      ctx.strokeStyle = `rgba(165, 180, 252, ${0.14 * effectiveIntensity})`;
      ctx.lineWidth = 16;
      ctx.stroke();

      // Wave Ribbon 2: Radiant Neon Cyan Wave
      ctx.beginPath();
      const wave2BaseY = height * 0.58;
      const wave2Amp = (60 + Math.cos(time * 0.5) * 20) * effectiveIntensity;
      ctx.moveTo(0, wave2BaseY);

      for (let x = 0; x <= width; x += 25) {
        const pointerDistX = Math.abs(x - mouseX);
        const pointerPull =
          pointerDistX < 280
            ? Math.cos((pointerDistX / 280) * (Math.PI / 2)) * (mouseY - wave2BaseY) * 0.18
            : 0;

        const y =
          wave2BaseY +
          Math.sin(x * 0.0032 - time * 0.75) * wave2Amp +
          Math.sin(x * 0.0014 + time * 0.35) * 28 +
          pointerPull;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = `rgba(34, 211, 238, ${0.3 * effectiveIntensity})`;
      ctx.lineWidth = 3.0;
      ctx.stroke();

      ctx.strokeStyle = `rgba(34, 211, 238, ${0.11 * effectiveIntensity})`;
      ctx.lineWidth = 14;
      ctx.stroke();

      // Wave Ribbon 3: Aurora Violet Energy Crest
      ctx.beginPath();
      const wave3BaseY = height * 0.74;
      const wave3Amp = (46 + Math.sin(time * 0.95) * 14) * effectiveIntensity;
      ctx.moveTo(0, wave3BaseY);

      for (let x = 0; x <= width; x += 25) {
        const y =
          wave3BaseY +
          Math.cos(x * 0.0038 + time * 0.9) * wave3Amp +
          Math.sin(x * 0.0018 - time * 0.5) * 24;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = `rgba(192, 132, 252, ${0.28 * effectiveIntensity})`;
      ctx.lineWidth = 2.8;
      ctx.stroke();

      ctx.strokeStyle = `rgba(192, 132, 252, ${0.1 * effectiveIntensity})`;
      ctx.lineWidth = 12;
      ctx.stroke();

      // =========================================================================
      // 3. LAYER 3: 3D Depth Particles with Gentle Drift & Interactive Repulsion
      // =========================================================================
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.pulsePhase += p.pulseSpeed;
        const pulse = 0.85 + Math.sin(p.pulsePhase) * 0.28;

        // Interactive mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < 150 && dist > 0) {
          const force = (1 - dist / 150) * 1.8;
          p.x += (dx / dist) * force * (p.z + 1);
          p.y += (dy / dist) * force * (p.z + 1);
        }

        // Apply constant velocity
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        const currentAlpha = p.alpha * pulse * effectiveIntensity;
        const currentSize = p.baseSize * pulse;
        const { r, g, b } = p.color;

        // Soft outer glow on mid & foreground particles
        if (p.z >= 1) {
          const halo = currentSize * (p.z === 2 ? 3.8 : 2.5);
          const haloGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, halo);
          haloGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.6})`);
          haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = haloGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, halo, 0, Math.PI * 2);
          ctx.fill();
        }

        // Particle nucleus
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================================
      // 4. LAYER 4: Transient Electric Micro-Arcs
      // =========================================================================
      nextArcCountdown--;
      if (nextArcCountdown <= 0) {
        createElectricArc();
        nextArcCountdown = Math.floor(Math.random() * 140 + 90);
      }

      for (let a = arcs.length - 1; a >= 0; a--) {
        const arc = arcs[a];
        arc.life++;

        if (arc.life >= arc.maxLife) {
          arcs.splice(a, 1);
          continue;
        }

        const arcAlpha = (1 - arc.life / arc.maxLife) * 0.85 * effectiveIntensity;

        ctx.beginPath();
        ctx.moveTo(arc.segments[0].x, arc.segments[0].y);
        for (let s = 1; s < arc.segments.length; s++) {
          ctx.lineTo(arc.segments[s].x, arc.segments[s].y);
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${arcAlpha})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.strokeStyle = `rgba(34, 211, 238, ${arcAlpha * 0.85})`;
        ctx.lineWidth = 4.5;
        ctx.stroke();
      }

      // =========================================================================
      // 5. LAYER 5: Interactive Click Shockwave Ripples
      // =========================================================================
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.94;

        if (rip.alpha <= 0.02 || rip.radius >= rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 211, 238, ${rip.alpha * 0.65})`;
        ctx.lineWidth = 2.6;
        ctx.stroke();

        ctx.strokeStyle = `rgba(165, 180, 252, ${rip.alpha * 0.28})`;
        ctx.lineWidth = 9;
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
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

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
