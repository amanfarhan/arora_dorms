"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen w-full overflow-x-hidden">
      <main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full text-on-surface">
{/*  HERO SECTION  */}
<section className="relative w-full -mt-20 pt-32 pb-24 md:pb-32 px-margin-mobile md:px-margin overflow-hidden bg-surface-container-lowest">
{/*  Atmospheric Ambient Glows  */}
<div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px]"></div>
<div className="pointer-events-none absolute top-1/3 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
{/*  Left Editorial Column  */}
<div className="lg:col-span-6 flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="inline-block w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_currentColor] animate-pulse"></span>
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.2em]">DOME INFRASTRUCTURE</span>
</div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Built Around Your Vision. <span className="italic font-normal text-primary">Engineered for Immersion.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          From compact immersive installations to flagship dome attractions, we provide dome infrastructure engineered around your venue, audience and experience.
        </p>
{/*  CTA Cluster  */}
<div className="flex flex-wrap items-center gap-space-md pt-space-sm">
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md shadow-[0_0_30px_rgba(123,140,222,0.35)] hover:bg-primary hover:text-on-primary transition-all duration-300" href="#scale-matrix">
<span className="">EXPLORE DOME OPTIONS</span>
<span className="w-6 h-6 rounded-full bg-on-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-[15px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-surface-container-high/60 backdrop-blur-md text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-all duration-300 shadow-md" data-path="start-a-project" href="#">
<span className="">START A PROJECT</span>
<span className="material-symbols-outlined text-outline text-[16px]">north_east</span>
</a>
</div>
{/*  Telemetry / Architectural Badges  */}
<div className="grid grid-cols-3 gap-gutter pt-space-lg">
<div className="flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-on-surface">3m – 25m+</span>
<span className="font-label-sm text-label-sm text-outline">Geodesic Span</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-secondary">360° × 180°</span>
<span className="font-label-sm text-label-sm text-outline">Fulldome Envelope</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-tertiary">Zero-Loss</span>
<span className="font-label-sm text-label-sm text-outline">Acoustic Clarity</span>
</div>
</div>
</div>
{/*  Right Visual Feature Frame  */}
<div className="lg:col-span-6 relative">
<div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-container-low group">
<img  alt="Modern geodesic dome infrastructure pavilion at twilight" className="w-full aspect-[16/10] object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_86e73b4ec055.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent"></div>
{/*  Floating Status Spec Plate  */}
<div className="absolute bottom-4 left-4 right-4 p-space-sm bg-surface-container-lowest/80 backdrop-blur-xl rounded-lg shadow-xl flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">filter_drama</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">Pavilion Prototype #02</span>
<span className="font-body-sm text-body-sm text-outline">Structural Grade T6 Aluminum • Dual-Membrane Screen</span>
</div>
</div>
<span className="font-label-eyebrow text-label-eyebrow text-secondary px-2 py-1 rounded bg-secondary-container/20">VERIFIED</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 1: DOME SOLUTIONS FOR EVERY SCALE  */}
<section className="w-full py-space-xl px-margin-mobile md:px-margin bg-surface" id="scale-matrix">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.18em]">SCALE & ADAPTABILITY</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Dome Solutions for Every Scale.
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Aurora Dome Solutions engineers custom projection domes from 3m to over 25m in diameter. Every enclosure is parametrically designed to match specific footprint constraints, seating ergonomics, and optical throwing distances.
          </p>
</div>
<div className="hidden lg:flex items-center gap-2 font-label-sm text-label-sm text-outline">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="">Scalable Geodesic Frameworks v4.2</span>
</div>
</div>
{/*  3 Tier Cards Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Card 1: Compact & Pop-Up Domes  */}
<div className="group flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-xl hover:bg-surface-container-high transition-all duration-300">
<div className="relative aspect-[16/10] overflow-hidden bg-surface-container-lowest">
<img  alt="Compact pop up immersive dome installation in scenic twilight setting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_174dc50064be.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-secondary tracking-wider font-semibold">3M – 8M</span>
</div>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-[20px]">bubble_chart</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Rapid Deployment</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Compact & Pop-Up Domes</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                Flexible installations engineered for rapid mobilization, pop-up experiential brand tours, sensory lounges, and temporary activations with high mobility needs.
              </p>
