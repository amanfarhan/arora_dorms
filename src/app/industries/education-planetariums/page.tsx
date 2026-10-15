"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">
{/*  Subtle Top Ambient Glow  */}
<div className="relative w-full overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[420px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
<div className="absolute top-48 right-12 w-[480px] h-[360px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
{/*  Telemetry Header Breadcrumbs & Spec Banner  */}
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin pt-6 md:pt-10 pb-6 w-full">
<div className="flex flex-wrap items-center justify-between gap-y-3 pb-6 border-b border-surface-container-highest/60 text-body-sm font-body-sm text-outline">
<div className="flex items-center gap-space-xs tracking-wider">
<a className="hover:text-primary transition-colors" data-path="home" href="#">HOME</a>
<span className="">/</span>
<a className="hover:text-primary transition-colors" data-path="industries" href="#">INDUSTRIES</a>
<span className="">/</span>
<span className="text-secondary font-medium">08 EDUCATION & PLANETARIUMS</span>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high/80 text-[11px] font-mono tracking-widest text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            SPEC-ID: IND-08 // PEDAGOGICAL FULLDOME & ASTROPHYSICAL SPEC
          </span>
</div>
</div>
</div>
{/*  Section 01: Hero  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin pt-4 pb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Text Column  */}
<div className="lg:col-span-6 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em]">
<span className="material-symbols-outlined text-[14px]">public</span>
            INDUSTRIES / EDUCATION & PLANETARIUMS
          </div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-[1.08] tracking-tight">
            MAKE COMPLEX WORLDS <span className="italic text-primary font-serif font-normal">FEEL TANGIBLE.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Transform learning through immersive science, astronomy, STEM education, and scientific visualization experiences. Turn abstract formulas and celestial depths into walkable, sensory reality.
          </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="inline-flex items-center gap-space-sm pl-space-md pr-space-xs py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all duration-300 hover:shadow-[0_0_28px_rgba(123,140,222,0.45)] group" data-path="start-a-project" href="#">
