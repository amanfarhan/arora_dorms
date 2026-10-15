"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-surface text-on-surface min-h-screen w-full overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <main className="w-full bg-background"><div className="flex flex-col w-full text-on-surface">
{/*  1. BREADCRUMB STRIP & METRICS TICKER  */}
<section className="w-full px-margin-mobile md:px-margin py-space-sm bg-surface-container-lowest/80 backdrop-blur-md">
<div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<Link className="hover:text-primary transition-colors" data-path="home" href="/">HOME</Link>
<span className="text-outline-variant">/</span>
<Link className="hover:text-primary transition-colors" data-path="industries" href="/industries">INDUSTRIES</Link>
<span className="text-outline-variant">/</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/15 text-primary font-semibold shadow-[0_0_12px_rgba(123,140,222,0.25)]">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          EVENTS & FESTIVALS
        </span>
</div>
<div className="hidden md:flex items-center gap-space-md text-on-surface-variant font-label-eyebrow text-label-eyebrow tracking-[0.2em]">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-secondary">bolt</span> RAPID ERECTION: 48-72 HRS</span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-primary">cyclone</span> 120 KM/H WIND CERTIFIED</span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-tertiary">graphic_eq</span> DMX / SMPTE TIME-LOCKED</span>
</div>
</div>
</section>
{/*  2. HERO SECTION  */}
<section className="relative w-full px-margin-mobile md:px-margin pt-space-lg pb-space-xl overflow-hidden">
{/*  Atmospheric glows  */}
<div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px] pointer-events-none"></div>
<div className="absolute top-1/3 -right-24 w-[520px] h-[520px] rounded-full bg-secondary/10 blur-[140px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg relative z-10">
{/*  Eyebrow & Hero Header  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
<div className="lg:col-span-8 flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#44e1de]"></span>
<span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-[0.24em]">
              SECTOR 02 // ARCHITECTURAL NIGHTLIFE & LIVE PRODUCTION
            </span>
</div>
<h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-[0.95] uppercase">
            Make the event <br />
<span className="italic font-light text-primary">impossible</span> to ignore.
          </h1>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-md pb-2">
<p className="font-body-lg text-body-lg text-on-surface-variant font-light">
            Create portable, high-impact immersive experiences for festivals, world-class product launches, public arts biennials, and touring headline productions. Fast-deploy geodesic engineering synchronized with 360° reactive laser mapping.
          </p>
<div className="flex flex-wrap items-center gap-space-sm pt-2">
<Link className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:brightness-110 shadow-[0_0_28px_rgba(123,140,222,0.38)] transition-all" data-path="start-a-project" href="/start-a-project">
<span className="">CREATE YOUR EVENT EXPERIENCE</span>
<span className="w-6 h-6 rounded-full bg-on-primary-container/15 flex items-center justify-center">
<span className="material-symbols-outlined text-[15px]">arrow_forward</span>
</span>
</Link>
<Link className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-full bg-surface-container-high/70 hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all" data-path="industries" href="/industries">
<span className="">EXPLORE INDUSTRIES</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">north_east</span>
</Link>
</div>
</div>
</div>
{/*  HERO CINEMATIC CANVAS (Crowd & Aurora geodesic dome)  */}
<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest">
<div className="relative w-full h-[460px] md:h-[680px] bg-cover bg-center" data-alt="A massive nighttime music festival crowd dancing under a colossal luminous transparent geodesic dome. Inside the dome, radiant swirling aurora borealis light in electric violet, cyan, and gold cascades across the curved ceiling structure, with laser beams shooting through atmospheric festival haze into the starry night sky." style={{"backgroundImage":"url('/images/img_43fcc0290394.jpg')"}}>
{/*  Edge Vignettes and Bottom Scrim  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-surface-container-lowest/70"></div>
{/*  Top-Right Live Spatial Metrics Floating HUD  */}
<div className="absolute top-6 right-6 hidden sm:flex flex-col gap-2 p-4 rounded-xl bg-surface-container-lowest/80 backdrop-blur-xl max-w-xs shadow-xl">
<div className="flex items-center justify-between pb-2">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-widest flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span> SPATIAL TELEMETRY
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">AERO-35M</span>
</div>
<div className="grid grid-cols-2 gap-2 text-left pt-1">
<div className="bg-surface-container/60 p-2 rounded-lg">
<span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Occupancy</span>
<span className="font-title-md text-title-md text-on-surface">3,200 PAX</span>
</div>
<div className="bg-surface-container/60 p-2 rounded-lg">
<span className="text-[10px] text-on-surface-variant uppercase tracking-wider block">Focal Lumens</span>
<span className="font-title-md text-title-md text-primary">160,000 LM</span>
</div>
</div>
<div className="flex items-center justify-between pt-1 text-[11px] text-on-surface-variant">
<span className="">Projection Mesh: 8K Fulldome</span>
<span className="text-secondary font-mono">ACTIVE</span>
</div>
</div>
{/*  Bottom Floating Caption Card  */}
<div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-auto md:max-w-xl p-5 rounded-2xl bg-surface-container-low/85 backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-label-sm font-label-sm">COACHELLA VALLEY REVELATION DOME</span>
<span className="text-on-surface-variant text-[12px] font-label-eyebrow tracking-widest uppercase">CASE STUDY // 2024</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
              A 35-meter negative-pressure touring dome staging unannounced headline DJ sets, real-time kinetic audio visualizer, and 360° synchronized lasers.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  3. EDITORIAL STATEMENT / PULL-QUOTE  */}
