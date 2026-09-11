"use client";

import { Fragment, useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_DATE = new Date("2026-10-18T10:00:00-03:00").getTime();

function getTimeLeft(): TimeLeft | null {
  const diff = EVENT_DATE - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export const Countdown = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (mounted && !timeLeft) {
    return (
      <span className="font-display font-bold text-3xl text-secondary sm:text-4xl">
        Evento em andamento!
      </span>
    );
  }

  const segments = [
    { label: "Dias", value: timeLeft?.days },
    { label: "Horas", value: timeLeft?.hours },
    { label: "Min", value: timeLeft?.minutes },
    { label: "Seg", value: timeLeft?.seconds },
  ];

  return (
    <div className="flex min-w-fit items-start">
      {segments.map(({ label, value }, index) => (
        <Fragment key={label}>
          <div className="flex flex-col items-center px-1.5 sm:px-3">
            <span className="font-display font-bold text-4xl text-foreground sm:text-5xl">
              {value !== undefined ? String(value).padStart(2, "0") : "--"}
            </span>
            <span className="mt-1.5 text-base text-muted-foreground sm:text-lg">
              {label}
            </span>
          </div>

          {index < segments.length - 1 && (
            <span
              aria-hidden
              className="font-display font-bold text-3xl text-muted-foreground sm:text-4xl"
            >
              :
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
};
