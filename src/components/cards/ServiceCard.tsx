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
      className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 shadow-sm hover:-translate-y-1.5"
    >
      {service.popular && (
        <div className="absolute -top-3 right-6 bg-emerald-600 text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
          High Demand
        </div>
      )}

      <div>
        {/* Header with Icon */}
        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
          <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
          {service.title}
        </h3>

        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {detailed ? service.fullDesc : service.shortDesc}
        </p>

        {/* Deliverables List */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
          <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
            Key Deliverables
          </span>
          <div className="space-y-1.5 mt-1">
            {service.deliverables.slice(0, detailed ? 5 : 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer info: Delivery Turnaround & Action */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
          <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{service.turnaroundTime} turnaround</span>
        </div>

        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-semibold transition-all group/btn shadow-xs"
          title={`Inquire about ${service.title}`}
        >
          <span>Get Started</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};
