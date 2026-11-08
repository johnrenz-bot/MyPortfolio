"use client";

import { useCvModal } from "@/components/portfolio/CvModalProvider";

export default function CvTrigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useCvModal();
  return (
    <button type="button" onClick={(e) => open(e.currentTarget as HTMLElement)} className={className}>
      {children}
    </button>
  );
}
