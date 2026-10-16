"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen w-full overflow-x-hidden">
      
{/*  END: MainHeader  */}
{/*  BEGIN: HeroSection  */}
<section className="relative overflow-hidden bg-aurora-radial py-24" data-purpose="hero-section">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[580px] lg:min-h-[660px]">
{/*  Left Column: Copy & CTAs  */}
<div className="lg:col-span-5">
<p className="text-xs font-semibold tracking-[0.25em] text-[#93c5fd] uppercase mb-4">
      IMMERSIVE CONTENT
    </p>
<h1 className="headline-font text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-white mb-6">
      A 360° Canvas Deserves a World-Class Story.
    </h1>
<p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-8 max-w-xl">
      From breathtaking fulldome films to bespoke CGI content, we create immersive worlds that bring your vision to life inside the dome.
    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#93c5fd] hover:bg-[#bfdbfe] text-[#050b14] font-medium text-sm transition-all duration-300 shadow-[0_0_25px_rgba(147,197,253,0.3)]" href="#library">
<span className="">Explore Our Content</span>
<svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
<button className="group inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium py-3.5 px-4" type="button">
<span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#93c5fd] flex items-center justify-center transition-all bg-white/5 backdrop-blur-sm">
<svg className="w-4 h-4 ml-0.5 fill-current text-white group-hover:text-[#93c5fd]" viewBox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</span>
<span className="">Watch Showreel</span>
</button>
</div>
</div>
{/*  Right Column: Visual Container  */}
<div className="lg:col-span-7">
<div className="rounded-2xl lg:rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 group bg-black">
<div className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] overflow-hidden">
<img  alt="Audience seated inside a majestic fulldome theater looking at a prehistoric marine giant underwater projection" className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/content_cosmic_whale.jpg" />
{/*  Left soft blend gradient into dark background  */}
<div className="absolute inset-0 bg-gradient-to-r from-[#03070d] via-transparent to-transparent pointer-events-none w-1/3 lg:w-2/5"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030508]/80 via-transparent to-transparent pointer-events-none"></div>
</div>
{/*  Ambient Glow Behind Arc  */}
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-blue-500/20 blur-2xl rounded-full pointer-events-none"></div>
</div>
</div>
</div></div>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: ContentLibrarySection  */}
<section className="py-20 lg:py-24 border-t border-white/5 relative" data-purpose="content-library-showcase" id="library">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="max-w-2xl">
<p className="text-xs font-semibold tracking-[0.28em] uppercase text-[#9BAAFF] mb-3">
            CONTENT LIBRARY
          </p>
<h2 className="headline-font text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
            A Growing Library of Extraordinary Worlds.
          </h2>
<p className="text-slate-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Access a curated collection of world-class fulldome films and visual experiences, or let us create something unique for your space, your audience and your brand.
          </p>
