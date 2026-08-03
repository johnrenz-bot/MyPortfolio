"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const start = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          const remaining = 100 - prev;
          const increment = Math.max(0.5, remaining * 0.08);
          const next = Math.min(100, prev + increment);

          if (next >= 100) {
            clearInterval(interval);

            setTimeout(() => {
              setIsComplete(true);
              onComplete?.();
            }, 500);
          }

          return next;
        });
      }, 40);
    };

    const timeout = setTimeout(start, 300);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-neutral-900 overflow-hidden"
        >
          {/* Subtle noise and light grid for modern white aesthetic */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="relative flex flex-col items-center justify-center w-full max-w-md px-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-16 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-900">
                R<span className="text-neutral-400 font-light">Σ</span>NZ
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-[9px] tracking-[0.5em] text-neutral-400 mt-3 uppercase font-semibold"
              >
                Portfolio Experience
              </motion.p>
            </motion.div>

            {/* Elegant minimal progress bar */}
            <div className="w-full max-w-[200px] h-[2px] bg-neutral-100 rounded-full overflow-hidden mb-8 shadow-inner">
              <motion.div
                className="h-full bg-neutral-900 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="text-xs font-semibold text-neutral-500 tracking-widest tabular-nums">
                {Math.round(progress)}%
              </div>
              <p className="text-[10px] text-neutral-400 tracking-[0.2em] uppercase">
                Loading Assets
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}