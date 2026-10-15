"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      
{/*  END: MainHeader  */}
{/*  BEGIN: HeroSection  */}
<section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-between pt-24 pb-16 overflow-hidden" data-purpose="hero-banner">
{/*  Cinematic Full Cover Background Image  */}
<div className="absolute inset-0 z-0">
<img  alt="Interior of an Aurora Dome luxury lounge showing silhouette of an observer looking out toward planet Earth and cosmic aurora lights" className="w-full h-full object-cover object-center" src="/images/img_e06ab6b8884e.jpg" />
{/*  Gradient Overlays for Typographic Contrast  */}
<div className="absolute inset-0 bg-gradient-to-r from-[#03070d] via-[#03070d]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-transparent to-[#03070d]/60"></div>
</div>
{/*  Hero Content Container  */}
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-between h-full pt-16">
<div className="max-w-xl">
{/*  Eyebrow  */}
<span className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 mb-5">About Arora Dorm Solutions</span>
{/*  Primary Editorial Serif Headline  */}
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-light font-editorial text-white leading-[1.04] mb-6">
          We Build<br />
          Immersive<br />
<span className="text-gradient-periwinkle font-normal">Destinations.</span>
</h1>
{/*  Supporting Subline  */}
<p className="text-sm sm:text-base text-slate-300 font-light tracking-wide max-w-md mb-10 leading-relaxed">
          A single partner for extraordinary dome experiences.
        </p>
{/*  Video Trigger Link  */}
<button aria-label="Watch our brand story" className="group inline-flex items-center gap-3.5 text-xs tracking-wider uppercase font-medium text-white/90 hover:text-white transition-colors duration-200" type="button">
<span className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-white/40">
<svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</span>
<span className="tracking-wide">Watch Our Story</span>
</button>
</div>
{/*  Bottom Hero Metadata / Affiliation Note  */}
<div className="self-end mt-16 lg:mt-24 border-l border-white/25 pl-4 py-0.5">
<p className="text-[9px] tracking-[0.24em] font-medium text-white/50 uppercase leading-relaxed">A business vertical of<br />
<span className="text-white/80">Arora Dorm Entertainments Inc.</span></p>
</div>
</div>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: TheIdeaSection  */}
<section className="relative bg-[#03070d] py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-white/[0.04]" data-purpose="concept-overview">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
{/*  Left Column: Story Copy  */}
<div className="lg:col-span-5">
<span className="block text-[11px] font-medium tracking-[0.28em] uppercase text-white/50 mb-3">
          The Idea
        </span>
<h2 className="text-4xl sm:text-5xl font-editorial font-light text-white leading-tight mb-6">
          One Partner.<br />
          A Bigger Possibility.
        </h2>
<p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8 max-w-lg">
          Immersive dome experiences are powerful — but too often require multiple vendors. We bring everything together, so you deal with a single, accountable partner from start to finish.
        </p>
