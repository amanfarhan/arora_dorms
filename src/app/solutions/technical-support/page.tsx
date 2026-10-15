"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      <main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full">
{/*  Top Hero Section (Bleeding under translucent navbar with negative offset clearance)  */}
<section className="relative w-full -mt-20 pt-32 pb-24 md:pb-32 px-margin-mobile md:px-margin overflow-hidden bg-surface-container-lowest">
{/*  Atmospheric Ambient Glows  */}
<div className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none"></div>
<div className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[130px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Left Column: Copy & CTAs  */}
<div className="lg:col-span-7 flex flex-col z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md w-fit mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest">Technical Support</span>
</div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 tracking-tight leading-[1.1]">
          Reliable Performance. <br />
<span className="italic font-light text-primary">Seamless Experiences.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10">
          Our team supports your immersive dome beyond installation, helping keep your technology and experience performing as intended.
        </p>
{/*  CTAs & Micro Status Metric  */}
<div className="flex flex-wrap items-center gap-space-md mb-12">
<a className="inline-flex items-center gap-space-xs px-7 py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold shadow-[0_0_28px_rgba(123,140,222,0.35)] hover:bg-primary hover:text-on-primary transition-all duration-300" href="#support-process">
<span>Explore Support</span>
<span className="w-5 h-5 rounded-full bg-on-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</a>
<a className="inline-flex items-center gap-space-xs px-7 py-3.5 rounded-full bg-surface-container-high/90 text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-all duration-300" href="#contact-support">
<span>Talk to Our Team</span>
<span className="material-symbols-outlined text-secondary text-[18px]">headset_mic</span>
</a>
</div>
{/*  Technical Telemetry Badges Strip  */}
<div className="grid grid-cols-3 gap-4 pt-6 max-w-lg bg-surface-container/60 backdrop-blur-md rounded-2xl p-4 shadow-sm">
<div className="flex flex-col">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-wider">SLA Dispatch</span>
<span className="font-title-md text-title-md text-on-surface font-bold">&lt; 4 Hours</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Global rapid tier</span>
</div>
<div className="flex flex-col pl-4">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-wider">Calibration</span>
<span className="font-title-md text-title-md text-secondary font-bold">Sub-pixel</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Auto laser warp</span>
</div>
<div className="flex flex-col pl-4">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-wider">Uptime Rate</span>
<span className="font-title-md text-title-md text-on-surface font-bold">99.98%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Fleet telemetry</span>
</div>
</div>
</div>
{/*  Right Column: Cinematic Control Center Visual  */}
<div className="lg:col-span-5 relative mt-8 lg:mt-0">
<div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container-low group">
{/*  Glassmorphic Header Indicator  */}
<div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between px-4 py-2.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-lg">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Operations Console • Node #08</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono">LIVE LINK</span>
</div>
{/*  Hero Image  */}
<div className="aspect-[4/5] w-full overflow-hidden">
<img alt="Male technical engineer in silhouette working at a modern control console in a dark dome theater control room" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="/images/img_74e401401c4c.jpg"/>
</div>
{/*  Subtle Scrim for Depth  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80 pointer-events-none"></div>
{/*  Inset Realtime Status Card  */}
<div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-xl bg-surface-container/90 backdrop-blur-md shadow-lg flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">monitor_heart</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Active Diagnostics</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Projector rigs synced • 4K 120fps</span>
</div>
</div>
<span className="material-symbols-outlined text-primary text-[20px]">verified</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 1: Support Beyond Installation  */}
<section className="w-full py-24 md:py-32 px-margin-mobile md:px-margin bg-surface relative">
<div className="max-w-[1440px] mx-auto flex flex-col">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest mb-3 block">Lifecycle Continuity</span>
<h2 className="font-headline-md md:text-headline-lg text-headline-md text-on-surface">Support Beyond Installation</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          A dependable immersive experience relies on meticulous, continuous engineering oversight long after opening night.
        </p>
