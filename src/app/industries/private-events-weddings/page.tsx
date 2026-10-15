"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full text-on-surface">
{/*  TOP BREADCRUMB & TELEMETRY SPEC HEADER  */}
<section className="w-full bg-surface-container-lowest/90 px-margin-mobile md:px-margin py-space-sm">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-xs text-outline">
<div className="flex items-center gap-2 font-label-eyebrow text-label-eyebrow tracking-[0.2em] uppercase">
<a className="hover:text-primary transition-colors" data-path="home" href="#">HOME</a>
<span className="text-surface-container-highest">/</span>
<a className="hover:text-primary transition-colors" data-path="industries" href="#">INDUSTRIES</a>
<span className="text-surface-container-highest">/</span>
<span className="text-secondary font-semibold">09 PRIVATE EVENTS & WEDDINGS</span>
</div>
<div className="flex items-center gap-space-sm font-label-eyebrow text-label-eyebrow text-on-surface-variant">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
<span className="tracking-[0.16em]">SPEC-ID: IND-09 // BESPOKE CELEBRATION & COUTURE ARCHITECTURE</span>
</div>
</div>
</section>
{/*  SECTION 01: HERO SECTION  */}
<section className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl md:py-space-xl">
{/*  Ambient Radial Glow Backdrop  */}
<div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px] pointer-events-none"></div>
<div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Left: Copy & Actions  */}
<div className="lg:col-span-6 flex flex-col items-start space-y-space-md z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-[0.2em]">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
<span className="">INDUSTRIES / PRIVATE EVENTS & WEDDINGS</span>
</div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-[1.08] tracking-tight">
            YOUR STORY.<br />
<span className="italic font-normal text-primary-fixed-dim">YOUR WORLD.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Create completely personalized, awe-inspiring immersive environments for luxury weddings, milestones, and private galas. Wrap guests in starlit skies, bespoke visual narratives, and enchanting architectural beauty.
          </p>
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<a className="inline-flex items-center gap-space-sm px-space-md py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all duration-300 hover:shadow-[0_0_28px_rgba(123,140,222,0.45)] group" data-path="start-a-project" href="#">
<span className="">CREATE YOUR PRIVATE EXPERIENCE</span>
<span className="w-6 h-6 rounded-full bg-surface-container-lowest/20 flex items-center justify-center text-on-primary group-hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined text-[15px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-surface-container/60 hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-all" data-path="industries" href="#">
<span className="">EXPLORE INDUSTRIES</span>
</a>
</div>
{/*  Live Telemetry Readouts  */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm w-full pt-space-sm">
<div className="p-space-sm rounded-xl bg-surface-container/70 backdrop-blur-md">
<span className="block font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.15em]">BESPOKE NARRATIVE</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant mt-1">Custom couple & host storyline CGI</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container/70 backdrop-blur-md">
<span className="block font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.15em]">CLIMATE-CONTROLLED</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant mt-1">Whisper-quiet acoustic HVAC</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container/70 backdrop-blur-md">
<span className="block font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.15em]">RAPID ESTATE SETUP</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant mt-1">Turnkey lawn, terrace & estate erection</span>
</div>
</div>
</div>
{/*  Right: Photographic Dome Canvas Showcase  */}
<div className="lg:col-span-6 relative mt-space-md lg:mt-0">
<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-low group">
<img  alt="Luxury wedding reception staged inside a luminous Arora Dorm geodesic structure at night with candlelit dining tables and celestial starlight canopy" className="w-full h-[520px] md:h-[620px] object-cover transition-transform duration-700 group-hover:scale-105" src="/images/img_9a0e34e507d0.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80"></div>
{/*  In-situ Architectural Indicator Badge  */}
<div className="absolute bottom-5 left-5 right-5 p-space-sm rounded-xl bg-surface-container-lowest/80 backdrop-blur-xl flex items-center justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.18em] block">CHÂTEAU DE L'ASTRE // NORMANDY</span>
<span className="font-title-md text-body-md text-on-surface font-medium">Bespoke 24m Celestial Wedding Pavilion</span>
</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="">Active Spec</span>
</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 02: EDITORIAL MANIFESTO  */}
<section className="w-full py-space-xl bg-surface-container-low relative">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em] mb-space-sm">PHILOSOPHY OF OCCASION</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight tracking-tight mb-space-md">
          “MAKE THE MOMENT FEEL LIKE ANOTHER WORLD.”
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-space-lg">
          Standard banquet halls and event tents impose boundaries. Arora Dorm transforms luxury celebrations into celestial wonderlands, Mediterranean twilight villas, or luminous enchanted gardens that evolve as the evening unfolds.
        </p>
{/*  Dynamic Architectural Telemetry Pills  */}
<div className="flex flex-wrap justify-center gap-space-sm">
<div className="inline-flex items-center gap-2 px-space-md py-2 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md tracking-wider">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="">MEMORABILITY UNRIVALED</span>
</div>
<div className="inline-flex items-center gap-2 px-space-md py-2 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md tracking-wider">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="">BESPOKE TIMELINE SYNCHRONIZATION</span>
</div>
<div className="inline-flex items-center gap-2 px-space-md py-2 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md tracking-wider">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="">SEAMLESS DAY-TO-NIGHT TRANSITIONS</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 03: APPLICATION MATRIX  */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.2em] block mb-1">OCCASION TYPOLOGIES</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Curated Spatial Experiences</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Engineered to adapt dynamically across sacred ceremonies, intimate receptions, and monumental private galas.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Card 01  */}
<div className="group flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-widest">01 // MATRIMONIAL</span>
<span className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">LUXURY WEDDINGS</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Exchange vows beneath an intimate aurora borealis or dine beneath revolving constellations custom-mapped to your story.
            </p>