<span className="">BUILD AN IMMERSIVE LEARNING EXPERIENCE</span>
<span className="w-7 h-7 rounded-full bg-surface-container-lowest/25 flex items-center justify-center text-on-primary group-hover:translate-x-0.5 transition-transform duration-300">
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-2 px-space-md py-2 rounded-full bg-surface-container/60 hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all duration-300" data-path="industries" href="#">
<span className="material-symbols-outlined text-[16px] text-outline">apps</span>
<span className="">EXPLORE INDUSTRIES</span>
</a>
</div>
{/*  Telemetry indicators row  */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-surface-container-highest/60">
<div className="flex flex-col gap-1 p-3 rounded-xl bg-surface-container-lowest/60">
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm tracking-wider uppercase">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                ASTROPHYSICAL
              </div>
<div className="font-title-md text-title-md text-on-surface">NASA / ESA Sync</div>
<div className="text-[11px] text-outline leading-tight">Celestial catalog integration</div>
</div>
<div className="flex flex-col gap-1 p-3 rounded-xl bg-surface-container-lowest/60">
<div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm tracking-wider uppercase">
<span className="material-symbols-outlined text-[14px]">sensors</span>
                REAL-TIME
              </div>
<div className="font-title-md text-title-md text-on-surface">OpenSpace & Digistar</div>
<div className="text-[11px] text-outline leading-tight">Native interactive engine hooks</div>
</div>
<div className="flex flex-col gap-1 p-3 rounded-xl bg-surface-container-lowest/60">
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm tracking-wider uppercase">
<span className="material-symbols-outlined text-[14px]">groups</span>
                CAPACITY
              </div>
<div className="font-title-md text-title-md text-on-surface">40 – 450 Seats</div>
<div className="text-[11px] text-outline leading-tight">Modular raked & flat setups</div>
</div>
</div>
</div>
{/*  Visual Hero Stage  */}
<div className="lg:col-span-6 relative">
<div className="relative w-full aspect-[4/5] sm:aspect-[1/1] rounded-2xl overflow-hidden bg-surface-container-lowest shadow-2xl group">
<img  alt="Students and educators inside Arora Dorm Solutions educational planetarium gazing upward at luminous Saturn projection, planetary orbits, and vibrant star clusters" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_b4e94f75f8f0.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-black/30 pointer-events-none"></div>
{/*  Floating Overlay Card  */}
<div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-surface-container-lowest/85 backdrop-blur-xl border border-white/10 flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">qr_code_2</span>
</div>
<div>
<div className="font-label-eyebrow text-[10px] text-secondary tracking-widest uppercase">OBSERVATIONAL ARCHITECTURE</div>
<div className="font-title-md text-body-md font-semibold text-on-surface">Atmospheric Pedagogical Hemispheres</div>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-[11px] font-mono text-primary uppercase">8K Laser Dome</span>
</div>
</div>
</div>
</div>
</section>
{/*  Section 02: Editorial Manifesto  */}
<section className="relative w-full py-space-xl bg-surface-container-low/70">
<div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin text-center flex flex-col items-center">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em] mb-4">
          PEDAGOGICAL PARADIGM SHIFT
        </span>
<blockquote className="font-headline-lg text-headline-sm md:text-headline-lg text-on-surface max-w-4xl leading-tight">
          “LEARNING CHANGES WHEN YOU STEP INSIDE IT.”
        </blockquote>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-6">
          Textbooks and 2D monitors flatten the scale of nature and the cosmos. By enclosing students within a seamless 360-degree digital hemisphere, concepts in molecular biology, geological eras, and astrophysics become intuitive, unforgettable experiences.
        </p>
{/*  Metric Badges  */}
<div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8">
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/90 text-on-surface shadow-sm font-label-md text-label-md">
<span className="material-symbols-outlined text-secondary text-[18px]">trending_up</span>
<span className="">RETENTION INCREASE <strong className="text-secondary font-bold">+320%</strong></span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/90 text-on-surface shadow-sm font-label-md text-label-md">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span className="">CURRICULUM ALIGNED STEM</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/90 text-on-surface shadow-sm font-label-md text-label-md">
<span className="material-symbols-outlined text-tertiary text-[18px]">touch_app</span>
<span className="">INTERACTIVE TEACHER CONSOLES</span>
</div>
</div>
</div>
</section>
{/*  Section 03: Application Matrix  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin py-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-lg">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">SPECTRUM OF APPLICATIONS</span>
<h2 className="font-headline-md text-headline-md text-on-surface mt-2">Specialized Educational Envelopes</h2>
</div>
<p className="font-body-sm text-body-sm text-outline max-w-md">
          Engineered by Arora Dorm Solutions for acoustic damping, zero optical seam interference, and seamless institution-wide integration.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Card 01  */}
<div className="group flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md">
<div className="flex flex-col">
<div className="flex items-center justify-between text-outline mb-6">
<span className="font-mono text-[13px] tracking-wider text-secondary">01 / K-12</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">school</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-2 group-hover:text-primary transition-colors">K-12 & STEM Academies</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Interactive fulldome classrooms that bring biology, physics, and planetary exploration directly into school curriculums.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-surface-container-highest/60 flex items-center justify-between text-label-sm font-label-sm text-outline group-hover:text-on-surface transition-colors">
<span className="">Learn More</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 02  */}
<div className="group flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md">
<div className="flex flex-col">
<div className="flex items-center justify-between text-outline mb-6">
<span className="font-mono text-[13px] tracking-wider text-secondary">02 / RESEARCH</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">biotech</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-2 group-hover:text-secondary transition-colors">Universities & Research</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              High-resolution data visualization domes for climate modeling, astronomical research, and architectural simulations.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-surface-container-highest/60 flex items-center justify-between text-label-sm font-label-sm text-outline group-hover:text-on-surface transition-colors">
<span className="">Learn More</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 03  */}
<div className="group flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md">
<div className="flex flex-col">
<div className="flex items-center justify-between text-outline mb-6">
<span className="font-mono text-[13px] tracking-wider text-secondary">03 / HUBS</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">museum</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-2 group-hover:text-tertiary transition-colors">Science Hubs & Discovery Parks</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Public-facing science centers with automated daily show schedules and multi-language audio narration.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-surface-container-highest/60 flex items-center justify-between text-label-sm font-label-sm text-outline group-hover:text-on-surface transition-colors">
<span className="">Learn More</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 04  */}
<div className="group flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md">
<div className="flex flex-col">
<div className="flex items-center justify-between text-outline mb-6">
<span className="font-mono text-[13px] tracking-wider text-secondary">04 / RETROFIT</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">published_with_changes</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-2 group-hover:text-primary transition-colors">Planetarium Modernization</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Turnkey digital upgrades replacing legacy optomechanical projectors with 8K laser digital fulldome systems.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-surface-container-highest/60 flex items-center justify-between text-label-sm font-label-sm text-outline group-hover:text-on-surface transition-colors">
<span className="">Learn More</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</section>
{/*  Section 04: Why Arora Dorm for Education (3 columns)  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin py-space-xl">
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">WHY ARORA DORM</span>
<h2 className="font-headline-md text-headline-md text-on-surface mt-2">Engineered for Academic Rigor</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col justify-start relative overflow-hidden">
<div className="text-[3rem] font-serif text-outline-variant/30 leading-none select-none mb-4">01</div>
<h3 className="font-title-md text-title-md text-on-surface mb-3">Fulldome Educational Licensing</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Direct access to a curated global library of over 140+ licensed educational fulldome films spanning astrophysics, marine oceanography, microbiology, and ancient geological time scales.
          </p>
</div>
<div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col justify-start relative overflow-hidden">
<div className="text-[3rem] font-serif text-outline-variant/30 leading-none select-none mb-4">02</div>
<h3 className="font-title-md text-title-md text-on-surface mb-3">Scientific Simulation Engines</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Real-time planetary, celestial, and molecular rendering tools calibrated for educators and docents with live trajectory plotting and interactive multi-touch podium inputs.
          </p>
</div>
<div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col justify-start relative overflow-hidden">
<div className="text-[3rem] font-serif text-outline-variant/30 leading-none select-none mb-4">03</div>
<h3 className="font-title-md text-title-md text-on-surface mb-3">Reliable Institutional Hardware</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Industrial-grade laser projection arrays, redundant solid-state servers, whisper-quiet thermal filtration, and single-button iPad educator controls tailored for daily high-volume classroom rotations.
          </p>
</div>
</div>
</section>
{/*  Section 05: Immersive Showcase Banner  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin py-space-xl">
<div className="relative w-full rounded-3xl overflow-hidden p-8 md:p-16 bg-surface-container-lowest flex flex-col items-center justify-center text-center"><div className="absolute inset-0 pointer-events-none"><img  src="/images/img_7c1c45f94e59.jpg" alt="Cosmic fulldome projection of Earth viewed by audience in an immersive planetarium theater" className="w-full h-full object-cover object-center opacity-30 transform scale-105 duration-700" /><div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-surface-container-lowest/60"></div></div>
{/*  Subtle inner stellar gradient overlay  */}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-surface-container-lowest/80 to-surface-container-lowest pointer-events-none"></div>
<div className="relative z-10 max-w-3xl flex flex-col items-center">
<span className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center text-secondary mb-6">
<span className="material-symbols-outlined text-[24px]">explore</span>
</span>
<h2 className="font-headline-lg text-headline-sm md:text-headline-lg text-on-surface leading-tight">
            “INSPIRING THE NEXT GENERATION OF EXPLORERS.”
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-xl">
            Deliver jaw-dropping astronomical clarity that turns science education into lifetime fascination.
          </p>
