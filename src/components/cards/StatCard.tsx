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
      className={`p-4 sm:p-5 lg:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-baseline gap-0.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight flex-wrap">
          {prefix && <span className="text-emerald-600 text-xl sm:text-2xl lg:text-3xl">{prefix}</span>}
          <span className="font-sans tabular-nums text-slate-950">
            {count}
          </span>
          {suffix && <span className="text-emerald-600 text-xl sm:text-2xl lg:text-3xl font-bold">{suffix}</span>}
        </div>

        <h3 className="mt-2 text-xs sm:text-sm lg:text-base font-bold text-slate-900 leading-snug">
          {label}
        </h3>
      </div>

      {description && (
        <p className="mt-1.5 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
