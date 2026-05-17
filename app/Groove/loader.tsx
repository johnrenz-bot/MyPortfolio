"use client";

import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden">
      {/* Global Style for the same Background & Noise as the About page */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bg {
          background: linear-gradient(-45deg, #d9d9d9, #e8e8e8, #c5c5c5, #f5f5f5);
          background-size: 400% 400%;
          animation: gradientMove 10s ease-in-out infinite;
        }
        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        @keyframes progressReveal {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-progress-fast {
          animation: progressReveal 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>

      {/* Background Layers */}
      <div className="fixed inset-0 animate-bg -z-20" />
      <div className="noise-overlay -z-10" />

      {/* UI Content */}
      <div className="flex flex-col items-center space-y-12">
        {/* Minimalist Core Logo */}
        <div className="relative flex flex-col items-center">
          <span className="text-6xl font-black tracking-tighter text-black uppercase">
            G
          </span>
          <div className="h-[2px] w-12 bg-black mt-2"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-black/20"></span>
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-black/60">
              Initializing_System
            </h2>
            <span className="w-8 h-[1px] bg-black/20"></span>
          </div>

          <div className="h-[1px] w-64 bg-black/10 overflow-hidden relative">
            <div className="h-full w-full bg-black origin-left animate-progress-fast"></div>
          </div>

          <div className="mt-4 flex gap-4">
             <span className="text-[8px] font-bold uppercase tracking-widest text-black/40">Logic</span>
             <span className="text-[8px] font-bold uppercase tracking-widest text-black/40">Visuals</span>
             <span className="text-[8px] font-bold uppercase tracking-widest text-black/40">Auth</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 flex items-center gap-3">
        <span className="text-[9px] font-black tracking-[0.6em] uppercase opacity-20 text-black">
          Groove v2.0 // 2026
        </span>
      </div>
    </div>
  );
}