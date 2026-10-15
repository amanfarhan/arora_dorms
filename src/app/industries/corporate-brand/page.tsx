"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full text-on-surface">
{/*  TOP BREADCRUMB & TELEMETRY SPEC HEADER  */}
<section className="w-full bg-surface-container-lowest py-space-sm">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin flex flex-wrap items-center justify-between gap-space-xs text-on-surface-variant font-label-eyebrow text-label-eyebrow tracking-[0.18em] uppercase">
<div className="flex items-center gap-space-xs">
<span className="text-outline">HOME</span>
<span className="text-outline">/</span>
<span className="text-outline">INDUSTRIES</span>
<span className="text-outline">/</span>
<span className="text-secondary font-semibold">07 CORPORATE, RETAIL & BRAND EXPERIENCES</span>
</div>
<div className="flex items-center gap-space-sm text-outline">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
<span>SPEC-ID: IND-07 // BRAND ACTIVATION & SPATIAL MARKETING SPEC</span>
</div>
</div>
</section>
{/*  SECTION 01: HERO SECTION  */}
<section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-lowest via-surface to-surface-container-low pt-space-lg pb-space-xl">
{/*  Ambient Aurora Luminescence Glows  */}
<div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-container/10 blur-[130px] pointer-events-none"></div>
<div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[140px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin relative z-10">
{/*  Eyebrow Pill  */}
<div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-highest/80 backdrop-blur-md mb-space-md">
<span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#44e1de]"></span>
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-[0.2em]">
          INDUSTRIES // CORPORATE, RETAIL & BRAND EXPERIENCES
        </span>
</div>
{/*  Hero Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end mb-space-xl">
<div className="lg:col-span-8 flex flex-col gap-space-md">
<h1 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface leading-[1.05] tracking-tight">
            DON'T JUST SHOW YOUR BRAND. <br />
<span className="font-headline-sm italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
              SURROUND THEM WITH IT.
            </span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
            Create immersive product launches, trade-show environments, brand activations, retail installations, and experiential marketing environments. Envelop clients, media, and consumers inside photorealistic, multi-sensory brand worlds.
          </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<a className="inline-flex items-center gap-space-sm pl-space-lg pr-space-xs py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all duration-300 hover:shadow-[0_0_32px_rgba(123,140,222,0.45)] group" data-path="start-a-project" href="#">
<span>CREATE YOUR BRAND EXPERIENCE</span>
<span className="w-8 h-8 rounded-full bg-surface-container-lowest/25 flex items-center justify-center text-on-primary group-hover:translate-x-1 transition-transform duration-300">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-lg py-2 rounded-full bg-surface-container-high/60 backdrop-blur-md text-on-surface hover:text-primary transition-all duration-300 font-label-md text-label-md" data-path="industries" href="#">
<span>EXPLORE INDUSTRIES</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</a>
</div>
</div>
{/*  Hero Telemetry Matrix  */}
<div className="lg:col-span-4 flex flex-col gap-space-xs">
<div className="p-space-md rounded-xl bg-surface-container/70 backdrop-blur-xl shadow-lg flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">panorama_photosphere</span>
</div>
<div>
<div className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.16em]">360° SIGHTLINE ACTIVATION</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Uncompromised spatial branding calibrated for infinite vantage points.</div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container/70 backdrop-blur-xl shadow-lg flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">memory</span>
</div>
<div>
<div className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-[0.16em]">REAL-TIME ENGINE</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Native Unreal Engine 5 & Notch synchronization at 120 FPS.</div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container/70 backdrop-blur-xl shadow-lg flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">wb_twilight</span>
</div>
<div>
<div className="font-label-eyebrow text-label-eyebrow text-tertiary uppercase tracking-[0.16em]">ZERO LIGHT-BLEED</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Engineered negative-pressure envelope for daytime convention contrast.</div>
</div>
</div>
</div>
</div>
{/*  Hero Visual Frame with Luxury Automotive Launch  */}
<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest">
<div className="relative w-full h-[380px] md:h-[580px] lg:h-[680px]">
<img className="w-full h-full object-cover object-center" data-alt="An ultra-luxury sports automobile displayed on a glowing circular platform inside a massive 360-degree Arora Dorm geodesic projection dome. VIP audience in couture eveningwear holding champagne flutes, surrounded by sweeping astronomical gold and electric cyan celestial light curves projected seamlessly across the soaring hemispherical architectural ceiling. High contrast, atmospheric dark luxury obsidian aesthetic." src="/images/img_08760f8e71e0.jpg"/>
{/*  Atmospheric Cinematic Scrims  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"></div>
<div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-surface-container-lowest/80"></div>
{/*  On-Image Spatial Telemetry Badge  */}
<div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-wrap items-center justify-between gap-space-sm p-space-md rounded-xl bg-surface-container-lowest/75 backdrop-blur-xl">
<div className="flex items-center gap-space-md">
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.2em]">FEATURED INSTALLATION</span>
<span className="font-title-md text-title-md text-on-surface font-headline-sm">Aston Martin DBX Global VIP Reveal</span>
</div>
<span className="hidden md:inline-block h-8 w-[1px] bg-outline-variant"></span>
<div className="hidden md:flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">ENVELOPE SIZE</span>
<span className="font-body-sm text-body-sm text-on-surface">25M Geodesic Negative-Pressure Shell</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">4K x 4K Fulldome Array</span>
<span className="px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">350 VIP Capacity</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 02: EDITORIAL MANIFESTO  */}
<section className="w-full bg-surface-container-low py-space-xl relative">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-5 flex flex-col gap-space-sm">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">SPATIAL IMMERSION MANIFESTO</span>
<h2 className="font-headline-lg text-headline-lg lg:text-[2.75rem] leading-[1.1] text-on-surface">
            YOUR BRAND. <br />
