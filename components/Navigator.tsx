"use client";

import type { Question } from "@/lib/types";

export interface QuestionStatus {
  answered: boolean;
  flagged: boolean;
}

function LocationPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 ${className}`} fill="currentColor">
      <path d="M12 2c-3.9 0-7 3-7 6.8 0 5 6.2 12.4 6.5 12.7a.7.7 0 001 0C12.8 21.2 19 13.8 19 8.8 19 5 15.9 2 12 2zm0 9.4a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2z" />
    </svg>
  );
}

export function FlagIcon({
  filled,
  className = "",
}: {
  filled?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-[18px] w-[18px] ${className}`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    >
      <path d="M6 21V4.5M6 4.5h11.5l-2.2 3.6 2.2 3.6H6" />
    </svg>
  );
}

export default function Navigator({
  open,
  onClose,
  title,
  questions,
  statuses,
  current,
  onJump,
  onReview,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  questions: Question[];
  statuses: QuestionStatus[];
  current: number;
  onJump: (i: number) => void;
  onReview: () => void;
}) {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onMouseDown={onClose} aria-hidden />
      <div className="absolute bottom-[92px] left-1/2 z-50 w-[560px] -translate-x-1/2 rounded-xl border border-gray-300 bg-white p-6 shadow-2xl">
        <p className="text-center text-[15px] font-semibold">{title}</p>

        <div className="mt-4 flex items-center justify-center gap-7 border-b border-gray-200 pb-4 text-[13px] text-cb-gray">
          <span className="flex items-center gap-1.5">
            <LocationPin className="text-cb-blue" />
            Current
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-[15px] w-[15px] rounded-[3px] border border-dashed border-cb-gray" />
            Unanswered
          </span>
          <span className="flex items-center gap-1.5">
            <FlagIcon filled className="text-[#C13030]" />
            For Review
          </span>
        </div>

        <div className="mt-5 grid grid-cols-9 gap-x-3 gap-y-5">
          {questions.map((q, i) => {
            const st = statuses[i];
            const isCurrent = i === current;
            return (
              <button
                key={q.id}
                onClick={() => {
                  onJump(i);
                  onClose();
                }}
                className="relative flex h-[34px] w-[34px] items-center justify-center"
                aria-label={`Question ${i + 1}${
                  st.answered ? ", answered" : ", unanswered"
                }${st.flagged ? ", marked for review" : ""}`}
              >
                {isCurrent ? (
                  <LocationPin className="absolute -top-[13px] text-cb-blue" />
                ) : null}
                {st.flagged ? (
                  <FlagIcon
                    filled
                    className="absolute -right-[7px] -top-[9px] text-[#C13030]"
                  />
                ) : null}
                <span
                  className={[
                    "flex h-[34px] w-[34px] items-center justify-center rounded-[4px] text-[15px] font-medium",
                    st.answered
                      ? "bg-cb-blue text-white"
                      : "border border-dashed border-cb-gray bg-white text-cb-ink",
                  ].join(" ")}
                >
                  {i + 1}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-7 flex justify-center">
          <button
            className="rounded-full border border-cb-blue px-7 py-2 text-[14px] font-bold text-cb-blue transition hover:bg-[#EEF1FE]"
            onClick={() => {
              onReview();
              onClose();
            }}
          >
            Go to Review Page
          </button>
        </div>
      </div>
    </>
  );
}
