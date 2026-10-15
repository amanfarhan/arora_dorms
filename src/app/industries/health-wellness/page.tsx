"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-surface text-on-surface min-h-screen w-full overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <main className="w-full bg-background"><div className="flex flex-col w-full text-on-surface">
{/*  TOP CONTEXT SPEC-ID BAR  */}
<section className="w-full px-margin-mobile lg:px-margin pt-6 pb-4">
<div className="flex flex-wrap items-center justify-between gap-4 py-3 px-5 rounded-full bg-surface-container-lowest/80 backdrop-blur-xl">
<div className="flex items-center gap-2">
<Link className="font-label-eyebrow text-label-eyebrow text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase" href="/industries">Home</Link>
<span className="text-on-surface-variant/40 text-xs">/</span>
<Link className="font-label-eyebrow text-label-eyebrow text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase" href="/start-a-project">Industries</Link>
<span className="text-on-surface-variant/40 text-xs">/</span>
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-widest uppercase">Health & Wellness</span>
</div>
<div className="flex items-center gap-3">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-eyebrow text-label-eyebrow text-on-surface-variant tracking-[0.2em] uppercase">SPEC-ID: IND-04 // BIOPHILIC & SENSORY ARCHITECTURE</span>
</div>
</div>
</section>
{/*  HERO SECTION  */}
<section className="w-full px-margin-mobile lg:px-margin pt-4 pb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Narrative Column  */}
<div className="lg:col-span-6 flex flex-col gap-6">
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high/60 w-fit backdrop-blur-md">
<span className="material-symbols-outlined text-secondary text-[14px]">spa</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.22em] text-secondary">Industries / Health & Wellness</span>
</div>
<h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg tracking-tight text-on-surface">
          Create space to <span className="italic font-light text-primary">slow down.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light">
          Create calming immersive environments for meditation, sound healing, yoga, wellness retreats and sensory experiences. Surround guests with restorative natural phenomena, gentle cosmic drifts, and biophilic acoustics engineered for deep nervous system decompression.
        </p>
{/*  CTA Cluster  */}
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:brightness-110 shadow-[0_0_30px_rgba(123,140,222,0.35)] transition-all" href="#">
<span className="">CREATE YOUR WELLNESS SPACE</span>
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-on-primary-container/15">
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high/70 text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-all backdrop-blur-md" href="#">
<span className="">EXPLORE INDUSTRIES</span>
<span className="material-symbols-outlined text-[16px] text-primary">north_east</span>
</a>
</div>
{/*  Telemetry Metrics Bar  */}
<div className="grid grid-cols-3 gap-3 pt-6 mt-4">
<div className="p-4 rounded-xl bg-surface-container-lowest/60 backdrop-blur-md flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-secondary font-light">360°</span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase text-on-surface-variant">Biophilic Restoration</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-lowest/60 backdrop-blur-md flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-primary font-light">NC-15</span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase text-on-surface-variant">Ambient Acoustic Floor</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-lowest/60 backdrop-blur-md flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-tertiary font-light">0-ms</span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase text-on-surface-variant">Multi-Sensory Sync</span>
</div>
</div>
</div>
{/*  Hero Visual Column  */}
<div className="lg:col-span-6 relative mt-8 lg:mt-0">
<div className="relative w-full aspect-[4/5] max-h-[640px] rounded-3xl overflow-hidden shadow-[0_24px_64px_-12px_rgba(6,8,13,0.9)] bg-surface-container">
<img  alt="Health and wellness meditation dome experience" className="w-full h-full object-cover object-center" src="/images/img_587e11b92207.jpg" />
{/*  Atmospheric Scrim Gradients  */}
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent pointer-events-none"></div>
{/*  Live Telemetry Floating Pill  */}
<div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-xl">
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-on-surface">IMMERSIVE RUNTIME: ACTIVE</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-xl">
<span className="material-symbols-outlined text-primary text-[14px]">volume_down</span>
<span className="font-label-eyebrow text-[10px] tracking-wider text-on-surface-variant uppercase">32-CH AMBISONIC</span>
</div>
</div>
{/*  Bottom Telemetry Card  */}
<div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface-container-lowest/85 backdrop-blur-2xl">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
<span className="material-symbols-outlined text-[20px]">graphic_eq</span>
</div>
<div>
<div className="font-label-md text-label-md text-on-surface font-medium">Acoustic Baseline: NC-15 Whisper Quiet</div>
<div className="font-body-sm text-body-sm text-on-surface-variant font-light">Sub-audible HVAC integration • 32-Ch Spatial Resonance</div>
</div>
</div>
<div className="hidden sm:flex flex-col items-end">
<span className="font-label-eyebrow text-[10px] text-secondary tracking-widest uppercase">HARMONIC LOCK</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">432 Hz Tuned</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  EDITORIAL / STATEMENT SECTION  */}
<section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container-lowest relative overflow-hidden">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md">
<span className="material-symbols-outlined text-primary text-[14px]">bedtime</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.22em] text-primary">The Architecture of Calm</span>
</div>
<h2 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-on-surface">
        “Wellness, without walls.”
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light leading-relaxed">
        In an overstimulated world, true luxury is the freedom to disconnect. By pairing biophilic visuals with spatial sound and climate-controlled geodesic architecture, Arora Dorm transforms ordinary retreat spaces into serene immersive sanctuaries.
      </p>
{/*  Atmospheric Ambient Glow Underlay  */}
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
</div>
</section>
{/*  APPLICATIONS / EXPERIENCES  */}
<section className="w-full px-margin-mobile lg:px-margin py-space-xl flex flex-col gap-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.22em] text-secondary">Sensory Architectures</span>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">Applications & Experiences</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
        Every environment is tuned to dissolve cognitive load, combining geodesic physics with real-time acoustic diffusion and biophilic visuals.
      </p>
