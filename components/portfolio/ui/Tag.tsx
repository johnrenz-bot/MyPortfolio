import type { ReactNode } from "react";

export default function Tag({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "solid";
}) {
  if (tone === "solid") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1 text-[14px] text-accent-contrast">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-2 px-2.5 py-1 text-[14px] text-muted">
      {children}
    </span>
  );
}