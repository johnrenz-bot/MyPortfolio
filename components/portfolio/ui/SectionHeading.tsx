import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  title?: string;
  description?: string;
  aside?: ReactNode;
  className?: string;
};

/** Small numbered section label used inside every page body. */
export default function SectionHeading({
  index,
  label,
  title,
  description,
  aside,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`reveal ${className}`}>
      <div className="flex items-center gap-3 pb-4 border-b border-line">
        <span className="text-[14px] font-medium text-ink">{index}</span>
        <span className="text-[14px] text-line-strong" aria-hidden="true">
          ·
        </span>
        <span className="text-[14px] font-medium text-muted">{label}</span>
        {aside ? <span className="ml-auto hidden sm:block">{aside}</span> : null}
      </div>
      {title ? (
        <h2 className="mt-6 font-display text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-ink">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-3 max-w-2xl text-sm sm:text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