</div>
{/*  4 Interactive Luxury Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Card 01: Meditation  */}
<div className="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl flex flex-col justify-between gap-8 hover:bg-surface-container-high/70 transition-all duration-300">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow tracking-widest text-primary">01 / APPL</span>
<span className="material-symbols-outlined text-primary text-[22px] group-hover:rotate-45 transition-transform">self_improvement</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Meditation</h4>
<p className="font-body-md text-body-md text-on-surface-variant font-light">
            Sanctuary environments designed around slow-moving auroras, celestial twilight, and gentle cosmic drift to center attention and mindfulness.
          </p>
</div>
<div className="flex items-center gap-2 pt-4">
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-secondary">FREQUENCY</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Theta (4-8 Hz) Entrainment</span>
</div>
</div>
{/*  Card 02: Sound Healing  */}
<div className="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl flex flex-col justify-between gap-8 hover:bg-surface-container-high/70 transition-all duration-300">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow tracking-widest text-secondary">02 / APPL</span>
<span className="material-symbols-outlined text-secondary text-[22px] group-hover:scale-110 transition-transform">waves</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Sound Healing</h4>
<p className="font-body-md text-body-md text-on-surface-variant font-light">
            Synchronized 32-channel spatial audio environments pairing acoustic resonance with fluid generative light frequencies.
          </p>
</div>
<div className="flex items-center gap-2 pt-4">
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-secondary">SPATIAL ARRAY</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">32-Channel Ambisonic</span>
</div>
</div>
{/*  Card 03: Yoga & Movement  */}
<div className="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl flex flex-col justify-between gap-8 hover:bg-surface-container-high/70 transition-all duration-300">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow tracking-widest text-tertiary">03 / APPL</span>
<span className="material-symbols-outlined text-tertiary text-[22px] group-hover:-translate-y-1 transition-transform">all_inclusive</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Yoga & Movement</h4>
<p className="font-body-md text-body-md text-on-surface-variant font-light">
            Immersive dawn horizons, mountain mists, and breathing visual rhythms that expand spatial perception during practice.
          </p>
</div>
<div className="flex items-center gap-2 pt-4">
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-secondary">ATMOSPHERE</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Circadian Dawn Shift</span>
</div>
</div>
{/*  Card 04: Wellness Retreats  */}
<div className="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl flex flex-col justify-between gap-8 hover:bg-surface-container-high/70 transition-all duration-300">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow tracking-widest text-primary">04 / APPL</span>
<span className="material-symbols-outlined text-primary text-[22px] group-hover:scale-110 transition-transform">nature_people</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Wellness Retreats</h4>
<p className="font-body-md text-body-md text-on-surface-variant font-light">
            Turn resort spa pavilions and thermal bath sanctuaries into signature immersive wellness destinations.
          </p>
</div>
<div className="flex items-center gap-2 pt-4">
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-secondary">FOOTPRINT</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Custom Resort Geodesics</span>
</div>
</div>
</div>
</section>
{/*  WHY ARORA DORM FOR HEALTH & WELLNESS  */}
<section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container-low">
<div className="flex flex-col gap-10">
<div className="flex flex-col max-w-2xl gap-2">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.22em] text-primary">Precision Engineering</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface">Why Arora Dorm for Health & Wellness</h3>
<p className="font-body-md text-body-md text-on-surface-variant font-light">
          Unlike standard projection spaces, our biophilic sanctuaries integrate psychoacoustic dampening, thermal tranquility, and zero-distraction projection systems.
        </p>
