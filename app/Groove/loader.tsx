"use client";

import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Global Style for the progress animation */}
      <style jsx>{`
        @keyframes progressReveal {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-progress-fast {
          animation: progressReveal 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>

      {/* Subtle grid background matching the pristine white aesthetic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* UI Content */}
      <div className="flex flex-col items-center space-y-12 relative z-10">
        {/* Minimalist Core Logo */}
        <div className="relative flex flex-col items-center">
          <span className="text-6xl font-black tracking-tighter text-neutral-900 uppercase">
            G
          </span>
          <div className="h-[2px] w-12 bg-neutral-900 mt-2"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-black/10"></span>
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-400">
              Initializing_System
            </h2>
            <span className="w-8 h-[1px] bg-black/10"></span>
          </div>

          <div className="h-[2px] w-64 bg-neutral-100 overflow-hidden relative rounded-full">
            <div className="h-full w-full bg-neutral-900 origin-left animate-progress-fast rounded-full"></div>
          </div>

          <div className="mt-4 flex gap-4">
             <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">Logic</span>
             <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">Visuals</span>
             <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">Auth</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 flex items-center gap-3">
        <span className="text-[9px] font-black tracking-[0.6em] uppercase text-neutral-300">
          Groove v2.0 // 2026
        </span>
      </div>
    </div>
  );
}