</div>
{/*  4 Visual Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Card 1: Installation & Setup  */}
<div className="group flex flex-col bg-surface-container rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
<div className="relative h-60 w-full overflow-hidden bg-surface-container-lowest">
<img alt="Cinema dome projector lens and high-tech optical laser projection rig in dark moody atmosphere" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="/images/img_16339af8ae65.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">build_circle</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-wider block mb-2">Stage 01</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Installation & Setup</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                Onsite optical convergence, sub-millimeter geometric warping, screen baffle tensioning, and precision show commissioning.
              </p>
</div>
<div className="flex items-center gap-2 pt-4 font-label-sm text-label-sm text-secondary">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Full optical alignment</span>
</div>
</div>
</div>
{/*  Card 2: Ongoing Onsite Support  */}
<div className="group flex flex-col bg-surface-container rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
<div className="relative h-60 w-full overflow-hidden bg-surface-container-lowest">
<img alt="Engineer working at dark dome theater console with multi monitors" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="/images/img_74e401401c4c.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-wider block mb-2">Stage 02</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Ongoing Onsite Support</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                Dedicated venue engineers, quarterly structural audits, and scheduled preventative maintenance cycles to prevent downtime.
              </p>
</div>
<div className="flex items-center gap-2 pt-4 font-label-sm text-label-sm text-secondary">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
<span>Dedicated field crew</span>
</div>
</div>
</div>
{/*  Card 3: Performance Optimization  */}
<div className="group flex flex-col bg-surface-container rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
<div className="relative h-60 w-full overflow-hidden bg-surface-container-lowest">
<img alt="Cinematic architectural cutaway photograph of high-tech modern dome pavilion structure at night" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="/images/img_7c19872d6d7a.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">tune</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-wider block mb-2">Stage 03</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Performance Tuning</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                Continuous telemetry monitoring, laser phosphor lifespan checks, color gamut recalibration, and automated server health logs.
              </p>
</div>
<div className="flex items-center gap-2 pt-4 font-label-sm text-label-sm text-secondary">
<span className="material-symbols-outlined text-[16px]">auto_graph</span>
<span>Continuous calibration</span>
</div>
</div>
</div>
{/*  Card 4: Training & Technical Guidance  */}
<div className="group flex flex-col bg-surface-container rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
<div className="relative h-60 w-full overflow-hidden bg-surface-container-lowest">
<img alt="Interior of immersive dome production studio with operator at desk and cosmic CGI jellyfish on dome screen" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="/images/img_30c1e1fa482f.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">school</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow justify-between">
<div>
<span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-wider block mb-2">Stage 04</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Training & Guidance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                Comprehensive staff onboarding, control system master runbooks, emergency failover protocols, and 24/7 operator hotline access.
              </p>
