import React from 'react';
import {
  MessageSquareText,
  UserCheck,
  GitBranch,
  Sparkles,
  Clock
} from 'lucide-react';
import { StepItem } from '../../types';

const STEP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquareText,
  UserCheck,
  GitBranch,
  Sparkles
};

interface StepCardProps {
  step: StepItem;
  isLast?: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({ step, isLast = false }) => {
  const Icon = STEP_ICONS[step.iconName] || Sparkles;

  return (
    <div
      id={`step-card-${step.step}`}
      className="relative flex flex-col p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all duration-300 group shadow-sm"
    >
      {/* Top row: Step number pill and duration */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-950 text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
            0{step.step}
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-100 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          <span>{step.duration}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
        {step.title}
      </h3>
      <div className="text-xs font-semibold text-emerald-700 mt-0.5">
        {step.subtitle}
      </div>

      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};
