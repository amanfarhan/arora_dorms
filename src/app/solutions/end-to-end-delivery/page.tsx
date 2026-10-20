"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen w-full overflow-x-hidden">
      <main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full text-on-surface">
{/*  =========================================================================  */}
{/*  HERO: Translucent Header Bleed & Grand Architectural Vista                */}
{/*  =========================================================================  */}
<section className="relative w-full overflow-hidden -mt-20 pt-28 pb-20 md:pb-32 min-h-[90vh] flex items-center bg-surface-container-lowest">
{/*  Ambient Backdrop Layer with Gradient Scrim  */}
<div className="absolute inset-0 z-0">
<img alt="Observation dome looking out at cosmic Earth and celestial aurora" className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out" src="/images/hero_dome_celestial.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface-container-lowest/80 to-surface-container-lowest/60"></div>
<div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
</div>
{/*  Chromatic Atmospheric Glow  */}
<div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-secondary-container/10 blur-[140px] pointer-events-none"></div>
<div className="absolute top-1/2 right-12 w-[420px] h-[420px] rounded-full bg-tertiary-container/15 blur-[160px] pointer-events-none"></div>
<div className="relative z-10 w-full px-margin-mobile md:px-margin max-w-7xl mx-auto">
<div className="max-w-3xl flex flex-col items-start">
{/*  Eyebrow  */}
<span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 mb-2.5 sm:mb-3">
  End-to-End Delivery
</span>
{/*  Main Editorial Title  */}
<h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-light font-editorial text-white leading-[1.05] tracking-tight mb-3 sm:mb-4">
  One Partner.
  <br />
  <span className="text-gradient-periwinkle font-normal drop-shadow-[0_0_25px_rgba(165,180,252,0.35)]">
    From Concept to Opening Night.
  </span>
</h1>
{/*  Two-Line Supporting Subline  */}
<p className="text-sm sm:text-base text-slate-300 font-light tracking-wide max-w-xl mb-5 sm:mb-6 leading-relaxed">
  From initial site assessment and dome specification to content curation.
  <br />
  We coordinate every architectural and technical detail from start to finish.
</p>
{/*  CTAs  */}
<div className="flex flex-wrap items-center gap-space-md">
<a className="inline-flex items-center gap-space-xs px-space-md py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md shadow-xl hover:bg-primary hover:text-on-primary transition-all duration-300" href="#process">
<span>EXPLORE OUR PROCESS</span>
<span className="w-6 h-6 rounded-full bg-on-primary-container/15 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]">arrow_downward</span>
</span>
</a>
<Link className="inline-flex items-center gap-space-xs px-space-md py-3.5 rounded-full bg-surface-container/60 hover:bg-surface-container text-on-surface backdrop-blur-lg font-label-md text-label-md transition-all duration-300" href="/start-a-project">
<span>START A PROJECT</span>
<span className="material-symbols-outlined text-[16px] text-secondary">arrow_forward</span>
</Link>
</div>
{/*  Metrics Strip  */}
<div className="grid grid-cols-3 gap-gutter-mobile md:gap-gutter mt-space-xl pt-space-lg w-full max-w-xl">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-secondary">3M–25M+</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Diameter Scope</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary">Single SPoC</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Accountability</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-tertiary">360° Fulldome</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Turnkey Pipeline</span>
</div>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  SECTION 1: THE COMPLETE JOURNEY (Milestone Architecture & Progression)    */}
{/*  =========================================================================  */}
<section className="relative w-full py-24 md:py-36 bg-surface" id="process">
<div className="w-full px-margin-mobile md:px-margin max-w-7xl mx-auto">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
<div className="max-w-2xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest block mb-space-xs">Structured Lifecycle</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">The Complete Journey</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Five synchronized phases architected to transform empty geography into world-class immersive theater environments without operational friction.
          </p>
</div>
{/*  Phase Counter Badge  */}
<div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span>100% Turnkey Delivery Track</span>
</div>
</div>
{/*  Flow Milestones Graph  */}
<div className="relative grid grid-cols-1 md:grid-cols-5 gap-gutter">
{/*  Connecting Luminous Line Graphic (Desktop)  */}
<div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-secondary-container via-primary-container to-tertiary-container opacity-40 z-0"></div>
{/*  Milestone 01  */}
<div className="relative z-10 flex flex-col group">
<div className="flex items-center md:flex-col md:items-start gap-4 mb-space-sm">
<div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-secondary shadow-lg group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-all duration-300">
<span className="material-symbols-outlined text-[24px]">architecture</span>
</div>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">01</span>
</div>
<div className="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col flex-1 shadow-md hover:bg-surface-container transition-all duration-300">
<h3 className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">Site Assessment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb- space-sm flex-1">
              Understand the venue, available footprint, architectural loads, acoustics and audience flow requirements.
            </p>