<Link className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#a3b8ff] hover:bg-[#b8c9ff] text-slate-950 font-medium text-xs tracking-tight transition-all duration-300" href="/about">
<span className="">Our Story</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 16 16">
<path d="M3 8H13M13 8L9 4M13 8L9 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</Link>
</div>
{/*  Right Column: 4 Feature Pillars Grid Cards  */}
<div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4" data-purpose="pillars-cards">
{/*  Card 01: Structure  */}
<div className="group relative rounded-xl overflow-hidden glass-border bg-slate-900/50 aspect-[3/5] flex flex-col justify-end p-4 transition-all duration-300 hover:border-white/30">
<img  alt="Geodesic dome metal frame truss structure against night sky" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="/images/img_f3d95ea0fd50.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-[#03070d]/30 to-transparent"></div>
<div className="relative z-10">
<span className="block text-xs font-semibold text-white/60 tracking-wider mb-0.5">01</span>
<span className="block text-sm font-medium text-white tracking-wide">Structure</span>
</div>
</div>
{/*  Card 02: Projection  */}
<div className="group relative rounded-xl overflow-hidden glass-border bg-slate-900/50 aspect-[3/5] flex flex-col justify-end p-4 transition-all duration-300 hover:border-white/30">
<img  alt="High-end cinema dome laser projection lens" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="/images/img_26a8cc3f349a.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-[#03070d]/30 to-transparent"></div>
<div className="relative z-10">
<span className="block text-xs font-semibold text-white/60 tracking-wider mb-0.5">02</span>
<span className="block text-sm font-medium text-white tracking-wide">Projection</span>
</div>
</div>
{/*  Card 03: Content  */}
<div className="group relative rounded-xl overflow-hidden glass-border bg-slate-900/50 aspect-[3/5] flex flex-col justify-end p-4 transition-all duration-300 hover:border-white/30">
<img  alt="Bioluminescent fulldome cosmic jellyfish content render" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="/images/img_6f37cf2f72b5.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-[#03070d]/30 to-transparent"></div>
<div className="relative z-10">
<span className="block text-xs font-semibold text-white/60 tracking-wider mb-0.5">03</span>
<span className="block text-sm font-medium text-white tracking-wide">Content</span>
</div>
</div>
{/*  Card 04: Support  */}
<div className="group relative rounded-xl overflow-hidden glass-border bg-slate-900/50 aspect-[3/5] flex flex-col justify-end p-4 transition-all duration-300 hover:border-white/30">
<img  alt="Technical engineer sitting at console in dome theater control room" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="/images/img_37ea92b6c7e7.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-[#03070d]/30 to-transparent"></div>
<div className="relative z-10">
<span className="block text-xs font-semibold text-white/60 tracking-wider mb-0.5">04</span>
<span className="block text-sm font-medium text-white tracking-wide">Support</span>
</div>
</div>
</div>
</div>
</section>
{/*  END: TheIdeaSection  */}
{/*  BEGIN: OurApproachSection  */}
<section className="relative min-h-[520px] lg:min-h-[640px] flex items-center justify-end overflow-hidden" data-purpose="our-approach">
{/*  Panoramic Illuminated Geodesic Dome Pavilion Image  */}
<div className="absolute inset-0 z-0"><img  alt="Illuminated geodesic dome pavilion by calm mountain lake reflecting vibrant northern lights" className="w-full h-full object-cover object-left lg:object-center" src="/images/img_ff6234f90f64.jpg" /><div className="absolute inset-0 bg-gradient-to-l from-[#03070d] via-[#03070d]/60 to-transparent"></div></div>
{/*  Editorial Overlay Content  */}
<div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 flex justify-end">
<div className="w-full lg:max-w-lg xl:max-w-xl py-16">
<span className="block text-[11px] font-medium tracking-[0.28em] uppercase text-white/60 mb-3">
          Our Approach
        </span>
<h2 className="text-4xl sm:text-5xl font-editorial font-light text-white leading-tight mb-5">
          From Vision<br />
          to Reality.
        </h2>
<p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-md">
          We handle the entire journey — from site assessment and design to content, installation and ongoing support — to create experiences tailored to your audience, space and brand.
        </p>
<a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#a3b8ff] hover:bg-[#b8c9ff] text-slate-950 font-medium text-xs tracking-tight transition-all duration-300" href="#approach">
<span className="">Learn About Our Approach</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 16 16">
<path d="M3 8H13M13 8L9 4M13 8L9 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</a>
</div>
</div>
</section>
{/*  END: OurApproachSection  */}
{/*  BEGIN: CapabilitiesSection  */}
<section className="relative bg-[#03070d] py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-b border-white/[0.04]" data-purpose="capabilities-overview">
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
<div className="lg:pr-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-full border border-brand-periwinkle/30 bg-brand-periwinkle/10 flex items-center justify-center mb-6 text-brand-periwinkle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path>
</svg>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-wide">Dome Engineering</h3>
<p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            Custom structures from 3m to 25m+.
          </p>
</div>
{/*  Capability 2  */}
<div className="lg:px-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-full border border-brand-periwinkle/30 bg-brand-periwinkle/10 flex items-center justify-center mb-6 text-brand-periwinkle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path>
</svg>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-wide">Immersive Content</h3>
<p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            World-class fulldome library and bespoke CGI.
          </p>
</div>
{/*  Capability 3  */}
<div className="lg:px-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-full border border-brand-periwinkle/30 bg-brand-periwinkle/10 flex items-center justify-center mb-6 text-brand-periwinkle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path>
</svg>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-wide">End-to-End Delivery</h3>
<p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            Project management from concept to launch.
          </p>
