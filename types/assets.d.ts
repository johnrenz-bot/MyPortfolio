/**
 * Ambient declarations for non-code assets imported for their side effects.
 *
 * Next.js handles these imports through its own bundler, but TypeScript needs
 * to be told they exist or `import "./globals.css"` errors under
 * `noUncheckedSideEffectImports` (the editor enables this by default even
 * when the project tsconfig leaves it off).
 */

declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";

declare module "*.svg" {
  import type { FC, SVGProps } from "react";

  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.avif" {
  const content: string;
  export default content;
}
