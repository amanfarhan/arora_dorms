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
  color: string;
}

interface CosmicRock {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  vx: number;
  vy: number;
  points: { x: number; y: number }[];
  alpha: number;
}

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
  spriteIndex: number;
  color: { r: number; g: number; b: number };
}

interface ElectricArc {
  segments: { x: number; y: number }[];
  life: number;
  maxLife: number;
  isMagenta: boolean;
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
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
      grad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.65)`);
      grad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, 0.16)`);
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
    const starCount = 55;
    const stars: CosmicStar[] = [];
    const starColorChoices = [
      "rgba(255, 255, 255, ",
      "rgba(186, 230, 253, ", // Cyan tint
      "rgba(233, 213, 255, ", // Violet tint
    ];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.6,
        baseAlpha: Math.random() * 0.5 + 0.25,
        twinkleSpeed: Math.random() * 0.03 + 0.015,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.08,
        vy: -Math.random() * 0.1 - 0.02,
        color: starColorChoices[Math.floor(Math.random() * starColorChoices.length)],
      });
    }

    // 2. Floating Cosmic Rock / Asteroid Fragments (Edges)
    const rockCount = 14;
    const rocks: CosmicRock[] = [];
    for (let i = 0; i < rockCount; i++) {
      const isLeft = Math.random() < 0.5;
      const rockX = isLeft
        ? Math.random() * (width * 0.22)
        : width - Math.random() * (width * 0.22);
      const size = Math.random() * 22 + 10;
      const numPoints = Math.floor(Math.random() * 3 + 5);
      const points: { x: number; y: number }[] = [];

      for (let p = 0; p < numPoints; p++) {
        const angle = (p / numPoints) * Math.PI * 2;
        const radiusDistort = size * (0.7 + Math.random() * 0.5);
        points.push({
          x: Math.cos(angle) * radiusDistort,
          y: Math.sin(angle) * radiusDistort,
        });
      }

      rocks.push({
        x: rockX,
        y: Math.random() * height,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -Math.random() * 0.18 - 0.04,
        points,
        alpha: Math.random() * 0.35 + 0.25,
      });
    }

    // 3. Multi-Depth Floating Particles (Layer 3)
    const particleCount = Math.min(Math.floor((width * height) / 26000), 50);
    const particles: DepthParticle[] = [];

    const colorPalette = [
      colors.neonCyan,
      colors.electricBlue,
      colors.auroraViolet,
      colors.restrainedMagenta,
      colors.cosmicPeriwinkle,
    ];

    for (let i = 0; i < particleCount; i++) {
      const z = Math.random() < 0.35 ? 0 : Math.random() < 0.7 ? 1 : 2;
      const baseSize =
        z === 0
          ? Math.random() * 1.6 + 1.1
          : z === 1
          ? Math.random() * 2.4 + 1.9
          : Math.random() * 3.4 + 2.6;

      const speed = z === 0 ? 0.2 : z === 1 ? 0.42 : 0.68;
      const spriteIndex = Math.floor(Math.random() * sprites.length);
      const color = colorPalette[spriteIndex];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        vx: (Math.random() - 0.5) * speed * 0.8,
        vy: -Math.random() * speed - 0.15,
        baseSize,
        alpha: z === 0 ? 0.6 : z === 1 ? 0.82 : 0.96,
        pulseSpeed: Math.random() * 0.03 + 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
        spriteIndex,
        color,
      });
    }

    // 4. Interactive ripples & electric micro-arcs
    const ripples: EnergyRipple[] = [];
    const arcs: ElectricArc[] = [];
    let nextArcCountdown = Math.floor(Math.random() * 70 + 40);

    const createElectricArc = () => {
      if (particles.length < 2) return;
      let p1: DepthParticle | null = null;
      let p2: DepthParticle | null = null;

      for (let attempt = 0; attempt < 8; attempt++) {
        const c1 = particles[Math.floor(Math.random() * particles.length)];
        const c2 = particles[Math.floor(Math.random() * particles.length)];
        if (c1 !== c2) {
          const dist = Math.hypot(c1.x - c2.x, c1.y - c2.y);
          if (dist > 50 && dist < 260) {
            p1 = c1;
            p2 = c2;
            break;
          }
        }
      }

      if (!p1 || !p2) return;

      const segments: { x: number; y: number }[] = [];
      const numSegments = 6;
      const dx = (p2.x - p1.x) / numSegments;
      const dy = (p2.y - p1.y) / numSegments;

      segments.push({ x: p1.x, y: p1.y });
      for (let s = 1; s < numSegments; s++) {
        const perpX = -dy * (Math.random() - 0.5) * 0.85;
        const perpY = dx * (Math.random() - 0.5) * 0.85;
        segments.push({
          x: p1.x + dx * s + perpX,
          y: p1.y + dy * s + perpY,
        });
      }
      segments.push({ x: p2.x, y: p2.y });

      arcs.push({
        segments,
        life: 0,
        maxLife: Math.floor(Math.random() * 5 + 4),
        isMagenta: Math.random() < 0.38,
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
        radius: 8,
        maxRadius: Math.min(width, height) * 0.38,
        alpha: 0.95,
        speed: 5.5,
      });
      createElectricArc();
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

    // Detect page context for adaptive cosmic tuning
    const isSolutions = pathname?.includes("solutions") || pathname?.includes("technology");
    const isImmersive = pathname?.includes("immersive-content");
    const isIndustries = pathname?.includes("industries");

    const render = () => {
      if (!isTabVisible) {
        animId = null;
        return;
      }

      time += 0.016;

      // Pointer physics interpolation
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

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

        ctx.fillStyle = `${star.color}${starAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // =========================================================================
      // 0.5 LAYER 0.5: Floating Cosmic Rock Fragments (At Left & Right Margins)
      // =========================================================================
      ctx.save();
      for (let r = 0; r < rocks.length; r++) {
        const rock = rocks[r];
        rock.rotation += rock.rotSpeed;
        rock.x += rock.vx;
        rock.y += rock.vy;

        if (rock.y < -40) rock.y = height + 40;
        if (rock.x < -40) rock.x = width + 40;
        if (rock.x > width + 40) rock.x = -40;

        ctx.save();
        ctx.translate(rock.x, rock.y);
        ctx.rotate(rock.rotation);

        ctx.beginPath();
        ctx.moveTo(rock.points[0].x, rock.points[0].y);
        for (let p = 1; p < rock.points.length; p++) {
          ctx.lineTo(rock.points[p].x, rock.points[p].y);
        }
        ctx.closePath();

        // Dark silhouette with faint rim highlight
        ctx.fillStyle = `rgba(15, 23, 42, ${rock.alpha})`;
        ctx.fill();

        ctx.strokeStyle = `rgba(147, 197, 253, ${rock.alpha * 0.45})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.restore();
      }
      ctx.restore();

      // =========================================================================
      // 1. LAYER 1: Celestial Cosmic Sphere / Luminous Planet Dome Horizon
      // =========================================================================
      const planetX = width * 0.5;
      const planetY = height * 0.32;
      const planetR = Math.max(width * 0.44, 380);

      ctx.save();
      // Outer Atmospheric Rim Glow
      ctx.globalCompositeOperation = "screen";
      const gAtmosphere = ctx.createRadialGradient(
        planetX,
        planetY,
        planetR * 0.92,
        planetX,
        planetY,
        planetR * 1.15
      );
      gAtmosphere.addColorStop(0, "rgba(34, 211, 238, 0.42)");
      gAtmosphere.addColorStop(0.35, "rgba(96, 165, 250, 0.28)");
      gAtmosphere.addColorStop(0.7, "rgba(192, 132, 252, 0.12)");
      gAtmosphere.addColorStop(1, "rgba(2, 4, 10, 0)");

      ctx.fillStyle = gAtmosphere;
      ctx.beginPath();
      ctx.arc(planetX, planetY, planetR * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Planet Horizon Surface Gradient
      ctx.globalCompositeOperation = "source-over";
      const gSphere = ctx.createRadialGradient(
        planetX,
        planetY - planetR * 0.5,
        planetR * 0.05,
        planetX,
        planetY,
        planetR
      );
      gSphere.addColorStop(0, "rgba(8, 16, 36, 0.92)");
      gSphere.addColorStop(0.55, "rgba(4, 9, 22, 0.96)");
      gSphere.addColorStop(0.88, "rgba(2, 5, 12, 0.98)");
      gSphere.addColorStop(1, "rgba(2, 4, 10, 1)");

      ctx.fillStyle = gSphere;
      ctx.beginPath();
      ctx.arc(planetX, planetY, planetR, 0, Math.PI * 2);
      ctx.fill();

      // Planet Horizon Sharp Edge Rim Light
      ctx.globalCompositeOperation = "screen";
      ctx.strokeStyle = "rgba(34, 211, 238, 0.65)";
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.arc(planetX, planetY, planetR, Math.PI * 0.85, Math.PI * 2.15);
      ctx.stroke();

      // Secondary Violet Glow Arc on Horizon
      ctx.strokeStyle = "rgba(192, 132, 252, 0.35)";
      ctx.lineWidth = 6.0;
      ctx.beginPath();
      ctx.arc(planetX, planetY, planetR, Math.PI * 0.9, Math.PI * 2.1);
      ctx.stroke();

      ctx.restore();

      // =========================================================================
      // 1.5 LAYER 1.5: Volumetric Atmospheric Nebula Blooms
      // =========================================================================
      ctx.globalCompositeOperation = "screen";

      // Bloom 1: Neon Cyan & Electric Blue (Upper Left Drift)
      const b1X = width * 0.22 + Math.sin(time * 0.32) * 110;
      const b1Y = height * 0.28 + Math.cos(time * 0.28) * 85;
      const b1R = Math.min(width, height) * (isSolutions ? 0.58 : 0.52);
      const g1 = ctx.createRadialGradient(b1X, b1Y, 0, b1X, b1Y, b1R);
      g1.addColorStop(0, isSolutions ? "rgba(34, 211, 238, 0.42)" : "rgba(34, 211, 238, 0.35)");
      g1.addColorStop(0.45, "rgba(59, 130, 246, 0.2)");
      g1.addColorStop(1, "rgba(2, 4, 8, 0)");
      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.arc(b1X, b1Y, b1R, 0, Math.PI * 2);
      ctx.fill();

      // Bloom 2: Aurora Violet & Restrained Magenta (Right Drift)
      const b2X = width * 0.78 + Math.cos(time * 0.3) * 130;
      const b2Y = height * 0.52 + Math.sin(time * 0.35) * 95;
      const b2R = Math.min(width, height) * (isImmersive ? 0.6 : 0.5);
      const g2 = ctx.createRadialGradient(b2X, b2Y, 0, b2X, b2Y, b2R);
      g2.addColorStop(
        0,
        isImmersive
          ? "rgba(232, 121, 249, 0.38)"
          : isIndustries
          ? "rgba(168, 85, 247, 0.35)"
          : "rgba(192, 132, 252, 0.32)"
      );
      g2.addColorStop(0.48, "rgba(147, 51, 234, 0.18)");
      g2.addColorStop(0.78, "rgba(99, 102, 241, 0.09)");
      g2.addColorStop(1, "rgba(2, 4, 8, 0)");
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(b2X, b2Y, b2R, 0, Math.PI * 2);
      ctx.fill();

      // Bloom 3: Pointer Interactive Follower Field
      if (mouseX > 0 && mouseY > 0) {
        const pointerR = 290 + Math.min(mouseVelocity * 2.8, 130);
        const gP = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, pointerR);
        gP.addColorStop(0, "rgba(56, 189, 248, 0.3)");
        gP.addColorStop(0.38, "rgba(147, 51, 234, 0.15)");
        gP.addColorStop(1, "rgba(2, 4, 8, 0)");
        ctx.fillStyle = gP;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, pointerR, 0, Math.PI * 2);
        ctx.fill();
      }

      // =========================================================================
      // 2. LAYER 2: Flowing Luminous Ribbons & Multi-Color Plasma Trails
      // =========================================================================
      ctx.globalCompositeOperation = "lighter";

      // Wave Ribbon 1: Radiant Electric Blue Current
      ctx.beginPath();
      const w1Y = height * 0.36;
      const w1Amp = 58 + Math.sin(time * 0.7) * 22;
      ctx.moveTo(0, w1Y);

      for (let x = 0; x <= width; x += 30) {
        const pDist = Math.abs(x - mouseX);
        const pull = pDist < 320 ? Math.cos((pDist / 320) * (Math.PI / 2)) * (mouseY - w1Y) * 0.26 : 0;
        const y = w1Y + Math.sin(x * 0.0026 + time * 0.85) * w1Amp + Math.cos(x * 0.0052 - time * 0.45) * 25 + pull;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(96, 165, 250, 0.62)";
      ctx.lineWidth = 4.8;
      ctx.stroke();

      ctx.strokeStyle = "rgba(165, 180, 252, 0.28)";
      ctx.lineWidth = 20;
      ctx.stroke();

      // Wave Ribbon 2: Vivid Neon Cyan Energy Stream (Weaving dynamically)
      ctx.beginPath();
      const w2Y = height * 0.64;
      const w2Amp = 68 + Math.cos(time * 0.55) * 24;
      ctx.moveTo(0, w2Y);

      for (let x = 0; x <= width; x += 30) {
        const pDist = Math.abs(x - mouseX);
        const pull = pDist < 320 ? Math.cos((pDist / 320) * (Math.PI / 2)) * (mouseY - w2Y) * 0.22 : 0;
        const y = w2Y + Math.sin(x * 0.003 - time * 0.8) * w2Amp + Math.sin(x * 0.0016 + time * 0.35) * 32 + pull;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(34, 211, 238, 0.58)";
      ctx.lineWidth = 4.4;
      ctx.stroke();

      ctx.strokeStyle = "rgba(34, 211, 238, 0.24)";
      ctx.lineWidth = 19;
      ctx.stroke();

      // Wave Ribbon 3: Aurora Violet & Restrained Magenta Crest
      ctx.beginPath();
      const w3Y = height * 0.8;
      const w3Amp = 54 + Math.sin(time * 0.95) * 19;
      ctx.moveTo(0, w3Y);

      for (let x = 0; x <= width; x += 30) {
        const y = w3Y + Math.cos(x * 0.0036 + time * 0.9) * w3Amp + Math.sin(x * 0.0018 - time * 0.5) * 30;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = isImmersive ? "rgba(232, 121, 249, 0.62)" : "rgba(192, 132, 252, 0.52)";
      ctx.lineWidth = 4.0;
      ctx.stroke();

      ctx.strokeStyle = "rgba(232, 121, 249, 0.22)";
      ctx.lineWidth = 18;
      ctx.stroke();

      // Ribbon 4: High-Velocity Cyan/Violet Intertwine Arc
      ctx.beginPath();
      const w4Y = height * 0.48;
      ctx.moveTo(0, w4Y);
      for (let x = 0; x <= width; x += 35) {
        const y = w4Y + Math.sin(x * 0.0042 + time * 1.1) * 42 + Math.cos(x * 0.0022 - time * 0.65) * 35;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // =========================================================================
      // 3. LAYER 3: Hardware-Blitted 3D Floating Particles (Ultra-Fast 60fps)
      // =========================================================================
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.pulsePhase += p.pulseSpeed;
        const pulse = 0.85 + Math.sin(p.pulsePhase) * 0.3;

        // Pointer repulsion physics
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < 170 && dist > 0) {
          const force = (1 - dist / 170) * 2.2;
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
        const halo = currentSize * (p.z === 2 ? 4.8 : 3.2);
        const sprite = sprites[p.spriteIndex];
        ctx.globalAlpha = Math.min(currentAlpha * 0.9, 1);
        ctx.drawImage(sprite, p.x - halo, p.y - halo, halo * 2, halo * 2);

        // Core luminous point
        ctx.globalAlpha = Math.min(currentAlpha * 1.3, 1);
        const { r, g, b } = p.color;
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize * 0.85, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;

      // =========================================================================
      // 4. LAYER 4: Transient Electric Micro-Arcs
      // =========================================================================
      nextArcCountdown--;
      if (nextArcCountdown <= 0) {
        createElectricArc();
        nextArcCountdown = Math.floor(Math.random() * 75 + 40);
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

        // White-hot core
        ctx.strokeStyle = `rgba(255, 255, 255, ${arcAlpha * 0.95})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Corona: Neon Cyan or Restrained Magenta
        ctx.strokeStyle = arc.isMagenta
          ? `rgba(232, 121, 249, ${arcAlpha * 0.85})`
          : `rgba(34, 211, 238, ${arcAlpha * 0.85})`;
        ctx.lineWidth = 6.4;
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
        ctx.strokeStyle = `rgba(34, 211, 238, ${rip.alpha * 0.85})`;
        ctx.lineWidth = 3.2;
        ctx.stroke();

        ctx.strokeStyle = `rgba(165, 180, 252, ${rip.alpha * 0.4})`;
        ctx.lineWidth = 12;
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
