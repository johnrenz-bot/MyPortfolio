"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import PortfolioLoader from "./PortfolioLoader";

export default function InitialLoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  // Lock scroll while the overlay is up so the page never jumps on the frame
  // it fades out. No timing here on purpose — the loader's own 01 → 100
  // counter is tied to real load signals, not an artificial delay.
  useEffect(() => {
    if (!loading) return;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [loading]);

  // Stable identity: a changing callback would restart the counter loop.
  const handleDone = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence>
        {loading && <PortfolioLoader key="loader" onDone={handleDone} />}
      </AnimatePresence>
      {children}
    </>
  );
}