</div>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant/80">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> 4-hour toolless modular assembly</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Negative-pressure vacuum screen skin</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Road-case transport architecture</li>
</ul>
</div>
</div>
{/*  Card 2: Mid-Scale Immersive Spaces  */}
<div className="group flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-xl hover:bg-surface-container-high transition-all duration-300">
<div className="relative aspect-[16/10] overflow-hidden bg-surface-container-lowest">
<img  alt="Mid-scale geodesic dome architecture pavilion under night aurora sky" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_1059dc147612.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm text-primary tracking-wider font-semibold">9M – 18M</span>
</div>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-[20px]">apartment</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Permanent & Semi-Permanent</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Mid-Scale Immersive Spaces</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                Purpose-built dome solutions for dedicated cultural attractions, high-end hospitality pavilions, immersive dining theaters, and planetarium expansions.
              </p>
</div>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant/80">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Structural multi-projector truss rings</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Integrated climate control ductwork</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Micro-perforated acoustic screen</li>
</ul>
</div>
</div>
{/*  Card 3: Large-Scale & Custom Domes  */}
<div className="group flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-xl hover:bg-surface-container-high transition-all duration-300">
<div className="relative aspect-[16/10] overflow-hidden bg-surface-container-lowest">
<img  alt="Massive high tech geodesic projection theater with celestial nebula and audience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_2a0879ada5db.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-tertiary tracking-wider font-semibold">19M – 25M+</span>
</div>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-[20px]">stars</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Monumental Architecture</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Large-Scale & Custom Domes</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                Monumental, custom-engineered dome environments for international expos, theme parks, science centers, and flagship architectural landmarks.
              </p>
</div>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant/80">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Unlimited audience capacity options</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> High-wind & seismic load certified</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Laser optical auto-calibration matrix</li>
</ul>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 2: INFRASTRUCTURE COMPONENTS  */}
<section className="w-full py-space-xl px-margin-mobile md:px-margin bg-surface-container-lowest relative overflow-hidden">
<div className="pointer-events-none absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px]"></div>
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl relative z-10">
{/*  Section Lead  */}
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.18em]">ENGINEERING DISCIPLINE</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Infrastructure Components.
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Precision structural elements designed in harmony with advanced optical technology. Every component is stress-tested to deliver flawless alignment under any environmental stress.
        </p>
</div>
{/*  4 Balanced Component Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Component 1  */}
<div className="flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-lg group hover:bg-surface-container-high transition-colors duration-300">
<div className="relative aspect-square overflow-hidden bg-surface-container-lowest">
<img  alt="Geodesic dome metal frame truss structure against dark twilight starry sky" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_bfe338b3bf8a.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur flex items-center justify-center text-primary">
<span className="font-label-sm text-label-sm">01</span>
</div>
</div>
<div className="p-space-md flex flex-col gap-space-xs flex-1">
<h3 className="font-title-md text-title-md text-on-surface">Dome Structure & Engineering</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              High-tensile steel, lightweight aerospace alloy trusses and precision-curved geometric frames rated for interior or extreme outdoor installations.
            </p>
</div>
</div>
{/*  Component 2  */}
<div className="flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-lg group hover:bg-surface-container-high transition-colors duration-300">
<div className="relative aspect-square overflow-hidden bg-surface-container-lowest">
<img  alt="Modern dome pavilion structure architectural cutaway with metal truss framework" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_7c19872d6d7a.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur flex items-center justify-center text-secondary">
<span className="font-label-sm text-label-sm">02</span>
</div>
</div>
<div className="p-space-md flex flex-col gap-space-xs flex-1">
<h3 className="font-title-md text-title-md text-on-surface">Custom Sizes & Shapes</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Bespoke architectural adaptations, elliptical geometries, and seamless integration for challenging venues, irregular footprints, and heritage interiors.
            </p>
