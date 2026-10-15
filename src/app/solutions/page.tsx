"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      
{/*  END: SiteNavigation  */}
{/*  BEGIN: HeroSection  */}
<section className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden" data-purpose="hero-overview">
{/*  Background Planet Earth & Nebula Projection (Positioned behind text and stretching right)  */}
<div className="absolute inset-y-0 right-0 w-full lg:w-3/4 pointer-events-none select-none z-0 opacity-80 lg:opacity-95 overflow-hidden">
<img  alt="Vast glowing cosmic Earth projection inside fulldome theater" className="w-full h-full object-cover object-center lg:object-right-top" src="/images/img_7c1c45f94e59.jpg" />
{/*  Soft gradient fading smoothly into deep midnight background on left and bottom  */}
<div className="absolute inset-0 bg-gradient-to-r from-[#030508] via-[#030508]/75 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-[#030508]/40"></div>
</div>
{/*  Content / Typography Container  */}
<div className="relative z-10 max-w-xl lg:max-w-2xl pt-6 lg:pt-12">
{/*  Eyebrow Subtitle  */}
<p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase mb-3.5">
        Our Solutions
      </p>
{/*  Main Headline  */}
<h1 className="text-4xl sm:text-5xl lg:text-[58px] font-medium tracking-tight text-white leading-[1.08] mb-5">
        Our Solutions
      </h1>
{/*  Supporting Editorial Copy  */}
<p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
        Everything you need for a complete immersive dome experience — under one accountable partner.
      </p>
</div>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: SolutionsGrid  */}
<main className="max-w-7xl mx-auto px-6 sm:px-8 pb-28 relative z-20" data-purpose="solutions-grid-container">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
{/*  ================= CARD 1: DOME INFRASTRUCTURE =================  */}
<article className="solution-card bg-[#0b0f17]/95 border border-slate-800/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md">
<div>
{/*  Feature Image Container with Floating Badge  */}
<div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/60 shadow-inner">
<img  alt="Architectural Geodesic Dome Infrastructure" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_097532e43a43.jpg" />
{/*  Top-Left Circular Wireframe Dome Icon Badge  */}
<div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-xl">
<svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24">
<path d="M3 19h18"></path>
<path d="M4 19a9 9 0 0 1 16 0"></path>
<path d="M6 19a6 6 0 0 1 12 0"></path>
<path d="M9 19a3 3 0 0 1 6 0"></path>
<path d="M12 10v9"></path>
<path d="M7.5 13.5L12 10l4.5 3.5"></path>
</svg>
</div>
</div>
{/*  Card Header & Summary  */}
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2.5">
            Dome Infrastructure
          </h2>
