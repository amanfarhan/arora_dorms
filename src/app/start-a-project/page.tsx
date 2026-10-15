"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function StartAProjectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    location: "",
    budget: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please provide your name and email.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#080a0f] text-slate-100 min-h-screen w-full overflow-x-hidden">
      
{/*  END: MainHeader  */}
{/*  BEGIN: HeroSection  */}
<section className="relative pt-12 pb-16 overflow-hidden radial-top-glow" data-purpose="hero-section">
{/*  Background Dome Graphic Layer  */}
<div className="absolute right-[-4%] top-[-2%] w-[68%] h-[120%] pointer-events-none opacity-90 hidden lg:block z-0 mix-blend-screen">
<img alt="Futuristic Fulldome Projection Arch" className="w-full h-full object-contain object-right-top" src="/images/img_2a0879ada5db.jpg"/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-xl xl:max-w-2xl pt-6 lg:pt-14 pb-8">
{/*  Category Pill/Kicker  */}
<span className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase inline-block mb-4">
          START A PROJECT
        </span>
{/*  Main Headline  */}
<h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-tight text-white leading-[1.12] mb-6">
          Let’s Build <br />
          Your Immersive <br />
<span className="text-blue-500">Experience.</span>
</h1>
{/*  Subtitle Paragraph  */}
<p className="text-base sm:text-lg text-slate-300/85 leading-relaxed font-light max-w-lg mb-8">
          Tell us about your space, your audience, and the experience you're imagining. Our team will help you design the right dome, content and support package for your project.
        </p>
</div>
{/*  Feature Value Props Row  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5 mt-4" data-purpose="value-propositions">
{/*  Prop 1  */}
<div className="flex items-center gap-3.5">
<div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/5 flex items-center justify-center shrink-0 text-blue-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-semibold text-white">One Partner</h4>
<p className="text-xs text-slate-400 mt-0.5 font-light">Dome, content and support</p>
</div>
</div>
{/*  Prop 2  */}
<div className="flex items-center gap-3.5">
<div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/5 flex items-center justify-center shrink-0 text-blue-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Custom Solutions</h4>
<p className="text-xs text-slate-400 mt-0.5 font-light">Built for your space and audience</p>
</div>
</div>
{/*  Prop 3  */}
<div className="flex items-center gap-3.5">
<div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/5 flex items-center justify-center shrink-0 text-blue-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Expert Guidance</h4>
<p className="text-xs text-slate-400 mt-0.5 font-light">From concept to opening night</p>
</div>
</div>
{/*  Prop 4  */}
<div className="flex items-center gap-3.5">
<div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/5 flex items-center justify-center shrink-0 text-blue-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Ongoing Support</h4>
<p className="text-xs text-slate-400 mt-0.5 font-light">We stay with you</p>
</div>
</div>
</div>
</div>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: MultiStepProjectForm  */}
<section className="py-12" data-purpose="project-intake-form" id="quote-form">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-[#0b0e17] rounded-3xl border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
{/*  Header row of the Form Card  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between pb-10 border-b border-white/5 gap-6">
<div>
<span className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase inline-block mb-2">
              START YOUR PROJECT
            </span>
<h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Tell Us About Your Project</h2>
<p className="text-sm text-slate-400 mt-1 font-light">
              Fill out the details below and our team will get back to you with a tailored proposal.
            </p>
</div>
{/*  Secondary CTA card: "Prefer to talk?"  */}
<a className="inline-flex items-center justify-between gap-4 px-5 py-3.5 bg-[#121826] hover:bg-[#161e30] border border-blue-500/20 rounded-2xl transition-all duration-200 group shrink-0" href="#">
<div className="flex items-center gap-3">
<div className="text-blue-400 group-hover:scale-110 transition-transform">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="text-left">
<span className="block text-xs font-semibold text-white leading-tight">Prefer to talk?</span>
<span className="block text-[11px] text-slate-400">Start a conversation with our team.</span>
</div>
</div>
<svg className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
{/*  2-Column Wizard Layout: Steps on Left, Fields on Right  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10">
{/*  Left Column: Step Indicators  */}
<div className="lg:col-span-4 pr-0 lg:pr-8 lg:border-r border-white/5 space-y-7" data-purpose="step-indicators">
{/*  Step 1 (Active)  */}
<div className="flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-blue-500 text-white font-medium text-sm flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                1
              </div>
<div>
<h5 className="text-sm font-semibold text-white">Basic Information</h5>
<p className="text-xs text-slate-400">Tell us who you are</p>
</div>
</div>
{/*  Step 2  */}
<div className="flex items-start gap-4 opacity-50 hover:opacity-80 transition-opacity cursor-pointer">
<div className="w-9 h-9 rounded-full border border-white/20 text-slate-300 font-medium text-sm flex items-center justify-center shrink-0 bg-white/5">
                2
              </div>
<div>
<h5 className="text-sm font-medium text-slate-200">Project Details</h5>
<p className="text-xs text-slate-500">What are you creating?</p>
</div>
</div>
{/*  Step 3  */}
<div className="flex items-start gap-4 opacity-50 hover:opacity-80 transition-opacity cursor-pointer">
<div className="w-9 h-9 rounded-full border border-white/20 text-slate-300 font-medium text-sm flex items-center justify-center shrink-0 bg-white/5">
                3
              </div>
<div>
<h5 className="text-sm font-medium text-slate-200">Dome Size</h5>
<p className="text-xs text-slate-500">Choose your size</p>
</div>
</div>
{/*  Step 4  */}
<div className="flex items-start gap-4 opacity-50 hover:opacity-80 transition-opacity cursor-pointer">
<div className="w-9 h-9 rounded-full border border-white/20 text-slate-300 font-medium text-sm flex items-center justify-center shrink-0 bg-white/5">
                4
              </div>
<div>
<h5 className="text-sm font-medium text-slate-200">Space & Requirements</h5>
<p className="text-xs text-slate-500">Tell us about the space</p>
</div>
</div>
{/*  Step 5  */}
<div className="flex items-start gap-4 opacity-50 hover:opacity-80 transition-opacity cursor-pointer">
<div className="w-9 h-9 rounded-full border border-white/20 text-slate-300 font-medium text-sm flex items-center justify-center shrink-0 bg-white/5">
                5
              </div>
<div>
<h5 className="text-sm font-medium text-slate-200">Submit</h5>
<p className="text-xs text-slate-500">We'll get back to you</p>
</div>
</div>
</div>
{/*  Right Column: Interactive Step 1 Content  */}
<div className="lg:col-span-8 flex flex-col justify-between" data-purpose="form-fields">
<div>
<div className="mb-8">
<h3 className="text-xl font-bold text-white">Basic Information</h3>
<p className="text-xs text-slate-400 mt-1">Let's start with your basic details.</p>
</div>
{/*  2x2 Form Input Grid  */}
<form action="#" className="space-y-6" method="POST" >
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Full Name  */}
<div>
<label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="fullName">
                      Full Name <span className="text-blue-400">*</span>