</div>
<div className="flex items-center gap-2 pt-4 font-label-sm text-label-sm text-secondary">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
<span>Venue runbooks included</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 2: Keep Every Layer Working Together (Technical Diagram & Architecture)  */}
<section className="w-full py-24 md:py-32 px-margin-mobile md:px-margin bg-surface-container-lowest relative overflow-hidden">
{/*  Radiant background atmosphere  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto flex flex-col relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest mb-3 block">Integrated System Architecture</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Keep Every Layer Working Together
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Immersive dome venues thrive when mechanical infrastructure, optical hardware, high-bitrate media servers, and operations orchestrate in absolute synchrony.
        </p>
</div>
{/*  Cutaway Centerpiece with Floating Architecture Strata  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Technical Spec Cards: Left Column (Infrastructure & Projection)  */}
<div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
{/*  Layer 1  */}
<div className="p-6 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl shadow-lg relative group transition-all duration-300 hover:bg-surface-container">
<div className="flex items-center justify-between mb-2">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-wider">Layer 01 • Physical Shell</span>
<span className="material-symbols-outlined text-primary text-[20px]">architecture</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-2">Dome Infrastructure</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Geodesic architectural truss rigging, negative-pressure perforated screen membrane, microclimate HVAC thermal balancing, and acoustic absorption baffling.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Negative-Pressure Mesh</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">HVAC Stabilized</span>
</div>
</div>
{/*  Layer 2  */}
<div className="p-6 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl shadow-lg relative group transition-all duration-300 hover:bg-surface-container">
<div className="flex items-center justify-between mb-2">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-wider">Layer 02 • Optics & Laser</span>
<span className="material-symbols-outlined text-secondary text-[20px]">videocam</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-2">Projection Systems</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Multi-channel high-lumen pure RGB laser projector arrays, continuous automated edge blending, and real-time GPU-driven warping calibration rigs.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">RGB Pure Laser</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Auto-Blend Engine</span>
</div>
</div>
</div>
{/*  Center 3D Cutaway Architectural Visual  */}
<div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center">
<div className="relative w-full rounded-3xl overflow-hidden bg-surface-container-lowest p-2 shadow-2xl">
<div className="relative aspect-square w-full rounded-2xl overflow-hidden">
<img alt="Clean 3D architectural cutaway diagram and photograph of an immersive dome structure on pitch black background" className="w-full h-full object-cover object-center" src="/images/img_f5c1f9921dc9.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
</div>
{/*  Central Hub Status Pill  */}
<div className="mt-4 py-3 px-4 rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface">Integrated Orchestration</span>
</div>
<span className="font-mono text-label-sm text-primary">SYNC_OK (0.1ms)</span>
</div>
</div>
</div>
{/*  Technical Spec Cards: Right Column (Content & Operations)  */}
<div className="lg:col-span-4 flex flex-col gap-6 order-3">
{/*  Layer 3  */}
<div className="p-6 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl shadow-lg relative group transition-all duration-300 hover:bg-surface-container">
<div className="flex items-center justify-between mb-2">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-wider">Layer 03 • Real-Time Engine</span>
<span className="material-symbols-outlined text-primary text-[20px]">movie</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-2">Content Playback</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Uncompressed 8K media rendering cluster, 32-channel spatialized ambisonic audio pipelines, SMPTE timecode sync, and interactive master cue engines.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">8K Master Rig</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Spatial Ambisonics</span>
</div>
</div>
{/*  Layer 4  */}
<div className="p-6 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl shadow-lg relative group transition-all duration-300 hover:bg-surface-container">
<div className="flex items-center justify-between mb-2">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-wider">Layer 04 • Supervision</span>
<span className="material-symbols-outlined text-secondary text-[20px]">terminal</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-2">Venue Operations</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Single-touch show startup/shutdown control consoles, automated cloud telemetry relays, continuous thermal tracking, and preventative hardware alert bots.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">One-Touch Start</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Remote Telemetry</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 3: A Clear Support Process  */}
<section className="w-full py-24 md:py-32 px-margin-mobile md:px-margin bg-surface relative" id="support-process">
<div className="max-w-[1440px] mx-auto flex flex-col">
<div className="max-w-2xl mb-16">
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest mb-3 block">Resolution Lifecycle</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">A Clear Support Process</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Predictable, structured, and fast. Every incident or maintenance event follows our certified 4-phase protocol to guarantee dome uptime.
        </p>
</div>
{/*  4 Horizontal Process Step Nodes  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
{/*  Step 01  */}
<div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between shadow-sm relative group hover:bg-surface-container-high transition-all duration-300">
<div>
<div className="flex items-center justify-between mb-6">
<span className="font-headline-md text-headline-md text-primary font-serif">01</span>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">sensors</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-3">Assess</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Continuous automated telemetry logging, rapid issue intake, and immediate incident severity categorization by Tier-3 support engineers.
            </p>
</div>
<div className="pt-6 mt-6 border-t-0 bg-surface-container-low/50 -mx-8 -mb-8 p-4 rounded-b-2xl flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">Intake SLA</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">&lt; 15 Minutes</span>
</div>
</div>
{/*  Step 02  */}
<div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between shadow-sm relative group hover:bg-surface-container-high transition-all duration-300">
<div>
<div className="flex items-center justify-between mb-6">
<span className="font-headline-md text-headline-md text-primary font-serif">02</span>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">manage_search</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-3">Diagnose</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Secure remote telemetry inspection, sensor log correlation, and hardware diagnostic isolation to determine sub-assembly root cause.
            </p>
