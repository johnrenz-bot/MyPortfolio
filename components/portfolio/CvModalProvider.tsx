"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import RequestCVModal from "@/components/portfolio/ui/RequestCVModal";

type CvModalContextValue = {
  open: (trigger?: HTMLElement | null) => void;
  close: () => void;
  isOpen: boolean;
};

const CvModalContext = createContext<CvModalContextValue | null>(null);

export function useCvModal(): CvModalContextValue {
  const ctx = useContext(CvModalContext);
  if (!ctx) {
    return { open: () => {}, close: () => {}, isOpen: false };
  }
  return ctx;
}

export default function CvModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState<HTMLElement | null>(null);
  const openModal = useCallback((t?: HTMLElement | null) => {
    setTrigger(t ?? (document.activeElement as HTMLElement | null));
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <CvModalContext.Provider value={{ open: openModal, close: closeModal, isOpen: open }}>
      {children}
      <RequestCVModal open={open} onClose={closeModal} restoreFocusTo={trigger} />
    </CvModalContext.Provider>
  );
}
