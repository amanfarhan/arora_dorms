"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      <main className="w-full pt-20 bg-background"><div className="flex flex-col w-full">
{/*  Dynamic Atmospheric Underlay Scrim  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-primary-container/20 via-secondary-container/10 to-transparent blur-[140px] pointer-events-none -z-10"></div>
{/*  1. Breadcrumb Bar  */}
<div className="w-full px-margin pt-space-md pb-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<a className="hover:text-primary transition-colors" data-path="home" href="#">Home</a>
<span className="text-outline-variant font-light">/</span>
<a className="hover:text-primary transition-colors" data-path="industries" href="#">Industries</a>
<span className="text-outline-variant font-light">/</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/15 text-primary border-none shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
          Hospitality & Immersive Dining
        </span>
</div>
<div className="hidden md:flex items-center gap-space-sm text-outline font-label-eyebrow text-label-eyebrow uppercase tracking-[0.25em]">
<span className="">Vertical : 03 // F&B Spatial Spec</span>
</div>
</div>
{/*  2. Hero Section  */}
<section className="w-full px-margin pt-space-md pb-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-6 flex flex-col gap-space-md z-10">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">restaurant</span>
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.22em]">
            Industries / Hospitality & Immersive Dining
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface leading-[1.08] tracking-tight">
          TURN DINNER INTO A <span className="italic text-primary font-headline-md font-light">DESTINATION.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light">
          Transform hotels, resorts and restaurants through 360° immersive environments and themed dining experiences. Merge Michelin-caliber culinary artistry with synchronised ambient visual worlds that adapt to every course.
        </p>
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold transition-all hover:brightness-110 shadow-lg group" data-path="start-a-project" href="#">
<span className="">Create Your Immersive Dining Experience</span>
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-all shadow-sm" data-path="industries" href="#">
<span className="">Explore Industries</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">north_east</span>
</a>
</div>
{/*  Metric Badges Row  */}
<div className="grid grid-cols-3 gap-space-sm pt-space-md max-w-lg">
<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="block font-headline-sm text-headline-sm text-primary">+240%</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">RevPASH Multiplier</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="block font-headline-sm text-headline-sm text-secondary">360°</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Course Synced Visuals</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="block font-headline-sm text-headline-sm text-tertiary">0.02s</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Course Sync Latency</span>
</div>
</div>
</div>
{/*  Hero Visual Card with High-Impact Imagery  */}
<div className="lg:col-span-6 relative">
<div className="relative w-full aspect-[4/5] max-h-[640px] rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest">
<img  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out" data-alt="Ultra-luxury private dining dome with opulent round banquet table set with fine crystal wine glasses and warm glowing candlelight. Overhead, a soaring geodesic projection ceiling displays an ethereal, luminescent 360-degree deep ocean coral realm with bioluminescent floating jellyfish and cosmic swirls in cyan, violet, and deep indigo tones, creating a magical fine dining atmosphere." src="/images/img_76bea82dba30.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
{/*  Translucent Floating Status Card  */}
<div className="absolute bottom-6 left-6 right-6 p-space-md rounded-2xl bg-surface-container/85 backdrop-blur-xl shadow-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">room_service</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Course III : Bioluminescence</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Live Synchronized Oceanic Dome Atmosphere</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-secondary-fixed text-label-sm font-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
<span className="">8K Realtime</span>
</div>
</div>
</div>
</div>
</section>
</div>
{/*  3. Industry Editorial Statement  */}
<section className="w-full px-margin py-space-xl bg-surface-container-lowest relative overflow-hidden">
<div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-space-md relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest">
<span className="material-symbols-outlined text-[15px]">auto_stories</span>
<span className="">The Gastronomic Architecture</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface leading-[1.2]">
        “THE MENU TELLS ONE STORY.<br />
<span className="italic text-primary font-light">THE DOME SURROUNDS IT.”</span>
</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl font-light">Dining becomes theatre. By pairing gastronomic timing with subtle visual choreography—from bioluminescent reefs to twilight alpine peaks—Arora turns regular venue seating into premium destination dining with unprecedented revPASH.</p>
{/*  Monoline Atmospheric Parameter Slider Widget  */}
<div className="w-full max-w-2xl mt-space-md p-space-md rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-sm text-left">
<div className="flex justify-between items-center text-on-surface">
<span className="font-label-md text-label-md text-on-surface">Atmospheric Transition Cue Engine</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">SCENE 04 / 07 : ABYSSAL DEEP</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden relative">
<div className="bg-gradient-to-r from-primary-container via-secondary to-tertiary-container h-full w-[68%] rounded-full"></div>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="">01 Entrée (Alpine Mist)</span>
<span className="text-secondary font-medium">02 Main (Deep Trench)</span>
<span className="">03 Dessert (Stellar Drift)</span>
</div>
</div>
</div>
</section>
{/*  4. Applications & Experiences Grid  */}
<section className="w-full px-margin py-space-xl bg-surface">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div className="flex flex-col gap-space-xs max-w-xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.2em]">Deployment Models</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Precision Architectural Applications</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        Designed for seamless integration into high-velocity hospitality operations, with frictionless guest turnaround and certified acoustic isolation.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Card 01  */}
<div className="group bg-surface-container-low p-space-lg rounded-3xl flex flex-col justify-between hover:bg-surface-container transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-primary tracking-widest">01 — GUEST EXPERIENCE</span>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-[22px]">auto_awesome</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface">IMMERSIVE DINING</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
            Surround guests with multi-sensory environments that evolve in sync with each course of a chef's tasting menu.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-primary font-label-md text-label-md">
