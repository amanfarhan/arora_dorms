"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      
{/*  END: MainHeader  */}
{/*  BEGIN: HeroSection  */}
<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" data-purpose="hero-section">
{/*  Ambient Background Light  */}
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-lavender/10 blur-[130px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
{/*  Left Hero Content  */}
<div className="lg:col-span-5 flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-brand-lavender"></span>
<span className="text-[11px] uppercase tracking-[0.2em] text-slate-300 font-medium">Technology & Dome Systems</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-white mb-6">
            Precision Engineering for <span className="italic text-brand-lavender font-light">Immersive Worlds.</span>
</h1>
<p className="text-base text-slate-300 leading-relaxed font-light mb-8 max-w-lg">
            From structural design to projection mapping, our dome systems are engineered to deliver unmatched visual clarity, scalability and reliability — in any space.
          </p>
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-semibold bg-brand-lavender text-black hover:bg-brand-lavenderHover transition-all duration-200" href="#size-options">
            Explore Our Technology
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
{/*  Center Large Visual: Dome Cutaway  */}
<div className="lg:col-span-4 relative flex justify-center">
<div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[220px_220px_24px_24px] overflow-hidden border border-white/20 shadow-2xl bg-brand-deep">
{/*  Full Dome Projection Visual  */}
<img  alt="Ultra-realistic geodesic immersive projection dome theater with Earth and cosmic projection" className="w-full h-full object-cover object-center scale-105" src="/images/img_4610b4ecc1b3.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
</div>
</div>
{/*  Right Side Features Column  */}
<div className="lg:col-span-3 flex flex-col gap-6" data-purpose="hero-side-features">
{/*  Feature Item 1  */}
<div className="flex items-start gap-4 group">
<div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-brand-lavender shrink-0 group-hover:border-brand-lavender transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="text-xs uppercase font-semibold tracking-wider text-white">Content</h3>
<p className="text-xs text-slate-400 font-light mt-0.5">Fulldome films & bespoke CGI</p>
</div>
</div>
{/*  Feature Item 2  */}
<div className="flex items-start gap-4 group">
<div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-brand-lavender shrink-0 group-hover:border-brand-lavender transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="text-xs uppercase font-semibold tracking-wider text-white">Projection</h3>
<p className="text-xs text-slate-400 font-light mt-0.5">Cinema-grade projection systems</p>
</div>
</div>
{/*  Feature Item 3  */}
<div className="flex items-start gap-4 group">
<div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-brand-lavender shrink-0 group-hover:border-brand-lavender transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="text-xs uppercase font-semibold tracking-wider text-white">Dome Structure</h3>
<p className="text-xs text-slate-400 font-light mt-0.5">Engineered for any space</p>
</div>
</div>
{/*  Feature Item 4  */}
<div className="flex items-start gap-4 group">
<div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-brand-lavender shrink-0 group-hover:border-brand-lavender transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="text-xs uppercase font-semibold tracking-wider text-white">Support Systems</h3>
<p className="text-xs text-slate-400 font-light mt-0.5">Installation, monitoring and ongoing support</p>
</div>
</div>
</div>
</div>
{/*  Hero Bottom 4 Horizontal Metric Badges  */}
<div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6" data-purpose="hero-stats">
{/*  Stat Badge 1  */}
<div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
<div className="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-brand-lavender">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<div className="text-xs font-semibold tracking-wide text-white uppercase">3M → 25M+</div>
<div className="text-[11px] text-slate-400">Wide range of dome sizes</div>
</div>
</div>
{/*  Stat Badge 2  */}
<div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
<div className="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-brand-lavender">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<div className="text-xs font-semibold tracking-wide text-white uppercase">Custom Designs</div>
<div className="text-[11px] text-slate-400">Any shape for any space</div>
</div>
</div>
{/*  Stat Badge 3  */}
<div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
<div className="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-brand-lavender">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<div className="text-xs font-semibold tracking-wide text-white uppercase">Cinema-Grade</div>
<div className="text-[11px] text-slate-400">Projection & clarity</div>
</div>
</div>
{/*  Stat Badge 4  */}
<div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
<div className="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-brand-lavender">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<div className="text-xs font-semibold tracking-wide text-white uppercase">End-to-End Support</div>
<div className="text-[11px] text-slate-400">From install to ongoing care</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: DomeSizesSection  */}
<section className="py-24 border-t border-white/5 relative bg-[#090c12]" data-purpose="dome-sizes" id="size-options">
<div className="max-w-7xl mx-auto px-6">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-[11px] uppercase tracking-[0.25em] text-brand-lavender font-semibold block mb-2">Scalable to Your Vision</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight">Dome Sizes from 3M to 25M+</h2>
<p className="text-sm text-slate-300 font-light mt-3 max-w-xl">
            Whether you need a compact pop-up dome or a large custom structure, we engineer each dome to fit your space, audience and experience goals.
          </p>
