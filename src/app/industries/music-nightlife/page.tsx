"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      <main className="w-full pt-20 bg-background"><div className="flex flex-col w-full text-on-surface">
{/*  TOP CONTEXTUAL BREADCRUMB / TELEMETRY STATUS  */}
<section className="w-full bg-surface-container-lowest px-margin py-space-sm">
<div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-eyebrow text-label-eyebrow tracking-widest uppercase">
<div className="flex items-center gap-space-xs">
<a className="hover:text-primary transition-colors" href="#">HOME</a>
<span className="text-outline-variant">/</span>
<a className="hover:text-primary transition-colors" href="#">INDUSTRIES</a>
<span className="text-outline-variant">/</span>
<span className="text-primary">MUSIC, NIGHTLIFE & CONCERTS</span>
</div>
<div className="flex items-center gap-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          SPEC-ID: IND-05 // SPATIAL ACOUSTIC & LIVE VISUAL SPEC
        </span>
</div>
</div>
</section>
{/*  HERO SECTION WITH SATELLITE HUD  */}
<section className="relative w-full overflow-hidden bg-surface-container-lowest px-margin pt-space-lg pb-space-xl">
{/*  Atmospheric Ambient Glows  */}
<div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
<div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
{/*  Headline & Editorial Narrative  */}
<div className="lg:col-span-6 flex flex-col items-start gap-space-md">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-eyebrow text-label-eyebrow uppercase tracking-[0.22em]">
<span className="material-symbols-outlined text-[14px] text-secondary">graphic_eq</span>
          INDUSTRIES / MUSIC, NIGHTLIFE & CONCERTS
        </div>
<h1 className="font-headline-lg text-headline-lg lg:font-display-lg lg:text-display-lg text-on-surface leading-[1.05]">
          Don't put the show behind them. <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">Put it around them.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Combine music, synchronized visuals, CGI and immersive environments to surround audiences rather than simply placing visuals behind them. Transform headline DJ performances, arena tours, and club residencies with 360° reactive visual architectures.
        </p>
{/*  CTA Buttons  */}
<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<a className="inline-flex items-center gap-space-sm px-space-lg py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:brightness-110 shadow-[0_0_28px_rgba(123,140,222,0.35)] transition-all" href="#">
<span>BUILD THE IMMERSIVE SHOW</span>
<span className="w-6 h-6 rounded-full bg-on-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-[15px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-lg py-3.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-all" href="#">
<span>EXPLORE INDUSTRIES</span>
<span className="material-symbols-outlined text-[16px] text-primary">north_east</span>
</a>
</div>
{/*  Telemetry Spec Badges  */}
<div className="grid grid-cols-3 gap-gutter pt-space-md w-full max-w-lg">
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-widest">Acoustic Mapping</span>
<span className="font-title-md text-title-md text-secondary mt-1">360° REACTIVE</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-widest">Audio Rigging</span>
<span className="font-title-md text-title-md text-primary mt-1">64-CH SPATIAL</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-widest">Hardware Sync</span>
<span className="font-title-md text-title-md text-tertiary mt-1">&lt;1 FRAME SYNC</span>
</div>
</div>
</div>
{/*  Hero Visual with Live Telemetry Overlay  */}
<div className="lg:col-span-6 relative mt-space-md lg:mt-0">
<div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-container-high">
{/*  Background Dome Concert Render  */}
<div className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full bg-cover bg-center" data-alt="An electrifying festival crowd beneath an enormous transparent geodesic dome at night. Intense violet and cyan laser beams radiate outward through geometric lattice trusses toward the audience. Atmospheric haze reflects neon lights, with high-end DJ stage visual projections pulsing with generative liquid light patterns in deep obsidian night." style={{"backgroundImage":"url('/images/img_48c9341ec934.jpg')"}}>
{/*  Scrim gradient  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
</div>
{/*  Floating HUD Overlay Badge  */}
<div className="absolute top-4 left-4 right-4 sm:right-auto flex flex-col gap-1 p-3.5 rounded-xl bg-surface-container-lowest/85 backdrop-blur-md shadow-lg">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
<span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase text-secondary">Audio Input Bus: Online</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface font-semibold">SMPTE / Dante Audio Bus Locked</p>
<p className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase tracking-widest">Latency: &lt;1 Frame Ultra-Low Precision</p>
</div>
{/*  Bottom Audio Reactive Visualizer Ribbon  */}
<div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">equalizer</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-on-surface-variant">Live Spatial Array</span>
<span className="font-label-md text-label-md text-on-surface font-medium">96 kHz / 32-Bit Floating Point</span>
</div>
</div>
{/*  Mini Inline SVG Sparkline  */}
<svg className="h-6 w-32 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 120 24">
<path d="M1 18 L12 4 L24 20 L36 8 L48 14 L60 2 L72 22 L84 6 L96 16 L108 8 L119 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</section>
{/*  EDITORIAL / STATEMENT SECTION  */}
<section className="w-full bg-surface-container px-margin py-space-xl relative">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-8 flex flex-col gap-space-sm">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">TRANSCENDENT LIVE ARCHITECTURE</span>
<blockquote className="font-headline-lg text-headline-lg lg:font-display-lg lg:text-display-lg text-on-surface leading-tight">
          “THE STAGE IS NO LONGER JUST IN FRONT OF YOU.”
        </blockquote>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-sm text-on-surface-variant font-body-lg text-body-lg">