<div className="pt-space-xs flex flex-wrap gap-1.5 mt-auto">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">Structural load</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">Acoustics</span>
</div>
</div>
</div>
{/*  Milestone 02  */}
<div className="relative z-10 flex flex-col group">
<div className="flex items-center md:flex-col md:items-start gap-4 mb-space-sm">
<div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary shadow-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
<span className="material-symbols-outlined text-[24px]">deployed_code</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary font-bold">02</span>
</div>
<div className="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col flex-1 shadow-md hover:bg-surface-container transition-all duration-300">
<h3 className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">Dome Specification</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm flex-1">
              Define optimal dome diameter (3M–25M+), geometric profile, truss materials, and projection screen surface.
            </p>
<div className="pt-space-xs flex flex-wrap gap-1.5 mt-auto">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">3m–25m+ span</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">Truss geodetics</span>
</div>
</div>
</div>
{/*  Milestone 03  */}
<div className="relative z-10 flex flex-col group">
<div className="flex items-center md:flex-col md:items-start gap-4 mb-space-sm">
<div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-tertiary shadow-lg group-hover:bg-tertiary-container group-hover:text-on-tertiary-container transition-all duration-300">
<span className="material-symbols-outlined text-[24px]">movie_creation</span>
</div>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">03</span>
</div>
<div className="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col flex-1 shadow-md hover:bg-surface-container transition-all duration-300">
<h3 className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">Content Curation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm flex-1">
              Identify appropriate existing library titles or engineer bespoke CGI content pipelines matched to your audience.
            </p>
<div className="pt-space-xs flex flex-wrap gap-1.5 mt-auto">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">8K Mastering</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">Spatial CGI</span>
</div>
</div>
</div>
{/*  Milestone 04  */}
<div className="relative z-10 flex flex-col group">
<div className="flex items-center md:flex-col md:items-start gap-4 mb-space-sm">
<div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-secondary shadow-lg group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-all duration-300">
<span className="material-symbols-outlined text-[24px]">tune</span>
</div>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">04</span>
</div>
<div className="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col flex-1 shadow-md hover:bg-surface-container transition-all duration-300">
<h3 className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">Installation & Setup</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm flex-1">
              Rigging, laser projector mounting, automated warping/blending calibration, and media server commissioning.
            </p>
<div className="pt-space-xs flex flex-wrap gap-1.5 mt-auto">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">Laser auto-warp</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">Show control</span>
</div>
</div>
</div>
{/*  Milestone 05  */}
<div className="relative z-10 flex flex-col group">
<div className="flex items-center md:flex-col md:items-start gap-4 mb-space-sm">
<div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary shadow-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
<span className="material-symbols-outlined text-[24px]">support_agent</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary font-bold">05</span>
</div>
<div className="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col flex-1 shadow-md hover:bg-surface-container transition-all duration-300">
<h3 className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">Training & Support</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm flex-1">
              Operator training, staff runbooks, launch day standby support, and long-term lifecycle care.
            </p>
<div className="pt-space-xs flex flex-wrap gap-1.5 mt-auto">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">On-site standby</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-outline text-[11px] font-mono">24/7 telemetry</span>
</div>
</div>
</div>
</div>
{/*  Process Diagram Callout Ribbon  */}
<div className="mt-space-lg p-space-md rounded-2xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-space-md shadow-inner">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">sync</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Integrated coordination eliminates vendor finger-pointing between hardware, audio, and content.</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-outline">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Zero Gap SLA</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Turnkey Warranty</span>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  SECTION 2: EVERYTHING WORKING AS ONE (Multi-Disciplinary Coordination)    */}
{/*  =========================================================================  */}
<section className="relative w-full py-24 md:py-36 bg-surface-container-lowest">
<div className="w-full px-margin-mobile md:px-margin max-w-7xl mx-auto">
{/*  Section Title & Narrative  */}
<div className="max-w-3xl mb-space-xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest block mb-space-xs">Cohesive Integration</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">Everything Working as One</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          The magic of a fulldome installation lies in seamless symbiosis. We integrate four foundational disciplines simultaneously so your system behaves like an organic, living atmosphere.
        </p>
