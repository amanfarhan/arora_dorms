"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen w-full overflow-x-hidden relative">
      {/*  BEGIN: HeroSection  */}
      <section
        className="relative min-h-[720px] lg:min-h-[820px] pt-32 lg:pt-36 flex items-center overflow-hidden"
        data-purpose="hero-section"
      >
        {/*  Atmospheric Radial Glow Pools  */}
        <div className="aurora-glow-hero top-16 left-1/4 w-[550px] h-[450px] ambient-light-drift opacity-75"></div>
        <div className="aurora-glow-cyan top-32 right-1/4 w-[500px] h-[400px] ambient-light-drift opacity-60"></div>

        {/*  Background Curved Immersive Projection Canvas Visual (High-Res Cosmic Whale Canvas)  */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-full lg:w-[68%] h-full">
            <div className="relative w-full h-full">
              <img
                alt="Audience inside an immersive fulldome planetarium theater gazing at projected celestial sphere"
                className="w-full h-full object-cover object-center scale-105"
                src="/images/content_cosmic_whale.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/40"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#05070B]/70 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/*  Hero Content Container  */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-12 lg:py-20">
          <div className="max-w-xl xl:max-w-2xl">
            {/*  Eyebrow Tag  */}
            <span
              className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#A5B4FC] mb-4 font-sans"
              data-purpose="hero-eyebrow"
            >
              INDUSTRIES WE SERVE
            </span>
            {/*  Main Headline  */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-normal tracking-tight text-white mb-6 font-sans"
              data-purpose="hero-heading"
            >
              Immersive
              <br />
              Experiences for
              <br />
              <span className="aurora-gradient-text drop-shadow-[0_0_30px_rgba(165,180,252,0.3)]">
                Every Industry.
              </span>
            </h1>
            {/*  Subtitle Description  */}
            <p
              className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-lg mb-9"
              data-purpose="hero-description"
            >
              From theme parks to fine dining, wellness to global events — our dome solutions are customized for the unique needs of each industry, creating unforgettable experiences that inspire, engage and bring people back.
            </p>
            {/*  CTA Button  */}
            <div>
              <a
                className="aurora-btn-primary px-7 py-3.5 text-xs font-semibold"
                data-purpose="hero-cta-button"
                href="#industries"
              >
                <span>Explore Our Solutions</span>
                <svg
                  className="w-3.5 h-3.5"
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
              </a>
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