<section className="w-full px-margin-mobile md:px-margin py-space-xl bg-surface-container-low relative">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-8 flex flex-col gap-space-md">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-primary tracking-[0.26em]">
          MANIFESTO // TRANSCENDENT EPHEMERAL ARCHITECTURE
        </span>
<blockquote className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-[1.1] tracking-tight">
          “Don’t just host the event. <br />
<span className="italic text-secondary font-light">Create an entire world inside it.</span>”
        </blockquote>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl font-light leading-relaxed">Temporary festival architecture shouldn’t compromise on jaw-dropping awe. Arora Dorm mobile domes deploy with surgical precision, withstand punishing outdoor environments from desert sandstorms to coastal gusts, and provide a seamless 360-degree sonic and visual envelope that instantly commands any festival landscape.</p>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-sm p-6 rounded-2xl bg-surface-container-high/60 shadow-xl">
<div className="flex items-center justify-between pb-3">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-on-surface-variant">FESTIVAL ENGAGEMENT COMPARATIVE</span>
<span className="material-symbols-outlined text-primary text-[20px]">insights</span>
</div>
{/*  Inline Metric SVG comparison  */}
<div className="space-y-4 pt-2">
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="text-on-surface">Standard Festival Stage Tent</span>
<span className="text-on-surface-variant">22 min dwell time</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-outline-variant w-[32%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="text-primary font-semibold">Arora Dorm Immersive Dome 360°</span>
<span className="text-secondary font-semibold">84 min average dwell</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary to-secondary w-[94%] rounded-full shadow-[0_0_12px_rgba(68,225,222,0.6)]"></div>
</div>
</div>
</div>
<div className="pt-4 mt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary"></span> +280% Social Shares</span>
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-tertiary"></span> 99.8% Safety Record</span>
</div>
</div>
</div>
</section>
{/*  4. APPLICATIONS & EXPERIENCES GRID (4 Bento Cards)  */}
<section className="w-full px-margin-mobile md:px-margin py-space-xl bg-surface">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.24em] text-primary">USE CASES & LIVE CONFIGURATIONS</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Engineered for every temporary spectacle.
          </h2>
</div>
<span className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Modular geodesic spans ranging from intimate 12m launch pods to 45m arena festival monoliths.
        </span>
