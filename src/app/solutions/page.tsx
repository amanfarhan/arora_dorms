"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen w-full overflow-x-hidden relative">
      {/*  BEGIN: HeroSection  */}
      <section
        className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden"
        data-purpose="hero-section"
      >
        {/*  Cinematic Full Cover Background Image: Monumental Geodesic Immersion Pavilion  */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Monumental geodesic immersion dome ecosystem pavilion on illuminated plaza featuring 360-degree bioluminescent fulldome projection"
            className="w-full h-full object-cover object-right md:object-center select-none"
            src="/images/solutions_hero_ecosystem_dome.jpg"
          />
          {/*  Layered Atmospheric Gradients for Text Legibility & Seamless Integration  */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/85 md:via-[#05070B]/60 to-transparent w-full md:w-3/5 lg:w-[54%] pointer-events-none"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#05070B]/90 via-[#05070B]/30 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/80 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-between flex-1">
          <div className="max-w-xl xl:max-w-2xl pt-6 lg:pt-10 pb-8">
            {/*  Eyebrow  */}
            <span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 mb-2.5 sm:mb-3">
              Our Solutions
            </span>

            {/*  Main Editorial Headline  */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-light font-editorial text-white leading-[1.05] tracking-tight mb-3 sm:mb-4">
              Complete Immersive
              <br />
              <span className="text-gradient-periwinkle font-normal drop-shadow-[0_0_25px_rgba(165,180,252,0.35)]">
                Dome Ecosystems.
              </span>
            </h1>

            {/*  Two-Line Supporting Subline  */}
            <p className="text-sm sm:text-base text-slate-300 font-light tracking-wide max-w-xl mb-5 sm:mb-6 leading-relaxed">
              Everything you need for a complete immersive dome experience.
              <br />
              Turnkey geodesic engineering, 360° projection, and bespoke content.
            </p>

            {/*  Action Buttons  */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-7">
              <a
                href="#solutions-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#93c5fd] hover:bg-[#bfdbfe] text-[#050b14] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(147,197,253,0.3)] group"
              >
                <span>Explore All Solutions</span>
                <svg className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
              <Link
                href="/start-a-project"
                className="group inline-flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors duration-200 text-xs font-medium py-2 sm:py-2.5 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md"
              >
                <span className="tracking-wide">Request Consultation</span>
              </Link>
            </div>
          </div>

          {/*  Feature Value Props Row  */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 pb-4 border-t border-white/10 mt-12"
            data-purpose="value-propositions"
          >
            {/*  Pillar 1  */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Turnkey Delivery</h4>
                <p className="text-xs text-slate-400 mt-0.5 font-light">Concept to opening night</p>
              </div>
            </div>

            {/*  Pillar 2  */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Modular Domes</h4>
                <p className="text-xs text-slate-400 mt-0.5 font-light">3M to 25M+ scalable</p>
              </div>
            </div>

            {/*  Pillar 3  */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Cinema 360° CGI</h4>
                <p className="text-xs text-slate-400 mt-0.5 font-light">Bespoke immersive stories</p>
              </div>
            </div>

            {/*  Pillar 4  */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">End-to-End Care</h4>
                <p className="text-xs text-slate-400 mt-0.5 font-light">24/7 technical monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  END: HeroSection  */}

      {/*  BEGIN: SolutionsGrid  */}
      <main
        id="solutions-grid"
        className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-28 relative z-20"
        data-purpose="solutions-grid-container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/*  ================= CARD 1: DOME INFRASTRUCTURE =================  */}
          <article className="solution-card bg-[#0b0f17]/95 border border-slate-800/80 hover:border-indigo-400/50 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.3)] rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md transition-all duration-300 group">
            <div>
              {/*  Feature Image Container with Floating Badge  */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/60 shadow-inner">
                <img
                  alt="Architectural Geodesic Dome Infrastructure"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/images/tech_dome_cutaway.jpg"
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-xl">
                  <svg
                    className="w-5 h-5 text-indigo-200"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    viewBox="0 0 24 24"
                  >
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
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-2.5 group-hover:text-indigo-200 transition-colors">
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
              <Link
                className="aurora-btn-primary px-6 py-2.5 text-xs font-semibold"
                href="/solutions/dome-infrastructure"
              >
                <span>Learn More</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                  <path d="M3 8h10"></path>
                  <path d="M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </article>

          {/*  ================= CARD 2: IMMERSIVE CONTENT =================  */}
          <article className="solution-card bg-[#0b0f17]/95 border border-slate-800/80 hover:border-indigo-400/50 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.3)] rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md transition-all duration-300 group">
            <div>
              {/*  Feature Image Container with Floating Badge  */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/60 shadow-inner">
                <img
                  alt="Immersive Content Canvas"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/images/content_cosmic_whale.jpg"
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-xl">
                  <svg
                    className="w-5 h-5 text-indigo-200 fill-indigo-200/20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <rect fill="none" height="16" rx="3" width="18" x="3" y="4"></rect>
                    <polygon fill="currentColor" points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
              </div>

              {/*  Card Header & Summary  */}
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-2.5 group-hover:text-indigo-200 transition-colors">
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
              <Link
                className="aurora-btn-primary px-6 py-2.5 text-xs font-semibold"
                href="/solutions/immersive-content"
              >
                <span>Explore Content</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                  <path d="M3 8h10"></path>
                  <path d="M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </article>

          {/*  ================= CARD 3: TECHNICAL SUPPORT =================  */}
          <article className="solution-card bg-[#0b0f17]/95 border border-slate-800/80 hover:border-indigo-400/50 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.3)] rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md transition-all duration-300 group">
            <div>
              {/*  Feature Image Container with Floating Badge  */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/60 shadow-inner">
                <img
                  alt="Technical Support"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/images/img_74e401401c4c.jpg"
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-xl">
                  <svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
              </div>

              {/*  Card Header & Summary  */}
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-2.5 group-hover:text-indigo-200 transition-colors">
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
              <Link
                className="aurora-btn-primary px-6 py-2.5 text-xs font-semibold"
                href="/solutions/technical-support"
              >
                <span>Learn More</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                  <path d="M3 8h10"></path>
                  <path d="M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </article>

          {/*  ================= CARD 4: END-TO-END DELIVERY =================  */}
          <article className="solution-card bg-[#0b0f17]/95 border border-slate-800/80 hover:border-indigo-400/50 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.3)] rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md transition-all duration-300 group">
            <div>
              {/*  Feature Image Container with Floating Badge  */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/60 shadow-inner">
                <img
                  alt="End-to-End Delivery"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/images/img_7594551a509b.jpg"
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-xl">
                  <svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
              </div>

              {/*  Card Header & Summary  */}
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-2.5 group-hover:text-indigo-200 transition-colors">
                End-to-End Delivery
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                From site assessment and dome specification to content curation, installation and ongoing support — we manage the entire journey.
              </p>

              {/*  Specifications / Capability Points  */}
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
                  <span className="text-xs sm:text-sm text-slate-300">Installation & setup</span>
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
              <Link
                className="aurora-btn-primary px-6 py-2.5 text-xs font-semibold"
                href="/solutions/end-to-end-delivery"
              >
                <span>Our Process</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                  <path d="M3 8h10"></path>
                  <path d="M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </main>
      {/*  END: SolutionsGrid  */}
    </div>
  );
}