</div>
{/*  4 Pillars Grid (Bento Matrix)  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Pillar 1: Infrastructure  */}
<div className="group relative rounded-3xl overflow-hidden bg-surface-container flex flex-col shadow-xl transition-all duration-500 hover:-translate-y-1">
{/*  Image Container  */}
<div className="relative w-full h-64 overflow-hidden">
<img alt="Architectural geodesic dome structure exterior at twilight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/img_86e73b4ec055.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-secondary shadow-md">
<span className="material-symbols-outlined text-[20px]">domain</span>
</div>
</div>
{/*  Body  */}
<div className="p-space-md flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-mono uppercase tracking-wider mb-1">01 / Engineering</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Infrastructure</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-1">
              Engineering, architectural approvals, structural trusses, negative-pressure screens, and custom acoustic shells.
            </p>
<ul className="space-y-2 pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Seismic & windload certified</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Perforated acoustic domes</span>
</li>
</ul>
</div>
</div>
{/*  Pillar 2: Projection & Integration  */}
<div className="group relative rounded-3xl overflow-hidden bg-surface-container flex flex-col shadow-xl transition-all duration-500 hover:-translate-y-1">
{/*  Image Container  */}
<div className="relative w-full h-64 overflow-hidden">
<img alt="Cinema dome projector lens and optical laser projection rig" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/img_16339af8ae65.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-primary shadow-md">
<span className="material-symbols-outlined text-[20px]">lens_blur</span>
</div>
</div>
{/*  Body  */}
<div className="p-space-md flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-primary font-mono uppercase tracking-wider mb-1">02 / Optics & Sync</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Projection & Integration</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-1">
              Multi-projector auto-alignment, laser lumen calibration, uncompressed playback, and automated show control logic.
            </p>
<ul className="space-y-2 pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
<span>Sub-millimeter edge blending</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
<span>Spatial 16-channel audio sync</span>
</li>
</ul>
</div>
</div>
{/*  Pillar 3: Immersive Content  */}
<div className="group relative rounded-3xl overflow-hidden bg-surface-container flex flex-col shadow-xl transition-all duration-500 hover:-translate-y-1">
{/*  Image Container  */}
<div className="relative w-full h-64 overflow-hidden">
<img alt="Fulldome projection theater displaying glowing cosmic nebula and mythical whale" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/img_54256e7a42e4.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-tertiary shadow-md">
<span className="material-symbols-outlined text-[20px]">view_in_ar</span>
</div>
</div>
{/*  Body  */}
<div className="p-space-md flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-tertiary font-mono uppercase tracking-wider mb-1">03 / Visual Media</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Immersive Content</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-1">
              360° cinematic storytelling, fulldome theatrical mastering, licensed catalog, and custom real-time CGI production.
            </p>
<ul className="space-y-2 pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
<span>Curated global title vault</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
<span>Unreal Engine real-time CGI</span>
</li>
</ul>
</div>
</div>
{/*  Pillar 4: Technical Support  */}
<div className="group relative rounded-3xl overflow-hidden bg-surface-container flex flex-col shadow-xl transition-all duration-500 hover:-translate-y-1">
{/*  Image Container  */}
<div className="relative w-full h-64 overflow-hidden">
<img alt="Technical engineer working at a console monitor in a dark dome control room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/img_74e401401c4c.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-secondary shadow-md">
<span className="material-symbols-outlined text-[20px]">settings_input_component</span>
</div>
</div>
{/*  Body  */}
<div className="p-space-md flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-mono uppercase tracking-wider mb-1">04 / Lifecycle</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Technical Support</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-1">
              24/7 system telemetry, preventive maintenance routines, laser lamp audits, and expert operational continuity.
            </p>