</div>
{/*  4 Cards Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/*  CARD 01: FESTIVALS  */}
<div className="group relative rounded-2xl bg-surface-container p-8 md:p-10 transition-all duration-300 hover:bg-surface-container-high shadow-lg flex flex-col justify-between overflow-hidden">
<div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
<div className="flex flex-col gap-space-md relative z-10">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary tracking-widest">01</span>
<span className="px-3 py-1 rounded-full bg-surface-container-highest font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-secondary">
                MUSIC & ARTS
              </span>
</div>
<div className="space-y-2">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                FESTIVALS & HEADLINE ARENAS
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Create immersive environments that become the definitive centerpiece destinations, VIP speakeasies, sensory chillout sanctuaries, or after-hours alternative stages within mega-festivals worldwide.
              </p>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between relative z-10">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
<span className="">Capacity: 800 - 4,500 PAX</span>
<span className="">•</span>
<span className="">Dual Airlock Portals</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
</div>
{/*  CARD 02: PRODUCT LAUNCHES  */}
<div className="group relative rounded-2xl bg-surface-container p-8 md:p-10 transition-all duration-300 hover:bg-surface-container-high shadow-lg flex flex-col justify-between overflow-hidden">
<div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-secondary/10 blur-3xl group-hover:bg-secondary/20 transition-all"></div>
<div className="flex flex-col gap-space-md relative z-10">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-secondary tracking-widest">02</span>
<span className="px-3 py-1 rounded-full bg-surface-container-highest font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-secondary">
                BRAND EXPERIENCE
              </span>
</div>
<div className="space-y-2">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                GLOBAL PRODUCT LAUNCHES
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Transform brand reveals into spine-tingling experiential milestones. Envelop global automotive debuts, luxury tech showcases, and key opinion leaders in bespoke holographic and spherical visuals.
              </p>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between relative z-10">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
<span className="">Zero-Light-Bleed Shell</span>
<span className="">•</span>
<span className="">Turntable Staging Rig</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-highest group-hover:bg-secondary group-hover:text-on-secondary flex items-center justify-center transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
</div>
{/*  CARD 03: EXHIBITIONS  */}
<div className="group relative rounded-2xl bg-surface-container p-8 md:p-10 transition-all duration-300 hover:bg-surface-container-high shadow-lg flex flex-col justify-between overflow-hidden">
<div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-tertiary/10 blur-3xl group-hover:bg-tertiary/20 transition-all"></div>
<div className="flex flex-col gap-space-md relative z-10">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-tertiary tracking-widest">03</span>
<span className="px-3 py-1 rounded-full bg-surface-container-highest font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-tertiary">
                PUBLIC BIENNIALS
              </span>
</div>
<div className="space-y-2">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors">
                PUBLIC EXHIBITIONS & PLAZAS
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Turn standard civic squares, convention grounds, and urban waterfronts into high-traffic architectural showpieces. Generate viral media coverage while housing immersive scientific and historical journeys.
              </p>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between relative z-10">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
<span className="">Continuous Flow Layout</span>
<span className="">•</span>
<span className="">ADA Certified Access</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-highest group-hover:bg-tertiary group-hover:text-on-tertiary flex items-center justify-center transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
</div>
{/*  CARD 04: SPECIAL EVENTS  */}
<div className="group relative rounded-2xl bg-surface-container p-8 md:p-10 transition-all duration-300 hover:bg-surface-container-high shadow-lg flex flex-col justify-between overflow-hidden">
<div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-primary-container/20 blur-3xl group-hover:bg-primary-container/30 transition-all"></div>
<div className="flex flex-col gap-space-md relative z-10">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary-fixed tracking-widest">04</span>
<span className="px-3 py-1 rounded-full bg-surface-container-highest font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-primary-fixed">
                PRIVATE & COUTURE
              </span>
</div>
<div className="space-y-2">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-fixed transition-colors">
                LANDMARK SPECIAL EVENTS
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Architectural bespoke installations for sovereign galas, iconic anniversary milestones, and ultra-high-net-worth celebratory summits where standard ballrooms simply fail to meet the ambition.
              </p>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between relative z-10">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