<span className="italic font-normal text-primary">AN ENTIRE WORLD AROUND IT.</span>
</h2>
<div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary rounded-full my-space-xs"></div>
</div>
<div className="lg:col-span-7 flex flex-col gap-space-md">
<p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
            Traditional flat screens and standard convention booths fade into the background. By stepping inside an <strong className="text-on-surface font-semibold">Arora Dorm</strong> geodesic dome, consumers and decision-makers are completely immersed in your product's architecture, atmosphere, and visual narrative.
          </p>
{/*  Telemetry Impact Badges  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs">
<div className="p-space-md rounded-xl bg-surface-container/90 backdrop-blur-md flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-secondary font-semibold">+420%</span>
<span className="font-label-eyebrow text-label-eyebrow text-on-surface uppercase tracking-[0.16em]">BRAND RECALL</span>
<span className="font-body-sm text-body-sm text-outline">Versus traditional linear display booths</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container/90 backdrop-blur-md flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-primary font-semibold">38 MIN</span>
<span className="font-label-eyebrow text-label-eyebrow text-on-surface uppercase tracking-[0.16em]">VIP DWELL TIME</span>
<span className="font-body-sm text-body-sm text-outline">Average activation engagement duration</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container/90 backdrop-blur-md flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-tertiary font-semibold">100%</span>
<span className="font-label-eyebrow text-label-eyebrow text-on-surface uppercase tracking-[0.16em]">MEDIA CAPTURE READY</span>
<span className="font-body-sm text-body-sm text-outline">Engineered flicker-free broadcast lighting</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 03: APPLICATION MATRIX  */}
<section className="w-full bg-surface py-space-xl relative">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div className="flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.2em]">OPERATIONAL SCENARIOS</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Application Matrix</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Engineered architectural dome deployments scaled from mobile experiential tours to monumental flagship architectural fixtures.
        </p>
