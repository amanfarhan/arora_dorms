"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-surface text-on-surface min-h-screen w-full overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <main className="w-full bg-background"><div className="flex flex-col w-full text-on-surface">
{/*  TOP BREADCRUMB & METADATA BAR  */}
<div className="w-full bg-surface-container-lowest px-margin py-3">
<div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-gutter text-on-surface-variant font-label-eyebrow text-label-eyebrow">
<div className="flex items-center gap-space-xs tracking-[0.2em]">
<Link className="hover:text-primary transition-colors" href="/">HOME</Link>
<span className="text-outline-variant">/</span>
<Link className="hover:text-primary transition-colors" href="/industries">INDUSTRIES</Link>
<span className="text-outline-variant">/</span>
<span className="text-primary font-semibold">06 MUSEUMS & CULTURAL INSTITUTIONS</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary tracking-widest uppercase">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_currentColor]"></span>
<span className="">SPEC-ID: IND-06 // INSTITUTIONAL EXHIBITION SPEC</span>
</div>
</div>
</div>
{/*  HERO SECTION  */}
<section className="relative w-full px-margin pt-space-xl pb-space-xl overflow-hidden bg-gradient-to-b from-surface-container-lowest via-surface to-surface-container-low">
{/*  Atmospheric Aurora Glare Layer  */}
<div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]"></div>
<div className="pointer-events-none absolute top-1/3 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px]"></div>
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
{/*  Left Narrative Column  */}
<div className="lg:col-span-6 flex flex-col gap-space-md">
<div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-eyebrow text-label-eyebrow tracking-[0.22em] uppercase">
<span className="material-symbols-outlined text-[14px]">account_balance</span>
<span className="">INDUSTRIES / MUSEUMS & CULTURAL INSTITUTIONS</span>
</div>
<h1 className="font-headline-lg text-headline-lg lg:text-display-lg font-display-lg text-on-surface tracking-tight leading-[1.08]">
          TURN LEARNING <br />INTO AN <span className="italic font-display-lg text-primary">EXPERIENCE.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Create immersive environments for museums, science centres, galleries, planetariums and cultural attractions. Transform historic epochs, deep oceanic frontiers, and celestial space into tangible, walk-in worlds that inspire lifelong curiosity.
        </p>
{/*  Actions  */}
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<Link className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold transition-all hover:brightness-110 shadow-[0_0_28px_rgba(123,140,222,0.35)] aurora-btn-primary" href="/start-a-project">
<span className="">CREATE THE NEXT IMMERSIVE EXHIBITION</span>
<span className="w-6 h-6 rounded-full bg-on-primary-container/15 flex items-center justify-center">
<span className="material-symbols-outlined text-[15px]">arrow_forward</span>
</span>
</Link>
<Link className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-surface-container-high/70 hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all" href="/start-a-project">
<span className="">EXPLORE INDUSTRIES</span>
<span className="material-symbols-outlined text-[16px] text-primary">north_east</span>
</Link>
</div>
{/*  Quick Telemetry Metrics  */}
<div className="grid grid-cols-3 gap-space-sm pt-space-md mt-space-sm">
<div className="flex flex-col gap-1">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-widest">8K FULLDOME</span>
<span className="font-title-md text-title-md font-semibold text-on-surface">MASTERING</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Uncompromised pixel grid</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-widest">10-BIT DEPTH</span>
<span className="font-title-md text-title-md font-semibold text-on-surface">COLOR FIDELITY</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rec.2020 scientific grading</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-tertiary tracking-widest">360° SIGHTLINE</span>
<span className="font-title-md text-title-md font-semibold text-on-surface">UNRESTRICTED</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Engineered optical pitch</span>
</div>
</div>
</div>
{/*  Right Visual Feature  */}
<div className="lg:col-span-6 relative mt-space-md lg:mt-0">
<div className="relative rounded-2xl overflow-hidden bg-surface-container shadow-2xl group">
{/*  Image Asset  */}
<div className="relative aspect-[4/3] w-full overflow-hidden">
<img  alt="Museum visitors in silhouette gazing up in awe at an immense glowing blue Earth and deep space starfield fulldome projection" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_a014896c7567.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
</div>
{/*  Telemetry Overlay Badge  */}
<div className="absolute bottom-4 left-4 right-4 p-space-sm rounded-xl bg-surface-container-lowest/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface tracking-wider uppercase">Institutional Fulldome Engine</span>
</div>
<div className="flex items-center gap-2 text-primary font-label-eyebrow text-label-eyebrow tracking-widest uppercase">
<span className="material-symbols-outlined text-[15px]">verified</span>
<span className="">True 8K Photorealistic Projection</span>
</div>
</div>
{/*  Corner Floating Stat Notch  */}
<div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex items-center gap-1.5 text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-secondary text-[16px]">visibility</span>
<span className="">120° Vertical Arch</span>
</div>
</div>
</div>
</div>
</section>
{/*  EDITORIAL STATEMENT SECTION  */}
<section className="w-full bg-surface-container-low px-margin py-space-xl relative overflow-hidden">
<div className="max-w-[1180px] mx-auto flex flex-col items-center text-center gap-space-md relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/60 text-secondary font-label-eyebrow text-label-eyebrow uppercase tracking-[0.25em]">
<span className="material-symbols-outlined text-[13px]">cyclone</span>
<span className="">THE EVOLUTION OF EXHIBITION</span>
</div>
<blockquote className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight max-w-4xl leading-tight">
        “DON'T JUST SHOW THE STORY. <br /><span className="italic text-primary font-headline-lg">STEP INSIDE IT.</span>”
      </blockquote>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
        Static vitrines and didactic text panels can only convey so much. By wrapping visitors in photorealistic, scientifically accurate 360° visual environments, cultural institutions spark visceral connection and unprecedented visitor dwell times.
      </p>
{/*  Precision Gauge Accent Graphic  */}
<div className="flex items-center gap-space-lg pt-space-xs text-on-surface-variant font-label-eyebrow text-label-eyebrow tracking-widest uppercase">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          IMMERSIVE RETENTION +340%
        </span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          AVERAGE DWELL TIME 42 MIN
        </span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          STEM ACCREDITED CONTENT
        </span>
