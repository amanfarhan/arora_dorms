import Link from "next/link";
import { ArrowLeft, Compass, Sparkles, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        {/* Glow pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-8">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-xs uppercase tracking-widest text-indigo-300 font-mono">
            Error 404 • Destination Uncharted
          </span>
        </div>

        {/* Cinematic headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight font-serif text-white mb-6">
          Lost in the <span className="italic text-[#A5B4FC]">Void</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          The coordinates you entered do not correspond to an active immersive
          dome environment or system module. Let us recalibrate and return to
          known space.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-slate-950 bg-[#A5B4FC] hover:bg-[#b8c4fc] transition-all duration-300 shadow-[0_0_25px_rgba(165,180,252,0.3)] hover:shadow-[0_0_35px_rgba(165,180,252,0.5)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Mission Control</span>
          </Link>

          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
          >
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Explore Solutions</span>
          </Link>

          <Link
            href="/industries"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>View Industries</span>
          </Link>
        </div>

        {/* Quick links footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>Need direct assistance?</span>
          <Link
            href="/start-a-project"
            className="text-[#A5B4FC] hover:underline underline-offset-4"
          >
            Contact Engineering Team →
          </Link>
        </div>
      </div>
    </div>
  );
}