</div>
{/*  3 Luxury Feature Cards  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Feature 01  */}
<div className="p-8 rounded-2xl bg-surface-container/80 backdrop-blur-xl flex flex-col justify-between gap-6 hover:bg-surface-container-high/80 transition-all">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[26px]">hearing</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-on-surface-variant">01 / ACOUSTIC PURITY</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">NC-15 Noise Criteria Baseline</h4>
<p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Dome infrastructure engineered to NC-15 sound thresholds with silent sub-floor HVAC and micro-perforated sound baffles that eliminate room flutter and external intrusion.
            </p>
</div>
<div className="flex items-center gap-3 pt-4">
<span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase text-on-surface-variant">Acoustic Isolation Index: 52 dB STC</span>
</div>
</div>
{/*  Feature 02  */}
<div className="p-8 rounded-2xl bg-surface-container/80 backdrop-blur-xl flex flex-col justify-between gap-6 hover:bg-surface-container-high/80 transition-all">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">filter_vintage</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-on-surface-variant">02 / RESTORATIVE WORLDS</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Curated Restorative Library</h4>
<p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Immersive content library calibrated for sensory decompression—photorealistic nature, alpine dusk, celestial horizons, and slow auroral drift running at native 8K resolution.
            </p>
</div>
<div className="flex items-center gap-3 pt-4">
<span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase text-on-surface-variant">Master Format: 8K 60FPS Dome-Master</span>
</div>
</div>
{/*  Feature 03  */}
<div className="p-8 rounded-2xl bg-surface-container/80 backdrop-blur-xl flex flex-col justify-between gap-6 hover:bg-surface-container-high/80 transition-all">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[26px]">tablet_mac</span>
</div>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-on-surface-variant">03 / SANCTUARY CONTROL</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Master Tablet Interface</h4>
<p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Technical support and intuitive touch consoles allowing spa directors to adjust soundscapes, scent diffusers, and lighting presets seamlessly without technical overhead.
            </p>
</div>
<div className="flex items-center gap-3 pt-4">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase text-on-surface-variant">1-Touch Scene Shift • Aromatherapy Sync</span>
</div>
</div>
</div>
</div>
</section>
{/*  IMMERSIVE EXPERIENCE SHOWCASE (Full-width cinematic section)  */}
<section className="w-full px-margin-mobile lg:px-margin py-space-xl relative">
<div className="relative w-full rounded-3xl overflow-hidden bg-surface-container-lowest shadow-[0_32px_96px_-16px_rgba(6,8,13,0.95)]">
{/*  Full Bleed Image Showcase  */}
<div className="relative w-full h-[520px] lg:h-[620px]">
<img  alt="Luminous geodesic dome pavilion reflecting over calm mountain lake under aurora borealis" className="w-full h-full object-cover object-center" src="/images/img_1059dc147612.jpg" />
{/*  Deep Cinematic Vignette Scrims  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
<div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/70"></div>
</div>
{/*  Super Headline Overlaid on Image Base  */}
<div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12 z-10 pointer-events-none">
<div className="max-w-3xl flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md w-fit pointer-events-auto">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-secondary">ARCHITECTURAL PRESENCE</span>
</div>
<h2 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-white font-normal drop-shadow-md">
            “Don’t just show serenity. <span className="italic font-light text-secondary">Surround the body</span> with it.”
          </h2>
</div>
</div>
{/*  Technical Specs Bar  */}
<div className="w-full bg-surface-container-high/90 backdrop-blur-xl p-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[24px]">videocam</span>
<div>
<div className="font-label-eyebrow text-[10px] uppercase tracking-wider text-on-surface-variant">Projection Core</div>
<div className="font-title-md text-title-md text-on-surface">Cinema-Grade Silent Laser</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]">view_in_ar</span>
<div>
<div className="font-label-eyebrow text-[10px] uppercase tracking-wider text-on-surface-variant">Curvature Spec</div>
<div className="font-title-md text-title-md text-on-surface">180° to 360° Geodesic Shell</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-[24px]">air</span>
<div>
<div className="font-label-eyebrow text-[10px] uppercase tracking-wider text-on-surface-variant">Acoustic Floor</div>
<div className="font-title-md text-title-md text-on-surface">Ultra-Quiet Micro-Louver HVAC</div>
</div>
</div>
</div>
</div>
</section>
{/*  HORIZONTAL PROJECT FLOW PIPELINE  */}
<section className="w-full px-margin-mobile lg:px-margin py-space-xl flex flex-col gap-10">
<div className="flex flex-col gap-2">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.22em] text-secondary">Methodology</span>
<h3 className="font-headline-md text-headline-md text-on-surface">The Wellness Pipeline</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl font-light">
        A turnkey architectural trajectory ensuring acoustic sanctity, seamless structural integration, and continuous sensory precision.
      </p>