</div>
</div>
</section>
{/*  APPLICATIONS & EXPERIENCES: 4 Interactive Exhibition Cards  */}
<section className="w-full bg-surface px-margin py-space-xl relative">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm">
<div className="flex flex-col gap-1">
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-[0.22em]">CURATORIAL PARADIGMS</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Institutional Exhibition Spheres</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Tailored architectural configurations engineered for varied pedagogical mandates, acoustics, and permanent museum layouts.
        </p>
</div>
{/*  4-Card Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter">
{/*  01 Museums & Archives  */}
<div className="group relative rounded-2xl bg-surface-container p-space-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container-high shadow-lg">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-widest font-semibold uppercase">01 / ARCHIVAL</span>
<span className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[19px]">history_edu</span>
</span>
</div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface pt-space-xs">MUSEUMS & ARCHIVES</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Transform archaeological discoveries, ancient civilizations, and historical eras into fully navigable spatial environments with photogrammetric precision.
            </p>
</div>
<div className="pt-space-md mt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Historical Reconstructions</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
</div>
</div>
{/*  02 Science Centres  */}
<div className="group relative rounded-2xl bg-surface-container p-space-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container-high shadow-lg">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-widest font-semibold uppercase">02 / STEM DATA</span>
<span className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[19px]">biotech</span>
</span>
</div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface pt-space-xs">SCIENCE CENTRES</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Bring molecular biology, quantum physics, and climate systems to life through intuitive, high-resolution scientific visualization and sensory interaction.
            </p>
</div>
<div className="pt-space-md mt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary">Micro to Macro Scales</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-secondary group-hover:translate-x-1 transition-all">arrow_forward</span>
</div>
</div>
{/*  03 Galleries & Fine Art  */}
<div className="group relative rounded-2xl bg-surface-container p-space-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container-high shadow-lg">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-tertiary tracking-widest font-semibold uppercase">03 / CURATORIAL</span>
<span className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[19px]">palette</span>
</span>
</div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface pt-space-xs">GALLERIES & FINE ART</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Dynamic fulldome art exhibitions that expand classical masterworks or contemporary digital art across massive curved canvases with acoustic spatialization.
            </p>
</div>
<div className="pt-space-md mt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-tertiary">Spatial Digital Canvases</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-tertiary group-hover:translate-x-1 transition-all">arrow_forward</span>
</div>
</div>
{/*  04 Planetariums & Observatories  */}
<div className="group relative rounded-2xl bg-surface-container p-space-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container-high shadow-lg">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-widest font-semibold uppercase">04 / ASTRONOMY</span>
<span className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[19px]">all_inclusive</span>
</span>
</div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface pt-space-xs">PLANETARIUMS & OBSERVATORIES</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              True 8K digital planetarium upgrades featuring real-time astronomical datasets, star-field simulations, and cosmic journeys through verified NASA/ESA registries.
            </p>
</div>
<div className="pt-space-md mt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Real-Time Cosmic Data</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/*  IMMERSIVE EXPERIENCE SHOWCASE (Full-width cinematic section)  */}
<section className="relative w-full bg-surface-container-lowest px-margin py-space-xl overflow-hidden">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg relative z-10">
{/*  Super-headline quote  */}
<div className="text-center max-w-4xl mx-auto flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">SCALE & EMOTIONAL RESONANCE</span>
<h2 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface leading-tight tracking-tight">
          “MAKING THE UNSEEN VISIBLE, <br /><span className="text-primary italic font-headline-lg">MEMORABLE, AND IMMENSE.</span>”
        </h2>
