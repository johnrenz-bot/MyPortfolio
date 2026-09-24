"use client";

import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neutral-200/30 dark:bg-neutral-800/20 blur-[120px] animate-[pulse_10s_ease-in-out_infinite] opacity-60 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-neutral-300/20 dark:bg-neutral-900/30 blur-[140px] animate-[pulse_12s_ease-in-out_infinite_reverse] opacity-60 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute -bottom-[20%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-neutral-200/40 dark:bg-neutral-800/30 blur-[130px] animate-[pulse_15s_ease-in-out_infinite] opacity-60 mix-blend-multiply dark:mix-blend-screen" />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
