"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen w-full overflow-x-hidden relative">
      {/*  BEGIN: HeroSection  */}
      <section
        className="relative overflow-hidden min-h-[85vh] lg:min-h-[92vh] flex items-center bg-[#05070B] pt-28 pb-20 lg:pt-36 lg:pb-28"
        data-purpose="hero-section"
      >
        {/* Full-bleed Background Image with Dome Projection on Right & Dark Space on Left */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Audience seated inside a majestic 360-degree immersive fulldome theater watching an Earth and orbital aurora projection"
            className="w-full h-full object-cover object-right md:object-center select-none"
            src="/images/industries_hero_dome.jpg"
          />
          {/* Dark Gradient Scrim on Left for Clean Typography Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/90 md:via-[#05070B]/75 to-transparent w-full md:w-3/5 lg:w-[55%] pointer-events-none"></div>
          {/* Top Header Fade */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#05070B]/90 via-[#05070B]/40 to-transparent pointer-events-none"></div>
          {/* Bottom Section Transition Fade into Industries Grid */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent pointer-events-none"></div>
          {/* Ambient Glow Pool */}
          <div className="absolute -top-24 left-1/4 w-[600px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Left Column: Copy & CTAs */}
          <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A5B4FC] shadow-[0_0_8px_#A5B4FC]"></span>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#A5B4FC] uppercase">
                INDUSTRIES WE SERVE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="headline-font text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-normal tracking-tight text-white mb-6 drop-shadow-md">
              Immersive Experiences for{" "}
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-indigo-200 to-purple-200">
                Every Industry.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-8 max-w-lg drop-shadow">
              From theme parks to fine dining, wellness to global events — our dome solutions are customized for the unique needs of each industry, creating unforgettable experiences that inspire, engage and bring people back.
            </p>

            {/* CTA Button Cluster */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#93c5fd] hover:bg-[#bfdbfe] text-[#050b14] font-semibold text-sm transition-all duration-300 shadow-[0_0_28px_rgba(147,197,253,0.35)] aurora-btn-primary group"
                href="#industries"
              >
                <span>Explore Our Solutions</span>
                <svg className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
              <Link
                className="group inline-flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors duration-200 text-sm font-medium py-3 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md"
                href="/start-a-project"
              >
                <span>Start a Project</span>
                <svg className="w-4 h-4 stroke-[2] group-hover:translate-x-0.5 transition-transform text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
            </div>

            {/* Metrics / Spec Badges */}
            <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg w-full">
              <div>
                <div className="text-sm font-semibold text-white tracking-wide">9 Key Sectors</div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">Turnkey Architecture</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-white tracking-wide">3M – 25M+</div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">Custom Footprint</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-white tracking-wide">100% Bespoke</div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">End-to-End Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  END: HeroSection  */}

      {/*  BEGIN: IndustriesGridSection  */}
      <section
        className="relative py-20 lg:py-28"
        data-purpose="industries-card-grid"
        id="industries"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/*  3x3 Grid Layout  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {/*  CARD 01: Entertainment & Tourism  */}
            <article
              className="industry-card rounded-2xl p-5 flex flex-col justify-between group"
              data-purpose="industry-card-01"
            >
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/5">
                <img
                  alt="Entertainment & Tourism fulldome immersive ride"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="/images/entertainment_marine_dome.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15]/80 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-2xl font-light text-slate-400 font-sans tracking-tight">01</span>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors">
                      Entertainment
                      <br />
                      & Tourism
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-9">
                    Create signature attractions for theme parks, amusement parks, water parks and leisure destinations that keep guests coming back.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    aria-label="Learn more about Entertainment and Tourism"
                    className="card-arrow-btn w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white"
                    href="/industries/entertainment-tourism"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 16 16"
                    >
                      <line x1="3" x2="13" y1="8" y2="8"></line>
                      <polyline points="9 4 13 8 9 12"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/*  CARD 02: Events & Festivals  */}
            <article
              className="industry-card rounded-2xl p-5 flex flex-col justify-between group"
              data-purpose="industry-card-02"
            >
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/5">
                <img
                  alt="Massive music festival inside a geodesic projection dome"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="/images/img_d960facf5100.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15]/80 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-2xl font-light text-slate-400 font-sans tracking-tight">02</span>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors">
                      Events & Festivals
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-9">
                    Portable, high-impact experience zones for festivals, cultural celebrations and special events, with custom content to match the occasion.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    aria-label="Learn more about Events and Festivals"
                    className="card-arrow-btn w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white"
                    href="/industries/events-festivals"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 16 16"
                    >
                      <line x1="3" x2="13" y1="8" y2="8"></line>
                      <polyline points="9 4 13 8 9 12"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/*  CARD 03: Hospitality & Immersive Dining  */}
            <article
              className="industry-card rounded-2xl p-5 flex flex-col justify-between group"
              data-purpose="industry-card-03"
            >
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/5">
                <img
                  alt="Hospitality and 360 degree immersive banquet dining dome"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="/images/dining_immersive_dome.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15]/80 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-2xl font-light text-slate-400 font-sans tracking-tight">03</span>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors">
                      Hospitality &
                      <br />
                      Immersive Dining
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-9">
                    Turn a meal into a destination. 360° dining environments for hotels, resorts and restaurants, designed to match your concept and cuisine.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    aria-label="Learn more about Hospitality and Dining"
                    className="card-arrow-btn w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white"
                    href="/industries/hospitality-dining"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 16 16"
                    >
                      <line x1="3" x2="13" y1="8" y2="8"></line>
                      <polyline points="9 4 13 8 9 12"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/*  CARD 04: Health & Wellness  */}
            <article
              className="industry-card rounded-2xl p-5 flex flex-col justify-between group"
              data-purpose="industry-card-04"
            >
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/5">
                <img
                  alt="Health and wellness meditation dome under tranquil aurora projection"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="/images/img_587e11b92207.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15]/80 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-2xl font-light text-slate-400 font-sans tracking-tight">04</span>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors">
                      Health & Wellness
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-9">
                    Meditation, sound healing and yoga in fully immersive environments that enhance relaxation, focus and well-being.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    aria-label="Learn more about Health and Wellness"
                    className="card-arrow-btn w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white"
                    href="/industries/health-wellness"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 16 16"
                    >
                      <line x1="3" x2="13" y1="8" y2="8"></line>
                      <polyline points="9 4 13 8 9 12"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/*  CARD 05: Music, Nightlife & Concerts  */}
            <article
              className="industry-card rounded-2xl p-5 flex flex-col justify-between group"
              data-purpose="industry-card-05"
            >
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/5">
                <img
                  alt="Music nightlife dome concert and laser performance"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="/images/img_68755b9ccc06.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15]/80 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-2xl font-light text-slate-400 font-sans tracking-tight">05</span>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors">
                      Music, Nightlife
                      <br />
                      & Concerts
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-9">
                    Surround the audience with synchronized visuals and sound for unforgettable parties, concerts and live performances.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    aria-label="Learn more about Music and Nightlife"
                    className="card-arrow-btn w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white"
                    href="/industries/music-nightlife"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 16 16"
                    >
                      <line x1="3" x2="13" y1="8" y2="8"></line>
                      <polyline points="9 4 13 8 9 12"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/*  CARD 06: Museums & Cultural Institutions  */}
            <article
              className="industry-card rounded-2xl p-5 flex flex-col justify-between group"
              data-purpose="industry-card-06"
            >
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/5">
                <img
                  alt="Museums and Cultural Institutions immersive natural history exhibition"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="/images/img_a014896c7567.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15]/80 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-2xl font-light text-slate-400 font-sans tracking-tight">06</span>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors">
                      Museums &
                      <br />
                      Cultural Institutions
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-9">
                    Transform learning into an experience for museums, science centres, planetariums and galleries with immersive storytelling.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    aria-label="Learn more about Museums and Cultural Institutions"
                    className="card-arrow-btn w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white"
                    href="/industries/museums-cultural"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 16 16"
                    >
                      <line x1="3" x2="13" y1="8" y2="8"></line>
                      <polyline points="9 4 13 8 9 12"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/*  CARD 07: Corporate, Retail & Brand Experiences  */}
            <article
              className="industry-card rounded-2xl p-5 flex flex-col justify-between group"
              data-purpose="industry-card-07"
            >
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/5">
                <img
                  alt="Automotive luxury brand activation inside immersive projection dome"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="/images/img_6963e9136b99.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15]/80 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-2xl font-light text-slate-400 font-sans tracking-tight">07</span>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors">
                      Corporate, Retail
                      <br />
                      & Brand Experiences
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-9">
                    Make your brand the environment. Product launches, trade shows and retail activations that put your audience inside your story.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    aria-label="Learn more about Corporate and Brand Experiences"
                    className="card-arrow-btn w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white"
                    href="/industries/corporate-brand"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 16 16"
                    >
                      <line x1="3" x2="13" y1="8" y2="8"></line>
                      <polyline points="9 4 13 8 9 12"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/*  CARD 08: Education & Planetariums  */}
            <article
              className="industry-card rounded-2xl p-5 flex flex-col justify-between group"
              data-purpose="industry-card-08"
            >
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/5">
                <img
                  alt="Educational planetarium dome with student audience observing solar system"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="/images/education_planetarium_saturn.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15]/80 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-2xl font-light text-slate-400 font-sans tracking-tight">08</span>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors">
                      Education &
                      <br />
                      Planetariums
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-9">
                    Bring complex ideas to life for schools, universities and science centres with immersive, curriculum-aligned experiences.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    aria-label="Learn more about Education and Planetariums"
                    className="card-arrow-btn w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white"
                    href="/industries/education-planetariums"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 16 16"
                    >
                      <line x1="3" x2="13" y1="8" y2="8"></line>
                      <polyline points="9 4 13 8 9 12"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/*  CARD 09: Private Events & Weddings  */}
            <article
              className="industry-card rounded-2xl p-5 flex flex-col justify-between group"
              data-purpose="industry-card-09"
            >
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/5">
                <img
                  alt="Luxury private events and weddings in glass geodesic dome under starlight"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="/images/img_9a0e34e507d0.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15]/80 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex items-baseline space-x-3 mb-2.5">
                    <span className="text-2xl font-light text-slate-400 font-sans tracking-tight">09</span>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors">
                      Private Events
                      <br />
                      & Weddings
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pl-9">
                    Create one-of-a-kind celebrations with fully customized dome experiences tailored to your story, theme and venue.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    aria-label="Learn more about Private Events and Weddings"
                    className="card-arrow-btn w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white"
                    href="/industries/private-events-weddings"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      viewBox="0 0 16 16"
                    >
                      <line x1="3" x2="13" y1="8" y2="8"></line>
                      <polyline points="9 4 13 8 9 12"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/*  END: IndustriesGridSection  */}

      {/*  BEGIN: BottomCTASection  */}
      <section
        className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5"
        data-purpose="bottom-cta-banner"
        id="contact"
      >
        {/*  Background Panoramic Aurora & Geodesic Dome Pavilion Image  */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Illuminated geodesic dome by the lake under mountain aurora borealis"
            className="w-full h-full object-cover object-bottom scale-105"
            src="/images/alpine_lake_dome_cta.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/70"></div>
        </div>

        {/*  CTA Content Container  */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            {/*  Eyebrow  */}
            <span
              className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#A5B4FC] mb-4 font-sans"
              data-purpose="cta-eyebrow"
            >
              READY TO CREATE YOUR INDUSTRY EXPERIENCE?
            </span>
            {/*  Headline  */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-5 font-sans"
              data-purpose="cta-heading"
            >
              Let’s Build Something
              <br />
              Extraordinary.
            </h2>
            {/*  Description text  */}
            <p
              className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-lg mb-8"
              data-purpose="cta-description"
            >
              Tell us about your space and your audience, and our team will design the right dome, content and support package.
            </p>
            {/*  CTA Button  */}
            <div>
              <Link
                className="aurora-btn-primary px-8 py-4 text-sm font-semibold tracking-wide"
                data-purpose="cta-submit-btn"
                href="/start-a-project"
              >
                <span>Start a Project</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 16 16"
                >
                  <line x1="3" x2="13" y1="8" y2="8"></line>
                  <polyline points="9 4 13 8 9 12"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  END: BottomCTASection  */}
    </div>
  );
}