</div>
<div className="pt-space-md flex items-center text-primary font-label-md text-label-md group-hover:translate-x-1 transition-transform">
<span className="">Explore Matrimonial Specs</span>
<span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
</div>
</div>
{/*  Card 02  */}
<div className="group flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-widest">02 // JUBILEES</span>
<span className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">celebration</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">MILESTONE CELEBRATIONS</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Celebrate anniversaries, galas, and momentous birthdays within an extraordinary private pavilion designed for high-altitude drama.
            </p>
</div>
<div className="pt-space-md flex items-center text-secondary font-label-md text-label-md group-hover:translate-x-1 transition-transform">
<span className="">Explore Milestone Specs</span>
<span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
</div>
</div>
{/*  Card 03  */}
<div className="group flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-tertiary tracking-widest">03 // GASTRONOMY</span>
<span className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">restaurant</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">THEMED PRIVATE BANQUETS</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Multi-course dinners synchronized with shifting visual worlds, taking guests from deep ocean reefs to alpine peaks.
            </p>
</div>
<div className="pt-space-md flex items-center text-tertiary font-label-md text-label-md group-hover:translate-x-1 transition-transform">
<span className="">Explore Banquet Specs</span>
<span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
</div>
</div>
{/*  Card 04  */}
<div className="group flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-widest">04 // PRIVATE REALM</span>
<span className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">villa</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">VIP ESTATE GATHERINGS</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Temporary or semi-permanent architectural domes erected on private estates, beachfronts, or mountaintops without site disruption.
            </p>
