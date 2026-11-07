"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SoundProfile = "clicky" | "thocky" | "linear";

const TARGET_TEXT =
  "The quick brown fox jumps over the lazy dog while the mechanical keyboard clicks softly in the dark room.";

const ROWS: Array<Array<{ code: string; label: string; value?: string; w?: string }>> = [
  [
    { code: "Backquote", label: "`", value: "`" },
    { code: "Digit1", label: "1", value: "1" },
    { code: "Digit2", label: "2", value: "2" },
    { code: "Digit3", label: "3", value: "3" },
    { code: "Digit4", label: "4", value: "4" },
    { code: "Digit5", label: "5", value: "5" },
    { code: "Digit6", label: "6", value: "6" },
    { code: "Digit7", label: "7", value: "7" },
    { code: "Digit8", label: "8", value: "8" },
    { code: "Digit9", label: "9", value: "9" },
    { code: "Digit0", label: "0", value: "0" },
    { code: "Minus", label: "-", value: "-" },
    { code: "Equal", label: "=", value: "=" },
    { code: "Backspace", label: "Backspace", w: "w-20" },
  ],
  [
    { code: "Tab", label: "Tab", w: "w-16" },
    { code: "KeyQ", label: "Q", value: "q" },
    { code: "KeyW", label: "W", value: "w" },
    { code: "KeyE", label: "E", value: "e" },
    { code: "KeyR", label: "R", value: "r" },
    { code: "KeyT", label: "T", value: "t" },
    { code: "KeyY", label: "Y", value: "y" },
    { code: "KeyU", label: "U", value: "u" },
    { code: "KeyI", label: "I", value: "i" },
    { code: "KeyO", label: "O", value: "o" },
    { code: "KeyP", label: "P", value: "p" },
    { code: "BracketLeft", label: "[", value: "[" },
    { code: "BracketRight", label: "]", value: "]" },
    { code: "Backslash", label: "\\", value: "\\" },
  ],
  [
    { code: "CapsLock", label: "Caps", w: "w-20" },
    { code: "KeyA", label: "A", value: "a" },
    { code: "KeyS", label: "S", value: "s" },
    { code: "KeyD", label: "D", value: "d" },
    { code: "KeyF", label: "F", value: "f" },
    { code: "KeyG", label: "G", value: "g" },
    { code: "KeyH", label: "H", value: "h" },
    { code: "KeyJ", label: "J", value: "j" },
    { code: "KeyK", label: "K", value: "k" },
    { code: "KeyL", label: "L", value: "l" },
    { code: "Semicolon", label: ";", value: ";" },
    { code: "Quote", label: "'", value: "'" },
    { code: "Enter", label: "Enter", w: "w-24" },
  ],
  [
    { code: "ShiftLeft", label: "Shift", w: "w-28" },
    { code: "KeyZ", label: "Z", value: "z" },
    { code: "KeyX", label: "X", value: "x" },
    { code: "KeyC", label: "C", value: "c" },
    { code: "KeyV", label: "V", value: "v" },
    { code: "KeyB", label: "B", value: "b" },
    { code: "KeyN", label: "N", value: "n" },
    { code: "KeyM", label: "M", value: "m" },
    { code: "Comma", label: ",", value: "," },
    { code: "Period", label: ".", value: "." },
    { code: "Slash", label: "/", value: "/" },
    { code: "ShiftRight", label: "Shift", w: "w-28" },
  ],
  [
    { code: "Space", label: "Space", value: " ", w: "w-96" },
  ],
];