</div>
<div>
<Link className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium bg-brand-lavender text-black hover:bg-brand-lavenderHover transition-colors" href="/start-a-project">
            View Size Options
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</Link>
</div>
</div>
{/*  Size Progression Row: Geodesic Spheres 3M to 25M+  */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-end">
{/*  3M Dome  */}
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-full border border-sky-400/40 relative overflow-hidden bg-gradient-to-t from-sky-900/60 to-black/80 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-lg shadow-sky-500/10"><img  alt="3M Geodesic Dome Structure" className="absolute inset-0 w-full h-full object-cover" src="/images/img_bfe338b3bf8a.jpg" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div><span className="text-xs font-mono font-medium text-white z-10 drop-shadow">3M</span></div>
<h3 className="text-sm font-semibold text-white">3M</h3>
<p className="text-[11px] text-slate-400 mt-1">Pop-up experiences<br /><span className="text-slate-500">Small venues</span></p>
</div>
{/*  5M Dome  */}
<div className="flex flex-col items-center text-center group">
<div className="w-28 h-28 rounded-full border border-blue-400/40 relative overflow-hidden bg-gradient-to-t from-blue-900/60 to-black/80 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-lg shadow-blue-500/15"><img  alt="5M Event Immersive Dome" className="absolute inset-0 w-full h-full object-cover" src="/images/img_d960facf5100.jpg" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div><span className="text-xs font-mono font-medium text-white z-10 drop-shadow">5M</span></div>
<h3 className="text-sm font-semibold text-white">5M</h3>
<p className="text-[11px] text-slate-400 mt-1">Events & activations<br /><span className="text-slate-500">Portable setups</span></p>
</div>
{/*  10M Dome  */}
<div className="flex flex-col items-center text-center group">
<div className="w-36 h-36 rounded-full border border-purple-400/40 relative overflow-hidden bg-gradient-to-t from-purple-950/70 to-black/80 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-xl shadow-purple-500/20"><img  alt="10M Immersive Dining Dome" className="absolute inset-0 w-full h-full object-cover" src="/images/img_b720cbffa279.jpg" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div><span className="text-sm font-mono font-semibold text-white z-10 drop-shadow">10M</span></div>
<h3 className="text-sm font-semibold text-white">10M</h3>
<p className="text-[11px] text-slate-400 mt-1">Immersive dining<br /><span className="text-slate-500">Wellness spaces</span></p>
</div>
{/*  15M Dome  */}
<div className="flex flex-col items-center text-center group">
<div className="w-44 h-44 rounded-full border border-emerald-400/40 relative overflow-hidden bg-gradient-to-t from-emerald-950/70 to-black/80 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-xl shadow-emerald-500/20"><img  alt="15M Planetarium Theater Dome" className="absolute inset-0 w-full h-full object-cover" src="/images/img_45ffaf4be328.jpg" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div><span className="text-sm font-mono font-semibold text-white z-10 drop-shadow">15M</span></div>
<h3 className="text-sm font-semibold text-white">15M</h3>
<p className="text-[11px] text-slate-400 mt-1">Museums & attractions<br /><span className="text-slate-500">Mid-sized venues</span></p>
</div>
{/*  25M+ Dome  */}
<div className="flex flex-col items-center text-center col-span-2 md:col-span-1 group">
<div className="w-52 h-52 rounded-full border border-brand-lavender/50 relative overflow-hidden bg-gradient-to-t from-indigo-950/80 to-black/90 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-2xl shadow-indigo-500/30"><img  alt="25M+ Flagship Immersive Dome Theater" className="absolute inset-0 w-full h-full object-cover" src="/images/img_2a0879ada5db.jpg" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div><span className="text-base font-mono font-bold text-white z-10 drop-shadow">25M+</span></div>
<h3 className="text-sm font-semibold text-white">25M+</h3>
<p className="text-[11px] text-slate-400 mt-1">Flagship destinations<br /><span className="text-slate-500">Custom footprint</span></p>
</div>
</div>
</div>
</section>
{/*  END: DomeSizesSection  */}
{/*  BEGIN: ProjectionSystemsSection  */}
<section className="py-24 border-t border-white/5 relative bg-[#07090e]" data-purpose="projection-systems">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
{/*  Left Visual: Projector Array in Dome  */}
<div className="lg:col-span-6 relative">
<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-brand-surface shadow-2xl group">
<img  alt="Cinema-Grade Projection Mapping Rig" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" src="/images/img_16339af8ae65.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
</div>
</div>
{/*  Right Text Content & Badges  */}
<div className="lg:col-span-6 flex flex-col justify-center">
<span className="text-[11px] uppercase tracking-[0.25em] text-brand-lavender font-semibold block mb-3">Projection Systems</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Cinema-Grade<br />Projection Mapping
          </h2>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-8 max-w-lg">
            Our advanced projection systems deliver seamless, high-resolution 360° visuals with exceptional brightness, colour accuracy and clarity.
          </p>
{/*  4 Spec Badges  */}
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-lavender/10 border border-brand-lavender/20 flex items-center justify-center text-brand-lavender shrink-0">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-200">Multi-projector calibration</span>
</div>
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-lavender/10 border border-brand-lavender/20 flex items-center justify-center text-brand-lavender shrink-0">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-200">Edge blending technology</span>
</div>
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-lavender/10 border border-brand-lavender/20 flex items-center justify-center text-brand-lavender shrink-0">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-200">High-resolution dome mapping</span>
</div>
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-lavender/10 border border-brand-lavender/20 flex items-center justify-center text-brand-lavender shrink-0">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-200">Optimized for fulldome content</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: ProjectionSystemsSection  */}
{/*  BEGIN: StructuralEngineeringSection  */}
<section className="py-24 border-t border-white/5 relative bg-[#090c12]" data-purpose="structural-engineering">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
{/*  Left Side Content  */}
<div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
<span className="text-[11px] uppercase tracking-[0.25em] text-brand-lavender font-semibold block mb-3">Structural Engineering</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
            Built for Any Space.<br />Engineered for Performance.
          </h2>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-8 max-w-lg">
            Our domes are designed with precision engineering and high-quality materials, ensuring durability, safety and optimal projection performance in any environment.
          </p>
{/*  4 Feature Badges  */}
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-lavender/10 border border-brand-lavender/20 flex items-center justify-center text-brand-lavender shrink-0">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-200">Custom sizes & shapes</span>
</div>
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-lavender/10 border border-brand-lavender/20 flex items-center justify-center text-brand-lavender shrink-0">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-200">Durable & lightweight materials</span>
</div>
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-lavender/10 border border-brand-lavender/20 flex items-center justify-center text-brand-lavender shrink-0">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-200">Indoor & outdoor options</span>
</div>
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-lavender/10 border border-brand-lavender/20 flex items-center justify-center text-brand-lavender shrink-0">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-200">Engineered for projection</span>
</div>
</div>
<Link className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium bg-brand-lavender text-black hover:bg-brand-lavenderHover transition-colors w-fit" href="/start-a-project">
            Learn About Dome Structure
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</Link>
</div>
{/*  Right Side Visual: Geodesic Steel Lattice Dome Framework  */}
<div className="lg:col-span-6 relative order-1 lg:order-2">
<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-brand-surface shadow-2xl group">
<img  alt="Geodesic Dome Metal Frame Truss Structure" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" src="/images/img_bfe338b3bf8a.jpg" />
<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/30"></div>
</div>
</div>
</div>
</div>
</section>
{/*  END: StructuralEngineeringSection  */}
{/*  BEGIN: IntegratedSystemLayersSection  */}
<section className="py-24 border-t border-white/5 relative bg-[#07090e]" data-purpose="integrated-dome-system">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
{/*  Left Side: Exploded 3D Architectural Dome Layer Model  */}
<div className="lg:col-span-6 relative flex justify-center">
<div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden border border-white/10 bg-brand-surface p-4 flex items-center justify-center shadow-2xl">
<img  alt="Integrated Dome System Architecture" className="w-full h-full object-cover rounded-xl" src="/images/img_2d8ff5bd48a3.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
<div>
<span className="text-[10px] uppercase font-mono tracking-widest text-brand-lavender block">Engineering Schematic</span>
<span className="text-xs font-semibold text-white">Full-Stack Integrated Architecture</span>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
</div>
</div>
</div>
{/*  Right Side: 5 Layer Steps with Connecting Vertical Track  */}
<div className="lg:col-span-6 flex flex-col justify-center">
<span className="text-[11px] uppercase tracking-[0.25em] text-brand-lavender font-semibold block mb-3">The Dome System</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-4">
            A Complete, Integrated System.
          </h2>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-10 max-w-lg">
            Every layer works together to create a flawless immersive experience.
          </p>
{/*  Layer List  */}
<div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-px before:bg-white/15">
{/*  Step 01  */}
<div className="relative flex items-start gap-4 group">
<div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#07090e] border-2 border-brand-lavender group-hover:bg-brand-lavender transition-colors"></div>
<div>
<div className="flex items-center gap-3">
<span className="text-xs font-mono font-bold text-brand-lavender">01</span>
<h3 className="text-xs uppercase font-bold tracking-wider text-white">Content Layer</h3>
</div>
<p className="text-xs text-slate-400 mt-1 font-light">Fulldome films & bespoke CGI content</p>
</div>
</div>
{/*  Step 02  */}
<div className="relative flex items-start gap-4 group">
<div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#07090e] border-2 border-brand-lavender group-hover:bg-brand-lavender transition-colors"></div>
<div>
<div className="flex items-center gap-3">
<span className="text-xs font-mono font-bold text-brand-lavender">02</span>
<h3 className="text-xs uppercase font-bold tracking-wider text-white">Projection System</h3>
</div>
<p className="text-xs text-slate-400 mt-1 font-light">Multi-projector setup with edge blending</p>
</div>
</div>
{/*  Step 03  */}
<div className="relative flex items-start gap-4 group">
<div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#07090e] border-2 border-brand-lavender group-hover:bg-brand-lavender transition-colors"></div>
<div>
<div className="flex items-center gap-3">
<span className="text-xs font-mono font-bold text-brand-lavender">03</span>
<h3 className="text-xs uppercase font-bold tracking-wider text-white">Structure</h3>
</div>
<p className="text-xs text-slate-400 mt-1 font-light">Engineered dome frame and surface</p>
</div>
</div>
{/*  Step 04  */}
<div className="relative flex items-start gap-4 group">
<div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#07090e] border-2 border-brand-lavender group-hover:bg-brand-lavender transition-colors"></div>
<div>
<div className="flex items-center gap-3">
<span className="text-xs font-mono font-bold text-brand-lavender">04</span>
<h3 className="text-xs uppercase font-bold tracking-wider text-white">Technical Systems</h3>
</div>
<p className="text-xs text-slate-400 mt-1 font-light">Power, control, cooling and monitoring</p>
</div>
</div>
{/*  Step 05  */}
<div className="relative flex items-start gap-4 group">
<div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#07090e] border-2 border-brand-lavender group-hover:bg-brand-lavender transition-colors"></div>
<div>
<div className="flex items-center gap-3">
<span className="text-xs font-mono font-bold text-brand-lavender">05</span>
<h3 className="text-xs uppercase font-bold tracking-wider text-white">Base & Accessories</h3>
</div>
<p className="text-xs text-slate-400 mt-1 font-light">Seating, entry, flooring and custom elements</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: IntegratedSystemLayersSection  */}
{/*  BEGIN: SupportProcessSection  */}
<section className="py-24 border-t border-white/5 relative bg-[#090c12]" data-purpose="installation-and-support">
<div className="max-w-7xl mx-auto px-6">
{/*  Section Intro & CTA Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-[11px] uppercase tracking-[0.25em] text-brand-lavender font-semibold block mb-2">Installation & Technical Support</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
            With You from<br />Setup to Every Show.
          </h2>
<p className="text-sm text-slate-300 font-light mt-4 max-w-xl">
            Our team manages the entire installation process and provides ongoing onsite technical support to ensure your dome runs at peak performance — always.
          </p>
</div>
<div>
<Link className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium bg-brand-lavender text-black hover:bg-brand-lavenderHover transition-colors" href="/start-a-project">
            Our Support Process
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</Link>
</div>
</div>
{/*  3 Pillar Process Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Card 1: Installation & Setup  */}
<div className="rounded-2xl overflow-hidden bg-brand-surface border border-white/10 group hover:border-brand-lavender/40 transition-colors flex flex-col">
<div className="aspect-[4/3] overflow-hidden relative">
<img  alt="Installation & Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_bfe338b3bf8a.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lavender mb-4">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-white mb-1.5">Installation & Setup</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Professional installation by our expert team.
              </p>
</div>
</div>
</div>
{/*  Card 2: Ongoing Support  */}
<div className="rounded-2xl overflow-hidden bg-brand-surface border border-white/10 group hover:border-brand-lavender/40 transition-colors flex flex-col">
<div className="aspect-[4/3] overflow-hidden relative">
<img  alt="Ongoing Support Control Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_74e401401c4c.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lavender mb-4">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-white mb-1.5">Ongoing Support</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Onsite or remote support to keep your dome running flawlessly.
              </p>
</div>
</div>
</div>
{/*  Card 3: Training & Handover  */}
<div className="rounded-2xl overflow-hidden bg-brand-surface border border-white/10 group hover:border-brand-lavender/40 transition-colors flex flex-col">
<div className="aspect-[4/3] overflow-hidden relative">
<img  alt="Training & Handover Specialist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_30c1e1fa482f.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lavender mb-4">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-white mb-1.5">Training & Handover</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Complete training for your team.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: SupportProcessSection  */}
{/*  BEGIN: MainFooter  */}

    </div>
  );
}