<p>
          Traditional concert staging leaves 80% of the audience's visual field empty. Arora Dorm geodesic domes envelop spectators in a unified sphere of kinetic light, spatial bass, and live-rendered visual art.
        </p>
<div className="flex items-center gap-space-sm pt-space-xs text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Engineered for touring loads & sub-bass resonance</span>
</div>
</div>
</div>
</section>
{/*  APPLICATIONS / EXPERIENCES (4-COLUMN INTERACTIVE CARDS)  */}
<section className="w-full bg-surface-container-low px-margin py-space-xl">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div className="flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-[0.2em]">01 — DEPLOYMENT FORMATS</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Engineered for Every Arena of Sound</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Tailored dome envelopes and projection frameworks designed specifically around the distinct demands of live musical performance.
        </p>
</div>
{/*  4-Column Mosaic Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Card 01: Live Music  */}
<div className="group flex flex-col justify-between p-space-md rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300 shadow-md">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest">SPEC 01</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[22px]">stadium</span>
</div>
<div className="h-44 rounded-lg overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Massive live music concert inside a metallic geodesic structure with sweeping magenta lasers, silhouette of arena musicians performing on center stage, thousands of raised hands, dark futuristic spatial backdrop." style={{"backgroundImage":"url('/images/img_7a71e235afda.jpg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent"></div>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Live Music</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                Transform arena shows and headline tours into 360° audio-reactive visual spectacles with live artist tracking and volumetric lighting.
              </p>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-primary font-label-sm text-label-sm">
<span>EXPLORE LIVE ARENA</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 02: Nightlife & Clubs  */}
<div className="group flex flex-col justify-between p-space-md rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300 shadow-md">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest">SPEC 02</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors text-[22px]">nightlife</span>
</div>
<div className="h-44 rounded-lg overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Futuristic underground luxury nightclub interior housed within a dark geodesic dome. Sleek VIP banquettes illuminated by rhythmic ambient cyan and periwinkle ceiling projection pulses and holographic visual projections." style={{"backgroundImage":"url('/images/img_b392fda13c19.jpg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent"></div>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Nightlife & Clubs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                Permanent immersive club environments with modular visual scenes that evolve seamlessly from sunset lounge to peak-hour intensity.
              </p>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>RESIDENCY SYSTEMS</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 03: Concerts & Touring  */}
<div className="group flex flex-col justify-between p-space-md rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300 shadow-md">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-tertiary uppercase tracking-widest">SPEC 03</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-tertiary transition-colors text-[22px]">rv_hookup</span>
</div>
<div className="h-44 rounded-lg overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Touring festival production crew assembling a lightweight aerospace aluminum geodesic truss system under sunset sky with modular road cases, projection pods, and audio arrays." style={{"backgroundImage":"url('/images/img_8007a4b34f6f.jpg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent"></div>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Concerts & Touring</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                Rapid-deployment geodesic domes engineered for tour logistics, high wind resistance, modular shipping specs, and quick stage strikes.
              </p>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-tertiary font-label-sm text-label-sm">
<span>LOGISTICS SPEC</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 04: Bespoke CGI Experiences  */}
<div className="group flex flex-col justify-between p-space-md rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300 shadow-md">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest">SPEC 04</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[22px]">rebase_edit</span>
</div>
<div className="h-44 rounded-lg overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Abstract 3D real-time generative computer graphics displaying chromatic geometric fractals pulsing with audio waves inside an infinite 360-degree curved spatial canvas." style={{"backgroundImage":"url('/images/img_9f76e7ff391e.jpg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent"></div>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Bespoke CGI Experiences</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                Custom real-time visual engines powered by TouchDesigner and Unreal Engine 5 synchronized natively to live performer stems and MIDI clock.
              </p>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-primary font-label-sm text-label-sm">
<span>ENGINE PIPELINE</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/*  IMMERSIVE EXPERIENCE SHOWCASE (FULL BLEED EDITORIAL)  */}
<section className="w-full bg-surface-container-lowest relative py-space-xl px-margin overflow-hidden">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
{/*  Big Visual Card with Quote Overlay  */}
<div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-surface-container">
<div className="h-[460px] lg:h-[620px] w-full bg-cover bg-center" data-alt="Vast outdoor night festival featuring an enormous semi-transparent Arora Dorm geodesic dome illuminating hundreds of festival goers. Glowing cosmic aurora waves in teal and deep ultraviolet fill the dome interior as skyward lasers intersect the starry night sky." style={{"backgroundImage":"url('/images/img_2a40d068fa9a.jpg')"}}>
{/*  Vignette Scrim  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-space-md lg:p-space-lg flex flex-col gap-space-sm max-w-4xl">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-secondary font-label-eyebrow text-label-eyebrow uppercase tracking-widest w-fit">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            FESTIVAL ENVELOPE PERFORMANCE SPEC
          </span>
<h2 className="font-headline-lg text-headline-lg lg:font-display-lg lg:text-display-lg text-on-surface leading-tight">
            “SURROUND AUDIENCES WITH SOUND, LIGHT, AND ARCHITECTURE.”
          </h2>
</div>
</div>
{/*  Technical Specs Bar  */}
<div className="w-full p-space-md rounded-xl bg-surface-container-high grid grid-cols-1 md:grid-cols-3 gap-space-md items-center">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">weight</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase">Structural Rigging</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">15,000 kg Center Truss Load</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">hub</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase">Data Protocol Bus</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">SMPTE, DMX512, Dante IP</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">surround_sound</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant uppercase">Spatial Acoustic Rig</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">3D Object-Based Spatial Audio</span>
</div>
</div>
</div>
</div>
</section>
{/*  WHY ARORA DORM FOR MUSIC & NIGHTLIFE (3 PERFORMANCE COLUMNS)  */}
<section className="w-full bg-surface-container-low px-margin py-space-xl">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="max-w-2xl flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-[0.2em]">02 — PERFORMANCE ADVANTAGE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Why Arora Dorm for Music & Nightlife</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Built specifically to withstand the brutal demands of high-vibration acoustic environments, heavy touring schedules, and live zero-error broadcasts.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Column 01  */}
<div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-high relative overflow-hidden group hover:bg-surface-container-highest transition-colors">
<div className="flex flex-col gap-space-md">
<span className="font-display-lg text-display-lg text-surface-container-highest group-hover:text-primary/20 transition-colors">01</span>
<div className="flex flex-col gap-space-xs -mt-8">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-widest">SYSTEM INTEGRATION</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Massive Format Projection</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              High-lumen multi-laser projection systems calibrated to penetrate atmospheric haze, heavy pyrotechnics, and moving concert head strobes without image degradation or contrast blowout.
            </p>
</div>
<div className="pt-space-md flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span>4K+ PER QUADRANT UNIFIED THROW</span>
</div>
</div>
{/*  Column 02  */}
<div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-high relative overflow-hidden group hover:bg-surface-container-highest transition-colors">
<div className="flex flex-col gap-space-md">
<span className="font-display-lg text-display-lg text-surface-container-highest group-hover:text-secondary/20 transition-colors">02</span>
<div className="flex flex-col gap-space-xs -mt-8">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-widest">LIVE MEDIA SERVERS</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Real-Time Visual Sync</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Native Notch, TouchDesigner, and DMX/Art-Net support for true zero-latency audio-reactive visual generation. Guest VJs and lighting directors take direct control via native NDI and SDI patches.
            </p>
</div>
<div className="pt-space-md flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">sync_alt</span>
<span>ZERO-JITTER HARDWARE GENLOCK</span>
</div>
</div>
{/*  Column 03  */}
<div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-high relative overflow-hidden group hover:bg-surface-container-highest transition-colors">
<div className="flex flex-col gap-space-md">
<span className="font-display-lg text-display-lg text-surface-container-highest group-hover:text-tertiary/20 transition-colors">03</span>
<div className="flex flex-col gap-space-xs -mt-8">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-tertiary tracking-widest">ON-SITE OPS</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Touring Technical Crew</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              24/7 on-site technical crew chiefs, certified geodesic riggers, and projection systems engineers ensuring flawless execution from opening sets to after-hours lockouts across international venues.
            </p>
</div>
<div className="pt-space-md flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">support_agent</span>
<span>GLOBAL ROAD-READY DEPLOYMENT</span>
</div>
</div>
</div>
</div>
</section>
{/*  HORIZONTAL PROJECT FLOW PIPELINE (5 STAGES)  */}
<section className="w-full bg-surface-container-lowest px-margin py-space-xl">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-[0.2em]">03 — EXECUTION FRAMEWORK</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">The Live Show Project Flow Pipeline</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          From venue acoustic modeling to lightning-quick stage strikes, every phase operates on strict tour production clockwork.
        </p>
</div>
{/*  Pipeline Track  */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative">
{/*  Stage 01  */}
<div className="flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-high relative">
<div className="flex items-center justify-between">
<span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-bold flex items-center justify-center">1</span>
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant">STEP 01</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface font-semibold">DISCOVER</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Venue acoustics study, crowd flow simulation, sightline verification & tour staging riders integration.
          </p>
</div>
{/*  Stage 02  */}
<div className="flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-high relative">
<div className="flex items-center justify-between">
<span className="w-8 h-8 rounded-full bg-surface-container-highest text-primary font-label-md text-label-md font-bold flex items-center justify-center">2</span>
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant">STEP 02</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface font-semibold">DESIGN</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Geodesic structural load engineering, projector throw lines calculation & 360° lighting truss grid topology.
          </p>
</div>
{/*  Stage 03  */}
<div className="flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-high relative">
<div className="flex items-center justify-between">
<span className="w-8 h-8 rounded-full bg-surface-container-highest text-secondary font-label-md text-label-md font-bold flex items-center justify-center">3</span>
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant">STEP 03</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface font-semibold">CREATE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Real-time audio visualizer development, custom Notch shaders & live VJ preset consoles preparation.
          </p>
</div>
{/*  Stage 04  */}
<div className="flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-high relative">
<div className="flex items-center justify-between">
<span className="w-8 h-8 rounded-full bg-surface-container-highest text-tertiary font-label-md text-label-md font-bold flex items-center justify-center">4</span>
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant">STEP 04</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface font-semibold">INSTALL</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Rapid geodesic truss assembly, optical laser auto-calibration & multi-channel soundcheck tuning.
          </p>
</div>
{/*  Stage 05  */}
<div className="flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-high relative">
<div className="flex items-center justify-between">
<span className="w-8 h-8 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-bold flex items-center justify-center">5</span>
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant">STEP 05</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface font-semibold">EXPERIENCE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Live show execution, real-time artist media management & lightning-fast stage strike within hours.
          </p>
</div>
</div>
</div>
</section>
{/*  CROSS-INDUSTRY SUBPAGE NAVIGATION  */}
<section className="w-full bg-surface-container px-margin py-space-lg">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
{/*  Previous Subpage Link  */}
<a className="group flex items-center gap-space-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-outline">PREVIOUS INDUSTRY</span>
<span className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">04 Health & Wellness</span>
</div>
</a>
{/*  Center Hub  */}
<a className="px-space-md py-2 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-bright transition-all" href="#">
        EXPLORE ALL 9 INDUSTRIES
      </a>
{/*  Next Subpage Link  */}
<a className="group flex items-center gap-space-sm text-right text-on-surface-variant hover:text-on-surface transition-colors" href="#">
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-outline">NEXT INDUSTRY</span>
<span className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">06 Museums & Cultural Institutions</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</a>
</div>
</section>
{/*  FINAL CTA SECTION  */}
<section className="w-full bg-surface-container-lowest px-margin py-space-xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto relative z-10 p-space-xl rounded-xl bg-surface-container-high shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
<div className="max-w-2xl flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-[0.2em]">INITIATE STAGE PRODUCTION</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Ready to Create the Experience?</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Tell us about your tour, festival, or club venue, and let's engineer an unforgettable audio-visual spectacle.
        </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<a className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:brightness-110 shadow-[0_0_24px_rgba(123,140,222,0.35)] transition-all" href="#">
<span>BUILD THE IMMERSIVE SHOW</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-all" href="#">
<span>EXPLORE OTHER INDUSTRIES</span>
<span className="material-symbols-outlined text-[16px] text-primary">north_east</span>
</a>
</div>
</div>
</section>
</div>
</main>
    </div>
  );
}