</div>
{/*  Hero Visual Asset  */}
<div className="relative w-full rounded-2xl overflow-hidden bg-surface-container-high shadow-2xl">
<div className="relative aspect-[16/9] lg:aspect-[21/9] w-full">
<img  alt="Colossal hyper-detailed photorealistic Earth floating in cosmos with captivated audience in tiered cinema seating inside fulldome theater" className="w-full h-full object-cover" src="/images/img_7c1c45f94e59.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest/30"></div>
{/*  Ambient Dial Overlay (Architectural Component)  */}
<div className="absolute top-6 left-6 hidden md:flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest/75 backdrop-blur-md">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">public</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-semibold text-on-surface">NASA Blue Marble 8K</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Active Celestial Simulation Feed</span>
</div>
</div>
</div>
{/*  Technical Specs Bar  */}
<div className="w-full bg-surface-container-low px-space-lg py-space-md grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">videocam</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-widest">PROJECTION</span>
<span className="font-title-md text-title-md font-semibold text-on-surface">True 8K Fulldome Array</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Multi-channel laser autocalibration</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">spatial_audio_off</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-widest">AUDIO ARCHITECTURE</span>
<span className="font-title-md text-title-md font-semibold text-on-surface">Multilingual & Ambisonic Array</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Concurrent translated RF headset feeds</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">touch_app</span>
</div>
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-tertiary tracking-widest">OPERATION</span>
<span className="font-title-md text-title-md font-semibold text-on-surface">Single-Button Show Automation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Docent iPad control & queue sync</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  WHY ARORA DORM FOR MUSEUMS & INSTITUTIONS: 3 Feature Cards  */}
<section className="w-full bg-surface px-margin py-space-xl">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="max-w-2xl flex flex-col gap-space-xs">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-primary">ENGINEERED FOR PUBLIC TRUST</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Why Arora Dorm for Museums & Institutions</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          We combine museum-grade hardware reliability with cinematic production standards, eliminating the gap between research and mass public engagement.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Feature 01  */}
<div className="p-space-lg rounded-2xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest font-semibold">01 / FIDELITY</span>
<span className="material-symbols-outlined text-primary text-[24px]">science</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">SCIENTIFIC PRECISION</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Native 8K/120fps fulldome rendering with scientifically vetted astronomical, geological, and biological CGI assets reviewed alongside your institution’s scientific advisors.
            </p>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-high/60 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="">Accuracy Certification</span>
<span className="text-primary font-semibold">ISO & NASA Compliant</span>
</div>
</div>
{/*  Feature 02  */}
<div className="p-space-lg rounded-2xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest font-semibold">02 / ENDURANCE</span>
<span className="material-symbols-outlined text-secondary text-[24px]">groups</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">CONTINUOUS HIGH-THROUGHPUT</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Robust architectural domes built for heavy visitor throughput with ADA compliant accessibility, ultra-durable fire-rated acoustic interiors, and automated self-healing optical alignments.
            </p>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-high/60 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="">Operational Up-Time</span>
<span className="text-secondary font-semibold">99.98% Annual Duty Cycle</span>
</div>
</div>
{/*  Feature 03  */}
<div className="p-space-lg rounded-2xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-tertiary uppercase tracking-widest font-semibold">03 / REPERTOIRE</span>
<span className="material-symbols-outlined text-tertiary text-[24px]">movie</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">EDUCATIONAL LICENSING</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Turnkey access to an international library of award-winning STEM and cultural fulldome films with multilingual audio tracks, study guides, and modular curriculum integration.
            </p>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-high/60 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="">Global Film Catalog</span>
