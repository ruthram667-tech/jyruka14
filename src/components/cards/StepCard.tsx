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
      className="relative flex flex-col p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-amber-500/50 hover:bg-zinc-900/90 transition-all duration-300 group shadow-lg shadow-black/30"
    >
      {/* Top row: Step number pill and duration */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-400 text-black font-extrabold text-sm flex items-center justify-center shadow-md shadow-amber-500/20">
            0{step.step}
          </div>
          <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-amber-400 group-hover:text-yellow-300 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs font-semibold text-zinc-300">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{step.duration}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
        {step.title}
      </h3>
      <div className="text-xs font-semibold text-amber-400 mt-0.5">
        {step.subtitle}
      </div>

      <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};
