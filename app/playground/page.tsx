"use client";

import SubPageHeader from "../components/shared/SubPageHeader";
import RevealOnScroll from "../components/shared/RevealOnScroll";
import MechanicalKeyboard from "../components/playground/MechanicalKeyboard";
import PixelCat from "../components/playground/PixelCat";

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100">
      <SubPageHeader section="Playground" title="Playground" />
      <RevealOnScroll />
      <main className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16">
        <section className="mb-10 reveal">
          <h1 className="heading-section text-3xl sm:text-4xl mb-3">Interactive Playground</h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl">
            A small interactive corner of the portfolio. Try the mechanical keyboard typing test
            and drag Mochi the pixel cat around.
          </p>
        </section>

        <section className="mb-12 reveal">
          <h2 className="heading-section text-2xl sm:text-3xl mb-4">Mechanical Keyboard</h2>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-4 sm:p-6">
            <MechanicalKeyboard />
          </div>
        </section>

        <section className="reveal">
          <h2 className="heading-section text-2xl sm:text-3xl mb-4">Pixel Pet</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Mochi lives in the bottom-right corner. Drag her anywhere, click for a meow.
          </p>
        </section>
      </main>
      <PixelCat />
    </div>
  );
}