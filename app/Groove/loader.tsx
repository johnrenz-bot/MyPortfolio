"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-widest text-white animate-pulse">LOADING Groove</h1>
        <div className="flex gap-2 text-white text-xl font-semibold">
          <span className="animate-bounce [animation-delay:0ms]">•</span>
          <span className="animate-bounce [animation-delay:150ms]">•</span>
          <span className="animate-bounce [animation-delay:300ms]">•</span>
        </div>
        <p className="text-sm text-neutral-300 tracking-wide mt-2">Preparing Web System</p>
      </div>
    </div>
  );
}