</div>
<div className="shrink-0">
<Link className="inline-flex items-center gap-2 bg-[#9BAAFF] hover:bg-[#8797f5] text-[#030508] font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all aurora-btn-primary" href="/start-a-project">
<span className="">Browse Full Library</span>
<svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</Link>
</div>
</div>
{/*  5-Column Content Cards Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5" data-purpose="category-card-grid">
{/*  Card 1: COSMIC  */}
<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#080d16] flex flex-col justify-between transition-all duration-300 card-glow">
<div className="relative aspect-[4/5] w-full overflow-hidden">
<img  alt="Cosmic sphere of Earth and galaxy fulldome projection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_7c1c45f94e59.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-[#080d16]/30 to-transparent"></div>
</div>
<div className="p-5 relative -mt-10 flex flex-col justify-between flex-1">
<div>
<h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-1.5">COSMIC</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Travel through galaxies, planets and the universe.</p>
</div>
<div className="mt-5">
<span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:bg-[#9BAAFF]/10 flex items-center justify-center text-white group-hover:text-[#9BAAFF] transition-all">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
</article>
{/*  Card 2: NATURE  */}
<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#080d16] flex flex-col justify-between transition-all duration-300 card-glow">
<div className="relative aspect-[4/5] w-full overflow-hidden">
<img  alt="Deep ocean coral reef and whale under geodesic projection dome" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_2d8ff5bd48a3.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-[#080d16]/30 to-transparent"></div>
</div>
<div className="p-5 relative -mt-10 flex flex-col justify-between flex-1">
<div>
<h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-1.5">NATURE</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Oceans, forests and the vibrant natural world.</p>
</div>
<div className="mt-5">
<span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:bg-[#9BAAFF]/10 flex items-center justify-center text-white group-hover:text-[#9BAAFF] transition-all">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
</article>
{/*  Card 3: LANDSCAPES  */}
<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#080d16] flex flex-col justify-between transition-all duration-300 card-glow">
<div className="relative aspect-[4/5] w-full overflow-hidden">
<img  alt="Pristine alpine lake and snowy peaks inside curved dome structure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_50e0aa59401f.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-[#080d16]/30 to-transparent"></div>
</div>
<div className="p-5 relative -mt-10 flex flex-col justify-between flex-1">
<div>
<h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-1.5">LANDSCAPES</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Iconic destinations and breathtaking environments.</p>
</div>
<div className="mt-5">
<span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:bg-[#9BAAFF]/10 flex items-center justify-center text-white group-hover:text-[#9BAAFF] transition-all">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
</article>
{/*  Card 4: ART & CULTURE  */}
<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#080d16] flex flex-col justify-between transition-all duration-300 card-glow">
<div className="relative aspect-[4/5] w-full overflow-hidden">
<img  alt="Bioluminescent artistic jellyfish nebula rendering in deep space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_5849cd928767.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-[#080d16]/30 to-transparent"></div>
</div>
<div className="p-5 relative -mt-10 flex flex-col justify-between flex-1">
<div>
<h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-1.5">ART & CULTURE</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Immersive art, history and cultural storytelling.</p>
</div>
<div className="mt-5">
<span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:bg-[#9BAAFF]/10 flex items-center justify-center text-white group-hover:text-[#9BAAFF] transition-all">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
</article>
{/*  Card 5: RELAXATION  */}
<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#080d16] flex flex-col justify-between transition-all duration-300 card-glow">
<div className="relative aspect-[4/5] w-full overflow-hidden">
<img  alt="Serene meditation dome with aurora borealis light therapy visuals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="/images/img_587e11b92207.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-[#080d16]/30 to-transparent"></div>
</div>
<div className="p-5 relative -mt-10 flex flex-col justify-between flex-1">
<div>
<h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-1.5">RELAXATION</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Calming visual journeys for wellness and leisure.</p>
</div>
<div className="mt-5">
<span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:bg-[#9BAAFF]/10 flex items-center justify-center text-white group-hover:text-[#9BAAFF] transition-all">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
</article>
</div>
</div>
</section>
{/*  END: ContentLibrarySection  */}
{/*  BEGIN: BespokeCGISection  */}
<section className="py-20 lg:py-28 relative overflow-hidden bg-[#020407]" data-purpose="bespoke-cgi-showcase">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
{/*  Left Column: Copy & Value Proposition  */}
<div className="lg:col-span-5">
<p className="text-xs font-semibold tracking-[0.28em] uppercase text-[#9BAAFF] mb-4">
            BESPOKE CGI CONTENT
          </p>
<h2 className="headline-font text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.1] text-white mb-6">
            Your Brand.<br />Your Story.<br />Your World.
          </h2>
<p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
            We create custom CGI content tailored to your specific theme, season, event or brand. Whether it’s an immersive dining experience, a product launch or a full attraction, our creative team designs and produces content that perfectly fits your vision.
          </p>
<Link className="inline-flex items-center gap-2 bg-[#9BAAFF] hover:bg-[#8797f5] text-[#030508] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02]" href="/start-a-project">
<span className="">Create Custom Content</span>
<svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</Link>
</div>
{/*  Right Column: Control Room & Bioluminescent Jellyfish Projection  */}
<div className="lg:col-span-7">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#05080e] shadow-2xl group">
{/*  Dual visual composition: Jellyfish fulldome backdrop + Control console silhouette overlay  */}
<div className="relative aspect-[16/10] w-full overflow-hidden"><img  alt="Cinematic wide view of immersive dome production studio with creative specialist and bioluminescent CGI jellyfish projection" className="w-full h-full object-cover object-center filter brightness-95 contrast-105" src="/images/img_30c1e1fa482f.jpg" /><div className="absolute inset-0 bg-gradient-to-tr from-[#020407] via-transparent to-[#9BAAFF]/10 pointer-events-none"></div></div>
{/*  Sleek Control Badge  */}
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs">
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-slate-300 font-mono">8K Fulldome Master • 60 FPS Real-time</span>
</div>
<span className="text-[#9BAAFF] font-medium hidden sm:inline-block">Arora Dorm Engine v3.4</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: BespokeCGISection  */}
{/*  BEGIN: IndustryExperiencesSection  */}
<section className="py-20 lg:py-28 border-t border-white/5 relative" data-purpose="industry-experiences">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<p className="text-xs font-semibold tracking-[0.28em] uppercase text-[#9BAAFF] mb-3">
            DESIGNED FOR EVERY INDUSTRY
          </p>
<h2 className="headline-font text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Content for Every Experience.
          </h2>
</div>
<p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
          From high-energy festival visuals to calming wellness journeys, we tailor content to match your industry and audience.
        </p>
</div>
{/*  8-Card Grid Layout (matching reference: 4 on top, 4 on bottom + 9th flex/card)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-purpose="experiences-grid">
{/*  1. Entertainment  */}
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#090d16] p-4 transition-all duration-300 card-glow">
<div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3">
<img  alt="Entertainment dome visualization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_a060f6a43570.jpg" />
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-sm font-medium text-white">Entertainment</span>
<span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:text-[#9BAAFF] flex items-center justify-center transition-all">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
{/*  2. Events & Festivals  */}
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#090d16] p-4 transition-all duration-300 card-glow">
<div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3">
<img  alt="Events and festival dome stage lights" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_d960facf5100.jpg" />
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-sm font-medium text-white">Events & Festivals</span>
<span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:text-[#9BAAFF] flex items-center justify-center transition-all">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
{/*  3. Hospitality & Dining  */}
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#090d16] p-4 transition-all duration-300 card-glow">
<div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3">
<img  alt="Immersive dining dome experience with candlelight" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_b720cbffa279.jpg" />
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-sm font-medium text-white">Hospitality & Dining</span>
<span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:text-[#9BAAFF] flex items-center justify-center transition-all">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
{/*  4. Wellness  */}
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#090d16] p-4 transition-all duration-300 card-glow">
<div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3">
<img  alt="Calm meditation wellness dome" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_587e11b92207.jpg" />
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-sm font-medium text-white">Wellness</span>
<span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:text-[#9BAAFF] flex items-center justify-center transition-all">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
{/*  5. Music & Nightlife  */}
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#090d16] p-4 transition-all duration-300 card-glow">
<div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3">
<img  alt="Nightlife party under laser mapped dome ceiling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_68755b9ccc06.jpg" />
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-sm font-medium text-white">Music & Nightlife</span>
<span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:text-[#9BAAFF] flex items-center justify-center transition-all">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
{/*  6. Museums & Culture  */}
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#090d16] p-4 transition-all duration-300 card-glow">
<div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3">
<img  alt="Planetarium and science museum ceiling projections" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_a014896c7567.jpg" />
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-sm font-medium text-white">Museums & Culture</span>
<span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:text-[#9BAAFF] flex items-center justify-center transition-all">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
{/*  7. Brand Experiences  */}
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#090d16] p-4 transition-all duration-300 card-glow">
<div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3">
<img  alt="Brand launch vehicle display inside high-tech architectural dome" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_6963e9136b99.jpg" />
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-sm font-medium text-white">Brand Experiences</span>
<span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:text-[#9BAAFF] flex items-center justify-center transition-all">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
{/*  8. Private Events  */}
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#090d16] p-4 transition-all duration-300 card-glow">
<div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3">
<img  alt="Luxury private gala reception inside illuminated glass dome" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_9a0e34e507d0.jpg" />
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-sm font-medium text-white">Private Events</span>
<span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#9BAAFF] group-hover:text-[#9BAAFF] flex items-center justify-center transition-all">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
</div>
</div>
</section>
{/*  END: IndustryExperiencesSection  */}
{/*  BEGIN: CreationProcessSection  */}
<section className="py-20 lg:py-28 border-t border-white/5 bg-[#03060a] relative overflow-hidden" data-purpose="creation-process">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="processInteractiveContainer">
{/*  Ambient Dynamic Follow-Light Spot  */}
<div className="process-spotlight hidden md:block" id="processSpotlight" style={{"left":"50%","top":"38%","opacity":"0.9"}}></div>
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20 relative z-10">
<div>
<div className="flex items-center gap-3 mb-3">
<p className="text-xs font-semibold tracking-[0.28em] uppercase text-[#9BAAFF]">
            FROM IDEA TO IMMERSION
          </p>
<span className="h-1 w-1 rounded-full bg-[#9BAAFF]/60"></span>
<span className="text-[11px] font-mono tracking-wider text-slate-400 px-2 py-0.5 rounded-full border border-white/10 bg-white/5" id="processStatusPill">01 — 05 / INTERACTIVE JOURNEY</span>
</div>
<h2 className="headline-font text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
          Our Content Creation Process.
        </h2>
</div>
<p className="text-slate-400 text-sm max-w-sm font-light leading-relaxed">
        A streamlined, collaborative process to turn your ideas into stunning dome content. Hover over each phase to explore.
      </p>
</div>
{/*  Dome Arc Visualization & 5 Interactive Elevated Stages  */}
<div className="relative min-h-[460px] flex flex-col justify-between pt-6 pb-4" data-purpose="process-dome-arc">
{/*  Architectural Dome Geometry SVG with Interactive Stage Points  */}
<div className="absolute inset-0 pointer-events-none hidden md:block overflow-visible -z-0">
<svg className="w-full h-full" fill="none" id="domeProcessSvg" preserveAspectRatio="none" viewBox="0 0 1100 420">
<defs>
<linearGradient id="domeArcGrad" x1="0%" x2="100%" y1="100%" y2="100%">
<stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25"></stop>
<stop offset="25%" stopColor="#6366f1" stopOpacity="0.65"></stop>
<stop offset="50%" stopColor="#9BAAFF" stopOpacity="0.95"></stop>
<stop offset="75%" stopColor="#a855f7" stopOpacity="0.65"></stop>
<stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25"></stop>
</linearGradient>
<linearGradient id="domeRadialGlow" x1="50%" x2="50%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#9BAAFF" stopOpacity="0.14"></stop>
<stop offset="100%" stopColor="#9BAAFF" stopOpacity="0"></stop>
</linearGradient>
<filter height="180%" id="glowFilter" width="180%" x="-40%" y="-40%">
<feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur>
</filter>
<filter height="220%" id="nodeGlow" width="220%" x="-60%" y="-60%">
<feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
</filter>
</defs>
{/*  Dome Interior Grid & Concentric Arcs  */}
<path d="M 70 320 Q 550 50 1030 320" fill="url(#domeRadialGlow)" stroke="none"></path>
<path d="M 140 330 Q 550 110 960 330" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 8" strokeWidth="1"></path>
<path d="M 210 340 Q 550 170 890 340" stroke="rgba(255,255,255,0.03)" strokeDasharray="2 6" strokeWidth="1"></path>
{/*  Vertical Meridian Ribs  */}
<path d="M 550 50 L 550 360" stroke="rgba(155, 170, 255, 0.12)" strokeDasharray="3 5" strokeWidth="1"></path>
<path d="M 310 135 L 290 360" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3 7" strokeWidth="1"></path>
<path d="M 790 135 L 810 360" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3 7" strokeWidth="1"></path>
{/*  Glowing Outer Halo Arc  */}
<path d="M 70 320 Q 550 50 1030 320" filter="url(#glowFilter)" opacity="0.6" stroke="url(#domeArcGrad)" strokeWidth="4"></path>
{/*  Crisp Primary Trajectory Arc  */}
<path d="M 70 320 Q 550 50 1030 320" stroke="url(#domeArcGrad)" strokeDasharray="6 4" strokeWidth="1.75"></path>
{/*  Trajectory Pulse Nodes for all 5 Phases  */}
{/*  Phase 01 Node  */}
<g className="svg-interactive-node transition-transform duration-300" id="svgNode1">
<circle cx="110" cy="302" fill="none" opacity="0.4" r="8" stroke="#38bdf8" strokeWidth="1"></circle>
<circle cx="110" cy="302" fill="#38bdf8" r="3.5"></circle>
</g>
{/*  Phase 02 Node  */}
<g className="svg-interactive-node transition-transform duration-300" id="svgNode2">
<circle cx="310" cy="155" fill="none" opacity="0.5" r="8" stroke="#6366f1" strokeWidth="1"></circle>
<circle cx="310" cy="155" fill="#6366f1" r="3.5"></circle>
</g>
{/*  Phase 03 Node (Zenith)  */}
<g className="svg-interactive-node transition-transform duration-300 is-active" id="svgNode3">
<circle cx="550" cy="50" fill="none" filter="url(#nodeGlow)" opacity="0.85" r="9" stroke="#9BAAFF" strokeWidth="1.5"></circle>
<circle cx="550" cy="50" fill="#BDC7FF" r="4.5"></circle>
</g>
{/*  Phase 04 Node  */}
<g className="svg-interactive-node transition-transform duration-300" id="svgNode4">
<circle cx="790" cy="155" fill="none" opacity="0.5" r="8" stroke="#a855f7" strokeWidth="1"></circle>
<circle cx="790" cy="155" fill="#a855f7" r="3.5"></circle>
</g>
{/*  Phase 05 Node  */}
<g className="svg-interactive-node transition-transform duration-300" id="svgNode5">
<circle cx="990" cy="302" fill="none" opacity="0.4" r="8" stroke="#38bdf8" strokeWidth="1"></circle>
<circle cx="990" cy="302" fill="#38bdf8" r="3.5"></circle>
</g>
</svg>
</div>
{/*  Elevated 5 Stages (Curved Layout) with Dynamic Hover Handlers  */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4 relative z-10 items-end" id="processGrid">
{/*  Stage 01 (Base left)  */}
<div className="process-step-node group relative flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pt-24 cursor-pointer" data-step="1" data-x="10%" data-y="72%">
<div className="relative mb-5">
<div className="step-badge w-14 h-14 rounded-full border border-white/20 bg-[#070b13]/90 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300">
<svg className="w-5 h-5 text-[#9BAAFF] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="step-tag absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-[#020407] border border-white/10 rounded-full text-[9px] font-mono text-[#9BAAFF] transition-all duration-300">01</span>
</div>
<span className="step-phase text-[11px] font-mono text-[#9BAAFF] tracking-wider uppercase mb-1">Phase 01</span>
<h3 className="step-title text-base font-medium text-white mb-1.5 transition-colors">Concept</h3>
<p className="step-desc text-xs text-slate-400 leading-relaxed font-light max-w-[190px] transition-colors">Understand your goals, theme, architectural geometry and audience.</p>
</div>
{/*  Stage 02 (Ascending left)  */}
<div className="process-step-node group relative flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pt-12 cursor-pointer" data-step="2" data-x="30%" data-y="56%">
<div className="relative mb-5">
<div className="step-badge w-14 h-14 rounded-full border border-white/20 bg-[#070b13]/90 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300">
<svg className="w-5 h-5 text-[#9BAAFF] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="step-tag absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-[#020407] border border-white/10 rounded-full text-[9px] font-mono text-[#9BAAFF] transition-all duration-300">02</span>
</div>
<span className="step-phase text-[11px] font-mono text-[#9BAAFF] tracking-wider uppercase mb-1">Phase 02</span>
<h3 className="step-title text-base font-medium text-white mb-1.5 transition-colors">Story Development</h3>
<p className="step-desc text-xs text-slate-400 leading-relaxed font-light max-w-[190px] transition-colors">Create the spatial narrative, spherical storyboards and visual direction.</p>
</div>
{/*  Stage 03 (Zenith / Peak of Arc - Initial Active)  */}
<div className="process-step-node is-active group relative flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pt-0 cursor-pointer" data-step="3" data-x="50%" data-y="38%">
<div className="relative mb-5">
<div className="step-badge relative w-16 h-16 rounded-full border-2 border-[#9BAAFF] bg-gradient-to-b from-[#0c121d] to-[#070b13] flex items-center justify-center shadow-[0_0_25px_rgba(155,170,255,0.35)] transition-all duration-300">
<div className="absolute inset-1 rounded-full bg-[#9BAAFF]/10 animate-pulse pointer-events-none"></div>
<svg className="w-6 h-6 text-[#9BAAFF] transition-all duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="step-tag absolute -bottom-1.5 -right-1 px-2 py-0.5 bg-[#9BAAFF] text-[#030508] font-bold rounded-full text-[9px] font-mono shadow-sm transition-all duration-300">03</span>
</div>
<div className="inline-flex items-center gap-1.5 mb-1">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="step-phase text-[11px] font-mono text-[#9BAAFF] tracking-wider uppercase font-semibold">Phase 03</span>
</div>
<h3 className="step-title text-base font-semibold text-white mb-1.5 transition-colors">CGI Production</h3>
<p className="step-desc text-xs text-slate-300 leading-relaxed font-light max-w-[190px] transition-colors">Produce high-fidelity 8K, 360° visual assets and custom shader simulations.</p>
</div>
{/*  Stage 04 (Descending right)  */}
<div className="process-step-node group relative flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pt-12 cursor-pointer" data-step="4" data-x="70%" data-y="56%">
<div className="relative mb-5">
<div className="step-badge w-14 h-14 rounded-full border border-white/20 bg-[#070b13]/90 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300">
<svg className="w-5 h-5 text-[#9BAAFF] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="step-tag absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-[#020407] border border-white/10 rounded-full text-[9px] font-mono text-[#9BAAFF] transition-all duration-300">04</span>
</div>
<span className="step-phase text-[11px] font-mono text-[#9BAAFF] tracking-wider uppercase mb-1">Phase 04</span>
<h3 className="step-title text-base font-medium text-white mb-1.5 transition-colors">Dome Mastering</h3>
<p className="step-desc text-xs text-slate-400 leading-relaxed font-light max-w-[190px] transition-colors">Optimize slicing, warp-blend calibration and multi-projector fulldome servers.</p>
</div>
{/*  Stage 05 (Base right)  */}
<div className="process-step-node group relative flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pt-24 cursor-pointer" data-step="5" data-x="90%" data-y="72%">
<div className="relative mb-5">
<div className="step-badge w-14 h-14 rounded-full border border-white/20 bg-[#070b13]/90 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300">
<svg className="w-5 h-5 text-[#9BAAFF] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="step-tag absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-[#020407] border border-white/10 rounded-full text-[9px] font-mono text-[#9BAAFF] transition-all duration-300">05</span>
</div>
<span className="step-phase text-[11px] font-mono text-[#9BAAFF] tracking-wider uppercase mb-1">Phase 05</span>
<h3 className="step-title text-base font-medium text-white mb-1.5 transition-colors">Installation & Support</h3>
<p className="step-desc text-xs text-slate-400 leading-relaxed font-light max-w-[190px] transition-colors">On-site deployment, acoustics sync, and ongoing fine-tuning for your venue.</p>
</div>
</div>
{/*  Bottom Micro-Label Indicator  */}
<div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-center">
<p className="text-[10px] tracking-[0.35em] text-slate-500 uppercase font-mono text-center" id="processBreadcrumb">
<span className="crumb-1 transition-colors duration-300 text-slate-500">FROM IDEA</span>
<span className="text-[#9BAAFF]/60 mx-1">→</span>
<span className="crumb-2 transition-colors duration-300 text-slate-500">STORY</span>
<span className="text-[#9BAAFF]/60 mx-1">→</span>
<span className="crumb-3 text-[#9BAAFF] font-bold transition-colors duration-300">CGI</span>
<span className="text-[#9BAAFF]/60 mx-1">→</span>
<span className="crumb-4 transition-colors duration-300 text-slate-500">MASTER</span>
<span className="text-[#9BAAFF]/60 mx-1">→</span>
<span className="crumb-5 transition-colors duration-300 text-slate-500">EXPERIENCE</span>
</p>
</div>
</div>
</div>
{/*  Interactive Illumination Script  */}

</section>
{/*  END: CreationProcessSection  */}
{/*  BEGIN: ClosingCTASection  */}
<section className="relative py-24 lg:py-32 overflow-hidden bg-black" data-purpose="closing-call-to-action" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[500px] lg:min-h-[560px] flex items-center bg-[#030508]">
{/*  Panoramic Background Image  */}
<img  alt="Aurora borealis and glowing dome pavilion reflected on a calm mountain lake" className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-105" src="/images/alpine_lake_dome_cta.jpg" />
{/*  Dark Gradient Overlays for High Legibility on Left & Natural Fade to Image on Right  */}
<div className="absolute inset-0 bg-gradient-to-r from-[#020407] via-[#03070d]/80 to-transparent lg:w-3/4 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#020407]/90 via-[#03070d]/40 to-transparent pointer-events-none md:hidden"></div>
{/*  Copy & CTA Container positioned on the left  */}
<div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-xl">
<p className="text-xs font-semibold tracking-[0.28em] uppercase text-[#9BAAFF] mb-4">
      LET'S CREATE SOMETHING EXTRAORDINARY
    </p>
<h2 className="headline-font text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.08] text-white mb-6">
      Bring Your World to the Dome.
    </h2>
<p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-md">
      Tell us about your idea, and our team will help create the perfect content experience for your audience.
    </p>
<Link className="inline-flex items-center gap-2.5 bg-[#9BAAFF] hover:bg-[#8797f5] text-[#030508] font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg aurora-btn-primary" href="/start-a-project">
<span className="">Start Your Project</span>
<svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</Link>
</div>
</div></div>
</section>
{/*  END: ClosingCTASection  */}
{/*  BEGIN: MainFooter  */}

    </div>
  );
}