</div>
</div>
{/*  Component 3  */}
<div className="flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-lg group hover:bg-surface-container-high transition-colors duration-300">
<div className="relative aspect-square overflow-hidden bg-surface-container-lowest">
<img  alt="High-end cinema dome projector lens and optical laser projection rig" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_16339af8ae65.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur flex items-center justify-center text-primary">
<span className="font-label-sm text-label-sm">03</span>
</div>
</div>
<div className="p-space-md flex flex-col gap-space-xs flex-1">
<h3 className="font-title-md text-title-md text-on-surface">Projection System Design</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Precision optical rigging, multi-projector enclosures, acoustic perforation baffles, and laser alignment arrays designed for zero-distortion immersion.
            </p>
</div>
</div>
{/*  Component 4  */}
<div className="flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-lg group hover:bg-surface-container-high transition-colors duration-300">
<div className="relative aspect-square overflow-hidden bg-surface-container-lowest">
<img  alt="3D architectural cutaway diagram of engineered curved metal dome framework" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_f5c1f9921dc9.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur flex items-center justify-center text-tertiary">
<span className="font-label-sm text-label-sm">04</span>
</div>
</div>
<div className="p-space-md flex flex-col gap-space-xs flex-1">
<h3 className="font-title-md text-title-md text-on-surface">System Integration</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Unified power distribution, silent thermal dissipation, ducted HVAC ventilation, automated sensors, and structural load balancing algorithms.
            </p>
</div>
</div>
</div>
{/*  Live Interactive Parameter Selector Micro-interaction  */}
<div className="w-full p-space-md md:p-space-lg bg-surface-container-low rounded-xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[24px]">architecture</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Engineering Specifications Dossier</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Download complete structural blueprints, wind load charts, and optical throw schematics.</span>
</div>
</div>
<div className="flex items-center gap-space-sm w-full lg:w-auto">
<button className="flex-1 lg:flex-none px-space-md py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors" id="viewSpecsBtn">
            Interactive Dimensioner
          </button>
<a className="flex-1 lg:flex-none px-space-md py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all text-center" data-path="contact" href="#">
            Request Spec Sheets
          </a>
</div>
</div>
</div>
</section>
{/*  SECTION 3: DESIGNED FOR YOUR VENUE (SPLIT ASYMMETRIC)  */}
<section className="w-full py-space-xl px-margin-mobile md:px-margin bg-surface">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
{/*  Split Image Left  */}
<div className="lg:col-span-7 relative">
<div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-container-lowest group">
<img  alt="Illuminated geodesic dome pavilion beside alpine lake with dramatic aurora borealis sky" className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_1e035427f106.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
{/*  Architectural Detail Badge  */}
<div className="absolute top-4 left-4 p-space-xs px-space-sm rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">location_on</span>
<span className="font-label-sm text-label-sm text-on-surface">Sub-Arctic Eco Resort Prototype</span>
</div>
<div className="absolute bottom-6 left-6 right-6 p-space-md bg-surface-container-lowest/85 backdrop-blur-xl rounded-lg">
<div className="flex items-center justify-between text-outline font-label-sm text-label-sm mb-1">
<span className="">PARAMETRIC ADAPTATION</span>
<span className="">100% SITE SPECIFIC</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-secondary to-primary h-full w-4/5 rounded-full"></div>
</div>
</div>
</div>
</div>
{/*  Text Right  */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-[0.2em]">BESPOKE INTEGRATION</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Designed for Your Venue.
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Dome dimensions, structural load configurations, projection throws, and acoustic insulation should never be an afterthought. We engineer each installation directly around your architecture, sightlines, guest flows, and target immersion goals.
        </p>
{/*  Metric Checklist  */}
<div className="flex flex-col gap-3 pt-space-xs">
<div className="flex items-start gap-space-xs p-3 rounded-lg bg-surface-container-low shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">straighten</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Spatial Constraints & Clearance</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Calibrated ceiling heights, egress planning, and ADA-compliant accessibility paths.</span>
</div>
</div>
<div className="flex items-start gap-space-xs p-3 rounded-lg bg-surface-container-low shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">surround_sound</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Acoustic Treatment & Isolation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Micro-perforated acoustic skins eliminating interior echo flutter and resonance.</span>
</div>
</div>
<div className="flex items-start gap-space-xs p-3 rounded-lg bg-surface-container-low shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">thermostat</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Climate & Environmental Resilience</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Engineered for extreme exterior temperature deltas, maritime moisture, and solar loads.</span>
</div>
</div>
</div>
{/*  CTA  */}
<div className="pt-space-sm">
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all shadow-[0_0_24px_rgba(123,140,222,0.3)]" data-path="contact" href="#">
<span className="">DISCUSS YOUR DOME</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/*  FINAL CTA SECTION  */}
<section className="w-full py-24 md:py-32 px-margin-mobile md:px-margin bg-surface-container-lowest relative overflow-hidden">
{/*  Ambient Aurora Flare  */}
<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-secondary/15 via-primary/20 to-tertiary/15 rounded-full blur-[140px]"></div>
<div className="max-w-[1000px] mx-auto text-center relative z-10 flex flex-col items-center gap-space-md">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-[0.2em]">START COLLABORATING</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface max-w-3xl">
        Let’s Build Your Immersive Space.
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Tell us about your venue, available space and the experience you want to create. Our senior architectural engineering team is ready to assist from initial spatial design through turnkey commissioning.
      </p>
