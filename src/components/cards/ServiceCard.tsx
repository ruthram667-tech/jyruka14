import React from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Code2,
  TrendingUp,
  PenTool,
  Sparkles,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { ServiceItem } from '../../types';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Code2,
  TrendingUp,
  PenTool,
  Sparkles,
  Cpu
};

interface ServiceCardProps {
  service: ServiceItem;
  detailed?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, detailed = false }) => {
  const IconComponent = ICON_MAP[service.iconName] || Sparkles;

  return (
    <div
      id={`service-card-${service.id}`}
      className="group relative flex flex-col justify-between p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-amber-500/50 hover:bg-zinc-900/90 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-amber-500/10 hover:-translate-y-1.5"
    >
      {service.popular && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-[11px] font-extrabold px-3 py-0.5 rounded-full tracking-wider uppercase shadow-md shadow-amber-500/25">
          High Demand
        </div>
      )}

      <div>
        {/* Header with Icon */}
        <div className="w-13 h-13 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-yellow-400 group-hover:text-black transition-all duration-300 shadow-sm">
          <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
        </div>

        <h3 className="mt-5 text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
          {service.title}
        </h3>

        <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
          {detailed ? service.fullDesc : service.shortDesc}
        </p>

        {/* Deliverables List */}
        <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2">
          <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-400">
            Key Deliverables
          </span>
          <div className="space-y-1.5 mt-1">
            {service.deliverables.slice(0, detailed ? 5 : 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer info: Starting Price & Turnaround */}
      <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
        <div className="flex flex-col">
          <span className="text-[11px] text-zinc-400">Starting from</span>
          <span className="font-bold text-amber-400 text-sm">{service.startingPrice}</span>
        </div>

        <div className="flex items-center gap-1.5 text-zinc-400">
          <Clock className="w-3.5 h-3.5 text-zinc-400" />
          <span>{service.turnaroundTime}</span>
        </div>

        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-400 transition-colors"
          title={`Inquire about ${service.title}`}
        >
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};