export default function MechanicalKeyboard() {
  const [profile, setProfile] = useState<SoundProfile>("clicky");
  const [volume, setVolume] = useState(0.5);
  const [pressed, setPressed] = useState<Set<string>>(new Set());
  const [typed, setTyped] = useState("");
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const ensureAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      type WebkitWindow = Window & { webkitAudioContext?: typeof AudioContext };
      const Ctx = (window.AudioContext || (window as WebkitWindow).webkitAudioContext) as typeof AudioContext;
      audioCtxRef.current = new Ctx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const playSound = useCallback(
    (code: string) => {
      try {
        const ctx = ensureAudio();
        const now = ctx.currentTime;
        const isSpace = code === "Space";
        const isEnter = code === "Enter";
        const master = ctx.createGain();
        master.gain.value = volume * (isSpace ? 0.9 : 1);
        master.connect(ctx.destination);

        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.connect(oscGain);
        oscGain.connect(master);

        if (profile === "clicky") {
          osc.type = "square";
          osc.frequency.value = isEnter ? 1600 : 2200;
          oscGain.gain.setValueAtTime(0.18, now);
          oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
          osc.start(now);
          osc.stop(now + 0.05);
        } else if (profile === "thocky") {
          osc.type = "triangle";
          osc.frequency.value = isSpace ? 90 : 150;
          oscGain.gain.setValueAtTime(0.25, now);
          oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
          osc.start(now);
          osc.stop(now + 0.13);
        } else {
          osc.type = "sine";
          osc.frequency.value = 420;
          oscGain.gain.setValueAtTime(0.12, now);
          oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
          osc.start(now);
          osc.stop(now + 0.09);
        }

        // noise burst
        const bufferSize = Math.floor(ctx.sampleRate * 0.06);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        if (profile === "clicky") {
          filter.type = "highpass";
          filter.frequency.value = 2800;
        } else if (profile === "thocky") {
          filter.type = "lowpass";
          filter.frequency.value = 900;
        } else {
          filter.type = "bandpass";
          filter.frequency.value = 1200;
          filter.Q.value = 0.8;
        }
        const noiseGain = ctx.createGain();
        noiseGain.gain.value = profile === "clicky" ? 0.35 : 0.2;
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(master);
        noise.start(now);
        noise.stop(now + 0.06);
      } catch {
        // ignore audio errors
      }
    },
    [profile, volume, ensureAudio],
  );

  const markPressed = useCallback((code: string) => {
    setPressed((prev) => new Set(prev).add(code));
    window.setTimeout(() => {
      setPressed((prev) => {
        const next = new Set(prev);
        next.delete(code);
        return next;
      });
    }, 120);
  }, []);

  const commitTyped = (next: string) => {
    setTyped(next);
  };

  // start timer on first typed char
  useEffect(() => {
    if (typed.length === 1 && startedAt === null) {
      setStartedAt(Date.now());
    }
    if (typed.length >= TARGET_TEXT.length && startedAt !== null) {
      setFinished(true);
    }
  }, [typed, startedAt]);

  const insertKey = useCallback(
    (key: { code: string; value?: string }) => {
      markPressed(key.code);
      playSound(key.code);
      if (key.code === "Backspace") {
        commitTyped(typed.slice(0, -1));
      } else if (key.code === "Enter") {
        commitTyped(typed + "\n");
      } else if (key.value) {
        commitTyped(typed + key.value);
      }
      textareaRef.current?.focus();
    },
    [markPressed, playSound, typed, commitTyped],
  );

  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (startedAt === null || finished) return;
    const id = window.setInterval(() => {
      setElapsed(Date.now() - startedAt);
    }, 200);
    return () => window.clearInterval(id);
  }, [startedAt, finished]);

  const resetTest = () => {
    setTyped("");
    setStartedAt(null);
    setFinished(false);
    setElapsed(0);
  };

  // accuracy vs target
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === TARGET_TEXT[i]) correct++;
  }
  const accuracy = typed.length ? Math.round((correct / typed.length) * 100) : 100;
  const minutes = elapsed / 60000;
  const wpm = minutes > 0 ? Math.round((typed.length / 5) / minutes) : 0;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const code = e.code;
    markPressed(code);
    playSound(code);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    commitTyped(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">
            Profile
            <select
              value={profile}
              onChange={(e) => setProfile(e.target.value as SoundProfile)}
              className="ml-2 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-xs"
            >
              <option value="clicky">Clicky</option>
              <option value="thocky">Thocky</option>
              <option value="linear">Linear</option>
            </select>
          </label>
          <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 flex items-center gap-2">
            Volume
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-24"
            />
          </label>
        </div>
        <div className="flex items-center gap-4 text-xs tabular-nums text-neutral-600 dark:text-neutral-300">
          <span>WPM: {wpm}</span>
          <span>Acc: {accuracy}%</span>
          <span>Time: {(elapsed / 1000).toFixed(1)}s</span>
          <button
            onClick={resetTest}
            className="px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800 hover:border-[#444444] transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Target</p>
        <p className="text-sm font-mono text-neutral-800 dark:text-neutral-200 leading-relaxed">
          {TARGET_TEXT}
        </p>
      </div>

      <textarea
        ref={textareaRef}
        value={typed}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={(e) => {
          const next = new Set(pressed);
          next.delete(e.code);
          setPressed(next);
        }}
        rows={3}
        placeholder="Start typing here..."
        className="w-full mb-4 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-neutral-400 resize-none"
      />

      <div className="space-y-2 select-none">
        {ROWS.map((row, ri) => (
          <div key={ri} className="flex justify-center gap-1.5">
            {row.map((key) => {
              const isPressed = pressed.has(key.code);
              return (
                <button
                  key={key.code}
                  type="button"
                  aria-label={key.label}
                  onClick={() => insertKey(key)}
                  className={`${key.w || "w-10"} h-10 rounded-md border text-[10px] sm:text-xs font-semibold transition-all duration-75 ${
                    isPressed
                      ? "translate-y-[2px] shadow-inner bg-neutral-300 dark:bg-neutral-700 border-neutral-400 dark:border-neutral-600"
                      : "shadow-[0_3px_0_0_rgba(0,0,0,0.25)] bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-[#444444]"
                  }`}
                >
                  {key.label}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}