</div>
{/*  4 Cards Matrix  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Card 01  */}
<div className="group p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 flex flex-col justify-between shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-[0.2em]">01 // DEPLOYMENT</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
<span className="material-symbols-outlined text-[20px]">rocket_launch</span>
</div>
</div>
<h3 className="font-headline-sm text-title-md text-on-surface mb-space-xs">PRODUCT LAUNCHES</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Turn product introductions into showstopping kinetic experiences that captivate press, VIPs, and global broadcast audiences.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between text-primary font-label-sm text-label-sm group-hover:translate-x-1 transition-transform">
<span>Explore Architecture</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
{/*  Card 02  */}
<div className="group p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 flex flex-col justify-between shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-[0.2em]">02 // EXPOS</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[20px]">domain</span>
</div>
</div>
<h3 className="font-headline-sm text-title-md text-on-surface mb-space-xs">TRADE SHOWS & EXPOS</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Stand out on busy exhibition floors with enclosed spatial environments offering complete isolation from ambient noise and light.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between text-secondary font-label-sm text-label-sm group-hover:translate-x-1 transition-transform">
<span>Acoustic Isolation Specs</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
{/*  Card 03  */}
<div className="group p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 flex flex-col justify-between shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-tertiary tracking-[0.2em]">03 // ACTIVATIONS</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
<span className="material-symbols-outlined text-[20px]">campaign</span>
</div>
</div>
<h3 className="font-headline-sm text-title-md text-on-surface mb-space-xs">BRAND ACTIVATIONS</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Create touring pop-ups, festival sponsorships, and experiential showcases that generate viral social capture and intense engagement.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between text-tertiary font-label-sm text-label-sm group-hover:translate-x-1 transition-transform">
<span>Tour Logistics</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
{/*  Card 04  */}
<div className="group p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 flex flex-col justify-between shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-2xl group-hover:bg-primary-container/10 transition-colors"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-primary-fixed-dim tracking-[0.2em]">04 // PERMANENT</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-all">
<span className="material-symbols-outlined text-[20px]">storefront</span>
</div>
</div>
<h3 className="font-headline-sm text-title-md text-on-surface mb-space-xs">RETAIL INSTALLATIONS</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Transform flagship stores and commercial centers into permanent immersive storytelling environments that drive sustained foot traffic.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between text-primary-container font-label-sm text-label-sm group-hover:translate-x-1 transition-transform">
<span>Commercial Integration</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 04: WHY ARORA DORM (3 COLUMNS)  */}
<section className="w-full bg-surface-container-lowest py-space-xl relative overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.22em] mb-space-xs">TECHNICAL EXCELLENCE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Why Arora Dorm for Brand Experiences</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs font-light">
          We bridge architectural structural engineering with cutting-edge optical projection servers to build worlds that conventional AV setups cannot achieve.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Pillar 01  */}
<div className="p-space-lg rounded-2xl bg-surface-container/60 backdrop-blur-xl flex flex-col gap-space-md shadow-xl">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]">view_in_ar</span>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">01 // CONTENT SUITE</span>
<h3 className="font-title-md text-title-md text-on-surface">BESPOKE CGI & REAL-TIME</h3>
<p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Custom 3D brand assets, interactive product configurators, and cinematic CGI calibrated specifically for spherical fulldome curvature without distortion.
            </p>
</div>
<div className="mt-auto pt-space-sm flex flex-col gap-1 text-outline font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>12K x 12K Master Render Pipeline</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Touchless Motion Sensor Tracking</span>
</div>
</div>
</div>
{/*  Pillar 02  */}
<div className="p-space-lg rounded-2xl bg-surface-container/60 backdrop-blur-xl flex flex-col gap-space-md shadow-xl">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">speed</span>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">02 // DEPLOYMENT PACE</span>
<h3 className="font-title-md text-title-md text-on-surface">HIGH-SPEED DEPLOYMENT</h3>
<p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Modular negative-pressure dome shells engineered for rapid 48-hour erection and turnkey strike on event grounds, convention halls, or remote desert terrains.
            </p>
