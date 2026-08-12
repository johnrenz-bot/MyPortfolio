"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PortfolioLoader from "./PortfolioLoader";

export default function InitialLoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <PortfolioLoader key="loader" />}
      </AnimatePresence>
      {/* We can hide children's scrollbar while loading using overflow-hidden, but we'll keep it simple */}
      {children}
    </>
  );
}
