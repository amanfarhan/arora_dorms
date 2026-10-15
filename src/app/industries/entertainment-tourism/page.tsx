"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      <main className="w-full pt-20 bg-background"><div className="flex flex-col w-full">
{/*  Subtle Aurora Glow Accents  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-40 left-1/4 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
<div className="absolute top-[800px] right-[-100px] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[160px] pointer-events-none"></div>
{/*  1. Breadcrumb Bar  */}
<div className="w-full px-margin-mobile md:px-margin pt-6 pb-4 flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant text-label-sm font-label-sm">
<a className="hover:text-primary transition-colors flex items-center gap-1" data-path="home" href="#">
<span className="material-symbols-outlined text-[14px]">home</span>
<span className="">HOME</span>
</a>
<span className="text-outline-variant">/</span>
<a className="hover:text-primary transition-colors" data-path="industries" href="#">INDUSTRIES</a>
<span className="text-outline-variant">/</span>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/15 text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
<span className="text-label-sm font-label-sm tracking-wider uppercase">Entertainment & Tourism</span>
</div>
</div>
<div className="hidden md:flex items-center gap-2 text-on-surface-variant font-label-eyebrow text-label-eyebrow tracking-[0.2em]">
<span className="">SPEC-ID: IND-01</span>
<span className="text-outline-variant">•</span>
<span className="text-secondary">CLASS A ATTRACTIONS</span>
</div>
</div>
{/*  2. Hero Section  */}
<section className="relative w-full px-margin-mobile md:px-margin pt-6 pb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Text Column  */}
<div className="lg:col-span-6 flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 text-primary-fixed mb-space-md">
<span className="material-symbols-outlined text-secondary text-[16px]">travel_explore</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em]">Industries / Entertainment & Tourism</span>
</div>
<h1 className="font-headline-lg md:font-display-lg text-headline-lg md:text-display-lg text-on-surface tracking-tight mb-space-md max-w-xl">
            Create attractions people come back for.
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg max-w-xl leading-relaxed">
            Create signature immersive attractions for theme parks, amusement parks, water parks, and leisure destinations. Aurora delivers complete turnkey dome architectures, 360° projection, and bespoke narrative content engineered for maximum visitor throughput and unforgettable awe.
          </p>
<div className="flex flex-wrap items-center gap-space-md pt-2">
<a className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold transition-all duration-300 hover:brightness-110 shadow-[0_0_28px_rgba(123,140,222,0.35)]" data-path="start-a-project" href="#">
<span className="">BUILD YOUR ATTRACTION</span>
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-on-primary-container/15">
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container/60 hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all" data-path="industries" href="#">
<span className="">EXPLORE INDUSTRIES</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_outward</span>
</a>
</div>
{/*  Quick Metrics Bar  */}
<div className="grid grid-cols-3 gap-6 pt-space-xl mt-space-md w-full max-w-lg">
<div>
<div className="font-display-lg text-headline-md md:text-headline-lg text-on-surface font-headline-md tracking-tight">1,200+</div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Guests / Hour Capacity</div>
</div>
<div>
<div className="font-display-lg text-headline-md md:text-headline-lg text-secondary font-headline-md tracking-tight">8K+</div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">True Fulldome Resolution</div>
</div>
<div>
<div className="font-display-lg text-headline-md md:text-headline-lg text-tertiary font-headline-md tracking-tight">360°</div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Seamless Immersion</div>
</div>
</div>
</div>
{/*  Hero Visual Showcase  */}
<div className="lg:col-span-6 relative mt-space-lg lg:mt-0">
<div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[10/11] rounded-3xl overflow-hidden bg-surface-container-lowest shadow-[0_24px_64px_-12px_rgba(6,8,13,0.9)]">
<img  alt="Crowd looking up at massive 360-degree underwater whale projection on curved dome ceiling" className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-1000 ease-out" src="/images/img_a060f6a43570.jpg" />
{/*  Deep Radial Vignette Overlay  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80 pointer-events-none"></div>
<div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
{/*  Floating Badge Card  */}
<div className="absolute bottom-6 left-6 right-6 p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl shadow-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-container/20 text-secondary">
<span className="material-symbols-outlined text-[20px]">panorama_photosphere</span>
</div>
<div>
<div className="font-label-md text-label-md text-on-surface font-semibold">Prehistoric Abyss 360°</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Turnkey Leisure Fulldome Installation</div>
</div>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest/70 text-secondary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="">Active Anchor</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  3. Industry Editorial Statement  */}
<section className="w-full px-margin-mobile md:px-margin py-space-xl bg-surface-container-lowest">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-[0.25em] mb-4">The Experiential Shift</span>
<blockquote className="font-headline-lg md:font-display-lg text-headline-lg md:text-headline-lg text-on-surface italic leading-snug mb-6">
          “Turn a venue into an experience.”
        </blockquote>