<span className="text-tertiary font-semibold">140+ Licensed Master Titles</span>
</div>
</div>
</div>
</div>
</section>
{/*  HORIZONTAL PROJECT FLOW PIPELINE (5 stages with connected nodes)  */}
<section className="w-full bg-surface-container-lowest px-margin py-space-xl relative">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div className="flex flex-col gap-1">
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-[0.22em]">TURNKEY METHODOLOGY</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Institutional Execution Pipeline</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">5 PHASES FROM CONCEPT TO CURATION</span>
</div>
{/*  5-Stage Process Grid  */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm relative">
{/*  Stage 01  */}
<div className="relative p-space-md rounded-2xl bg-surface-container flex flex-col gap-space-sm justify-between shadow-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm font-bold flex items-center justify-center">01</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase text-on-surface-variant">DISCOVER</span>
</div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface pt-2">Curatorial Review</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Exhibition intent analysis, visitor flow modeling, and pedagogical curriculum alignment with faculty.
            </p>
</div>
<div className="pt-space-xs text-[11px] font-label-eyebrow text-secondary uppercase tracking-widest">Weeks 1–3</div>
</div>
{/*  Stage 02  */}
<div className="relative p-space-md rounded-2xl bg-surface-container flex flex-col gap-space-sm justify-between shadow-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm font-bold flex items-center justify-center">02</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase text-on-surface-variant">DESIGN</span>
</div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface pt-2">Spatial Architecture</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Architectural sightline simulation, acoustic isolation engineering, and optical projection throw mapping.
            </p>
</div>
<div className="pt-space-xs text-[11px] font-label-eyebrow text-secondary uppercase tracking-widest">Weeks 4–7</div>
</div>
{/*  Stage 03  */}
<div className="relative p-space-md rounded-2xl bg-surface-container flex flex-col gap-space-sm justify-between shadow-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm font-bold flex items-center justify-center">03</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase text-on-surface-variant">CREATE</span>
</div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface pt-2">Content Mastery</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Scientifically validated CGI production, fulldome film licensing, and interactive real-time show programming.
            </p>
</div>
<div className="pt-space-xs text-[11px] font-label-eyebrow text-secondary uppercase tracking-widest">Weeks 8–14</div>
</div>
{/*  Stage 04  */}
<div className="relative p-space-md rounded-2xl bg-surface-container flex flex-col gap-space-sm justify-between shadow-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm font-bold flex items-center justify-center">04</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase text-on-surface-variant">INSTALL</span>
</div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface pt-2">Precision Integration</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Precision dome structural erection, laser edge blending, and master automation console programming.
            </p>
</div>
<div className="pt-space-xs text-[11px] font-label-eyebrow text-secondary uppercase tracking-widest">Weeks 15–18</div>
</div>
{/*  Stage 05  */}
<div className="relative p-space-md rounded-2xl bg-surface-container flex flex-col gap-space-sm justify-between shadow-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm font-bold flex items-center justify-center">05</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase text-on-surface-variant">EXPERIENCE</span>
</div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface pt-2">Public Launch</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Inaugural opening support, museum docent operational training, and 24/7 telemetry monitoring.
            </p>
</div>
<div className="pt-space-xs text-[11px] font-label-eyebrow text-secondary uppercase tracking-widest">Ongoing Lifecycle</div>
</div>
</div>
</div>
</section>
{/*  CROSS-INDUSTRY SUBPAGE NAVIGATION  */}
<section className="w-full bg-surface-container-high px-margin py-space-md">
<div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-md">
{/*  Previous Industry  */}
<Link className="group flex items-center gap-space-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/industries/music-nightlife">
<span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</span>
<div className="flex flex-col text-left">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-outline">PREVIOUS INDUSTRY</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">05 Music, Nightlife & Concerts</span>
</div>
</Link>
{/*  Middle Overview Link  */}
<Link className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-full bg-surface-container hover:bg-surface-container-highest text-primary font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] transition-all" href="/industries">
<span className="material-symbols-outlined text-[16px]">grid_view</span>
<span className="">EXPLORE ALL 9 INDUSTRIES</span>
</Link>
{/*  Next Industry  */}
<Link className="group flex items-center gap-space-sm text-on-surface-variant hover:text-on-surface transition-colors text-right" href="/industries/corporate-brand">
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-outline">NEXT INDUSTRY</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">07 Corporate, Retail & Brand</span>
</div>
<span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</span>
</Link>
</div>
</section>
{/*  FINAL CALL TO ACTION  */}
<section className="w-full bg-surface-container px-margin py-space-xl relative overflow-hidden">
{/*  Ambient Flare  */}
<div className="pointer-events-none absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-primary-container/15 rounded-full blur-[140px]"></div>
<div className="max-w-[1100px] mx-auto text-center flex flex-col items-center gap-space-md relative z-10">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-xs shadow-lg">
<span className="material-symbols-outlined text-[24px]">museum</span>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight leading-tight">
        Ready to Create the Experience?
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Tell us about your exhibition, museum gallery, or institution space, and let's craft an awe-inspiring educational journey that leaves visitors spellbound.
      </p>
<div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
<Link className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold transition-all hover:brightness-110 shadow-[0_0_30px_rgba(123,140,222,0.4)] aurora-btn-primary" href="/start-a-project">
<span className="">CREATE THE NEXT IMMERSIVE EXHIBITION</span>
<span className="w-6 h-6 rounded-full bg-on-primary-container/15 flex items-center justify-center">
<span className="material-symbols-outlined text-[15px]">arrow_forward</span>
</span>
</Link>
<Link className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all" href="/industries">
<span className="">EXPLORE OTHER INDUSTRIES</span>
<span className="material-symbols-outlined text-[16px] text-primary">north_east</span>
</Link>
</div>
</div>
</section>
</div></main>
    </div>
  );
}
