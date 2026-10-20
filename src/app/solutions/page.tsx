"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [showFullSpecs, setShowFullSpecs] = useState(false);

  const domeScales = [
    {
      id: "intimate",
      name: "Intimate Pavilion",
      diameter: "5m – 8m",
      diameterFt: "16ft – 26ft",
      capacity: "10 – 40 Guests",
      setupTime: "4 – 8 Hours",
      height: "3.2m – 4.5m",
      area: "20 – 50 m²",
      projection: "Single or Dual 4K Laser Matrix",
      audio: "7.1 Immersive Spatial Sound",
      idealFor: "VIP dining, private brand pop-ups, luxury suites, and VR art installations.",
      image: "/images/dining_immersive_dome.jpg",
      badge: "Portable & Rapid Deploy",
      highlight: false,
    },
    {
      id: "modular",
      name: "Modular Amphitheater",
      diameter: "10m – 16m",
      diameterFt: "33ft – 52ft",
      capacity: "60 – 220 Guests",
      setupTime: "1 – 2 Days",
      height: "5.5m – 8.5m",
      area: "78 – 200 m²",
      projection: "4 to 6 Blended 6K–8K Laser Arrays",
      audio: "16.2 Ambisonic Spatial Audio",
      idealFor: "Music festivals, science centers, corporate summits, and touring exhibits.",
      image: "/images/entertainment_marine_dome.jpg",
      badge: "Most Popular Scale",
      highlight: true,
    },
    {
      id: "monumental",
      name: "Monumental Destination",
      diameter: "18m – 30m+",
      diameterFt: "59ft – 100ft+",
      capacity: "250 – 850+ Guests",
      setupTime: "Permanent Architectural",
      height: "10m – 17m+",
      area: "254 – 700+ m²",
      projection: "8 to 14 Laser Array (10K+ Native)",
      audio: "32-Channel Spatial Soundstage + Sub-Bass Floor",
      idealFor: "Theme park flagship attractions, planetariums, and year-round civic landmarks.",
      image: "/images/about_hero_monumental_dome.jpg",
      badge: "Landmark Architecture",
      highlight: false,
    },
  ];

  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen w-full overflow-x-hidden relative">
      {/* ========================================================================= */}
      {/* BEGIN: HeroSection */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden"
        data-purpose="hero-section"
      >
        {/* Cinematic Full Cover Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Monumental geodesic immersion dome ecosystem pavilion on illuminated plaza featuring 360-degree bioluminescent fulldome projection"
            className="w-full h-full object-cover object-right md:object-center select-none"
            src="/images/solutions_hero_ecosystem_dome.jpg"
          />
          {/* Layered Atmospheric Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/85 md:via-[#05070B]/65 to-transparent w-full md:w-3/5 lg:w-[54%] pointer-events-none"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#05070B]/90 via-[#05070B]/30 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/80 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-between flex-1">
          <div className="max-w-xl xl:max-w-2xl pt-6 lg:pt-10 pb-8">
            {/* Eyebrow */}
            <span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 mb-2.5 sm:mb-3">
              Our Solutions
            </span>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-light font-editorial text-white leading-[1.05] tracking-tight mb-3 sm:mb-4">
              Complete Immersive
              <br />
              <span className="text-gradient-periwinkle font-normal drop-shadow-[0_0_25px_rgba(165,180,252,0.35)]">
                Dome Ecosystems.
              </span>
            </h1>

            {/* Two-Line Supporting Subline */}
            <p className="text-sm sm:text-base text-slate-300 font-light tracking-wide max-w-xl mb-5 sm:mb-6 leading-relaxed">
              Everything you need for a turnkey immersive dome destination.
              <br />
              Precision geodesic engineering, 360° projection, and bespoke CGI.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-7">
              <a
                href="#solutions-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#93c5fd] hover:bg-[#bfdbfe] text-[#050b14] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(147,197,253,0.3)] group"
              >
                <span>Explore Solutions</span>
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

          {/* Feature Value Props Row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 pb-4 border-t border-white/10 mt-10"
            data-purpose="value-propositions"
          >
            {/* Pillar 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">Turnkey Delivery</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 font-light">Concept to opening night</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">Modular Domes</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 font-light">3m to 25m+ scalable</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">Cinema 360° CGI</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 font-light">Bespoke immersive stories</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">End-to-End Care</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 font-light">24/7 technical monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* ========================================================================= */}
      {/* BEGIN: Core Solutions Suite (Sleek Compact 4-Column Grid) */}
      {/* ========================================================================= */}
      <section
        id="solutions-grid"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 relative z-20"
        data-purpose="solutions-grid-container"
      >
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/50 mb-2">
            The Complete Suite
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light font-editorial text-white">
            Four Pillars of Immersive Excellence
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-2 max-w-lg mx-auto">
            Choose individual components or deploy a complete turnkey destination with single-source accountability.
          </p>
        </div>

        {/* Compact, Sleek 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* ================= CARD 1: DOME INFRASTRUCTURE ================= */}
          <article className="solution-card group bg-[#090d16]/90 border border-slate-800/80 hover:border-indigo-400/50 hover:shadow-[0_16px_36px_-10px_rgba(99,102,241,0.25)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <div>
              {/* Compact Aspect-Ratio Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-950 border border-white/5">
                <img
                  alt="Architectural Geodesic Dome Infrastructure"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  src="/images/tech_dome_cutaway.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent"></div>
                <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-md">
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M3 19h18M4 19a9 9 0 0 1 16 0M6 19a6 6 0 0 1 12 0M9 19a3 3 0 0 1 6 0M12 10v9M7.5 13.5L12 10l4.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Title & Summary */}
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight mb-1.5 group-hover:text-indigo-200 transition-colors">
                Dome Infrastructure
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4 font-light line-clamp-2">
                Engineered projection domes from 3m to 25m+ in diameter, with custom shapes for any site.
              </p>

              {/* Specification Bullets */}
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>3m to 25m+ geodesic diameters</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Negative-pressure projection skin</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Structural wind & snow engineering</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Multi-projector rig calibration</span>
                </li>
              </ul>
            </div>

            {/* Action Link */}
            <div>
              <Link
                className="aurora-btn-primary w-full justify-center py-2 px-3 text-xs font-semibold"
                href="/solutions/dome-infrastructure"
              >
                <span>Learn More</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </article>

          {/* ================= CARD 2: IMMERSIVE CONTENT ================= */}
          <article className="solution-card group bg-[#090d16]/90 border border-slate-800/80 hover:border-indigo-400/50 hover:shadow-[0_16px_36px_-10px_rgba(99,102,241,0.25)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <div>
              {/* Compact Aspect-Ratio Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-950 border border-white/5">
                <img
                  alt="Immersive Content Canvas"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  src="/images/content_cosmic_whale.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent"></div>
                <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-md">
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>
                    <rect height="16" rx="3" width="18" x="3" y="4"></rect>
                  </svg>
                </div>
              </div>

              {/* Title & Summary */}
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight mb-1.5 group-hover:text-indigo-200 transition-colors">
                Immersive Content
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4 font-light line-clamp-2">
                Growing fulldome film library plus bespoke 360° CGI produced for your specific brand or event.
              </p>

              {/* Specification Bullets */}
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Premium fulldome film catalogue</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Bespoke 8K CGI storytelling</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Interactive Unreal Engine 5 visualizers</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Seasonal and cultural themes</span>
                </li>
              </ul>
            </div>

            {/* Action Link */}
            <div>
              <Link
                className="aurora-btn-primary w-full justify-center py-2 px-3 text-xs font-semibold"
                href="/solutions/immersive-content"
              >
                <span>Explore Content</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </article>

          {/* ================= CARD 3: TECHNICAL SUPPORT ================= */}
          <article className="solution-card group bg-[#090d16]/90 border border-slate-800/80 hover:border-indigo-400/50 hover:shadow-[0_16px_36px_-10px_rgba(99,102,241,0.25)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <div>
              {/* Compact Aspect-Ratio Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-950 border border-white/5">
                <img
                  alt="Technical Support and System Monitoring"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  src="/images/img_74e401401c4c.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent"></div>
                <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-md">
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
              </div>

              {/* Title & Summary */}
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight mb-1.5 group-hover:text-indigo-200 transition-colors">
                Technical Support
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4 font-light line-clamp-2">
                Continuous on-the-ground presence, remote diagnostics, and preventative care keeping every dome running.
              </p>

              {/* Specification Bullets */}
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>On-site assembly & commissioning</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>24/7 automated telemetry monitoring</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Laser projector recalibration</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Staff training & operational handover</span>
                </li>
              </ul>
            </div>

            {/* Action Link */}
            <div>
              <Link
                className="aurora-btn-primary w-full justify-center py-2 px-3 text-xs font-semibold"
                href="/solutions/technical-support"
              >
                <span>Learn More</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </article>

          {/* ================= CARD 4: END-TO-END DELIVERY ================= */}
          <article className="solution-card group bg-[#090d16]/90 border border-slate-800/80 hover:border-indigo-400/50 hover:shadow-[0_16px_36px_-10px_rgba(99,102,241,0.25)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <div>
              {/* Compact Aspect-Ratio Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-950 border border-white/5">
                <img
                  alt="End-to-End Turnkey Delivery"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  src="/images/img_7594551a509b.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent"></div>
                <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-[#0d131f]/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-center text-slate-200 shadow-md">
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
              </div>

              {/* Title & Summary */}
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight mb-1.5 group-hover:text-indigo-200 transition-colors">
                End-to-End Delivery
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4 font-light line-clamp-2">
                Single-source accountability from site survey and dome fabrication to opening night and maintenance.
              </p>

              {/* Specification Bullets */}
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>LiDAR site scanning & planning</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Acoustic and HVAC engineering</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Turnkey projector procurement</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Guaranteed delivery milestone SLA</span>
                </li>
              </ul>
            </div>

            {/* Action Link */}
            <div>
              <Link
                className="aurora-btn-primary w-full justify-center py-2 px-3 text-xs font-semibold"
                href="/solutions/end-to-end-delivery"
              >
                <span>Our Process</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>
      {/* END: Core Solutions Suite */}

      {/* Energy divider bar */}
      <div className="energy-divider"></div>

      {/* ========================================================================= */}
      {/* BEGIN: 4-Stage Delivery Lifecycle Section */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-24 px-6 sm:px-8 lg:px-14 bg-[#03060c] overflow-hidden">
        {/* Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/50 mb-3">
                Execution Framework
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-editorial text-white leading-tight">
                From Blueprint to Opening Night.
                <br />
                <span className="text-gradient-periwinkle font-normal">
                  How Aurora Delivers Turnkey Domes.
                </span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md leading-relaxed">
              We eliminate contractor fragmentation. A single experienced team oversees your civil structural calculations, projection optics, acoustic shell, and custom CGI programming.
            </p>
          </div>

          {/* 4 Sequential Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
            {/* Step 1 */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-indigo-400/40 transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-light font-editorial text-indigo-400/80">01</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-400/20">
                    Phase 1
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  Feasibility & Sizing
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                  Topographical LiDAR site assessment, local wind/snow load calculations, municipal zoning compliance, and diameter optimization for target throughput.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Deliverable: Full 3D BIM Model
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-indigo-400/40 transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-light font-editorial text-indigo-400/80">02</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-400/20">
                    Phase 2
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  Fabrication & Envelope
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                  Aeronautical-grade aluminum strut milling, negative-pressure dual-skin membrane tailoring, blackout thermal barriers, and whisper-quiet HVAC integration.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Deliverable: Engineered Dome Shell
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-indigo-400/40 transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-light font-editorial text-indigo-400/80">03</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-400/20">
                    Phase 3
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  Optics & Audio Calibration
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                  Multi-projector laser mounting, camera-guided sub-pixel warping and edge blending, plus 16.2 to 32.2 Ambisonic spatial audio rig tuning.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Deliverable: 10K Calibrated Surface
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-indigo-400/40 transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-light font-editorial text-indigo-400/80">04</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-400/20">
                    Phase 4
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  Content & 24/7 Care
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                  Bespoke 360° CGI show rendering, automated single-touch control scheduling, operator training, and 24/7 remote telemetry health diagnostics.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Deliverable: Opening Night & SLA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: 4-Stage Delivery Lifecycle Section */}

      {/* Energy divider bar */}
      <div className="energy-divider"></div>

      {/* ========================================================================= */}
      {/* BEGIN: Scalable Dome Architecture (Side-by-Side Comparative Cards) */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-24 px-6 sm:px-8 lg:px-14 bg-[#05080e]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/50 mb-2">
              Scalable Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-editorial text-white">
              Geodesic Scales for Every Venue
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-2.5">
              From rapid-deploy VIP pop-ups to permanent monumental landmarks, compare our three primary structural footprints side-by-side.
            </p>
          </div>

          {/* 3 Side-by-Side Architectural Scale Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-6 mb-10">
            {domeScales.map((scale) => (
              <div
                key={scale.id}
                className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative ${
                  scale.highlight
                    ? "border-indigo-400/50 shadow-[0_15px_35px_-10px_rgba(99,102,241,0.25)] ring-1 ring-indigo-400/30"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Aspect-Ratio Matched 16:10 Photo Header */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={scale.image}
                      alt={scale.name}
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md text-white border ${
                          scale.highlight
                            ? "bg-indigo-600/90 border-indigo-300/40 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                            : "bg-black/60 border-white/20"
                        }`}
                      >
                        {scale.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-xl font-editorial font-light text-white tracking-tight">
                        {scale.name}
                      </h3>
                      <span className="text-xs font-mono font-medium text-indigo-300">
                        {scale.diameter}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300/90 font-light leading-relaxed mb-5 min-h-[2.5rem]">
                      {scale.idealFor}
                    </p>

                    {/* Key Technical Metric Pills */}
                    <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-white/10 mb-4 text-left">
                      <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                        <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-medium">Capacity</span>
                        <span className="text-xs font-semibold text-white">{scale.capacity}</span>
                      </div>
                      <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                        <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-medium">Setup Speed</span>
                        <span className="text-xs font-semibold text-white">{scale.setupTime}</span>
                      </div>
                      <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                        <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-medium">Apex Height</span>
                        <span className="text-xs font-semibold text-white">{scale.height}</span>
                      </div>
                      <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                        <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-medium">Footprint</span>
                        <span className="text-xs font-semibold text-white">{scale.area}</span>
                      </div>
                    </div>

                    {/* Optical & Acoustic Summary */}
                    <div className="space-y-1.5 mb-5 text-[11px] text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                        <span className="truncate"><strong>Optics:</strong> {scale.projection}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                        <span className="truncate"><strong>Audio:</strong> {scale.audio}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={`/start-a-project?scale=${scale.id}`}
                    className={`w-full py-2.5 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 ${
                      scale.highlight
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    }`}
                  >
                    <span>Configure {scale.diameter}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Collapsible / Expandable Detailed Spec Table */}
          <div className="glass-card rounded-2xl border border-white/10 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h4 className="text-base font-semibold text-white tracking-tight">
                  Detailed Engineering Specification Matrix
                </h4>
                <p className="text-xs text-slate-400 font-light mt-0.5">
                  Side-by-side engineering breakdown across acoustic, optical, and civil specifications.
                </p>
              </div>
              <button
                onClick={() => setShowFullSpecs(!showFullSpecs)}
                className="self-start sm:self-auto inline-flex items-center gap-2 text-xs font-medium text-indigo-300 hover:text-white px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 transition-colors"
              >
                <span>{showFullSpecs ? "Hide Technical Matrix" : "View Full Technical Matrix"}</span>
                <svg
                  className={`w-3.5 h-3.5 transform transition-transform duration-300 ${showFullSpecs ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
            </div>

            {showFullSpecs && (
              <div className="overflow-x-auto pt-4 mt-2">
                <table className="w-full text-left text-xs text-slate-300 border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 text-[11px] uppercase tracking-wider">
                      <th className="py-3 px-3 font-medium">Specification</th>
                      <th className="py-3 px-3 font-medium text-white">Intimate (5m – 8m)</th>
                      <th className="py-3 px-3 font-medium text-indigo-300">Modular (10m – 16m)</th>
                      <th className="py-3 px-3 font-medium text-white">Monumental (18m – 30m+)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-light">
                    <tr>
                      <td className="py-3 px-3 text-slate-400 font-normal">Diameter Range</td>
                      <td className="py-3 px-3">5m – 8m (16ft – 26ft)</td>
                      <td className="py-3 px-3 text-indigo-200">10m – 16m (33ft – 52ft)</td>
                      <td className="py-3 px-3">18m – 30m+ (59ft – 100ft+)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-slate-400 font-normal">Floor Area</td>
                      <td className="py-3 px-3">20 m² – 50 m²</td>
                      <td className="py-3 px-3 text-indigo-200">78 m² – 200 m²</td>
                      <td className="py-3 px-3">254 m² – 700+ m²</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-slate-400 font-normal">Guest Capacity</td>
                      <td className="py-3 px-3">10 – 40 Seated</td>
                      <td className="py-3 px-3 text-indigo-200">60 – 220 Attendees</td>
                      <td className="py-3 px-3">250 – 850+ Attendees</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-slate-400 font-normal">Ceiling Apex</td>
                      <td className="py-3 px-3">3.2m – 4.5m</td>
                      <td className="py-3 px-3 text-indigo-200">5.5m – 8.5m</td>
                      <td className="py-3 px-3">10.0m – 17.0m+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-slate-400 font-normal">Deployment Timeline</td>
                      <td className="py-3 px-3">4 to 8 Hours</td>
                      <td className="py-3 px-3 text-indigo-200">1 to 2 Days</td>
                      <td className="py-3 px-3">Civil Engineered Foundation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-slate-400 font-normal">Optics Matrix</td>
                      <td className="py-3 px-3">Single/Dual 4K Laser Matrix</td>
                      <td className="py-3 px-3 text-indigo-200">4 to 6 Blended 6K–8K Arrays</td>
                      <td className="py-3 px-3">8 to 14 Laser Array (10K+ Native)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-slate-400 font-normal">Spatial Audio</td>
                      <td className="py-3 px-3">7.1 Immersive Audio</td>
                      <td className="py-3 px-3 text-indigo-200">16.2 Ambisonics Array</td>
                      <td className="py-3 px-3">32.2 Full Soundstage + Sub Floor</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-slate-400 font-normal">Climate Shell</td>
                      <td className="py-3 px-3">UV & Rain Blackout Skin</td>
                      <td className="py-3 px-3 text-indigo-200">Dual-Skin Negative Pressure</td>
                      <td className="py-3 px-3">Architectural Multi-Skin Thermal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* END: Scalable Dome Architecture */}

      {/* Energy divider bar */}
      <div className="energy-divider"></div>

      {/* ========================================================================= */}
      {/* BEGIN: Technical & Optical Engineering Bento Grid */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-24 px-6 sm:px-8 lg:px-14 bg-[#03060c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/50 mb-3">
                Proprietary Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-editorial text-white leading-tight">
                Built Beyond Industry Standards.
                <br />
                <span className="text-gradient-periwinkle font-normal">
                  The Aurora Technology Advantage.
                </span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md leading-relaxed">
              Every dome is a precision scientific instrument combining aerospace alloy frames, seamless optical calibration, and acoustic dampening.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Multi-Laser Blending */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-indigo-400/40 transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 2v3m0 14v3M2 12h3m14 0h3"></path>
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  Zero-Distortion Laser Blending
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  Automated sub-pixel geometric warping and real-time camera-guided recalibration maintain an invisible seam matrix across 360 degrees of curvature.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-indigo-300 font-mono">
                10K+ Max Resolution • 120Hz Native
              </div>
            </div>

            {/* Bento Card 2: Acoustic Dampening Shell */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-indigo-400/40 transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  Acoustic Attenuation Shell
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  Multi-layer negative-pressure dual envelope drops ambient outdoor noise down to a whisper-quiet noise floor, enabling pure spatial audio fidelity.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-indigo-300 font-mono">
                &lt; 22 dB Noise Floor • Ambisonic 32.2
              </div>
            </div>

            {/* Bento Card 3: All-Weather Structural Engineering */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-indigo-400/40 transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  Extreme Weather Certified
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  Precision geodesic triangles distribute structural stress evenly, certified to withstand 160 km/h wind shear and thermal ranges from -30°C to +50°C.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-indigo-300 font-mono">
                160 km/h Windload • -30°C to +50°C
              </div>
            </div>
          </div>

          {/* Performance Numbers Bar */}
          <div className="mt-10 glass-card rounded-2xl p-6 sm:p-7 border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <span className="block text-2xl sm:text-3xl font-editorial font-light text-white mb-0.5">
                100%
              </span>
              <span className="text-xs text-slate-400 font-light">Turnkey Single-Source Delivery</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-editorial font-light text-indigo-300 mb-0.5">
                &lt; 22 dB
              </span>
              <span className="text-xs text-slate-400 font-light">Ultra-Quiet Interior Noise Floor</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-editorial font-light text-white mb-0.5">
                10K+
              </span>
              <span className="text-xs text-slate-400 font-light">Native Fulldome Pixel Density</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-editorial font-light text-indigo-300 mb-0.5">
                99.9%
              </span>
              <span className="text-xs text-slate-400 font-light">Operational Uptime SLA Guarantee</span>
            </div>
          </div>
        </div>
      </section>
      {/* END: Technical & Optical Engineering Bento Grid */}

      {/* Energy divider bar */}
      <div className="energy-divider"></div>

      {/* ========================================================================= */}
      {/* BEGIN: Bottom Cinematic CTA Banner */}
      {/* ========================================================================= */}
      <section
        className="relative py-20 sm:py-24 px-6 sm:px-10 lg:px-14 overflow-hidden"
        data-purpose="solutions-bottom-cta"
      >
        {/* Background Image with Atmospheric Lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/alpine_lake_dome_cta.jpg"
            alt="Monumental illuminated geodesic dome reflecting across calm mountain lake at twilight"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/85 to-[#05070B]/70"></div>
          <div className="absolute inset-0 bg-indigo-950/25 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <span className="inline-block text-[11px] font-medium tracking-[0.28em] uppercase text-white/60 mb-2.5">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-white leading-tight mb-4 sm:mb-5">
            Ready to Build an
            <br />
            <span className="text-gradient-periwinkle font-normal">
              Extraordinary Destination?
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-light max-w-xl mx-auto mb-7 sm:mb-8 leading-relaxed">
            From temporary pop-up pavilions to monumental permanent visitor attractions, our dome engineers and CGI artists will guide you through every milestone.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              className="aurora-btn-primary px-7 py-3 text-xs sm:text-sm font-semibold tracking-wide"
              href="/start-a-project"
            >
              <span>Start a Project</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 16 16">
                <path
                  d="M3.33334 8H12.6667M8 3.33334L12.6667 8L8 12.6667"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                ></path>
              </svg>
            </Link>
            <Link
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300"
              href="/contact"
            >
              <span>Contact Engineering</span>
            </Link>
          </div>
        </div>
      </section>
      {/* END: Bottom Cinematic CTA Banner */}
    </div>
  );
}