<div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-6"></div>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          In an era where audiences demand passive observation be replaced by active wonder, geodesic and curved immersive domes dissolve the frame between visitor and story—driving repeat attendance, high merchandise dwell, and unprecedented social engagement.
        </p>
</div>
</section>
{/*  4. Applications & Experiences Grid  */}
<section className="w-full px-margin-mobile md:px-margin py-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
<div>
<span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-[0.2em] block mb-2">Proven Applications</span>
<h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface">Engineered for High-Throughput Destinations</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Four versatile frameworks configured for tourist magnets, theme parks, family entertainment hubs, and marine resorts.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Card 01  */}
<div className="group relative flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md">
<div>
<div className="flex items-center justify-between mb-8">
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-[0.2em]">01 — ATTRACTIONS</span>
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:text-primary group-hover:bg-primary-container/20 transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-3 group-hover:text-primary transition-colors">
              Immersive Attractions
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Create signature immersive experiences within entertainment destinations that serve as marquee anchor attractions with ultra-high guest throughput.
            </p>
</div>
<div className="pt-8 flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">theater_comedy</span>
<span className="">Anchor Staged Show</span>
</div>
</div>
{/*  Card 02  */}
<div className="group relative flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md">
<div>
<div className="flex items-center justify-between mb-8">
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-[0.2em]">02 — WORLDBUILDING</span>
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:text-secondary group-hover:bg-secondary-container/20 transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
              Themed Environments
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Use projection, content and dome architecture to create fully themed worlds that seamlessly extend your park, water reserve, or resort intellectual property.
            </p>
</div>
<div className="pt-8 flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">domain</span>
<span className="">Custom IP Expansion</span>
</div>
</div>
{/*  Card 03  */}
<div className="group relative flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md">
<div>
<div className="flex items-center justify-between mb-8">
<span className="font-label-eyebrow text-label-eyebrow text-tertiary tracking-[0.2em]">03 — COMMERCIAL</span>
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:text-tertiary group-hover:bg-tertiary-container/20 transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-3 group-hover:text-tertiary transition-colors">
              Leisure Destinations
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Turn any commercial mall, transit pavilion, or tourist promenade into a high-draw destination with dynamic multi-sensory fulldome shows.
            </p>
</div>
<div className="pt-8 flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary">attractions</span>
<span className="">Monetizable Footfall</span>
</div>
</div>
{/*  Card 04  */}
<div className="group relative flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md">
<div>
<div className="flex items-center justify-between mb-8">
<span className="font-label-eyebrow text-label-eyebrow text-primary-fixed tracking-[0.2em]">04 — RETENTION</span>
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:text-primary-fixed group-hover:bg-primary-container/20 transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-3 group-hover:text-primary-fixed transition-colors">
              Repeat-Visit Experiences
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Create modular, easily updateable digital shows that audiences can return to season after season to discover fresh stories and holiday overlays.
            </p>
</div>
<div className="pt-8 flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary">autorenew</span>
<span className="">Seasonal Content Library</span>
</div>
</div>
</div>
</section>
{/*  5. Why Aurora For Entertainment & Tourism  */}
<section className="w-full px-margin-mobile md:px-margin py-space-xl bg-surface-container-lowest">
<div className="max-w-3xl mb-space-xl">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-[0.2em] block mb-2">Integrated Vertical</span>
<h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-4">
          Why Tourism Operators Rely On Aurora
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Unlike disjointed audiovisual integrators, Aurora delivers the spatial shell, the laser-projection engine, the creative narrative, and 24/7 technical show control as an unbroken single-contract ecosystem.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Pillar 01  */}
<div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-[26px]">architecture</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-[0.16em] uppercase mb-2">01 / Hardware Architecture</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Dome Infrastructure</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 flex-grow">
            Scalable geodesic dome environments from 3m to 25m+, custom geodesic and negative-pressure skins engineered specifically for heavy guest volume, rapid cycle egress, and stringent international fire safety ratings.
          </p>