</div>
<div className="mt-auto pt-space-sm flex flex-col gap-1 text-outline font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
<span>Self-anchoring zero-ground penetration</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
<span>48-hour structural certified handover</span>
</div>
</div>
</div>
{/*  Pillar 03  */}
<div className="p-space-lg rounded-2xl bg-surface-container/60 backdrop-blur-xl flex flex-col gap-space-md shadow-xl">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">03 // FULL MANAGEMENT</span>
<h3 className="font-title-md text-title-md text-on-surface">END-TO-END TECHNICAL DELIVERY</h3>
<p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Dedicated show engineers, master projectionists, media servers, and turnkey AV management from initial CAD acoustic modeling through post-event strike.
            </p>
</div>
<div className="mt-auto pt-space-sm flex flex-col gap-1 text-outline font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
<span>Redundant backup playback servers</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
<span>On-site engineering leads 24/7</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 05: IMMERSIVE SHOWCASE (WIDE EDITORIAL WITH SPECS)  */}
<section className="w-full bg-surface py-space-xl relative overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="rounded-3xl bg-surface-container-high overflow-hidden shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
{/*  Image Side  */}
<div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px]">
<img className="w-full h-full object-cover" data-alt="An expansive panoramic brand activation dome interior with a luxury timepiece watch dial floating in volumetric 3D light high overhead. Guests walking beneath a starfield vortex with cyan and indigo laser lines illuminating the curved geodesic ribs of the Arora Dorm pavilion." src="/images/img_2caf9ae4364f.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container-high/90 hidden lg:block"></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent lg:hidden"></div>
</div>
{/*  Editorial Specs Side  */}
<div className="lg:col-span-6 p-space-lg md:p-space-xl flex flex-col justify-center gap-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">SPATIAL IMPACT</span>
<h2 className="font-headline-lg text-headline-lg lg:text-[2.75rem] text-on-surface leading-tight font-headline-sm">
              “DON'T JUST EXHIBIT. <br />
<span className="italic text-primary">IMMERSE.</span>”
            </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light">
              Deliver unforgettable keynote moments where products materialize in 360-degree scale. No dead angles, no flat boundaries—just an all-encompassing optical envelope.
            </p>
<div className="grid grid-cols-2 gap-space-md pt-space-xs">
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">RIGGING CAPACITY</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">12,000 KG</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Central truss & flying vehicle payload</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">PROJECTION OUTPUT</span>
<span className="font-title-md text-title-md text-secondary font-semibold">180,000 LUMENS</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pure RGB laser solid-state engine</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">SPATIAL AUDIO</span>
<span className="font-title-md text-title-md text-primary font-semibold">64.4 CHANNELS</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ambisonic 3D acoustic object tracking</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">CERTIFICATION</span>
<span className="font-title-md text-title-md text-tertiary font-semibold">ISO & TÜV SÜD</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">International temporary venue compliant</span>
</div>
</div>
<div className="pt-space-xs">
<a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary hover:text-primary transition-colors" data-path="technology" href="#">
<span>View Full Optical & Acoustic Engineering Whitepaper</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 06: PROJECT FLOW PIPELINE (5 HORIZONTAL STEPS)  */}
<section className="w-full bg-surface-container-low py-space-xl relative">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.22em] mb-space-xs">CHOREOGRAPHED EXECUTION</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Project Flow Pipeline</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs font-light">
          A turnkey five-stage methodology designed for frictionless agency partnerships and high-stakes launch dates.
        </p>
</div>
{/*  5 Steps Flex/Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-sm relative">
{/*  Step 01  */}
<div className="p-space-md rounded-xl bg-surface-container/80 backdrop-blur-md flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary font-bold">01</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">DISCOVER</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Brand audit, venue LiDAR modeling, target capacity, and strategic activation objective definition.
          </p>
