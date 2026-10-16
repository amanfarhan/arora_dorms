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
    projectType: "Theme Park / Entertainment",
    timeline: "3-6 months",
    location: "",
    budget: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#080a0f] text-slate-100 min-h-screen w-full overflow-x-hidden relative">
      {/*  Atmospheric Radial Glow  */}
      <div className="aurora-glow-hero top-12 left-1/4 w-[600px] h-[500px] ambient-light-drift opacity-75"></div>
      <div className="aurora-glow-cyan top-40 right-1/4 w-[550px] h-[450px] ambient-light-drift opacity-60"></div>

      {/*  BEGIN: HeroSection  */}
      <section
        className="relative pt-12 pb-16 overflow-hidden radial-top-glow"
        data-purpose="hero-section"
      >
        {/*  Background Dome Graphic Layer  */}
        <div className="absolute right-[-4%] top-[-2%] w-[68%] h-[120%] pointer-events-none opacity-90 hidden lg:block z-0 mix-blend-screen">
          <img
            alt="Futuristic Fulldome Projection Arch"
            className="w-full h-full object-contain object-right-top"
            src="/images/tech_dome_cutaway.jpg"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-xl xl:max-w-2xl pt-6 lg:pt-14 pb-8">
            {/*  Category Pill/Kicker  */}
            <span className="text-xs font-semibold tracking-[0.25em] text-[#A5B4FC] uppercase inline-block mb-4">
              START A PROJECT
            </span>
            {/*  Main Headline  */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-tight text-white leading-[1.12] mb-6">
              Let’s Build <br />
              Your Immersive <br />
              <span className="aurora-gradient-text drop-shadow-[0_0_30px_rgba(165,180,252,0.3)]">
                Experience.
              </span>
            </h1>
            {/*  Subtitle Paragraph  */}
            <p className="text-base sm:text-lg text-slate-300/85 leading-relaxed font-light max-w-lg mb-8">
              Tell us about your space, your audience, and the experience you're imagining. Our team will help you design the right dome, content and support package for your project.
            </p>
          </div>

          {/*  Feature Value Props Row  */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5 mt-4"
            data-purpose="value-propositions"
          >
            {/*  Prop 1  */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
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
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
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
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
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
              <div className="w-12 h-12 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
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
                <span className="text-xs font-semibold tracking-[0.2em] text-[#A5B4FC] uppercase inline-block mb-2">
                  START YOUR PROJECT
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Tell Us About Your Project
                </h2>
                <p className="text-sm text-slate-400 mt-1 font-light">
                  Fill out the details below and our team will get back to you with a tailored architectural proposal.
                </p>
              </div>
              {/*  Direct Contact Card  */}
              <div className="inline-flex items-center justify-between gap-4 px-5 py-3.5 bg-[#121826] border border-indigo-500/20 rounded-2xl shrink-0">
                <div className="flex items-center gap-3">
                  <div className="text-indigo-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-semibold text-white leading-tight">Direct Consultation</span>
                    <span className="block text-[11px] text-slate-400">projects@auroradomes.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/*  Form Layout or Submitted Confirmation  */}
            {submitted ? (
              <div className="py-16 flex flex-col items-center text-center max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Project Request Received
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project details have been logged in our spatial delivery pipeline. A senior dome architectural specialist will review your venue requirements and reach out to <strong className="text-white">{formData.email}</strong> within 1 business day.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        companyName: "",
                        email: "",
                        phone: "",
                        projectType: "Theme Park / Entertainment",
                        timeline: "3-6 months",
                        location: "",
                        budget: "",
                        description: "",
                      });
                    }}
                    className="px-6 py-3 rounded-full text-xs font-semibold tracking-wide border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all"
                  >
                    Submit Another Request
                  </button>
                  <Link
                    href="/technology-dome-systems"
                    className="aurora-btn-primary px-7 py-3 text-xs"
                  >
                    <span>Explore Dome Systems</span>
                    <span className="text-base leading-none">→</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/*  Full Name  */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="fullName">
                      Full Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-400 focus:bg-[#161f30] focus:outline-none transition-colors"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your name"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  {/*  Company / Organization  */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="companyName">
                      Company / Organization <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-400 focus:bg-[#161f30] focus:outline-none transition-colors"
                      id="companyName"
                      name="companyName"
                      placeholder="Your company or venue name"
                      required
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  {/*  Email Address  */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="email">
                      Email Address <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-400 focus:bg-[#161f30] focus:outline-none transition-colors"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {/*  Phone Number  */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-400 focus:bg-[#161f30] focus:outline-none transition-colors"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {/*  Project Type  */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="projectType">
                      Project Industry & Type
                    </label>
                    <select
                      className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-400 focus:bg-[#161f30] focus:outline-none transition-colors"
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="Theme Park / Entertainment">Entertainment & Tourism</option>
                      <option value="Events & Festivals">Events & Festivals</option>
                      <option value="Hospitality & Dining">Hospitality & Dining</option>
                      <option value="Health & Wellness">Health & Wellness</option>
                      <option value="Music & Nightlife">Music & Nightlife</option>
                      <option value="Museums & Cultural">Museums & Cultural</option>
                      <option value="Corporate & Brand">Corporate & Brand</option>
                      <option value="Education & Planetariums">Education & Planetariums</option>
                      <option value="Private Events & Weddings">Private Events & Weddings</option>
                    </select>
                  </div>
                  {/*  Timeline  */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="timeline">
                      Target Launch Timeline
                    </label>
                    <select
                      className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-400 focus:bg-[#161f30] focus:outline-none transition-colors"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="Immediate (< 3 months)">Immediate (&lt; 3 months)</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="12+ months">12+ months / Feasibility study</option>
                    </select>
                  </div>
                </div>

                {/*  Project Description  */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2" htmlFor="description">
                    Space & Vision Details
                  </label>
                  <textarea
                    className="w-full bg-[#131926] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-400 focus:bg-[#161f30] focus:outline-none transition-colors min-h-[110px]"
                    id="description"
                    name="description"
                    placeholder="Tell us about the physical site, audience capacity, desired dome diameter, and overall experience goals..."
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/*  Submit Button  */}
                <div className="pt-4 flex justify-end">
                  <button
                    className="aurora-btn-primary px-9 py-4 text-sm font-semibold tracking-wide cursor-pointer"
                    type="submit"
                  >
                    <span>Request Architectural Proposal</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="5" x2="19" y1="12" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      {/*  END: MultiStepProjectForm  */}

      {/*  BEGIN: ProcessSection  */}
      <section className="py-20 relative" data-purpose="process-timeline">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#A5B4FC] uppercase inline-block mb-3">
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
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 border-t border-dashed border-white/20 z-0"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {/*  Step 1  */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full border border-indigo-400/40 bg-[#0e1422] flex items-center justify-center text-indigo-300 mb-5 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 group-hover:border-indigo-400 transition-all">
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
                <div className="w-14 h-14 rounded-full border border-indigo-400/40 bg-[#0e1422] flex items-center justify-center text-indigo-300 mb-5 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 group-hover:border-indigo-400 transition-all">
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
                <div className="w-14 h-14 rounded-full border border-indigo-400/40 bg-[#0e1422] flex items-center justify-center text-indigo-300 mb-5 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 group-hover:border-indigo-400 transition-all">
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
                <div className="w-14 h-14 rounded-full border border-indigo-400/40 bg-[#0e1422] flex items-center justify-center text-indigo-300 mb-5 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 group-hover:border-indigo-400 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <h5 className="text-xs font-bold tracking-wider uppercase text-white mb-1.5">4. EXECUTION</h5>
                <p className="text-xs text-slate-400 max-w-[170px] leading-relaxed">Design, installation and content delivery.</p>
              </div>
              {/*  Step 5  */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full border border-indigo-400/40 bg-[#0e1422] flex items-center justify-center text-indigo-300 mb-5 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 group-hover:border-indigo-400 transition-all">
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

      {/*  BEGIN: BottomCTACard (High-Res Prehistoric Marine Fulldome Experience)  */}
      <section className="py-12 pb-24" data-purpose="bottom-cta-banner">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0b0e17] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center">
            {/*  Left Visual Side  */}
            <div className="w-full lg:w-1/2 h-72 sm:h-80 lg:h-[380px] relative overflow-hidden">
              <img
                alt="Futuristic Marine Projection Dome Experience"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                src="/images/entertainment_marine_dome.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-transparent to-transparent lg:hidden"></div>
              <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-transparent to-[#0b0e17]"></div>
            </div>
            {/*  Right Content Side  */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:pl-8 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#A5B4FC] uppercase inline-block mb-3">
                HAVE A SPECIFIC IDEA?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                We’d Love to Hear It.
              </h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-8 max-w-lg">
                Whether it's a new attraction, a unique dining experience, a wellness retreat or a large-scale event, our team is ready to help you bring it to life.
              </p>
              <div>
                <a
                  className="aurora-btn-primary px-7 py-3.5 text-xs font-semibold tracking-wide"
                  href="#quote-form"
                >
                  <span>Start Your Project</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
    </div>
  );
}