<div className="mt-8 flex items-center gap-3">
<span className="h-px w-12 bg-outline-variant"></span>
<span className="font-mono text-xs tracking-widest text-outline uppercase">Arora Dorm Spatial Labs</span>
<span className="h-px w-12 bg-outline-variant"></span>
</div>
</div>
</div>
</section>
{/*  Section 06: Project Flow Pipeline  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin py-space-xl">
<div className="mb-space-lg">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">SYSTEMATIC DELIVERY</span>
<h2 className="font-headline-md text-headline-md text-on-surface mt-2">Project Execution Pipeline</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
{/*  Step 1  */}
<div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="font-mono text-secondary font-semibold text-body-sm mb-2">01 / DISCOVER</div>
<div className="font-title-md text-body-md text-on-surface font-semibold mb-2">Curriculum Audit</div>
<p className="text-[12px] text-on-surface-variant leading-relaxed">
              Institutional goals analysis, spatial dimensioning, structural feasibility, and sightline planning.
            </p>
</div>
</div>
{/*  Step 2  */}
<div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="font-mono text-secondary font-semibold text-body-sm mb-2">02 / DESIGN</div>
<div className="font-title-md text-body-md text-on-surface font-semibold mb-2">Optical Engineering</div>
<p className="text-[12px] text-on-surface-variant leading-relaxed">
              Throw distance calculations, custom acoustic perimeter baffling, and docent console configuration.
            </p>
