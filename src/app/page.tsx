"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === "left" ? -340 : 340;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="bg-[#05070B] text-slate-100 overflow-hidden relative">
      <main>
        {/*  BEGIN: HeroSection  */}
        <section
          className="relative min-h-[90vh] lg:h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden"
          data-purpose="hero-section"
        >
          {/*  Atmospheric Radial Glow Pools  */}
          <div className="aurora-glow-hero top-16 left-1/4 w-[600px] h-[500px] ambient-light-drift opacity-75"></div>
          <div className="aurora-glow-cyan top-40 right-1/4 w-[550px] h-[450px] ambient-light-drift opacity-60"></div>

          {/*  Background Scenic Dome Environment (Cooler Monumental Geodesic Pavilion under Aurora)  */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Monumental glowing geodesic immersion dome destination on coastal terrace under emerald aurora borealis night sky"
              className="w-full h-full object-cover object-right md:object-center select-none"
              src="/images/hero_landing_monumental_aurora.jpg"
            />
            {/*  Layered Atmospheric Gradients for Text Legibility & Depth  */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/75 md:via-[#05070B]/50 to-transparent z-10 w-full md:w-3/5 lg:w-[52%] pointer-events-none"></div>
            <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#05070B]/90 via-[#05070B]/40 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent z-10 pointer-events-none"></div>
          </div>

          {/*  Top & Center Hero Content  */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-2 sm:pt-4">
            {/*  Eyebrow Tagline  */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93c5fd] shadow-[0_0_8px_#93c5fd] animate-pulse"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#93c5fd]">
                A SINGLE PARTNER
              </span>
            </div>

            {/*  Headline  */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal tracking-tight text-white leading-[1.02] max-w-2xl mb-4 sm:mb-5">
              We Build
              <br />
              Immersive
              <br />
              <span className="aurora-gradient-text drop-shadow-[0_0_35px_rgba(165,180,252,0.35)]">
                Destinations.
              </span>
            </h1>

            {/*  Subtitle  */}
            <p className="text-sm sm:text-base text-slate-300 font-light tracking-wide max-w-md mb-6 leading-relaxed">
              Dome environments. World-class content.
              <br />
              End-to-end support.
            </p>

            {/*  CTA Action Buttons  */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                className="aurora-btn-primary px-6 py-2.5 sm:py-3 text-xs uppercase tracking-wider font-semibold"
                href="/about"
              >
                <span>Our Story</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M3.33334 8H12.6667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 3.33334L12.6667 8L8 12.6667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </Link>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-colors duration-200 group"
                type="button"
              >
                <span className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#93c5fd] group-hover:text-black transition-all duration-200">
                  <svg
                    className="w-3 h-3 ml-0.5 fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 3.5v9l8-4.5-8-4.5z"></path>
                  </svg>
                </span>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/*  Bottom Hero Metrics Bar & Scroll Indicator  */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full mt-auto pt-4 sm:pt-6 pb-2 border-t border-white/10 flex flex-wrap items-end justify-between gap-6">
            {/*  Metrics  */}
            <div className="flex flex-wrap items-baseline gap-8 sm:gap-16">
              <div>
                <div className="text-xl sm:text-2xl font-light text-white tracking-tight">
                  3M – 25M+
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                  Dome Sizes
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-light text-white tracking-tight">
                  9+
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                  Industries
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-light text-white tracking-tight">
                  1
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                  Single Partner
                </div>
              </div>
            </div>

            {/*  Scroll Indicator  */}
            <div className="hidden md:flex flex-col items-center gap-2 pb-1 text-[9px] tracking-[0.25em] text-slate-400 uppercase">
              <span>SCROLL</span>
              <div className="w-[1px] h-7 bg-gradient-to-b from-white/60 to-transparent"></div>
            </div>
          </div>
        </section>
        {/*  END: HeroSection  */}

        {/*  BEGIN: ExperiencesSection  */}
        <section
          className="py-24 relative bg-[#05070B] overflow-hidden"
          data-purpose="experiences-carousel"
          id="experiences"
        >
          <div className="max-w-7xl mx-auto px-6">
            {/*  Header Row  */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <span className="text-xs uppercase font-medium tracking-[0.25em] text-slate-400 block mb-3">
                  EXPERIENCES FOR EVERY WORLD
                </span>
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
                  One Dome.
                  <br />
                  <span className="italic font-light">Endless Possibilities.</span>
                </h2>
              </div>
              <div className="flex items-center gap-6 md:max-w-sm">
                <p className="text-sm text-slate-400 leading-relaxed">
                  From entertainment to wellness, we create immersive environments for
                  visionary brands and spaces.
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => scrollCarousel("left")}
                    aria-label="Previous card"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-400/50 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 19l-7-7 7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollCarousel("right")}
                    aria-label="Next card"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-400/50 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/*  Horizontal 9 Experience Cards (Connected to Subpages)  */}
            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-auto pb-4 scroll-smooth select-none no-scrollbar"
              id="industries-carousel"
            >
              {/*  Card 01: Entertainment & Tourism  */}
              <Link
                href="/industries/entertainment-tourism"
                className="shrink-0 w-[280px] sm:w-[310px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.35)] bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-sm flex flex-col justify-between"
                data-purpose="experience-card"
              >
                <div className="h-80 w-full overflow-hidden relative">
                  <img
                    alt="Entertainment & Tourism dome marine prehistoric projection"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 ease-out"
                    src="/images/entertainment_marine_dome.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent z-10"></div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-indigo-300 font-semibold group-hover:border-indigo-400/60 group-hover:text-white transition-colors duration-300">
                    01
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 pr-2">
                      Entertainment & Tourism
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/*  Card 02: Events & Festivals  */}
              <Link
                href="/industries/events-festivals"
                className="shrink-0 w-[280px] sm:w-[310px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.35)] bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-sm flex flex-col justify-between"
                data-purpose="experience-card"
              >
                <div className="h-80 w-full overflow-hidden relative">
                  <img
                    alt="Events & Festivals immersive geodesic dome light show"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 ease-out"
                    src="/images/img_d960facf5100.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent z-10"></div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-indigo-300 font-semibold group-hover:border-indigo-400/60 group-hover:text-white transition-colors duration-300">
                    02
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 pr-2">
                      Events & Festivals
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/*  Card 03: Hospitality & Immersive Dining  */}
              <Link
                href="/industries/hospitality-dining"
                className="shrink-0 w-[280px] sm:w-[310px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.35)] bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-sm flex flex-col justify-between"
                data-purpose="experience-card"
              >
                <div className="h-80 w-full overflow-hidden relative">
                  <img
                    alt="Hospitality & Immersive Dining luxury banquet underwater dome"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 ease-out"
                    src="/images/dining_immersive_dome.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent z-10"></div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-indigo-300 font-semibold group-hover:border-indigo-400/60 group-hover:text-white transition-colors duration-300">
                    03
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 pr-2">
                      Hospitality & Immersive Dining
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/*  Card 04: Health & Wellness  */}
              <Link
                href="/industries/health-wellness"
                className="shrink-0 w-[280px] sm:w-[310px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.35)] bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-sm flex flex-col justify-between"
                data-purpose="experience-card"
              >
                <div className="h-80 w-full overflow-hidden relative">
                  <img
                    alt="Health & Wellness dome meditation under pastel aurora"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 ease-out"
                    src="/images/img_587e11b92207.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent z-10"></div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-indigo-300 font-semibold group-hover:border-indigo-400/60 group-hover:text-white transition-colors duration-300">
                    04
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 pr-2">
                      Health & Wellness
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/*  Card 05: Music, Nightlife & Concerts  */}
              <Link
                href="/industries/music-nightlife"
                className="shrink-0 w-[280px] sm:w-[310px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.35)] bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-sm flex flex-col justify-between"
                data-purpose="experience-card"
              >
                <div className="h-80 w-full overflow-hidden relative">
                  <img
                    alt="Music, Nightlife & Concerts crowd under laser geodesic dome"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 ease-out"
                    src="/images/img_68755b9ccc06.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent z-10"></div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-indigo-300 font-semibold group-hover:border-indigo-400/60 group-hover:text-white transition-colors duration-300">
                    05
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 pr-2">
                      Music, Nightlife & Concerts
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/*  Card 06: Museums & Cultural Institutions  */}
              <Link
                href="/industries/museums-cultural"
                className="shrink-0 w-[280px] sm:w-[310px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.35)] bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-sm flex flex-col justify-between"
                data-purpose="experience-card"
              >
                <div className="h-80 w-full overflow-hidden relative">
                  <img
                    alt="Museums & Cultural Institutions visitor gazing at Earth projection"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 ease-out"
                    src="/images/img_a014896c7567.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent z-10"></div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-indigo-300 font-semibold group-hover:border-indigo-400/60 group-hover:text-white transition-colors duration-300">
                    06
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 pr-2">
                      Museums & Cultural
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/*  Card 07: Corporate, Retail & Brand  */}
              <Link
                href="/industries/corporate-brand"
                className="shrink-0 w-[280px] sm:w-[310px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.35)] bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-sm flex flex-col justify-between"
                data-purpose="experience-card"
              >
                <div className="h-80 w-full overflow-hidden relative">
                  <img
                    alt="Corporate, Retail & Brand launch luxury vehicle presentation"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 ease-out"
                    src="/images/img_4363e2c4a2dd.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent z-10"></div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-indigo-300 font-semibold group-hover:border-indigo-400/60 group-hover:text-white transition-colors duration-300">
                    07
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 pr-2">
                      Corporate & Brand
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/*  Card 08: Education & Planetariums  */}
              <Link
                href="/industries/education-planetariums"
                className="shrink-0 w-[280px] sm:w-[310px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.35)] bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-sm flex flex-col justify-between"
                data-purpose="experience-card"
              >
                <div className="h-80 w-full overflow-hidden relative">
                  <img
                    alt="Education & Planetariums planetary orbit cosmic nebulae projection"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 ease-out"
                    src="/images/education_planetarium_saturn.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent z-10"></div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-indigo-300 font-semibold group-hover:border-indigo-400/60 group-hover:text-white transition-colors duration-300">
                    08
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 pr-2">
                      Education & Planetariums
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/*  Card 09: Private Events & Weddings  */}
              <Link
                href="/industries/private-events-weddings"
                className="shrink-0 w-[280px] sm:w-[310px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.35)] bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-sm flex flex-col justify-between"
                data-purpose="experience-card"
              >
                <div className="h-80 w-full overflow-hidden relative">
                  <img
                    alt="Private Events & Weddings reception under starry geodesic dome"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-transform duration-700 ease-out"
                    src="/images/img_c3f91d27aa2c.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent z-10"></div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-indigo-300 font-semibold group-hover:border-indigo-400/60 group-hover:text-white transition-colors duration-300">
                    09
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 pr-2">
                      Private Events & Weddings
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/*  END: ExperiencesSection  */}

        {/*  BEGIN: AboutSection  */}
        <section
          className="relative bg-[#05070B] overflow-hidden"
          data-purpose="about-partner-section"
          id="about"
        >
          <div className="relative w-full min-h-[460px] md:min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                alt="Arora Dorm illuminated geodesic pavilion by lake under night sky"
                className="w-full h-full object-cover object-left md:object-center"
                src="/images/img_1059dc147612.jpg"
                style={{ transform: "scaleX(-1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#05070B]/50 to-[#05070B] pointer-events-none hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/40 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-transparent to-[#05070B] pointer-events-none"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-end py-16 md:py-24">
              <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col items-start">
                <span className="text-xs uppercase font-medium tracking-[0.25em] text-[#A5B4FC]/80 block mb-4">
                  ABOUT ARORA DORM
                </span>
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.05] mb-6">
                  A Different
                  <br />
                  Approach.
                </h2>
                <p className="text-base text-slate-300 font-light leading-relaxed mb-8 max-w-md">
                  We bring engineering, content and support together — so you only deal
                  with one partner.
                </p>
                <div>
                  <Link
                    className="aurora-btn-primary px-7 py-3 text-xs tracking-wide"
                    href="/about"
                  >
                    <span>Learn More</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
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
            </div>
          </div>
        </section>
        {/*  END: AboutSection  */}

        {/*  BEGIN: ProcessSection  */}
        <section
          className="py-32 px-6 md:px-16 lg:px-24 relative bg-[#05070B] border-t border-b border-white/5 overflow-hidden"
          data-purpose="seamless-journey-process"
        >
          {/*  Subtle Radial Glow Background & Blueprint Gridlines  */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.08),rgba(5,7,11,0))] z-0"></div>
          <div className="absolute inset-0 pointer-events-none opacity-[0.07] z-0 flex items-center justify-center">
            <svg
              className="w-full h-full max-w-7xl"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 1200 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="600"
                cy="400"
                r="520"
                stroke="#A5B4FC"
                strokeDasharray="3 6"
                strokeWidth="1"
              ></circle>
              <circle cx="600" cy="400" r="380" stroke="#A5B4FC" strokeWidth="1"></circle>
              <circle
                cx="600"
                cy="400"
                r="240"
                stroke="#A5B4FC"
                strokeDasharray="2 4"
                strokeWidth="1"
              ></circle>
              <path
                d="M150 400 L600 20 L1050 400"
                stroke="#A5B4FC"
                strokeWidth="0.8"
              ></path>
              <path
                d="M320 400 L600 20 L880 400"
                stroke="#A5B4FC"
                strokeWidth="0.8"
              ></path>
              <line
                stroke="#A5B4FC"
                strokeWidth="1"
                x1="0"
                x2="1200"
                y1="400"
                y2="400"
              ></line>
            </svg>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/*  Header  */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-6">
              <div>
                <span className="text-xs md:text-sm font-light tracking-[0.25em] text-slate-400 mb-4 block uppercase">
                  FROM VISION TO REALITY
                </span>
                <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.05]">
                  A Seamless Journey.
                </h2>
              </div>
              <p className="text-slate-400 font-light text-base md:text-lg max-w-xl leading-relaxed">
                We handle every step, from concept to ongoing support.
              </p>
            </div>

            {/*  Continuous Cinematic Architectural Timeline (Desktop Track)  */}
            <div className="relative mt-8 md:mt-24">
              <div className="absolute top-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent hidden md:block z-0"></div>
              <div className="absolute top-[7px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[#A5B4FC]/50 to-transparent hidden md:block z-0 shadow-[0_0_12px_rgba(129,140,248,0.3)]"></div>

              {/*  Desktop 4-Column Timeline Nodes  */}
              <div className="hidden md:grid md:grid-cols-4 gap-8 relative z-10">
                {/*  Node 01  */}
                <div className="group cursor-default relative flex flex-col items-start">
                  <div className="relative flex items-center justify-center w-5 h-5 -mt-0.5 mb-8">
                    <span className="absolute w-5 h-5 rounded-full ring-1 ring-indigo-400/40 bg-indigo-500/20 group-hover:scale-125 transition-transform duration-500"></span>
                    <span className="relative w-2 h-2 rounded-full bg-[#A5B4FC] shadow-[0_0_8px_rgba(165,180,252,0.8)]"></span>
                  </div>
                  <span className="text-4xl md:text-5xl font-editorial text-white/30 font-light group-hover:text-indigo-300 transition-colors duration-300 leading-none mb-3">
                    01
                  </span>
                  <h3 className="text-xl md:text-2xl font-editorial text-white mb-2 tracking-wide font-normal">
                    Plan
                  </h3>
                  <p className="text-sm font-light text-slate-400 leading-relaxed max-w-[220px]">
                    Understanding the space, audience and vision.
                  </p>
                  <span className="text-[10px] tracking-widest text-indigo-400/60 uppercase mt-5 block font-mono">
                    [ STAGE 01 · CONCEPT ]
                  </span>
                </div>

                {/*  Node 02  */}
                <div className="group cursor-default relative flex flex-col items-start">
                  <div className="relative flex items-center justify-center w-5 h-5 -mt-0.5 mb-8">
                    <span className="absolute w-5 h-5 rounded-full ring-1 ring-indigo-400/40 bg-indigo-500/20 group-hover:scale-125 transition-transform duration-500"></span>
                    <span className="relative w-2 h-2 rounded-full bg-[#A5B4FC] shadow-[0_0_8px_rgba(165,180,252,0.8)]"></span>
                  </div>
                  <span className="text-4xl md:text-5xl font-editorial text-white/30 font-light group-hover:text-indigo-300 transition-colors duration-300 leading-none mb-3">
                    02
                  </span>
                  <h3 className="text-xl md:text-2xl font-editorial text-white mb-2 tracking-wide font-normal">
                    Design
                  </h3>
                  <p className="text-sm font-light text-slate-400 leading-relaxed max-w-[220px]">
                    Engineering the structure, projection and experience.
                  </p>
                  <span className="text-[10px] tracking-widest text-indigo-400/60 uppercase mt-5 block font-mono">
                    [ STAGE 02 · ARCHITECTURE ]
                  </span>
                </div>

                {/*  Node 03  */}
                <div className="group cursor-default relative flex flex-col items-start">
                  <div className="relative flex items-center justify-center w-5 h-5 -mt-0.5 mb-8">
                    <span className="absolute w-5 h-5 rounded-full ring-1 ring-indigo-400/40 bg-indigo-500/20 group-hover:scale-125 transition-transform duration-500"></span>
                    <span className="relative w-2 h-2 rounded-full bg-[#A5B4FC] shadow-[0_0_8px_rgba(165,180,252,0.8)]"></span>
                  </div>
                  <span className="text-4xl md:text-5xl font-editorial text-white/30 font-light group-hover:text-indigo-300 transition-colors duration-300 leading-none mb-3">
                    03
                  </span>
                  <h3 className="text-xl md:text-2xl font-editorial text-white mb-2 tracking-wide font-normal">
                    Deliver
                  </h3>
                  <p className="text-sm font-light text-slate-400 leading-relaxed max-w-[220px]">
                    Bringing the complete experience to life.
                  </p>
                  <span className="text-[10px] tracking-widest text-indigo-400/60 uppercase mt-5 block font-mono">
                    [ STAGE 03 · INTEGRATION ]
                  </span>
                </div>

                {/*  Node 04  */}
                <div className="group cursor-default relative flex flex-col items-start">
                  <div className="relative flex items-center justify-center w-5 h-5 -mt-0.5 mb-8">
                    <span className="absolute w-5 h-5 rounded-full ring-1 ring-indigo-400/40 bg-indigo-500/20 group-hover:scale-125 transition-transform duration-500"></span>
                    <span className="relative w-2 h-2 rounded-full bg-[#A5B4FC] shadow-[0_0_8px_rgba(165,180,252,0.8)]"></span>
                  </div>
                  <span className="text-4xl md:text-5xl font-editorial text-white/30 font-light group-hover:text-indigo-300 transition-colors duration-300 leading-none mb-3">
                    04
                  </span>
                  <h3 className="text-xl md:text-2xl font-editorial text-white mb-2 tracking-wide font-normal">
                    Support
                  </h3>
                  <p className="text-sm font-light text-slate-400 leading-relaxed max-w-[220px]">
                    Ongoing technical support beyond opening day.
                  </p>
                  <span className="text-[10px] tracking-widest text-indigo-400/60 uppercase mt-5 block font-mono">
                    [ STAGE 04 · CONTINUITY ]
                  </span>
                </div>
              </div>

              {/*  Mobile Vertical Timeline  */}
              <div className="flex flex-col space-y-12 md:hidden relative border-l border-indigo-500/20 ml-2 pl-8">
                <div className="relative flex flex-col items-start">
                  <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full ring-1 ring-indigo-400/40 bg-indigo-500/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A5B4FC]"></span>
                  </span>
                  <span className="text-3xl font-editorial text-white/30 font-light leading-none mb-2">
                    01
                  </span>
                  <h3 className="text-xl font-editorial text-white mb-1 tracking-wide font-normal">
                    Plan
                  </h3>
                  <p className="text-sm font-light text-slate-400 leading-relaxed">
                    Understanding the space, audience and vision.
                  </p>
                  <span className="text-[10px] tracking-widest text-indigo-400/60 uppercase mt-3 block font-mono">
                    [ STAGE 01 · CONCEPT ]
                  </span>
                </div>
                <div className="relative flex flex-col items-start">
                  <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full ring-1 ring-indigo-400/40 bg-indigo-500/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A5B4FC]"></span>
                  </span>
                  <span className="text-3xl font-editorial text-white/30 font-light leading-none mb-2">
                    02
                  </span>
                  <h3 className="text-xl font-editorial text-white mb-1 tracking-wide font-normal">
                    Design
                  </h3>
                  <p className="text-sm font-light text-slate-400 leading-relaxed">
                    Engineering the structure, projection and experience.
                  </p>
                  <span className="text-[10px] tracking-widest text-indigo-400/60 uppercase mt-3 block font-mono">
                    [ STAGE 02 · ARCHITECTURE ]
                  </span>
                </div>
                <div className="relative flex flex-col items-start">
                  <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full ring-1 ring-indigo-400/40 bg-indigo-500/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A5B4FC]"></span>
                  </span>
                  <span className="text-3xl font-editorial text-white/30 font-light leading-none mb-2">
                    03
                  </span>
                  <h3 className="text-xl font-editorial text-white mb-1 tracking-wide font-normal">
                    Deliver
                  </h3>
                  <p className="text-sm font-light text-slate-400 leading-relaxed">
                    Bringing the complete experience to life.
                  </p>
                  <span className="text-[10px] tracking-widest text-indigo-400/60 uppercase mt-3 block font-mono">
                    [ STAGE 03 · INTEGRATION ]
                  </span>
                </div>
                <div className="relative flex flex-col items-start">
                  <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full ring-1 ring-indigo-400/40 bg-indigo-500/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A5B4FC]"></span>
                  </span>
                  <span className="text-3xl font-editorial text-white/30 font-light leading-none mb-2">
                    04
                  </span>
                  <h3 className="text-xl font-editorial text-white mb-1 tracking-wide font-normal">
                    Support
                  </h3>
                  <p className="text-sm font-light text-slate-400 leading-relaxed">
                    Ongoing technical support beyond opening day.
                  </p>
                  <span className="text-[10px] tracking-widest text-indigo-400/60 uppercase mt-3 block font-mono">
                    [ STAGE 04 · CONTINUITY ]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  END: ProcessSection  */}

        {/*  BEGIN: TechnologySection  */}
        <section
          className="py-24 relative bg-[#05070B] overflow-hidden"
          data-purpose="technology-architecture"
          id="technology"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/*  Left Column: Copy & Action  */}
              <div className="lg:col-span-5 flex flex-col justify-center z-10">
                <div className="text-[11px] font-semibold tracking-[0.25em] text-[#909cb8] uppercase mb-4">
                  A COMPLETE IMMERSIVE ECOSYSTEM
                </div>
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.05] mb-6">
                  One Partner.
                  <br />
                  Every Layer.
                </h2>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed max-w-md mb-8">
                  We bring together dome engineering, projection systems, immersive content
                  and long-term technical support — as one fully integrated solution.
                </p>
                <div>
                  <Link
                    className="aurora-btn-primary px-6 py-3 text-sm"
                    href="/technology-dome-systems"
                  >
                    <span>Learn About Our Approach</span>
                    <span className="text-base leading-none">→</span>
                  </Link>
                </div>
              </div>

              {/*  Right Column: Interactive Dome Cutaway Architecture Diagram (High-Res)  */}
              <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[500px]">
                <div className="relative w-full max-w-[680px] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent rounded-2xl filter blur-xl pointer-events-none"></div>
                  {/*  Dome Cutaway Rendering  */}
                  <img
                    alt="3D architectural cutaway diagram of dome structure with inner landscape projection"
                    className="w-full h-auto object-contain block mx-auto select-none rounded-2xl border border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                    src="/images/tech_dome_cutaway.jpg"
                  />
                  {/*  Callout 1: Dome Structure (Top Left)  */}
                  <div className="absolute top-[4%] left-0 sm:left-[2%] flex items-start gap-2.5 z-20">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#8297e6]/50 bg-[#0d1322]/80 backdrop-blur-sm flex items-center justify-center text-[#A5B4FC] text-xs font-semibold shrink-0 shadow-sm">
                      +
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-medium text-white tracking-wide leading-tight">
                        Dome Structure
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-light mt-0.5">
                        3m – 25m+
                      </span>
                    </div>
                  </div>
                  {/*  Leader Line 1  */}
                  <svg
                    className="hidden sm:block absolute top-[11%] left-[8%] w-[26%] h-[20%] pointer-events-none z-10"
                    fill="none"
                    preserveAspectRatio="none"
                    stroke="currentColor"
                    viewBox="0 0 100 60"
                  >
                    <path
                      d="M10,0 L10,32 L95,45"
                      fill="none"
                      stroke="rgba(130, 151, 230, 0.4)"
                      strokeWidth="1"
                    ></path>
                    <circle cx="95" cy="45" fill="#A5B4FC" r="2"></circle>
                  </svg>
                  {/*  Callout 2: Projection Systems (Top Right)  */}
                  <div className="absolute top-[4%] right-0 sm:right-[4%] flex items-start gap-2.5 z-20">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#8297e6]/50 bg-[#0d1322]/80 backdrop-blur-sm flex items-center justify-center text-[#A5B4FC] text-xs font-semibold shrink-0 shadow-sm">
                      +
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-medium text-white tracking-wide leading-tight">
                        Projection Systems
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-light mt-0.5">
                        High-Resolution 360°
                      </span>
                    </div>
                  </div>
                  {/*  Leader Line 2  */}
                  <svg
                    className="hidden sm:block absolute top-[11%] right-[14%] w-[22%] h-[18%] pointer-events-none z-10"
                    fill="none"
                    preserveAspectRatio="none"
                    stroke="currentColor"
                    viewBox="0 0 100 60"
                  >
                    <path
                      d="M85,0 L85,25 L10,40"
                      fill="none"
                      stroke="rgba(130, 151, 230, 0.4)"
                      strokeWidth="1"
                    ></path>
                    <circle cx="10" cy="40" fill="#A5B4FC" r="2"></circle>
                  </svg>
                  {/*  Callout 3: Immersive Content (Bottom Left)  */}
                  <div className="absolute bottom-[4%] left-0 sm:left-[4%] flex items-start gap-2.5 z-20">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#8297e6]/50 bg-[#0d1322]/80 backdrop-blur-sm flex items-center justify-center text-[#A5B4FC] text-xs font-semibold shrink-0 shadow-sm">
                      +
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-medium text-white tracking-wide leading-tight">
                        Immersive Content
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-light mt-0.5">
                        Fulldome & Bespoke CGI
                      </span>
                    </div>
                  </div>
                  {/*  Leader Line 3  */}
                  <svg
                    className="hidden sm:block absolute bottom-[10%] left-[10%] w-[28%] h-[20%] pointer-events-none z-10"
                    fill="none"
                    preserveAspectRatio="none"
                    stroke="currentColor"
                    viewBox="0 0 100 60"
                  >
                    <path
                      d="M10,60 L10,25 L92,15"
                      fill="none"
                      stroke="rgba(130, 151, 230, 0.4)"
                      strokeWidth="1"
                    ></path>
                    <circle cx="92" cy="15" fill="#A5B4FC" r="2"></circle>
                  </svg>
                  {/*  Callout 4: Ongoing Support (Bottom Right)  */}
                  <div className="absolute bottom-[4%] right-0 sm:right-[6%] flex items-start gap-2.5 z-20">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#8297e6]/50 bg-[#0d1322]/80 backdrop-blur-sm flex items-center justify-center text-[#A5B4FC] text-xs font-semibold shrink-0 shadow-sm">
                      +
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-medium text-white tracking-wide leading-tight">
                        Ongoing Support
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-light mt-0.5">
                        Technical Continuity
                      </span>
                    </div>
                  </div>
                  {/*  Leader Line 4  */}
                  <svg
                    className="hidden sm:block absolute bottom-[10%] right-[10%] w-[24%] h-[18%] pointer-events-none z-10"
                    fill="none"
                    preserveAspectRatio="none"
                    stroke="currentColor"
                    viewBox="0 0 100 60"
                  >
                    <path
                      d="M85,60 L85,25 L15,10"
                      fill="none"
                      stroke="rgba(130, 151, 230, 0.4)"
                      strokeWidth="1"
                    ></path>
                    <circle cx="15" cy="10" fill="#A5B4FC" r="2"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  END: TechnologySection  */}

        {/*  BEGIN: ContentShowcaseSection (High-Res Cosmic Whale Canvas)  */}
        <section
          className="relative bg-[#05070B] overflow-hidden min-h-[540px] lg:min-h-[620px] flex items-center"
          data-purpose="immersive-content-canvas"
          id="content"
        >
          {/*  Full Bleed Panoramic Background Image  */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Cinematic 360-degree immersive fulldome projection of a colossal luminescent nebula and celestial whale gliding through starry space"
              className="w-full h-full object-cover"
              src="/images/content_cosmic_whale.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/50 via-[#05070B]/85 to-[#05070B]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-transparent to-[#05070B]/50"></div>
          </div>

          {/*  Content Overlay Container  */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-start-7 lg:col-span-6 flex flex-col justify-center">
                <span className="text-xs uppercase font-medium tracking-[0.25em] text-slate-400 block mb-3">
                  IMMERSIVE CONTENT
                </span>
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.05] mb-6">
                  World-Class Stories
                  <br />
                  for a 360° Canvas.
                </h2>
                <p className="text-base text-slate-300 font-light leading-relaxed mb-8 max-w-lg">
                  From our curated library to fully custom CGI, we create worlds tailored
                  to your audience.
                </p>
                <div>
                  <Link
                    className="aurora-btn-primary px-6 py-3 text-xs tracking-wide"
                    href="/solutions/immersive-content"
                  >
                    <span>Explore Content</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
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
            </div>
          </div>
        </section>
        {/*  END: ContentShowcaseSection  */}

        {/*  BEGIN: FinalCTASection (High-Res Alpine Lake Geodesic Dome)  */}
        <section
          className="relative py-28 overflow-hidden"
          data-purpose="final-call-to-action"
          id="contact"
        >
          {/*  Panoramic Aurora Mountain Background  */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Cinematic wide panoramic landscape of an illuminated geodesic dome pavilion beside a reflective alpine lake with aurora borealis"
              className="w-full h-full object-cover scale-105"
              src="/images/alpine_lake_dome_cta.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/85 to-[#05070B]/60"></div>
            <div className="absolute inset-0 bg-[#05070B]/30"></div>
          </div>

          {/*  Foreground CTA Box  */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div>
              <span className="text-xs uppercase font-medium tracking-[0.25em] text-slate-300 block mb-4">
                READY TO CREATE?
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.05] max-w-xl">
                Let’s Turn Your Space
                <br />
                Into an Experience.
              </h2>
            </div>
            <div className="flex items-center gap-4">
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
        {/*  END: FinalCTASection  */}
      </main>

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
                Aurora Dome Solutions — Brand Reel
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
                src="/images/hero_dome_celestial.jpg"
                alt="Brand Reel Thumbnail"
                className="w-full h-full object-cover opacity-80"
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