<div className="pt-4 flex flex-col gap-2 font-label-sm text-label-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="">Class-1 Fire Retardant Micro-Perforated Membrane</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="">Acoustic Damping & Spatialized Audio Pockets</span>
</div>
</div>
</div>
{/*  Pillar 02  */}
<div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col">
<div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-[26px]">movie_filter</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-[0.16em] uppercase mb-2">02 / Narrative IP</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Immersive Content</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 flex-grow">
            Turnkey fulldome film licenses and bespoke high-fidelity CGI production tailored to park lore, marine life, astral science, or historic storytelling rendered at native 60fps / 120fps dome master resolutions.
          </p>
<div className="pt-4 flex flex-col gap-2 font-label-sm text-label-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="">In-house Unreal Engine 5 Spatial Pipeline</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="">Pre-licensed 40+ Title Global Catalog</span>
</div>
</div>
</div>
{/*  Pillar 03  */}
<div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col">
<div className="w-12 h-12 rounded-xl bg-tertiary-container/20 text-tertiary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-[26px]">smart_toy</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow text-tertiary tracking-[0.16em] uppercase mb-2">03 / Lifecycle Reliability</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Technical Support</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 flex-grow">
            End-to-end delivery, automated daily one-touch show control systems, remote optical camera auto-calibration, and continuous on-site maintenance agreements protecting operator revenue.
          </p>
<div className="pt-4 flex flex-col gap-2 font-label-sm text-label-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="">Sub-2mm Automatic Laser Alignment</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="">99.98% Guaranteed Show Uptime SLA</span>
</div>
</div>
</div>
</div>
</section>
{/*  6. Immersive Experience Showcase (Curved Cinematic Strip)  */}
<section className="relative w-full px-margin-mobile md:px-margin py-space-xl overflow-hidden">
<div className="relative w-full rounded-3xl overflow-hidden bg-surface-container-lowest shadow-[0_32px_80px_rgba(0,0,0,0.9)] aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
<img  alt="Curved panoramic 180-degree underwater ocean reef immersive dome projection display with glowing aurora lights overhead and architectural truss structure" className="w-full h-full object-cover object-center" src="/images/img_2d8ff5bd48a3.jpg" />
{/*  Seamless Cinematic Scrim & Vignette  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-surface-container-lowest/70 pointer-events-none"></div>
{/*  Atmospheric Statement Centerpiece  */}
<div className="relative z-10 max-w-3xl text-center px-6">
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-lowest/70 backdrop-blur-md text-secondary mb-4">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span className="font-label-eyebrow text-label-eyebrow tracking-[0.2em] uppercase">Atmospheric Engineering</span>
</div>
<h2 className="font-headline-lg md:font-display-lg text-headline-lg md:text-headline-lg text-on-surface tracking-tight leading-snug drop-shadow-lg">
            “Don’t just show the attraction. Surround the audience with it.”
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xl mx-auto drop-shadow">
            Modular geodesic cross-sections integrate structural aluminum framework with optical projection panels for uninterrupted horizon-to-zenith panoramic sightlines.
          </p>
</div>
{/*  Bottom Spec Highlights  */}
<div className="absolute bottom-4 left-6 right-6 hidden md:flex items-center justify-between text-on-surface-variant font-label-eyebrow text-label-eyebrow tracking-widest uppercase">
<span className="">PROJECTION: HIGH-LUMEN MULTI-LASER</span>
<span className="">CURVATURE: 180° TO 360° GEODESIC</span>
<span className="">CALIBRATION: AUTO MULTI-CAMERA WARPING</span>
</div>
</div>
</section>
{/*  7. Project Flow (Horizontal Minimal Timeline)  */}
<section className="w-full px-margin-mobile md:px-margin py-space-xl">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-[0.2em] block mb-2">Turnkey Execution</span>
<h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface">The Project Flow</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          From concept feasibility to opening day ribbon-cutting in five precise stages.
        </p>
