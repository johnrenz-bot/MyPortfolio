import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageHeaderProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  meta?: ReactNode;
};

export default function PageHeader({
  index,
  eyebrow,
  title,
  description,
  actions,
  meta,
}: PageHeaderProps) {
  return (
    <header className="reveal relative pb-8 mb-8 sm:pb-10 sm:mb-10 border-b border-line">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      <div className="mb-4 flex items-center gap-3">
        <div className="h-[1.5px] w-8 shrink-0 bg-ink" aria-hidden="true" />
        <span className="label-mono">{eyebrow}</span>
        <span className="text-[12px] tabular-nums text-subtle">{index}</span>
        {meta ? <div className="ml-auto hidden sm:block text-[14px] text-muted">{meta}</div> : null}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-[640px]">
          <h1 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? (
          <div className="flex flex-wrap items-center gap-3 shrink-0">{actions}</div>
        ) : null}
      </div>
    </header>
  );
}