</div>
{/*  5 Horizontal Connected Stage Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
{/*  Stage 01  */}
<div className="p-6 rounded-2xl bg-surface-container/70 backdrop-blur-md flex flex-col justify-between gap-6 hover:bg-surface-container-high transition-all">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary font-light">01</span>
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-on-surface-variant">PHASE</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">Discover</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            Sanctuary site survey, acoustic isolation modeling & sensory narrative scoping.
          </p>
</div>
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[16px]">sensors</span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase">Baseline Audit</span>
</div>
</div>
{/*  Stage 02  */}
<div className="p-6 rounded-2xl bg-surface-container/70 backdrop-blur-md flex flex-col justify-between gap-6 hover:bg-surface-container-high transition-all">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary font-light">02</span>
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-on-surface-variant">PHASE</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">Design</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            Geodesic structural geometry, concealed HVAC sightlines & spatialized speaker placement.
          </p>
</div>
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[16px]">architecture</span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase">Parametric CAD</span>
</div>
</div>
{/*  Stage 03  */}
<div className="p-6 rounded-2xl bg-surface-container/70 backdrop-blur-md flex flex-col justify-between gap-6 hover:bg-surface-container-high transition-all">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary font-light">03</span>
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-on-surface-variant">PHASE</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">Create</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            Curated biophilic visual curation, 32-channel audio mastering & multi-sensory sync.
          </p>
</div>
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-[16px]">palette</span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase">8K Composition</span>
</div>
</div>
{/*  Stage 04  */}
<div className="p-6 rounded-2xl bg-surface-container/70 backdrop-blur-md flex flex-col justify-between gap-6 hover:bg-surface-container-high transition-all">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary font-light">04</span>
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-on-surface-variant">PHASE</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">Install</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            Whisper-quiet dome erection, optical alignment & master tablet control calibration.
          </p>
</div>
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[16px]">construction</span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase">Precision Fit</span>
</div>
</div>
{/*  Stage 05  */}
<div className="p-6 rounded-2xl bg-surface-container/70 backdrop-blur-md flex flex-col justify-between gap-6 hover:bg-surface-container-high transition-all">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary font-light">05</span>
<span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-on-surface-variant">PHASE</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">Experience</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            Seamless spa handover, staff training & continuous 24/7 technical continuity.
          </p>
</div>
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="font-label-eyebrow text-[10px] tracking-wider uppercase">24/7 Continuity</span>
</div>
</div>
</div>
</section>
{/*  CROSS-INDUSTRY SUBPAGE NAVIGATION  */}
<section className="w-full px-margin-mobile lg:px-margin py-8">
<div className="p-4 lg:p-6 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
{/*  Previous Industry  */}
<a className="group flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors" href="#">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
</span>
<div className="flex flex-col text-left">
<span className="font-label-eyebrow text-[10px] uppercase tracking-wider text-on-surface-variant/70">Previous Industry</span>
<span className="font-label-md text-label-md text-on-surface font-medium">03 Hospitality & Immersive Dining</span>
</div>
</a>
{/*  Center Hub  */}
<a className="px-5 py-2 rounded-full bg-surface-container-high/80 text-primary hover:bg-surface-container-highest transition-all font-label-eyebrow text-[11px] tracking-[0.2em] uppercase" href="#">
        Explore All 9 Industries
      </a>
{/*  Next Industry  */}
<a className="group flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors" href="#">
<div className="flex flex-col text-right">
<span className="font-label-eyebrow text-[10px] uppercase tracking-wider text-on-surface-variant/70">Next Industry</span>
<span className="font-label-md text-label-md text-on-surface font-medium">05 Music, Nightlife & Concerts</span>
</div>
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</a>
</div>
</section>
{/*  FINAL CTA SECTION  */}
<section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-gradient-to-b from-background via-surface-container-lowest to-surface-container-lowest relative overflow-hidden">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.22em] text-primary">Initiate Commission</span>
</div>
<h2 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight">
        Ready to Create the Experience?
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light">
        Tell us about your spa, retreat, or wellness destination, and the restorative world you want to build.
      </p>
<div className="flex flex-wrap items-center justify-center gap-4 pt-4">
<a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:brightness-110 shadow-[0_0_36px_rgba(123,140,222,0.4)] transition-all" href="#">
<span className="">CREATE YOUR WELLNESS SPACE</span>
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-on-primary-container/20">
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-surface-container-high/70 text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-all backdrop-blur-md" href="#">
<span className="">EXPLORE OTHER INDUSTRIES</span>
<span className="material-symbols-outlined text-[16px] text-primary">north_east</span>
</a>
</div>
</div>
{/*  Chromatic Ambient Halo  */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none"></div>
</section>
</div></main>
    </div>
  );
}