</div>
{/*  Timeline Rail  */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
{/*  Connecting Line behind items on desktop  */}
<div className="hidden md:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/30 -translate-y-8 z-0"></div>
{/*  Node 1  */}
<div className="relative z-10 flex flex-col items-center md:items-start p-space-md rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-container/20 text-primary mb-4 shadow-[0_0_16px_rgba(123,140,222,0.2)]">
<span className="material-symbols-outlined text-[20px]">explore</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-widest uppercase mb-1">01 / STAGE</span>
<h4 className="font-title-md text-title-md text-on-surface mb-2">DISCOVER</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-center md:text-left">
            Site feasibility, guest volume modeling, civil engineering requirements, and sightline ergonomics.
          </p>
</div>
{/*  Node 2  */}
<div className="relative z-10 flex flex-col items-center md:items-start p-space-md rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high text-secondary mb-4">
<span className="material-symbols-outlined text-[20px]">draw</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-widest uppercase mb-1">02 / STAGE</span>
<h4 className="font-title-md text-title-md text-on-surface mb-2">DESIGN</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-center md:text-left">
            Geodesic shell engineering, laser throw simulation, acoustic baffling, and HVAC flow modeling.
          </p>
</div>
{/*  Node 3  */}
<div className="relative z-10 flex flex-col items-center md:items-start p-space-md rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high text-tertiary mb-4">
<span className="material-symbols-outlined text-[20px]">video_settings</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow text-tertiary tracking-widest uppercase mb-1">03 / STAGE</span>
<h4 className="font-title-md text-title-md text-on-surface mb-2">CREATE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-center md:text-left">
            Custom CGI narrative development, spatial score mixing, 4D haptic programming, and media licensing.
          </p>
</div>
{/*  Node 4  */}
<div className="relative z-10 flex flex-col items-center md:items-start p-space-md rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high text-primary-fixed mb-4">
<span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow text-primary-fixed tracking-widest uppercase mb-1">04 / STAGE</span>
<h4 className="font-title-md text-title-md text-on-surface mb-2">INSTALL</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-center md:text-left">
            On-site physical truss assembly, optical rigging, laser edge blending, and system commissioning.
          </p>
</div>
{/*  Node 5  */}
<div className="relative z-10 flex flex-col items-center md:items-start p-space-md rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container/20 text-secondary mb-4 shadow-[0_0_16px_rgba(0,197,194,0.2)]">
<span className="material-symbols-outlined text-[20px]">stars</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-widest uppercase mb-1">05 / STAGE</span>
<h4 className="font-title-md text-title-md text-on-surface mb-2">EXPERIENCE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-center md:text-left">
            Public grand opening, automated operational handover, staff training, and continuous cloud telemetry.
          </p>
</div>
</div>
</section>
{/*  8. Subpage Industry Navigation (Cross-Page Links)  */}
<div className="w-full px-margin-mobile md:px-margin py-8">
<div className="p-4 rounded-2xl bg-surface-container-lowest flex flex-col md:flex-row items-center justify-between gap-4">
{/*  Previous Industry Link  */}
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all group" data-path="museums-and-culture" href="#">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/20 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</div>
<div className="flex flex-col text-left">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-wider">Previous Industry</span>
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary font-semibold">05 Museums & Culture</span>
</div>
</a>
{/*  Center Index Link  */}
<a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm tracking-wider uppercase transition-colors" data-path="industries" href="#">
<span className="material-symbols-outlined text-[16px] text-secondary">grid_view</span>
<span className="">Explore All Industries</span>
</a>
{/*  Next Industry Link  */}
<a className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-all group" data-path="hospitality" href="#">
<div className="flex flex-col text-right">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-wider">Next Industry</span>
<span className="font-label-md text-label-md text-on-surface group-hover:text-secondary font-semibold">02 Hospitality & Resorts</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-secondary-container/20 group-hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</a>
</div>
</div>
{/*  9. Final Call-to-Action Section  */}
<section className="relative w-full px-margin-mobile md:px-margin pt-space-lg pb-space-xl">
<div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-surface-container to-surface-container-lowest p-space-lg md:p-space-xl text-center flex flex-col items-center">
{/*  Glow Backdrop  */}
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-highest/60 text-primary-fixed mb-space-sm">
<span className="material-symbols-outlined text-secondary text-[16px]">rocket_launch</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em]">Initiate Collaboration</span>
</div>
<h2 className="font-headline-md md:font-display-lg text-headline-md md:text-headline-lg text-on-surface mb-space-sm max-w-2xl">
          Ready to create the experience?
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-space-lg leading-relaxed">
          Tell us about your space, your projected visitor flow, and the attraction you're imagining. Our engineers and creative directors deliver initial spatial layouts within 5 business days.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-space-md">
<a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold transition-all duration-300 hover:brightness-110 shadow-[0_0_32px_rgba(123,140,222,0.4)]" data-path="start-a-project" href="#">
<span className="">BUILD YOUR ATTRACTION</span>
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-on-primary-container/20">
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-surface-container-highest/40 hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" data-path="industries" href="#">
<span className="">Explore Other Industries</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_forward</span>
</a>
</div>
<div className="mt-space-lg flex items-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
<span className="">Turnkey Hardware & Media</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
<span className="">Direct Engineering Support</span>
</div>
</div>
</div>
</section>
</div>
</div></main>
    </div>
  );
}