<span className="">Custom Audio Spatialization</span>
<span className="">•</span>
<span className="">Bespoke Interior Skinning</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-highest group-hover:bg-primary-fixed group-hover:text-on-primary-fixed flex items-center justify-center transition-all">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  5. WHY AURORA FOR EVENTS & FESTIVALS (3-Part Capability Matrix)  */}
<section className="w-full px-margin-mobile md:px-margin py-space-xl bg-surface-container-lowest">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs text-center items-center max-w-3xl mx-auto">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.28em] text-secondary">
          THE ARORA DORM ADVANTAGE
        </span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
          Purpose-built for zero failure under festival pressure.
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light">We combine aerospace structural mechanics with concert-touring speed. Arora Dorm is one unified partner covering load-bearing calculations to live show control.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Feature 1  */}
<div className="p-8 rounded-2xl bg-surface-container-low flex flex-col justify-between gap-space-lg shadow-md">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">architecture</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">
              PORTABLE INFRASTRUCTURE
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Engineered for rapid rigging, certified 120 km/h wind ratings, negative-pressure dual membranes, and all-weather thermal insulation. Modular spans configured from 10m to 35m+ with integrated central truss clusters for heavy lighting rigs.
            </p>
</div>
<div className="space-y-2 pt-space-sm bg-surface-container/50 p-4 rounded-xl">
<div className="flex justify-between text-label-sm font-label-sm text-on-surface">
<span className="text-on-surface-variant">Setup Time:</span>
<span className="font-semibold text-primary">36 - 72 Hours</span>
</div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface">
<span className="text-on-surface-variant">Internal Rigging Load:</span>
<span className="font-semibold text-primary">Up to 14,000 kg</span>
</div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface">
<span className="text-on-surface-variant">Wind Rating:</span>
<span className="font-semibold text-secondary">Beaufort Scale 12</span>
</div>
</div>
</div>
{/*  Feature 2  */}
<div className="p-8 rounded-2xl bg-surface-container-low flex flex-col justify-between gap-space-lg shadow-md">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">settings_input_component</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">
              IMMERSIVE CONTENT & VJ SYNC
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Live media server integration via disguise and TouchDesigner, real-time generative audio-reactive visuals, and timecode synchronization with touring DJs and live performance artists. Seamlessly feed live external camera stems into fulldome projection.
            </p>
</div>
<div className="space-y-2 pt-space-sm bg-surface-container/50 p-4 rounded-xl">
<div className="flex justify-between text-label-sm font-label-sm text-on-surface">
<span className="text-on-surface-variant">Resolution Latency:</span>
<span className="font-semibold text-secondary">&lt; 1 Frame (Sub-16ms)</span>
</div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface">
<span className="text-on-surface-variant">Protocol Support:</span>
<span className="font-semibold text-secondary">SMPTE, DMX512, Art-Net</span>
</div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface">
<span className="text-on-surface-variant">Audio Rigging:</span>
<span className="font-semibold text-primary">Spatial 7.1.4 / Ambisonic</span>
</div>
</div>
</div>
{/*  Feature 3  */}
<div className="p-8 rounded-2xl bg-surface-container-low flex flex-col justify-between gap-space-lg shadow-md">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">engineering</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface uppercase tracking-wide">
              RAPID TURNKEY DEPLOYMENT
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              End-to-end logistics with flight-cased inventory, municipal permitting, structural engineering wet stamps, certified master riggers, and 24/7 on-site technical operators managing projection alignment and environmental climate controls.
            </p>