</div>
<div className="pt-space-md flex items-center text-primary font-label-md text-label-md group-hover:translate-x-1 transition-transform">
<span className="">Explore Estate Specs</span>
<span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 04: WHY ARORA DORM FOR PRIVATE EVENTS  */}
<section className="w-full py-space-xl bg-surface-container-lowest">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="max-w-2xl mb-space-xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.2em] block mb-1">TECHNICAL SOPHISTICATION</span>
<h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">Why Arora Dorm for Private Events</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Column 1  */}
<div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col justify-between">
<div>
<span className="font-headline-sm text-primary text-title-md font-bold mb-space-sm block">01 / CREATIVE DIRECTION</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">BESPOKE WORLD-BUILDING</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our CGI directors and artists produce tailored animations, photo-memorials, and artistic themes unique to each client. From personal star charts of your meeting date to fantasy landscapes.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-2 font-label-sm text-label-sm text-outline">
<span className="material-symbols-outlined text-[16px] text-primary">draw</span>
<span className="">Personalized CGI storyboards included</span>
</div>
</div>
{/*  Column 2  */}
<div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col justify-between">
<div>
<span className="font-headline-sm text-secondary text-title-md font-bold mb-space-sm block">02 / ARCHITECTURAL ELEGANCE</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">DISCREET ARCHITECTURAL INTEGRATION</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Concealed wiring, silent micro-louver ventilation, custom floor treatments, and couture drape liners. No exposed trusses or industrial rigging disrupts your wedding aesthetics.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-2 font-label-sm text-label-sm text-outline">
<span className="material-symbols-outlined text-[16px] text-secondary">visibility_off</span>
<span className="">Zero visible cable clutter guarantee</span>
</div>
</div>
{/*  Column 3  */}
<div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col justify-between">
<div>
<span className="font-headline-sm text-tertiary text-title-md font-bold mb-space-sm block">03 / CONCIERGE PRECISION</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">WHITE-GLOVE PRODUCTION CREW</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              On-site technical director, lighting master, and audio engineer ensuring flawless event flow from arrival to send-off. Live cue changes synchronized to music, speeches, and dinner pacing.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-2 font-label-sm text-label-sm text-outline">
<span className="material-symbols-outlined text-[16px] text-tertiary">supervised_user_circle</span>
<span className="">Dedicated mission control team on-site</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 05: IMMERSIVE SHOWCASE (Full-width editorial visual & manifesto)  */}
<section className="relative w-full py-28 md:py-36 overflow-hidden bg-surface-container-lowest">
{/*  Atmospheric Visual Background Overlay  */}
<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen scale-105" data-alt="Glowing illuminated geodesic glass dome pavilion situated before mountains and pine forest under aurora borealis reflecting across calm lake water" style={{"backgroundImage":"url(&quot"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-surface-container-lowest"></div>
<div className="relative max-w-[1440px] mx-auto px-margin-mobile md:px-margin z-10 text-center">
<div className="max-w-3xl mx-auto flex flex-col items-center">
<span className="w-12 h-1 bg-secondary mb-space-md rounded-full"></span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight tracking-tight mb-space-md">
          “AN UNFORGETTABLE SETTING FOR YOUR MOST CHERISHED MEMORIES.”
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Designed for high-net-worth celebrations requiring uncompromising visual discretion, beauty, and emotional resonance.
        </p>
<div className="mt-space-lg flex items-center gap-space-lg">
<div className="text-left">
<span className="font-headline-sm text-headline-sm text-primary block">360°</span>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Perceptual Wrap</span>
</div>
<div className="w-px h-10 bg-surface-container-highest"></div>
<div className="text-left">
<span className="font-headline-sm text-headline-sm text-secondary block">&lt; 28 dB</span>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Silent Acoustic Floor</span>
</div>
<div className="w-px h-10 bg-surface-container-highest"></div>
<div className="text-left">
<span className="font-headline-sm text-headline-sm text-tertiary block">100%</span>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Weather Shielded</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 06: PROJECT FLOW PIPELINE  */}
<section className="w-full py-space-xl bg-surface-container">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="mb-space-lg">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.2em] block mb-1">SEAMLESS DELIVERY</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Event Commissioning Pipeline</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative">
{/*  Step 1  */}
<div className="p-space-md rounded-2xl bg-surface-container-high/90 flex flex-col justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-widest block mb-2">PHASE 01</span>
<h4 className="font-headline-sm text-title-md text-on-surface mb-2">DISCOVER</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Vision consultation, bespoke theme curation, and estate site topography assessment.
            </p>
</div>
<div className="mt-4 flex items-center text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] mr-1">search</span>
<span className="">Week 1–2</span>
</div>
</div>
{/*  Step 2  */}
<div className="p-space-md rounded-2xl bg-surface-container-high/90 flex flex-col justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-widest block mb-2">PHASE 02</span>
<h4 className="font-headline-sm text-title-md text-on-surface mb-2">DESIGN</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              3D spatial rendering, structural dome sizing, and acoustic & lighting ray-tracing simulation.
            </p>