<span className="">Explore Tasting Flow</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 02  */}
<div className="group bg-surface-container-low p-space-lg rounded-3xl flex flex-col justify-between hover:bg-surface-container transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-widest">02 — ARCHITECTURE</span>
<span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors text-[22px]">domain</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface">HOTEL EXPERIENCES</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
            Create distinctive, revenue-generating immersive lounges, atrium features, and rooftop dome pavilions within luxury hotels.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-secondary font-label-md text-label-md">
<span className="">View Hotel Specs</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 03  */}
<div className="group bg-surface-container-low p-space-lg rounded-3xl flex flex-col justify-between hover:bg-surface-container transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-tertiary tracking-widest">03 — DESTINATION</span>
<span className="material-symbols-outlined text-outline-variant group-hover:text-tertiary transition-colors text-[22px]">villa</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface">RESORT DESTINATIONS</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
            Add signature permanent or seasonal immersive dome attractions to luxury island and alpine resort properties.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-tertiary font-label-md text-label-md">
<span className="">Resort Pavilions</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 04  */}
<div className="group bg-surface-container-low p-space-lg rounded-3xl flex flex-col justify-between hover:bg-surface-container transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-eyebrow text-label-eyebrow text-primary-fixed-dim tracking-widest">04 — PROGRAMMING</span>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors text-[22px]">theater_comedy</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface">THEMED EXPERIENCES</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
            Curate dynamic content libraries that switch seamlessly between holiday galas, wine pairings, and private VIP bookings.
          </p>
</div>
<div className="pt-space-lg flex items-center justify-between text-primary-fixed-dim font-label-md text-label-md">
<span className="">Catalog Modules</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</section>
{/*  5. Why Aurora For Hospitality & Immersive Dining  */}
<section className="w-full px-margin py-space-xl bg-surface-container-lowest">
<div className="flex flex-col gap-space-xs mb-space-lg">
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-[0.2em]">Engineering Integrity</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Why Arora Dorm for Hospitality Environments</h3>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Matrix Item 1  */}
<div className="bg-surface-container-low p-space-lg rounded-3xl flex flex-col gap-space-md shadow-sm">
<div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">hvac</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">CUSTOM DOME ENVIRONMENTS</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Whisper-quiet climate control engineered under NC-20 threshold limits. Dual-layer sound isolation baffling, completely concealed recessed projection bays, and luxury architectural finishes tuned for pristine hospitality aesthetic.
        </p>
<ul className="flex flex-col gap-2 mt-auto pt-space-sm text-on-surface-variant font-body-sm text-body-sm">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
            Sub-20 dBA acoustic floor
          </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
            Concealed micro-louver vents
          </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
            Flammability rated textiles
          </li>
</ul>
</div>
{/*  Matrix Item 2  */}
<div className="bg-surface-container-low p-space-lg rounded-3xl flex flex-col gap-space-md shadow-sm">
<div className="w-12 h-12 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[26px]">video_library</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">BESPOKE & SEASONAL CONTENT</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Ultra-high-resolution 8K uncompressed CGI environments and photogrammetric natural phenomena journeys. Flexible course-by-course timeline triggers allow chefs to pace the visual narrative perfectly with wine and plate service.
        </p>
<ul className="flex flex-col gap-2 mt-auto pt-space-sm text-on-surface-variant font-body-sm text-body-sm">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
            Uncompressed 10-bit color depth
          </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
            Custom Sommelier cue mapping
          </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
            Seasonal content rotation licenses
          </li>
</ul>
</div>
{/*  Matrix Item 3  */}
<div className="bg-surface-container-low p-space-lg rounded-3xl flex flex-col gap-space-md shadow-sm">
<div className="w-12 h-12 rounded-2xl bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[26px]">tablet_mac</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">HOSPITALITY SUPPORT</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Intuitive tablet-based server interfaces designed for immediate maître d' and sommelier overrides. Seamless architectural integration with ambient table lighting, multi-channel spatial audio, and continuous 24/7 technical surveillance.
        </p>
<ul className="flex flex-col gap-2 mt-auto pt-space-sm text-on-surface-variant font-body-sm text-body-sm">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
            One-touch iPad service console
          </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
            DMX & ArtNet lighting integration
          </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
            Zero-downtime redundancy failover
          </li>
