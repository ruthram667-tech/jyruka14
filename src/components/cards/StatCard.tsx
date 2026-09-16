import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  suffix = '',
  prefix = '',
  description,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1400; // ms
    const stepTime = 20; // 50fps
    const steps = duration / stepTime;
    const increment = (end - start) / steps;

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className={`p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:bg-zinc-900/80 shadow-lg shadow-black/30 ${className}`}
    >
      <div className="flex items-baseline gap-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
        {prefix && <span className="text-amber-400 text-2xl sm:text-3xl lg:text-4xl">{prefix}</span>}
        <span className="font-sans tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-amber-200">
          {count}
        </span>
        {suffix && <span className="text-amber-400 text-2xl sm:text-3xl lg:text-4xl font-semibold">{suffix}</span>}
      </div>

      <h3 className="mt-2 text-sm sm:text-base font-semibold text-zinc-200">
        {label}
      </h3>

      {description && (
        <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
