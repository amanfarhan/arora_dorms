import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#05070B] relative overflow-hidden text-slate-100"
      data-purpose="site-footer"
    >
      {/* Light-Sweep Energy Divider */}
      <div className="energy-divider" />
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.08),rgba(5,7,11,0))] z-0" />

      {/* Geodesic Dome SVG Blueprint Wireframe Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.07] z-0 flex items-center justify-center w-full max-w-7xl h-96">
        <svg
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 1200 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="600"
            cy="480"
            r="460"
            stroke="#A5B4FC"
            strokeDasharray="3 6"
            strokeWidth="1"
          />
          <circle
            cx="600"
            cy="480"
            r="340"
            stroke="#A5B4FC"
            strokeWidth="1"
          />
          <circle
            cx="600"
            cy="480"
            r="200"
            stroke="#A5B4FC"
            strokeDasharray="2 4"
            strokeWidth="1"
          />
          <path
            d="M140 480 L600 20 L1060 480"
            stroke="#A5B4FC"
            strokeWidth="0.8"
          />
          <path
            d="M280 480 L600 20 L920 480"
            stroke="#A5B4FC"
            strokeWidth="0.8"
          />
          <path
            d="M420 480 L600 20 L780 480"
            stroke="#A5B4FC"
            strokeWidth="0.8"
          />
          <line
            stroke="#A5B4FC"
            strokeWidth="1.2"
            x1="50"
            x2="1150"
            y1="480"
            y2="480"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="border-t border-white/10 pt-16 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand info */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
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

            <p className="text-xs text-slate-400 font-light leading-relaxed mb-4 max-w-sm">
              A business vertical of Aurora Dome Solutions Inc.
            </p>
            <p className="text-xs text-slate-400 font-light leading-relaxed mb-8 max-w-sm">
              Engineering, projection, immersive content and technical support —
              brought together under one partner.
            </p>

            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] tracking-[0.24em] uppercase font-semibold text-slate-400">
                LET&apos;S BUILD SOMETHING IMMERSIVE.
              </span>
              <Link
                href="/start-a-project"
                className="text-xs text-[#A5B4FC] hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 font-medium"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
              EXPLORE
            </span>
            <nav className="flex flex-col gap-2.5 text-xs text-slate-400 font-light">
              <Link href="/about" className="hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link href="/solutions" className="hover:text-white transition-colors duration-200">
                Solutions
              </Link>
              <Link href="/solutions/immersive-content" className="hover:text-white transition-colors duration-200">
                Content
              </Link>
              <Link href="/industries" className="hover:text-white transition-colors duration-200">
                Industries
              </Link>
              <Link href="/technology-dome-systems" className="hover:text-white transition-colors duration-200">
                Technology
              </Link>
            </nav>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
              SOLUTIONS
            </span>
            <nav className="flex flex-col gap-2.5 text-xs text-slate-400 font-light">
              <Link href="/solutions/dome-infrastructure" className="hover:text-white transition-colors duration-200">
                Dome Infrastructure
              </Link>
              <Link href="/solutions/immersive-content" className="hover:text-white transition-colors duration-200">
                Immersive Content
              </Link>
              <Link href="/solutions/technical-support" className="hover:text-white transition-colors duration-200">
                Technical Support
              </Link>
              <Link href="/solutions/end-to-end-delivery" className="hover:text-white transition-colors duration-200">
                End-to-End Delivery
              </Link>
            </nav>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
              INDUSTRIES
            </span>
            <nav className="flex flex-col gap-2.5 text-xs text-slate-400 font-light">
              <Link href="/industries/entertainment-tourism" className="hover:text-white transition-colors duration-200">
                Entertainment & Tourism
              </Link>
              <Link href="/industries/hospitality-dining" className="hover:text-white transition-colors duration-200">
                Hospitality & Dining
              </Link>
              <Link href="/industries/events-festivals" className="hover:text-white transition-colors duration-200">
                Events & Festivals
              </Link>
              <Link href="/industries/health-wellness" className="hover:text-white transition-colors duration-200">
                Health & Wellness
              </Link>
              <Link href="/industries/museums-cultural" className="hover:text-white transition-colors duration-200">
                Museums & Culture
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
              CONNECT
            </span>
            <nav className="flex flex-col gap-2.5 text-xs text-slate-400 font-light">
              <Link href="/start-a-project" className="hover:text-white transition-colors duration-200">
                Start a Project
              </Link>
              <Link href="/start-a-project" className="hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Instagram
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-light">
          <div>© 2026 Aurora Dome Solutions. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/start-a-project" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