</ul>
</div>
</div>
</section>
{/*  6. Immersive Visual Section (Panoramic Luxury Showcase)  */}
<section className="w-full px-margin py-space-xl bg-surface relative">
<div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest min-h-[560px] flex items-end">
<img  className="absolute inset-0 w-full h-full object-cover" data-alt="An expansive panoramic luxury wedding gala banquet situated within an enormous geodesic dome with botanical garlands of white flowers and twinkling fairy lights. Beneath a breathtaking nighttime starlit cosmic projection sky, elegantly dressed dinner guests converse around circular candlelit banquet tables, with dancers swaying on a luminous dance floor." src="/images/img_00db3af8e1c8.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
<div className="relative z-10 p-space-lg lg:p-space-xl max-w-3xl flex flex-col gap-space-sm">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.25em]">Atmospheric Horizon</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface italic font-light leading-snug">
          “AN INTIMATE ATMOSPHERE WRAPPED IN A LIMITLESS WORLD.”
        </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
          Geodesic pavilions adapt instantly from Michelin-starred 12-seat private chef experiences to 300-guest starlit celebration galas, with acoustic and visual fidelity engineered to absolute perfection.
        </p>
</div>
</div>
</section>
{/*  7. Project Flow (Horizontal Minimal Timeline)  */}
<section className="w-full px-margin py-space-xl bg-surface-container-lowest">
<div className="flex flex-col items-center text-center gap-space-xs mb-space-xl">
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-[0.2em]">Deployment Path</span>
<h3 className="font-headline-md text-headline-md text-on-surface">From Culinary Vision to Operational Reality</h3>
</div>
{/*  Timeline Sequence  */}
<div className="relative w-full max-w-5xl mx-auto">
{/*  Glow Line Underlay  */}
<div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-primary-container via-secondary-container to-tertiary-container opacity-40"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative z-10">
{/*  Step 1  */}
<div className="flex flex-col items-center text-center gap-space-xs">
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-md">
<span className="material-symbols-outlined text-[22px]">explore</span>
</div>
<span className="font-title-md text-title-md text-on-surface mt-2">01 DISCOVER</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Site assessment, acoustic study & dining narrative scope.</p>
</div>
{/*  Step 2  */}
<div className="flex flex-col items-center text-center gap-space-xs">
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-secondary shadow-md">
<span className="material-symbols-outlined text-[22px]">architecture</span>
</div>
<span className="font-title-md text-title-md text-on-surface mt-2">02 DESIGN</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Geodesic structural engineering & projector sightlines.</p>
</div>
{/*  Step 3  */}
<div className="flex flex-col items-center text-center gap-space-xs">
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary-fixed shadow-md">
<span className="material-symbols-outlined text-[22px]">palette</span>
</div>
<span className="font-title-md text-title-md text-on-surface mt-2">03 CREATE</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Course-synced 8K CGI worldbuilding & audio spatialization.</p>
</div>
{/*  Step 4  */}
<div className="flex flex-col items-center text-center gap-space-xs">
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary shadow-md">
<span className="material-symbols-outlined text-[22px]">precision_manufacturing</span>
</div>
<span className="font-title-md text-title-md text-on-surface mt-2">04 INSTALL</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Precision hardware calibration & server UI configuration.</p>
</div>
{/*  Step 5  */}
<div className="flex flex-col items-center text-center gap-space-xs">
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-secondary-fixed shadow-md">
<span className="material-symbols-outlined text-[22px]">stars</span>
</div>
<span className="font-title-md text-title-md text-on-surface mt-2">05 EXPERIENCE</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Flawless opening night & continuous operational support.</p>
</div>
</div>
</div>
</section>
{/*  8. Subpage Industry Navigation (Cross-Page Links)  */}
<section className="w-full px-margin py-space-lg bg-surface">
<div className="p-space-md rounded-2xl bg-surface-container-low shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface">
<a className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="industries" href="#">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span className="">02 Events & Festivals</span>
</a>
<a className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-high text-primary hover:bg-surface-container-highest transition-all font-label-sm text-label-sm uppercase tracking-wider" data-path="industries" href="#">
<span className="material-symbols-outlined text-[16px]">grid_view</span>
<span className="">Explore All 9 Industries</span>
</a>
<a className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="industries" href="#">
<span className="">04 Health & Wellness</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</section>
{/*  9. Final Call-to-Action  */}
<section className="w-full px-margin py-space-xl bg-surface-container-lowest relative overflow-hidden">
<div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-primary-container/20 to-transparent blur-[120px] pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto rounded-3xl bg-surface-container p-space-lg lg:p-space-xl text-center flex flex-col items-center gap-space-md shadow-2xl relative">
<div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">wine_bar</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
        READY TO CREATE THE EXPERIENCE?
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light">
        Tell us about your restaurant, hotel or resort space, and the dining journey you want to create.
      </p>
<div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold transition-all hover:brightness-110 shadow-lg group" data-path="start-a-project" href="#">
<span className="">Create Your Immersive Dining Experience</span>
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-all" data-path="industries" href="#">
<span className="">Explore Other Industries</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</section>
</div></main>
    </div>
  );
}