</div>
<div className="space-y-2 pt-space-sm bg-surface-container/50 p-4 rounded-xl">
<div className="flex justify-between text-label-sm font-label-sm text-on-surface">
<span className="text-on-surface-variant">Crew Support:</span>
<span className="font-semibold text-tertiary">On-site 24/7 Crew Chief</span>
</div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface">
<span className="text-on-surface-variant">Permit Approvals:</span>
<span className="font-semibold text-tertiary">Full Structural Sign-off</span>
</div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface">
<span className="text-on-surface-variant">Spare Units:</span>
<span className="font-semibold text-secondary">N+1 Redundancy Rig</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  6. IMMERSIVE VISUAL SHOWCASE (Laser Dome + Crowd Energy)  */}
<section className="w-full relative py-space-xl px-margin-mobile md:px-margin bg-surface overflow-hidden">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-md">
<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest">
<div className="relative w-full h-[520px] md:h-[720px] bg-cover bg-center" data-alt="Dramatic interior view inside a dark geodesic festival dome packed with an ecstatic dancing crowd with hands raised. Brilliant neon pink and bright cyan laser beams fan outwards across the geometric triangular metal framework of the dome ceiling, while stage haze and theatrical smoke catch vibrant beams of light above the DJ booth." style={{"backgroundImage":"url('/images/img_45aae699a88b.jpg')"}}>
{/*  Inner Ambient Glow and Editorial Overlays  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest/50"></div>
{/*  Centered Large Statement  */}
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto z-10">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.3em] text-secondary mb-3 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md">
              SYNCHRONIZED SENSORY ARCHITECTURE
            </span>
<h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-headline-lg tracking-tight uppercase leading-none drop-shadow-lg">
              “Surround audiences with sound, light, and architecture.”
            </h2>
<div className="mt-8 flex flex-wrap items-center justify-center gap-space-sm">
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-secondary text-[16px]">spatial_audio</span>
                32-Channel Object-Based Spatial Audio
              </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-primary text-[16px]">blur_on</span>
                Real-Time Notch / TouchDesigner Stems
              </div>
</div>
</div>
{/*  Bottom Status Pill  */}
<div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/70 backdrop-blur-md font-label-eyebrow text-label-eyebrow text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            LIVE AUDIO-REACTIVE MAPPING // READY FOR IMMEDIATE TOUR RIGGING
          </div>
</div>
</div>
</div>
</section>
{/*  7. PROJECT FLOW (Horizontal Minimal Connected Timeline)  */}
<section className="w-full px-margin-mobile md:px-margin py-space-xl bg-surface-container-low">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div className="space-y-2">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.24em] text-primary">PRODUCTION PIPELINE</span>
<h2 className="font-headline-md text-headline-md text-on-surface">The Rapid Festival Deployment Cycle</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
          A tested five-stage protocol taking you from site survey to high-octane live operational execution.
        </p>
</div>
{/*  Timeline Bar  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md relative">
{/*  Step 1  */}
<div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-mono">01</span>
<span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_#44e1de]"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wider">DISCOVER</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Site terrain survey, wind load verification, audience capacity modeling, and electrical infrastructure audit.
          </p>
<span className="text-[11px] font-label-eyebrow text-on-surface-variant uppercase pt-2">Timeline: Days 1-7</span>
</div>
{/*  Step 2  */}
<div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-mono">02</span>
<span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_#b9c3ff]"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wider">DESIGN</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            3D geometric simulation, projector throw mapping, sound-bleed acoustic barrier modeling, and local municipal sign-offs.
          </p>
<span className="text-[11px] font-label-eyebrow text-on-surface-variant uppercase pt-2">Timeline: Weeks 2-3</span>
</div>
{/*  Step 3  */}
<div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-tertiary font-mono">03</span>
<span className="w-3 h-3 rounded-full bg-tertiary shadow-[0_0_8px_#d2bbff]"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wider">CREATE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Bespoke 360° master content production, visual narrative pacing, VJ stems integration, and lighting cue scripting.
          </p>
<span className="text-[11px] font-label-eyebrow text-on-surface-variant uppercase pt-2">Timeline: Weeks 3-6</span>
</div>
{/*  Step 4  */}
<div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-mono">04</span>
<span className="w-3 h-3 rounded-full bg-secondary"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wider">INSTALL</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Rapid on-site geodesic skeleton erection, projection dome membrane tensioning, projector calibration & laser alignment.
          </p>