</div>
<div className="pt-6 mt-6 border-t-0 bg-surface-container-low/50 -mx-8 -mb-8 p-4 rounded-b-2xl flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">Root-Cause Target</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">94% First Run</span>
</div>
</div>
{/*  Step 03  */}
<div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between shadow-sm relative group hover:bg-surface-container-high transition-all duration-300">
<div>
<div className="flex items-center justify-between mb-6">
<span className="font-headline-md text-headline-md text-primary font-serif">03</span>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">bolt</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-3">Resolve</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Targeted remote cloud patch execution, optic recalculation, or rapid dispatch of factory-certified field engineers with redundant spare parts.
            </p>
</div>
<div className="pt-6 mt-6 border-t-0 bg-surface-container-low/50 -mx-8 -mb-8 p-4 rounded-b-2xl flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">Action Window</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Immediate / &lt;4h</span>
</div>
</div>
{/*  Step 04  */}
<div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between shadow-sm relative group hover:bg-surface-container-high transition-all duration-300">
<div>
<div className="flex items-center justify-between mb-6">
<span className="font-headline-md text-headline-md text-primary font-serif">04</span>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">published_with_changes</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-3">Review</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Post-incident analysis, system verification calibration, preventative tuning, and runbook updates to prevent duplicate recurrence.
            </p>
</div>
<div className="pt-6 mt-6 border-t-0 bg-surface-container-low/50 -mx-8 -mb-8 p-4 rounded-b-2xl flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">Verification</span>
<span className="font-label-sm text-label-sm text-primary font-medium">Certified Audit</span>
</div>
</div>
</div>
</div>
</section>
{/*  FINAL CTA SECTION  */}
<section className="w-full py-24 md:py-32 px-margin-mobile md:px-margin bg-surface-container-lowest relative overflow-hidden" id="contact-support">
{/*  Diffuse backdrop ambient glow  */}
<div className="absolute bottom-0 right-1/3 w-[800px] h-[400px] bg-primary/10 blur-[180px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto rounded-3xl bg-surface-container/70 backdrop-blur-2xl p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
{/*  Copy Column  */}
<div className="lg:col-span-8 flex flex-col">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high w-fit mb-6">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest">Global Support Coverage</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 leading-tight">
            Let's Keep Your Experience Running.
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Tell us about your installation and technical support requirements. Whether commissioning a new multi-channel dome or taking over maintenance for an existing venue, our specialized team is ready.
          </p>
{/*  Interactive Action Buttons  */}
<div className="flex flex-wrap items-center gap-space-md">
<a className="inline-flex items-center gap-space-xs px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold shadow-[0_0_24px_rgba(123,140,222,0.4)] hover:bg-primary hover:text-on-primary transition-all duration-300" href="mailto:support@auroradomes.com">
<span>Discuss Support</span>
<span className="w-6 h-6 rounded-full bg-on-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</a>
<div className="flex items-center gap-3 px-4 py-2 rounded-full bg-surface-container-high/60 backdrop-blur-md">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">24/7 Priority Desk Active</span>
</div>
</div>
</div>
{/*  Quick Spec Box Column  */}
<div className="lg:col-span-4 mt-8 lg:mt-0">
<div className="p-6 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md flex flex-col gap-4 shadow-inner">
<span className="font-label-eyebrow text-label-eyebrow text-outline uppercase tracking-wider">Direct Operational Contacts</span>
<div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container/50">
<span className="material-symbols-outlined text-primary text-[20px]">headset_mic</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Priority Operations Line</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">+1 (800) 492-3663 (Ext 4)</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container/50">
<span className="material-symbols-outlined text-secondary text-[20px]">cloud_sync</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Telemetry & Diagnostics</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">telemetry.auroradomes.net</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container/50">
<span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Field Engineer Response</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Global deployment hubs</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div></main>
    </div>
  );
}
