"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const solutionLinks = [
    { title: "Solutions Overview", href: "/solutions" },
    { title: "Dome Infrastructure", href: "/solutions/dome-infrastructure" },
    { title: "Immersive Content", href: "/solutions/immersive-content" },
    { title: "Technical Support", href: "/solutions/technical-support" },
    { title: "End-to-End Delivery", href: "/solutions/end-to-end-delivery" },
  ];

  const industryLinks = [
    { title: "Industries Overview", href: "/industries" },
    { title: "Entertainment & Tourism", href: "/industries/entertainment-tourism" },
    { title: "Events & Festivals", href: "/industries/events-festivals" },
    { title: "Music, Nightlife & Concerts", href: "/industries/music-nightlife" },
    { title: "Corporate, Retail & Brand", href: "/industries/corporate-brand" },
    { title: "Hospitality & Dining", href: "/industries/hospitality-dining" },
    { title: "Museums & Cultural", href: "/industries/museums-cultural" },
    { title: "Education & Planetariums", href: "/industries/education-planetariums" },
    { title: "Health & Wellness", href: "/industries/health-wellness" },
    { title: "Private Events & Weddings", href: "/industries/private-events-weddings" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#05070B]/90 border-b border-white/10 shadow-lg shadow-black/40"
          : "backdrop-blur-md bg-[#05070B]/70 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          data-purpose="brand-logo"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Sleek Geometric Dome Logo Icon matching Stitch */}
            <svg
              className="w-8 h-8 text-white transition-transform group-hover:scale-105"
              fill="none"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.75"
              />
              <path
                d="M7 18C7 11.925 11.925 7 18 7C24.075 7 29 11.925 29 18"
                stroke="currentColor"
                strokeDasharray="2 3"
                strokeWidth="1.25"
              />
              <path
                d="M18 2C9.163 2 2 9.163 2 18"
                stroke="#A5B4FC"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <line
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
                x1="2"
                x2="34"
                y1="28"
                y2="28"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs tracking-[0.28em] font-semibold text-white uppercase leading-none">
              AURORA DOME
            </span>
            <span className="text-[9px] tracking-[0.24em] text-slate-400 uppercase mt-1">
              IMMERSIVE SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Center Navigation */}
        <nav
          className="hidden lg:flex items-center gap-8 text-sm font-normal text-slate-300"
          data-purpose="desktop-navigation"
        >
          <Link
            href="/about"
            className={`nav-link-aurora hover:text-white transition-colors duration-200 outline-none focus:outline-none ${
              pathname === "/about" ? "text-white font-medium is-active" : ""
            }`}
          >
            About
          </Link>

          <Link
            href="/solutions"
            className={`nav-link-aurora hover:text-white transition-colors duration-200 outline-none focus:outline-none ${
              pathname === "/solutions" || (pathname.startsWith("/solutions") && pathname !== "/solutions/immersive-content")
                ? "text-white font-medium is-active"
                : ""
            }`}
          >
            Solutions
          </Link>

          <Link
            href="/solutions/immersive-content"
            className={`nav-link-aurora hover:text-white transition-colors duration-200 outline-none focus:outline-none ${
              pathname.startsWith("/solutions/immersive-content") ? "text-white font-medium is-active" : ""
            }`}
          >
            Content
          </Link>

          <Link
            href="/industries"
            className={`nav-link-aurora hover:text-white transition-colors duration-200 outline-none focus:outline-none ${
              pathname.startsWith("/industries") ? "text-white font-medium is-active" : ""
            }`}
          >
            Industries
          </Link>

          <Link
            href="/technology-dome-systems"
            className={`nav-link-aurora hover:text-white transition-colors duration-200 outline-none focus:outline-none ${
              pathname === "/technology-dome-systems" ? "text-white font-medium is-active" : ""
            }`}
          >
            Technology
          </Link>

          <Link
            href="/start-a-project"
            className={`nav-link-aurora hover:text-white transition-colors duration-200 outline-none focus:outline-none ${
              pathname === "/start-a-project" ? "text-white font-medium is-active" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Action CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/start-a-project"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide text-slate-900 bg-[#A5B4FC] hover:bg-[#b8c4fc] transition-all duration-300 hover:shadow-[0_0_20px_rgba(165,180,252,0.4)]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="region"
          aria-label="Mobile Navigation Drawer"
          className="lg:hidden bg-[#05070B]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-2 max-h-[85vh] overflow-y-auto"
        >
          <Link
            href="/"
            className="text-sm text-slate-200 hover:text-white min-h-[44px] flex items-center px-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm text-slate-200 hover:text-white min-h-[44px] flex items-center px-1"
          >
            About
          </Link>

          <div className="flex flex-col gap-1 pt-2 border-t border-white/5">
            <span className="text-[11px] font-semibold tracking-widest text-[#A5B4FC] uppercase py-1">
              Solutions
            </span>
            <div className="pl-3 flex flex-col">
              {solutionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-slate-300 hover:text-white min-h-[44px] flex items-center"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1 pt-2 border-t border-white/5">
            <span className="text-[11px] font-semibold tracking-widest text-[#A5B4FC] uppercase py-1">
              Industries
            </span>
            <div className="pl-3 grid grid-cols-1 sm:grid-cols-2 gap-1">
              {industryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-slate-300 hover:text-white min-h-[44px] flex items-center"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/technology-dome-systems"
            className="text-sm text-slate-200 hover:text-white min-h-[44px] flex items-center px-1 pt-2 border-t border-white/5"
          >
            Technology & Dome Systems
          </Link>

          <Link
            href="/start-a-project"
            className="mt-3 w-full min-h-[48px] flex items-center justify-center rounded-full text-center text-xs font-semibold text-slate-900 bg-[#A5B4FC] hover:bg-[#b8c4fc] transition-colors"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
