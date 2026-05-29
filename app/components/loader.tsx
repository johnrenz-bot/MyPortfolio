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
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 text-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <div className="text-7xl font-black tracking-tight">
                R<span className="text-emerald-400 font-light">Σ</span>NZ
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-[10px] tracking-[0.4em] text-neutral-400 mt-2 uppercase"
              >
                Portfolio Experience
              </motion.p>
            </motion.div>

            <div className="relative w-36 h-36 flex items-center justify-center mb-10">
              <motion.div
                className="absolute inset-0 border border-neutral-800 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-2 border-t-2 border-emerald-500 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="text-center"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-emerald-400 text-2xl mb-2">✦</div>
                <div className="text-xs text-neutral-400 tracking-[0.3em] uppercase">
                  Welcome
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center space-y-2"
            >
              <p className="text-sm text-neutral-300 tracking-wide">
                Crafting something special for you
              </p>

              <p className="text-[10px] text-neutral-500 tracking-[0.3em] uppercase">
                Please wait a moment
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}