</div>
{/*  Capability 4  */}
<div className="lg:pl-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-full border border-brand-periwinkle/30 bg-brand-periwinkle/10 flex items-center justify-center mb-6 text-brand-periwinkle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path>
</svg>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-wide">Ongoing Support</h3>
<p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            Onsite technical support to keep your dome performing at its best.
          </p>
</div>
</div>
</div>
</section>
{/*  END: CapabilitiesSection  */}
{/*  BEGIN: MissionSection  */}
<section className="relative min-h-[580px] lg:min-h-[700px] flex items-center overflow-hidden" data-purpose="our-mission">
{/*  Background Planetarium Dome Audience Image  */}
<div className="absolute inset-0 z-0">
<img  alt="Audience looking up at cosmic Earth and starry nebula fulldome projection inside planetarium theater" className="w-full h-full object-cover object-center" src="/images/img_d472e2e34229.jpg" />
{/*  Left dark gradient to guarantee contrast for text overlay  */}
<div className="absolute inset-0 bg-gradient-to-r from-[#03070d] via-[#03070d]/85 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-transparent to-[#03070d]/40"></div>
</div>
{/*  Content Block  */}
<div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 py-20">
<div className="max-w-xl">
<span className="block text-[11px] font-medium tracking-[0.28em] uppercase text-white/60 mb-3">
          Our Mission
        </span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-light text-white leading-tight mb-5">
          To Create Spaces<br />
          Where People Become<br />
          Part of the Story.
        </h2>
<p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-md">
          We design immersive environments that inspire, educate, entertain and connect.
        </p>
<a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#a3b8ff] hover:bg-[#b8c9ff] text-slate-950 font-medium text-xs tracking-tight transition-all duration-300" href="#values">
<span className="">Our Values</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 16 16">
<path d="M3 8H13M13 8L9 4M13 8L9 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</a>
</div>
</div>
</section>
{/*  END: MissionSection  */}
{/*  BEGIN: CallToActionSection  */}
<section className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-14 overflow-hidden" data-purpose="final-cta" id="cta">
{/*  Aurora Mountain Panoramic Lake Backdrop  */}
<div className="absolute inset-0 z-0">
<img  alt="Aurora borealis swirling above mountain peaks reflected in tranquil alpine lake" className="w-full h-full object-cover object-bottom" src="https://lh3.googleusercontent.com/aida/AEtjO1VPNkQMw8Ua_uuzoQRTjvvv844eETpFuYfRspQQDzA7FlkKPBBqCwwNvYs7PBfakMd7hAz-1IY7xibFMZm-TIIbNPbaMA9zuVdqFZie_or-6mlyvZSmbgD-Aogdi2gELYL6ivdzyKBkFGmh5Q5nIZHub5HJQgvsB_1yQE4QnTqymCz-tKyZD7cHC5LC8XiwWyXviC9YI_Y4XJOC0J8cuhZCgP_Hi_Xzx1tr2qI_JTmKc-7ngLD1_r2MtAM" />
{/*  Dramatic Atmospheric Tint  */}
<div className="absolute inset-0 bg-[#03070d]/75 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#03070d] via-[#03070d]/60 to-[#03070d]/80"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#020509] via-transparent to-[#03070d]"></div>
</div>
{/*  Call To Action Grid  */}
<div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
{/*  Headline & Eyebrow  */}
<div>
<span className="block text-[11px] font-medium tracking-[0.28em] uppercase text-white/60 mb-3">
          Ready to Create?
        </span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-light text-white leading-tight">
          Let’s Build<br />
          Your World Together.
        </h2>
</div>
{/*  Action Buttons  */}
<div className="flex flex-wrap items-center gap-6">
<Link className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#a3b8ff] hover:bg-[#b8c9ff] text-slate-950 font-medium text-xs tracking-tight transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-indigo-950/60" href="/start-a-project">
<span className="">Start a Project</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 16 16">
<path d="M3 8H13M13 8L9 4M13 8L9 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</Link>
<Link className="text-xs sm:text-sm font-normal text-slate-300 hover:text-white underline underline-offset-8 transition-colors duration-200" href="/start-a-project">
          Talk to Our Team
        </Link>
</div>
</div>
</section>
{/*  END: CallToActionSection  */}
{/*  BEGIN: MainFooter  */}

    </div>
  );
}