<span className="text-[11px] font-label-eyebrow text-on-surface-variant uppercase pt-2">Timeline: 48-72 Hours</span>
</div>
{/*  Step 5  */}
<div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-mono">05</span>
<span className="w-3 h-3 rounded-full bg-primary-container"></span>
</div>
<h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wider">EXPERIENCE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Live technical show operations, real-time artist media management, crowd circulation control, and instant teardown.
          </p>
<span className="text-[11px] font-label-eyebrow text-on-surface-variant uppercase pt-2">Execution: Show Run</span>
</div>
</div>
</div>
</section>
{/*  8. SUBPAGE INDUSTRY NAVIGATION (Cross-Sector Switching Bar)  */}
<section className="w-full px-margin-mobile md:px-margin py-space-md bg-surface-container-lowest">
<div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-md">
{/*  Prev Sector  */}
<Link className="group flex items-center gap-space-sm p-3 rounded-xl hover:bg-surface-container-high transition-all" data-path="entertainment-and-tourism" href="/start-a-project">
<span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-primary group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</span>
<div className="flex flex-col text-left">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-on-surface-variant">PREVIOUS SECTOR</span>
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">01 Entertainment & Tourism</span>
</div>
</Link>
{/*  Center Hub Link  */}
<Link className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all shadow-sm" data-path="industries" href="/industries">
<span className="material-symbols-outlined text-[16px] text-secondary">view_module</span>
<span className="">Explore All 9 Industries</span>
</Link>
{/*  Next Sector  */}
<a className="group flex items-center gap-space-sm p-3 rounded-xl hover:bg-surface-container-high transition-all" data-path="hospitality" href="#">
<div className="flex flex-col text-right">
<span className="font-label-eyebrow text-label-eyebrow uppercase text-on-surface-variant">NEXT SECTOR</span>
<span className="font-label-md text-label-md text-on-surface group-hover:text-secondary transition-colors">03 Hospitality & Immersive Dining</span>
</div>
<span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-secondary group-hover:bg-secondary/10 transition-colors">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</span>
</a>
</div>
</section>
{/*  9. FINAL CALL-TO-ACTION SECTION  */}
<section className="w-full relative px-margin-mobile md:px-margin py-space-xl bg-surface-container-low overflow-hidden">
{/*  Diffuse background glow  */}
<div className="absolute -bottom-24 left-1/3 w-[600px] h-[300px] rounded-full bg-primary-container/20 blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-space-md relative z-10">
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.3em] text-secondary">
        COMMISSION YOUR EVENT DOME
      </span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight uppercase">
        Ready to create the experience?
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light max-w-2xl leading-relaxed">Temporary festival architecture shouldn’t compromise on jaw-dropping awe. Arora Dorm mobile domes deploy with surgical precision, withstand punishing outdoor environments from desert sandstorms to coastal gusts, and provide a seamless 360-degree sonic and visual envelope that instantly commands any festival landscape.</p>
<div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-sm">
<Link className="inline-flex items-center gap-space-xs px-space-lg py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:brightness-110 shadow-[0_0_32px_rgba(123,140,222,0.45)] transition-all" data-path="start-a-project" href="/start-a-project">
<span className="">CREATE YOUR EVENT EXPERIENCE</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
<Link className="inline-flex items-center gap-space-xs px-space-md py-3.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all" data-path="industries" href="/industries">
<span className="">Explore Other Industries</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_outward</span>
</Link>
</div>
{/*  Quick Trust Indicators  */}
<div className="pt-space-md flex flex-wrap items-center justify-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
          Global Touring Fleet
        </div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
          Certified Wet-Stamped Engineering
        </div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">verified</span>
          On-Site Technical Showrunner
        </div>
</div>
</div>
</section>
</div>
</main>
    </div>
  );
}