</div>
</div>
{/*  Step 3  */}
<div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="font-mono text-secondary font-semibold text-body-sm mb-2">03 / CREATE</div>
<div className="font-title-md text-body-md text-on-surface font-semibold mb-2">Content & Licensing</div>
<p className="text-[12px] text-on-surface-variant leading-relaxed">
              Fulldome license ingestion, custom astrophysics dataset rendering, and interactive software installation.
            </p>
</div>
</div>
{/*  Step 4  */}
<div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="font-mono text-secondary font-semibold text-body-sm mb-2">04 / INSTALL</div>
<div className="font-title-md text-body-md text-on-surface font-semibold mb-2">Dome Rigging</div>
<p className="text-[12px] text-on-surface-variant leading-relaxed">
              Precision truss erection, micro-perforated aluminum panel alignment, and laser projector edge blending.
            </p>
</div>
</div>
{/*  Step 5  */}
<div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="font-mono text-secondary font-semibold text-body-sm mb-2">05 / EXPERIENCE</div>
<div className="font-title-md text-body-md text-on-surface font-semibold mb-2">Flight & Training</div>
<p className="text-[12px] text-on-surface-variant leading-relaxed">
              Docent flight school, inaugural public showing, and continuous 24/7 institutional remote telemetry.
            </p>
</div>
</div>
</div>
</section>
{/*  Section 07: Subpage Traversal Navigation  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin py-8">
<div className="p-6 rounded-2xl bg-surface-container-low/50 flex flex-col md:flex-row items-center justify-between gap-4">
<a className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group" data-path="industries/brand-experiences" href="#">
<span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">west</span>
<div className="flex flex-col text-left">
<span className="text-[10px] font-mono uppercase tracking-wider text-outline">Previous Industry</span>
<span className="text-body-sm font-medium">07 Corporate & Brand Experiences</span>
</div>
</a>
<a className="px-5 py-2 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" data-path="industries" href="#">
          EXPLORE ALL 9 INDUSTRIES
        </a>
<a className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group text-right" data-path="industries/private-events" href="#">
<div className="flex flex-col">
<span className="text-[10px] font-mono uppercase tracking-wider text-outline">Next Industry</span>
<span className="text-body-sm font-medium">09 Private Events & Weddings</span>
</div>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">east</span>
</a>
</div>
</section>
{/*  Section 08: Final Call to Action  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin pt-space-md pb-space-xl">
<div className="p-space-lg md:p-space-xl rounded-3xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
<div className="flex flex-col gap-3 max-w-xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">NEXT STEPS</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Ready to Create the Experience?</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Tell us about your school, university, or planetarium project, and our Arora Dorm spatial education team will provide an architectural concept within 5 business days.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm pl-space-md pr-space-xs py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all duration-300 hover:shadow-[0_0_28px_rgba(123,140,222,0.45)] group" data-path="start-a-project" href="#">
<span className="">BUILD AN IMMERSIVE LEARNING EXPERIENCE</span>
<span className="w-7 h-7 rounded-full bg-surface-container-lowest/25 flex items-center justify-center text-on-primary group-hover:translate-x-0.5 transition-transform duration-300">
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</a>
<a className="w-full sm:w-auto text-center px-space-md py-2.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" data-path="industries" href="#">
            EXPLORE OTHER INDUSTRIES
          </a>
</div>
</div>
</section>
</div>
</div></main>
    </div>
  );
}
