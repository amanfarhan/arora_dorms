"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen w-full overflow-x-hidden relative">
      {/*  BEGIN: HeroSection  */}
      <section
        className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 overflow-hidden"
        data-purpose="hero-banner"
      >
        {/*  Atmospheric Radial Glow Pools  */}
        <div className="aurora-glow-hero top-20 left-1/3 w-[550px] h-[450px] ambient-light-drift opacity-70"></div>
        <div className="aurora-glow-cyan top-36 right-1/4 w-[500px] h-[400px] ambient-light-drift opacity-60"></div>

        {/*  Cinematic Full Cover Background Image (Monumental Glowing Dome Destination under Aurora)  */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Monumental glowing geodesic immersion dome destination under dramatic emerald and violet aurora borealis night sky"
            className="w-full h-full object-cover object-right md:object-center select-none"
            src="/images/about_hero_monumental_dome.jpg"
          />
          {/*  Gradient Overlays for Typographic Contrast & Seamless Integration  */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03070d] via-[#03070d]/85 md:via-[#03070d]/60 to-transparent w-full md:w-3/5 lg:w-[54%] pointer-events-none"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#03070d]/90 via-[#03070d]/30 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent pointer-events-none"></div>
        </div>

        {/*  Hero Content Container  */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-between h-full">
          <div className="max-w-xl lg:max-w-2xl pt-2 sm:pt-4">
            {/*  Eyebrow  */}
            <span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 mb-2.5 sm:mb-3">
              About Arora Dorm Solutions
            </span>

            {/*  Primary Editorial Serif Headline  */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-light font-editorial text-white leading-[1.05] tracking-tight mb-3 sm:mb-4">
              We Build
              <br />
              Immersive
              <br />
              <span className="text-gradient-periwinkle font-normal drop-shadow-[0_0_25px_rgba(165,180,252,0.35)]">
                Destinations.
              </span>
            </h1>

            {/*  Two-Line Supporting Subline  */}
            <p className="text-sm sm:text-base text-slate-300 font-light tracking-wide max-w-lg mb-5 sm:mb-6 leading-relaxed">
              A single partner for extraordinary dome experiences — unifying turnkey
              <br className="hidden sm:inline" /> geodesic engineering, 360° fulldome projection, and bespoke content.
            </p>

            {/*  Two Action Buttons  */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-7">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#93c5fd] hover:bg-[#bfdbfe] text-[#050b14] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(147,197,253,0.3)] group"
              >
                <span>Start a Project</span>
                <svg
                  className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>

              <button
                onClick={() => setVideoModalOpen(true)}
                aria-label="Watch our brand story"
                className="group inline-flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors duration-200 text-xs font-medium py-2 sm:py-2.5 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md"
                type="button"
              >
                <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#93c5fd] flex items-center justify-center transition-all text-white group-hover:text-black">
                  <svg className="w-3 h-3 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </span>
                <span className="tracking-wide">Watch Our Story</span>
              </button>
            </div>

            {/*  Key Metric Highlights Strip  */}
            <div className="pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl w-full">
              <div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-wide">3m – 25m+</div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">Turnkey Architecture</div>
              </div>
              <div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-wide">360° Fulldome</div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">8K Projection & Audio</div>
              </div>
              <div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-wide">100% Turnkey</div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">Single Accountable Partner</div>
              </div>
            </div>
          </div>

          {/*  Bottom Hero Metadata / Affiliation Note  */}
          <div className="self-end mt-4 sm:mt-6 border-l border-white/25 pl-4 py-0.5">
            <p className="text-[9px] tracking-[0.24em] font-medium text-white/50 uppercase leading-relaxed">
              A business vertical of
              <br />
              <span className="text-white/80">Arora Dorm Entertainments Inc.</span>
            </p>
          </div>
        </div>
      </section>
      {/*  END: HeroSection  */}

      {/*  BEGIN: TheIdeaSection  */}
      <section
        className="relative bg-[#03070d] py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-white/[0.04]"
        data-purpose="concept-overview"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/*  Left Column: Story Copy  */}
          <div className="lg:col-span-5">
            <span className="block text-[11px] font-medium tracking-[0.28em] uppercase text-white/50 mb-3">
              The Idea
            </span>
            <h2 className="text-4xl sm:text-5xl font-editorial font-light text-white leading-tight mb-6">
              One Partner.
              <br />
              A Bigger Possibility.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8 max-w-lg">
              Immersive dome experiences are powerful — but too often require multiple vendors. We
              bring everything together, so you deal with a single, accountable partner from start to
              finish.
            </p>
            <Link
              className="aurora-btn-primary px-6 py-3 text-xs tracking-tight"
              href="/start-a-project"
            >
              <span>Start a Project</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                ></path>
              </svg>
            </Link>
          </div>

          {/*  Right Column: 4 Feature Pillars Grid Cards  */}
          <div
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4"
            data-purpose="pillars-cards"
          >
            {/*  Card 01: Structure  */}
            <div className="group relative rounded-xl overflow-hidden glass-border bg-slate-900/50 aspect-[3/5] flex flex-col justify-end p-4 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <img
                alt="Geodesic dome metal frame truss structure against night sky"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src="/images/img_f3d95ea0fd50.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-[#03070d]/40 to-transparent"></div>
              <div className="relative z-10">
                <span className="block text-xs font-semibold text-white/60 tracking-wider mb-0.5">
                  01
                </span>
                <span className="block text-sm font-medium text-white tracking-wide">
                  Structure
                </span>
              </div>
            </div>

            {/*  Card 02: Projection  */}
            <div className="group relative rounded-xl overflow-hidden glass-border bg-slate-900/50 aspect-[3/5] flex flex-col justify-end p-4 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <img
                alt="High-end cinema dome laser projection lens"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src="/images/img_26a8cc3f349a.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-[#03070d]/40 to-transparent"></div>
              <div className="relative z-10">
                <span className="block text-xs font-semibold text-white/60 tracking-wider mb-0.5">
                  02
                </span>
                <span className="block text-sm font-medium text-white tracking-wide">
                  Projection
                </span>
              </div>
            </div>

            {/*  Card 03: Content  */}
            <div className="group relative rounded-xl overflow-hidden glass-border bg-slate-900/50 aspect-[3/5] flex flex-col justify-end p-4 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <img
                alt="Bioluminescent fulldome cosmic jellyfish content render"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src="/images/img_6f37cf2f72b5.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-[#03070d]/40 to-transparent"></div>
              <div className="relative z-10">
                <span className="block text-xs font-semibold text-white/60 tracking-wider mb-0.5">
                  03
                </span>
                <span className="block text-sm font-medium text-white tracking-wide">
                  Content
                </span>
              </div>
            </div>

            {/*  Card 04: Support  */}
            <div className="group relative rounded-xl overflow-hidden glass-border bg-slate-900/50 aspect-[3/5] flex flex-col justify-end p-4 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <img
                alt="Technical engineer sitting at console in dome theater control room"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src="/images/img_37ea92b6c7e7.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-[#03070d]/40 to-transparent"></div>
              <div className="relative z-10">
                <span className="block text-xs font-semibold text-white/60 tracking-wider mb-0.5">
                  04
                </span>
                <span className="block text-sm font-medium text-white tracking-wide">
                  Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  END: TheIdeaSection  */}

      {/*  BEGIN: OurApproachSection  */}
      <section
        className="relative min-h-[520px] lg:min-h-[640px] flex items-center justify-end overflow-hidden"
        data-purpose="our-approach"
        id="approach"
      >
        {/*  Panoramic Illuminated Geodesic Dome Pavilion Image  */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Illuminated geodesic dome pavilion by calm mountain lake reflecting vibrant northern lights"
            className="w-full h-full object-cover object-left lg:object-center"
            src="/images/alpine_lake_dome_cta.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#03070d] via-[#03070d]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-transparent to-[#03070d]/40"></div>
        </div>

        {/*  Editorial Overlay Content  */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 flex justify-end">
          <div className="w-full lg:max-w-lg xl:max-w-xl py-16">
            <span className="block text-[11px] font-medium tracking-[0.28em] uppercase text-white/60 mb-3">
              Our Approach
            </span>
            <h2 className="text-4xl sm:text-5xl font-editorial font-light text-white leading-tight mb-5">
              From Vision
              <br />
              to Reality.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-md">
              We handle the entire journey — from site assessment and design to content,
              installation and ongoing support — to create experiences tailored to your audience,
              space and brand.
            </p>
            <Link
              className="aurora-btn-primary px-6 py-3 text-xs tracking-tight"
              href="/technology-dome-systems"
            >
              <span>Learn About Our Approach</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/*  END: OurApproachSection  */}

      {/*  BEGIN: CapabilitiesSection  */}
      <section
        className="relative bg-[#03070d] py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-b border-white/[0.04]"
        data-purpose="capabilities-overview"
      >
        <div className="max-w-7xl mx-auto">
          {/*  Section Header  */}
          <div className="mb-16">
            <span className="block text-[11px] font-medium tracking-[0.28em] uppercase text-white/50 mb-3">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-white">
              Everything You Need. Seamlessly Integrated.
            </h2>
          </div>

          {/*  4 Horizontally Aligned Capabilities Columns  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {/*  Capability 1  */}
            <div className="lg:pr-8 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-300 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-medium text-white mb-2 tracking-wide">
                Dome Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                Custom structures from 3m to 25m+.
              </p>
            </div>

            {/*  Capability 2  */}
            <div className="lg:px-8 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-300 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-medium text-white mb-2 tracking-wide">
                Immersive Content
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                World-class fulldome library and bespoke CGI.
              </p>
            </div>

            {/*  Capability 3  */}
            <div className="lg:px-8 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-300 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-medium text-white mb-2 tracking-wide">
                End-to-End Delivery
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                Project management from concept to launch.
              </p>
            </div>

            {/*  Capability 4  */}
            <div className="lg:pl-8 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-300 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-medium text-white mb-2 tracking-wide">
                Ongoing Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                Technical continuity beyond opening day.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  END: CapabilitiesSection  */}

      {/*  BEGIN: BottomCTASection  */}
      <section
        className="relative bg-[#03070d] py-24 sm:py-28 px-6 sm:px-10 lg:px-14 border-t border-white/[0.04]"
        data-purpose="call-to-action"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="block text-[11px] font-medium tracking-[0.28em] uppercase text-white/50 mb-2">
              Ready to Explore?
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-light text-white">
              Let’s Create Something Extraordinary.
            </h2>
          </div>
          <div>
            <Link
              className="aurora-btn-primary px-8 py-4 text-sm font-semibold tracking-wide"
              href="/start-a-project"
            >
              <span>Start a Project</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path
                  d="M3.33334 8H12.6667"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M8 3.33334L12.6667 8L8 12.6667"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/*  END: BottomCTASection  */}

      {/*  Video Modal Lightbox  */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0b0e17] border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-medium text-white">
                Aurora Dome Solutions — Brand Story
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src="/images/about_hero_monumental_dome.jpg"
                alt="Brand Story Thumbnail"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                  <svg className="w-6 h-6 ml-1 fill-current" viewBox="0 0 16 16">
                    <path d="M4 3.5v9l8-4.5-8-4.5z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