<p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
            Projection domes from 3m to 25m+ in diameter, including custom sizes and shapes engineered for your venue.
          </p>
{/*  Specifications / Capability Points  */}
<ul className="space-y-3.5 mb-8">
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="9"></circle>
<path d="M8 12h8"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">3m to 25m+ domes</span>
</li>
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<rect height="14" rx="2" width="14" x="5" y="5"></rect>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Custom sizes & shapes</span>
</li>
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M3 21h18M6 18l6-13 6 13M9 14h6"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Structural engineering</span>
</li>
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 2v3m0 14v3M2 12h3m14 0h3"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Projection system design & integration</span>
</li>
</ul>
</div>
{/*  Pill Action Button  */}
<div>
<a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8ea5f8] hover:bg-[#a0b4fb] text-[#050811] font-medium text-xs tracking-wide transition-all duration-200" href="#">
<span className="">Learn More</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
<path d="M3 8h10"></path>
<path d="M9 4l4 4-4 4"></path>
</svg>
</a>
</div>
</article>
{/*  ================= CARD 2: IMMERSIVE CONTENT =================  */}
<article className="solution-card bg-[#0b0f17]/95 border border-slate-800/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md">
<div>
{/*  Feature Image Container with Floating Badge  */}
<div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/60 shadow-inner">
<img  alt="Immersive Content" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_a060f6a43570.jpg" />
{/*  Top-Left Circular Play / Media Icon Badge  */}
<div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-xl">
<svg className="w-5 h-5 text-indigo-200 fill-indigo-200/20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
<rect fill="none" height="16" rx="3" width="18" x="3" y="4"></rect>
<polygon fill="currentColor" points="10 8 16 12 10 16 10 8"></polygon>
</svg>
</div>
</div>
{/*  Card Header & Summary  */}
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2.5">
            Immersive Content
          </h2>
<p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
            A growing library of world-class fulldome films, plus bespoke CGI content created for your specific theme, season or brand.
          </p>
{/*  Specifications / Capability Points  */}
<ul className="space-y-3.5 mb-8">
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Fulldome film library</span>
</li>
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Bespoke CGI content</span>
</li>
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="5"></circle>
<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Seasonal & themed content</span>
</li>
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M3 21h18M3 7v14M21 7v14M8 7V3h8v4"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Content for every industry</span>
</li>
</ul>
</div>
{/*  Pill Action Button  */}
<div>
<a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8ea5f8] hover:bg-[#a0b4fb] text-[#050811] font-medium text-xs tracking-wide transition-all duration-200" href="#">
<span className="">Explore Content</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
<path d="M3 8h10"></path>
<path d="M9 4l4 4-4 4"></path>
</svg>
</a>
</div>
</article>
{/*  ================= CARD 3: TECHNICAL SUPPORT =================  */}
<article className="solution-card bg-[#0b0f17]/95 border border-slate-800/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md">
<div>
{/*  Feature Image Container with Floating Badge  */}
<div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/60 shadow-inner">
<img  alt="Technical Support" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_74e401401c4c.jpg" />
{/*  Top-Left Circular Settings / Gear Icon Badge  */}
<div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-xl">
<svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
</div>
</div>
{/*  Card Header & Summary  */}
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2.5">
            Technical Support
          </h2>
<p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
            Our team doesn’t disappear after installation. We provide continuous on-the-ground support to keep every dome running at peak performance.
          </p>
{/*  Specifications / Capability Points  */}
<ul className="space-y-3.5 mb-8">
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Installation & setup</span>
</li>
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Ongoing on-site support</span>
</li>
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Performance optimization</span>
</li>
<li className="flex items-center gap-3.5">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Remote diagnostics & training</span>
</li>
</ul>
</div>
{/*  Pill Action Button  */}
<div>
<a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8ea5f8] hover:bg-[#a0b4fb] text-[#050811] font-medium text-xs tracking-wide transition-all duration-200" href="#">
<span className="">Learn More</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
<path d="M3 8h10"></path>
<path d="M9 4l4 4-4 4"></path>
</svg>
</a>
</div>
</article>
{/*  ================= CARD 4: END-TO-END DELIVERY =================  */}
<article className="solution-card bg-[#0b0f17]/95 border border-slate-800/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md">
<div>
{/*  Feature Image Container with Floating Badge  */}
<div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/60 shadow-inner">
<img  alt="End-to-End Delivery" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_7594551a509b.jpg" />
{/*  Top-Left Circular Stack / Ecosystem Icon Badge  */}
<div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-xl">
<svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
</div>
</div>
{/*  Card Header & Summary  */}
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2.5">
            End-to-End Delivery
          </h2>
<p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
            From site assessment and dome specification to content curation, installation and ongoing support — we manage the entire journey.
          </p>
{/*  Specifications / Capability Points (2-Column Grid for the 6 Delivery Milestones)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4 mb-8">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Site assessment</span>
</div>
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Dome specification</span>
</div>
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<polygon points="12 2 15 8.5 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 8.5 12 2"></polygon>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Content curation</span>
</div>
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Installation & commissioning</span>
</div>
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Training & handover</span>
</div>
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</span>
<span className="text-xs sm:text-sm text-slate-300">Ongoing support</span>
</div>
</div>
</div>
{/*  Pill Action Button  */}
<div>
<a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8ea5f8] hover:bg-[#a0b4fb] text-[#050811] font-medium text-xs tracking-wide transition-all duration-200" href="#">
<span className="">Our Process</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
<path d="M3 8h10"></path>
<path d="M9 4l4 4-4 4"></path>
</svg>
</a>
</div>
</article>
</div>
</main>
{/*  END: SolutionsGrid  */}



    </div>
  );
}