<div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
<a className="inline-flex items-center gap-space-xs px-space-xl py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md shadow-[0_0_36px_rgba(123,140,222,0.45)] hover:bg-primary hover:text-on-primary transition-all duration-300 transform hover:scale-[1.02]" data-path="start-a-project" href="#">
<span className="">START A PROJECT</span>
<span className="w-6 h-6 rounded-full bg-on-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-[15px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-md py-3.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors" href="mailto:inquire@auroradomes.com">
<span className="material-symbols-outlined text-outline text-[16px]">mail</span>
<span className="">inquire@auroradomes.com</span>
</a>
</div>
{/*  Quick Trust Indicators  */}
<div className="pt-space-lg flex flex-wrap items-center justify-center gap-8 text-outline font-label-sm text-label-sm">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-secondary text-[16px]">verified</span> ISO 9001 Structural Safety</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-secondary text-[16px]">verified</span> 24/7 Global Field Dispatch</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-secondary text-[16px]">verified</span> 10-Year Framework Warranty</span>
</div>
</div>
</section>
{/*  Interactive Dimensioner Modal Simulator (Script-Driven)  */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-xl opacity-0 pointer-events-none transition-opacity duration-300" id="dimensionerModal">
<div className="w-full max-w-xl bg-surface-container p-space-lg rounded-xl shadow-2xl relative flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">tune</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Interactive Dimensioner</h3>
</div>
<button className="text-on-surface-variant hover:text-on-surface" id="closeSpecsBtn">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Adjust intended dome diameter to preview approximate audience footprint and projection rigs:</p>
<div className="flex flex-col gap-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="">Diameter</span>
<span className="text-secondary font-bold" id="diameterVal">12 Meters</span>
</div>
<input  className="w-full accent-secondary cursor-pointer" id="diameterSlider" max="25" min="3" type="range" value="12" />
</div>
<div className="grid grid-cols-2 gap-space-sm p-space-sm bg-surface-container-low rounded-lg font-body-sm text-body-sm">
<div>
<span className="text-outline block font-label-sm text-label-sm">Estimated Capacity</span>
<span className="text-on-surface font-semibold" id="capacityVal">120 - 150 Seats</span>
</div>
<div>
<span className="text-outline block font-label-sm text-label-sm">Projector Nodes</span>
<span className="text-on-surface font-semibold" id="projectorVal">4x 4K Laser Arrays</span>
</div>
</div>
<a className="w-full py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md text-center hover:bg-primary hover:text-on-primary transition-colors" data-path="start-a-project" href="#">
        Submit Footprint Inquiry
      </a>
</div>
</div>

</div></main>
    </div>
  );
}
