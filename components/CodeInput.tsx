"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  length: number;
  /** "letters" uppercases input; "numbers" restricts to digits. */
  mode: "letters" | "numbers";
  value: string;
  onChange: (v: string) => void;
  /** Visual treatment: the start-code screen sits on a green background. */
  tone?: "light" | "onGreen";
  autoFocus?: boolean;
  label: string;
}

export default function CodeInput({
  length,
  mode,
  value,
  onChange,
  tone = "light",
  autoFocus,
  label,
}: Props) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const [focused, setFocused] = useState<number | null>(null);

  useEffect(() => {
    if (autoFocus) refs.current[0]?.focus();
  }, [autoFocus]);

  const chars = Array.from({ length }, (_, i) => value[i] ?? "");

  function sanitize(raw: string) {
    // Any input is accepted in this build — we only normalize its shape.
    return mode === "numbers"
      ? raw.replace(/[^0-9]/g, "")
      : raw.replace(/[^a-zA-Z]/g, "").toUpperCase();
  }

  function setAt(index: number, char: string) {
    const next = chars.slice();
    next[index] = char;
    onChange(next.join("").slice(0, length));
  }

  function handleChange(index: number, raw: string) {
    const cleaned = sanitize(raw);
    if (!cleaned) {
      setAt(index, "");
      return;
    }
    if (cleaned.length > 1) {
      // Pasted or typed several characters at once — spread them forward.
      const next = chars.slice();
      for (let i = 0; i < cleaned.length && index + i < length; i++) {
        next[index + i] = cleaned[i];
      }
      onChange(next.join("").slice(0, length));
      refs.current[Math.min(index + cleaned.length, length - 1)]?.focus();
      return;
    }
    setAt(index, cleaned);
    if (index < length - 1) refs.current[index + 1]?.focus();
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (chars[index]) {
        setAt(index, "");
      } else if (index > 0) {
        e.preventDefault();
        setAt(index - 1, "");
        refs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      refs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      refs.current[index + 1]?.focus();
    }
  }

  return (
    <div
      className="flex items-center justify-center gap-4"
      role="group"
      aria-label={label}
    >
      {chars.map((c, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={c}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onFocus={() => setFocused(i)}
          onBlur={() => setFocused(null)}
          inputMode={mode === "numbers" ? "numeric" : "text"}
          autoComplete="off"
          aria-label={`${label} character ${i + 1} of ${length}`}
          maxLength={length}
          className={[
            "h-[74px] w-[74px] rounded-xl border text-center text-[30px] font-medium outline-none transition",
            tone === "onGreen"
              ? "border-transparent bg-white text-cb-ink shadow-sm"
              : "border-cb-line bg-white text-cb-gray",
            focused === i ? "ring-[3px] ring-cb-blue ring-offset-2" : "",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