</div>
<div className="mt-4 flex items-center text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] mr-1">architecture</span>
<span className="">Week 3–4</span>
</div>
</div>
{/*  Step 3  */}
<div className="p-space-md rounded-2xl bg-surface-container-high/90 flex flex-col justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-tertiary tracking-widest block mb-2">PHASE 03</span>
<h4 className="font-headline-sm text-title-md text-on-surface mb-2">CREATE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Bespoke visual world CGI curation, musical playlist synchronization, and virtual rehearsal review.
            </p>
</div>
<div className="mt-4 flex items-center text-tertiary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] mr-1">movie</span>
<span className="">Week 5–8</span>
</div>
</div>
{/*  Step 4  */}
<div className="p-space-md rounded-2xl bg-surface-container-high/90 flex flex-col justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-widest block mb-2">PHASE 04</span>
<h4 className="font-headline-sm text-title-md text-on-surface mb-2">INSTALL</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Precision dome erection on grounds, interior staging, and concealed technological integration.
            </p>
</div>
<div className="mt-4 flex items-center text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] mr-1">build</span>
<span className="">48h Pre-Event</span>
</div>
</div>
{/*  Step 5  */}
<div className="p-space-md rounded-2xl bg-surface-container-high/90 flex flex-col justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-widest block mb-2">PHASE 05</span>
<h4 className="font-headline-sm text-title-md text-on-surface mb-2">EXPERIENCE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Flawless celebration execution, live scene transitions, and discreet, non-invasive strike.
            </p>
</div>
<div className="mt-4 flex items-center text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] mr-1">stars</span>
<span className="">Event Night</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 07: SUBPAGE TRAVERSAL NAVIGATION  */}
<section className="w-full py-space-lg bg-surface-container-low">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md text-center sm:text-left">
{/*  Previous Industry Link  */}
<a className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors group" data-path="industries" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
<div className="text-left">
<span className="block font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-wider">PREVIOUS INDUSTRY</span>
<span className="font-title-md text-body-md font-semibold text-on-surface">08 Education & Planetariums</span>
</div>
</a>
{/*  Directory Link  */}
<a className="px-space-md py-2 rounded-full bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md tracking-wider transition-colors" data-path="industries" href="#">
          EXPLORE ALL 9 INDUSTRIES
        </a>
{/*  Next Industry Link  */}
<a className="flex items-center gap-space-xs text-on-surface-variant hover:text-secondary transition-colors group" data-path="industries" href="#">
<div className="text-right">
<span className="block font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-wider">NEXT INDUSTRY</span>
<span className="font-title-md text-body-md font-semibold text-on-surface">01 Entertainment & Tourism</span>
</div>
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</section>
{/*  SECTION 08: FINAL CALL TO ACTION  */}
<section className="w-full py-space-xl bg-surface relative overflow-hidden">
{/*  Ambient Flare  */}
<div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="p-space-lg md:p-space-xl rounded-3xl bg-surface-container-lowest text-center relative z-10 flex flex-col items-center">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em] mb-space-xs">INITIATE CONSULTATION</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-space-sm max-w-2xl">
          Ready to Create the Experience?
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-space-lg leading-relaxed">
          Tell us about your celebration, wedding, or private gathering, and our creative directors will craft a tailored spatial concept within 48 hours.
        </p>
<div className="flex flex-wrap items-center justify-center gap-space-sm">
<a className="inline-flex items-center gap-space-sm px-space-md py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(123,140,222,0.4)] group" data-path="start-a-project" href="#">
<span className="">CREATE YOUR PRIVATE EXPERIENCE</span>
<span className="w-6 h-6 rounded-full bg-surface-container-lowest/20 flex items-center justify-center text-on-primary group-hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined text-[15px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center px-space-md py-3 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md font-medium transition-all" data-path="industries" href="#">
<span className="">EXPLORE OTHER INDUSTRIES</span>
</a>
</div>
<div className="mt-space-lg flex items-center gap-space-md text-outline font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">security</span>
            Strict NDA Confidentiality
          </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">public</span>
            Worldwide Estate Deployment
          </span>
</div>
</div>
</div>
</section>
</div></main>
    </div>
  );
}