</label>
<input className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:bg-[#161f30] transition-colors" id="fullName" name="fullName" placeholder="Enter your name" required type="text"/>
</div>
{/*  Company / Organization  */}
<div>
<label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="companyName">
                      Company / Organization <span className="text-blue-400">*</span>
</label>
<input className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:bg-[#161f30] transition-colors" id="companyName" name="companyName" placeholder="Your company name" required type="text"/>
</div>
{/*  Email Address  */}
<div>
<label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="email">
                      Email Address <span className="text-blue-400">*</span>
</label>
<input className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:bg-[#161f30] transition-colors" id="email" name="email" placeholder="you@company.com" required type="email"/>
</div>
{/*  Phone Number with Country Code Dropdown  */}
<div>
<label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="phone">
                      Phone Number <span className="text-blue-400">*</span>
</label>
<div className="flex rounded-xl overflow-hidden border border-white/10 bg-[#131926] focus-within:border-blue-500 transition-colors">
<div className="flex items-center gap-1.5 px-3 bg-[#182030] border-r border-white/10 text-xs text-slate-300 cursor-pointer select-none">
{/*  Flag Indicator  */}
<span className="text-base leading-none">🇮🇳</span>
<span className="font-medium">+91</span>
<svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</div>
<input className="w-full bg-transparent border-0 px-4 py-3 text-sm text-white placeholder-slate-500 focus:ring-0 focus:outline-none" id="phone" name="phone" placeholder="Enter phone number" required type="tel"/>
</div>
</div>
</div>
{/*  Next Step CTA Button  */}
<div className="pt-8 flex justify-end">
<button className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-wide bg-blue-500 hover:bg-blue-400 text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]" type="submit">
<span>Next Step</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: MultiStepProjectForm  */}
{/*  BEGIN: ProcessSection  */}
<section className="py-20 relative" data-purpose="process-timeline">
<div className="max-w-7xl mx-auto px-6 text-center">
{/*  Section Title Header  */}
<span className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase inline-block mb-3">
        WHAT HAPPENS NEXT?
      </span>
<h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
        From Your Idea to an Immersive Reality
      </h2>
<p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-light mb-16 leading-relaxed">
        Our team will guide you through every step — from understanding your vision to designing, building and supporting your dome experience.
      </p>
{/*  5-Step Connected Progress Line & Badges  */}
<div className="relative">
{/*  Subtle Horizontal Dotted Connecting Line (Desktop)  */}
<div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 border-t border-dashed border-white/20 z-0"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
{/*  Step 1  */}
<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full border border-blue-400/40 bg-[#0e1422] flex items-center justify-center text-blue-400 mb-5 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
</div>
<h5 className="text-xs font-bold tracking-wider uppercase text-white mb-1.5">1. CONSULTATION</h5>
<p className="text-xs text-slate-400 max-w-[170px] leading-relaxed">We understand your goals and requirements.</p>
</div>
{/*  Step 2  */}
<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full border border-blue-400/40 bg-[#0e1422] flex items-center justify-center text-blue-400 mb-5 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M12 2l8 4.5v11L12 22 4 17.5v-11L12 2z"></path>
<polyline points="12 22 12 15.5"></polyline>
<polyline points="20 6.5 12 11 4 6.5"></polyline>
</svg>
</div>
<h5 className="text-xs font-bold tracking-wider uppercase text-white mb-1.5">2. CONCEPT & DESIGN</h5>
<p className="text-xs text-slate-400 max-w-[170px] leading-relaxed">Tailored dome, content and technical solution.</p>
</div>
{/*  Step 3  */}
<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full border border-blue-400/40 bg-[#0e1422] flex items-center justify-center text-blue-400 mb-5 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10 9 9 9 8 9"></polyline>
</svg>
</div>
<h5 className="text-xs font-bold tracking-wider uppercase text-white mb-1.5">3. PROPOSAL</h5>
<p className="text-xs text-slate-400 max-w-[170px] leading-relaxed">Detailed plan, timeline and investment.</p>
</div>
{/*  Step 4  */}
<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full border border-blue-400/40 bg-[#0e1422] flex items-center justify-center text-blue-400 mb-5 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
<h5 className="text-xs font-bold tracking-wider uppercase text-white mb-1.5">4. EXECUTION</h5>
<p className="text-xs text-slate-400 max-w-[170px] leading-relaxed">Design, installation and content delivery.</p>
</div>
{/*  Step 5  */}
<div className="flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-full border border-blue-400/40 bg-[#0e1422] flex items-center justify-center text-blue-400 mb-5 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<h5 className="text-xs font-bold tracking-wider uppercase text-white mb-1.5">5. ONGOING SUPPORT</h5>
<p className="text-xs text-slate-400 max-w-[170px] leading-relaxed">We stay with you for continued success.</p>
</div>
</div>
</div>
</div>
</section>
{/*  END: ProcessSection  */}
{/*  BEGIN: BottomCTACard  */}
<section className="py-12 pb-24" data-purpose="bottom-cta-banner">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-[#0b0e17] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center">
{/*  Left Visual Side (Immersive Dome Underwater Atmosphere)  */}
<div className="w-full lg:w-1/2 h-72 sm:h-80 lg:h-[380px] relative overflow-hidden">
<img alt="Futuristic Marine Projection Dome Experience" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" src="/images/img_2d8ff5bd48a3.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-transparent to-transparent lg:hidden"></div>
<div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-transparent to-[#0b0e17]"></div>
</div>
{/*  Right Content Side  */}
<div className="w-full lg:w-1/2 p-8 sm:p-12 lg:pl-8 flex flex-col justify-center">
<span className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase inline-block mb-3">
            HAVE A SPECIFIC IDEA?
          </span>
<h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            We’d Love to Hear It.
          </h2>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-8 max-w-lg">
            Whether it's a new attraction, a unique dining experience, a wellness retreat or a large-scale event, our team is ready to help you bring it to life.
          </p>
<div>
<a className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-white text-slate-900 hover:bg-slate-200 transition-all shadow-lg shadow-white/5" href="#quote-form">
<span>Start Your Project</span>
<svg className="w-3.5 h-3.5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  END: BottomCTACard  */}
{/*  BEGIN: InteractiveStepScript  */}

{/*  END: InteractiveStepScript  */}

    </div>
  );
}