<ul className="space-y-2 pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Proactive remote diagnostics</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Guaranteed uptime SLA</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  SECTION 3: DESIGNED AROUND YOUR PROJECT (Bespoke Venues & Adaptation)      */}
{/*  =========================================================================  */}
<section className="relative w-full py-24 md:py-36 bg-surface overflow-hidden">
{/*  Ethereal Aurora Arc in background  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-secondary-container/10 rounded-full blur-[160px] pointer-events-none"></div>
<div className="relative z-10 w-full px-margin-mobile md:px-margin max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Visual Column (Panoramic Geodesic Lake Reflection)  */}
<div className="lg:col-span-7 relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container">
<img alt="Glowing illuminated geodesic glass dome pavilion reflecting in a calm mountain lake under aurora night sky" className="w-full h-auto object-cover aspect-[16/10] hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_174dc50064be.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
{/*  Live Spatial Spec Card Overlay  */}
<div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface-container-lowest/85 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 shadow-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]">explore</span>
<div>
<p className="font-label-sm text-label-sm text-on-surface font-semibold">Sub-Zero Alpine & Extreme Climate Engineering</p>
<p className="font-body-sm text-body-sm text-outline text-[12px]">Tromsø, Norway • Geothermal Climate Regulation</p>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-label-sm font-mono">Verified Eco-Resort</span>
</div>
</div>
</div>
{/*  Copy Column  */}
<div className="lg:col-span-5 flex flex-col items-start lg:pl-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest mb-space-xs">Custom Architecture</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md">Designed Around Your Project</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-space-md leading-relaxed">
            Every dome installation represents an entirely unique spatial challenge. Delivery requirements vary by venue geometry, geographic terrain, indoor vs outdoor deployment, and intended audience immersion depth.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
            Whether constructing a permanent 24-meter civic planetarium dome with stadium raking, or mobilizing a temporary modular geodesic dome for an international luxury brand launch in the desert, our cross-functional team adapts every operational discipline to your timeline and constraints.
          </p>
{/*  Key Features Matrix  */}
<div className="grid grid-cols-2 gap-space-sm w-full mb-space-lg">
<div className="p-3.5 rounded-xl bg-surface-container flex items-start gap-2.5">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">cabin</span>
<div>
<span className="font-title-md text-body-md text-on-surface font-semibold block">Permanent & Modular</span>
<span className="font-body-sm text-body-sm text-outline">Fixed foundations or touring rigs</span>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">ac_unit</span>
<div>
<span className="font-title-md text-body-md text-on-surface font-semibold block">Weather Sealed</span>
<span className="font-body-sm text-body-sm text-outline">Extreme heat & sub-zero HVAC</span>
</div>
</div>
</div>
<Link className="inline-flex items-center gap-space-xs px-space-md py-3.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md shadow-md transition-all duration-300" href="/start-a-project">
<span>DISCUSS YOUR PROJECT</span>
<span className="material-symbols-outlined text-[16px] text-secondary">arrow_forward</span>
</Link>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  FINAL CTA SECTION: High-Drama Obsidian Curtain with Aurora Flare          */}
{/*  =========================================================================  */}
<section className="relative w-full py-28 md:py-40 bg-surface-container-lowest overflow-hidden">
{/*  Atmospheric Ambient Lighting Rings  */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-t from-primary-container/20 via-secondary-container/10 to-transparent blur-[140px] pointer-events-none"></div>
<div className="relative z-10 w-full px-margin-mobile md:px-margin max-w-5xl mx-auto text-center flex flex-col items-center">
{/*  Icon Graphic  */}
<div className="w-16 h-16 rounded-full bg-surface-container-high/80 backdrop-blur-xl flex items-center justify-center text-secondary mb-space-md shadow-xl">
<span className="material-symbols-outlined text-[32px]">filter_vintage</span>
</div>
{/*  Eyebrow  */}
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest mb-space-xs">Initiate Development</span>
{/*  Headline  */}
<h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface mb-space-md">
        Ready to Bring Your Dome to Life?
      </h2>
{/*  Subtext  */}
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-xl leading-relaxed">
        Share your vision, venue and goals. Let's explore the right approach for your project with our engineering, optics, and production teams.
      </p>
{/*  Primary Action CTA  */}
<div className="flex flex-col sm:flex-row items-center gap-space-md">
<Link className="inline-flex items-center gap-space-xs px-space-lg py-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md shadow-2xl hover:bg-primary hover:text-on-primary hover:scale-105 transition-all duration-300 aurora-btn-primary" href="/start-a-project">
<span className="font-semibold tracking-wide">START A PROJECT</span>
<span className="w-6 h-6 rounded-full bg-on-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</Link>
<Link className="inline-flex items-center gap-space-xs px-space-md py-4 rounded-full bg-surface-container/60 hover:bg-surface-container text-on-surface backdrop-blur-md font-label-md text-label-md transition-colors" href="/solutions">
<span>View All Solutions</span>
<span className="material-symbols-outlined text-[16px]">north_east</span>
</Link>
</div>
{/*  Trust Line  */}
<div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-md font-label-sm text-label-sm text-outline">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">verified_user</span> Turnkey Project Insurance
        </span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[16px]">schedule</span> Rapid 12-Week Commissioning
        </span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-tertiary text-[16px]">public</span> Global Deployment Network
        </span>
</div>
</div>
</section>
</div>
</main>
    </div>
  );
}