</div>
{/*  Step 02  */}
<div className="p-space-md rounded-xl bg-surface-container/80 backdrop-blur-md flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-secondary font-bold">02</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">DESIGN</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Sightline mapping, dome envelope sizing, thermal airflow, and acoustic isolation planning.
          </p>
</div>
{/*  Step 03  */}
<div className="p-space-md rounded-xl bg-surface-container/80 backdrop-blur-md flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">03</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">CREATE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            CGI worldbuilding, interactive Unreal programming, multi-channel spatial audio scoring.
          </p>
</div>
{/*  Step 04  */}
<div className="p-space-md rounded-xl bg-surface-container/80 backdrop-blur-md flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary font-bold">04</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">INSTALL</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Truss & dome erection, optical laser alignment, automated calibration, and show rehearsal.
          </p>
</div>
{/*  Step 05  */}
<div className="p-space-md rounded-xl bg-surface-container/80 backdrop-blur-md flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-secondary font-bold">05</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">EXPERIENCE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Live show execution, on-site technical direction, real-time telemetry, and lifecycle wrap.
          </p>
</div>
</div>
</div>
</section>
{/*  SECTION 07: SUBPAGE TRAVERSAL NAVIGATION  */}
<section className="w-full bg-surface-container-lowest py-space-lg">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="p-space-md rounded-2xl bg-surface-container/50 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-space-md">
<a className="group flex items-center gap-space-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="industries/museums-cultural" href="#">
<span className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:-translate-x-1 transition-transform">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</span>
<div className="flex flex-col text-left">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">PREVIOUS INDUSTRY</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">06 Museums & Cultural Institutions</span>
</div>
</a>
<a className="px-space-md py-1.5 rounded-full bg-surface-container-highest/80 hover:bg-surface-bright text-on-surface font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] transition-all" data-path="industries" href="#">
          EXPLORE ALL 9 INDUSTRIES
        </a>
<a className="group flex items-center gap-space-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="industries/education-planetariums" href="#">
<div className="flex flex-col text-right">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-[0.16em]">NEXT INDUSTRY</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">08 Education & Planetariums</span>
</div>
<span className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</span>
</a>
</div>
</div>
</section>
{/*  SECTION 08: FINAL CTA SECTION  */}
<section className="w-full bg-surface py-space-xl relative overflow-hidden">
{/*  Atmospheric Ambient Glow  */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-primary-container/15 via-secondary/10 to-transparent blur-[120px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin relative z-10">
<div className="p-space-xl rounded-3xl bg-surface-container/90 backdrop-blur-2xl shadow-2xl text-center flex flex-col items-center gap-space-md max-w-4xl mx-auto">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">INITIATE SPATIAL PROJECT</span>
<h2 className="font-headline-lg text-headline-lg lg:text-[3.25rem] text-on-surface leading-tight">
          Ready to Create the Experience?
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light">
          Tell us about your brand launch, retail activation, or exhibition vision, and our engineering team will build the spatial layout within 5 business days.
        </p>
<div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
<a className="inline-flex items-center gap-space-sm pl-space-lg pr-space-xs py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all duration-300 hover:shadow-[0_0_32px_rgba(123,140,222,0.45)] group" data-path="start-a-project" href="#">
<span>CREATE YOUR BRAND EXPERIENCE</span>
<span className="w-8 h-8 rounded-full bg-surface-container-lowest/25 flex items-center justify-center text-on-primary group-hover:translate-x-1 transition-transform duration-300">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-lg py-2 rounded-full bg-surface-container-high/80 hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all duration-300" data-path="industries" href="#">
<span>EXPLORE OTHER INDUSTRIES</span>
</a>
</div>
<div className="pt-space-md flex flex-wrap items-center justify-center gap-space-lg text-outline font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Turnkey Global Delivery</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>5-Day Feasibility CAD Output</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Dedicated Technical Lead</span>
</div>
</div>
</div>
</div>
</section>
</div></main>
    </div>
  );
}
