import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Phone,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export const HeroShowcase: React.FC = () => {
  const showcaseProjects = [
    {
      title: 'Hydronix Lab',
      role: 'IoT Cloud & MQTT Engine',
      metric: 'Sub-second sensor streaming',
      tag: 'Hardware & IoT',
      badgeColor: 'text-amber-300 border-amber-500/30 bg-amber-950/40'
    },
    {
      title: 'AI Live Coach',
      role: 'Vision & Speech Synthesis',
      metric: 'Zero-perceived latency audio',
      tag: 'AI & Full-Stack',
      badgeColor: 'text-yellow-300 border-yellow-500/30 bg-yellow-950/40'
    },
    {
      title: 'Newflex Enterprises',
      role: 'Warehouse & Inventory ERP',
      metric: 'Automated reorder triggers',
      tag: 'Enterprise Systems',
      badgeColor: 'text-amber-300 border-amber-500/30 bg-amber-950/40'
    },
    {
      title: 'Engineering Systems',
      role: 'Algorithmic Calculation Suite',
      metric: 'Formula validation pipelines',
      tag: 'Scientific Tooling',
      badgeColor: 'text-yellow-300 border-yellow-500/30 bg-yellow-950/40'
    }
  ];

  return (
    <div
      id="hero-sprint-showcase"
      className="relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-zinc-900/90 via-zinc-900/70 to-black/95 border border-zinc-800/90 hover:border-amber-500/40 transition-all duration-300 p-4 sm:p-6 lg:p-7 shadow-2xl shadow-black/60 backdrop-blur-md"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header with live operational status */}
      <div className="relative flex items-center justify-between pb-4 border-b border-zinc-800/80 gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-bold text-white tracking-wide">
            Elite Squad Dispatch
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] font-semibold text-amber-300">
          <Zap className="w-3 h-3 text-amber-400" />
          <span>48h Sprint Kickoff</span>
        </div>
      </div>

      {/* Highlight KPI Bar */}
      <div className="grid grid-cols-2 gap-3 py-4 border-b border-zinc-800/60">
        <div className="p-3 rounded-xl bg-black/60 border border-zinc-800">
          <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-amber-200 tabular-nums">
            10<span className="text-amber-400 font-bold">+</span>
          </div>
          <div className="text-[11px] sm:text-xs font-medium text-zinc-300 mt-0.5">
            Projects Delivered
          </div>
          <div className="text-[10px] text-zinc-500">Shipped on time</div>
        </div>

        <div className="p-3 rounded-xl bg-black/60 border border-zinc-800">
          <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 tabular-nums">
            $50<span className="text-amber-400 font-bold">k+</span>
          </div>
          <div className="text-[11px] sm:text-xs font-medium text-zinc-300 mt-0.5">
            Profit Generated
          </div>
          <div className="text-[10px] text-zinc-500">Client ROI delivered</div>
        </div>
      </div>

      {/* Verified Client Systems List */}
      <div className="py-3.5 space-y-2.5">
        <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
          <span>Verified Deliveries</span>
          <Link
            to="/portfolio"
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 normal-case font-medium text-xs transition-colors"
          >
            <span>All Case Studies</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-2">
          {showcaseProjects.map((p, idx) => (
            <Link
              key={idx}
              to="/portfolio"
              className="group p-2.5 sm:p-3 rounded-xl bg-black/40 hover:bg-zinc-800/60 border border-zinc-800/80 hover:border-amber-500/40 transition-all flex items-center justify-between gap-3 block"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {p.title}
                  </span>
                  <span
                    className={`hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full border font-semibold ${p.badgeColor}`}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                  {p.role} • <span className="text-zinc-500">{p.metric}</span>
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-zinc-800 text-zinc-400 group-hover:bg-amber-500 group-hover:text-black flex items-center justify-center shrink-0 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Mobile Action Bar */}
      <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-2.5 flex-col sm:flex-row">
        <a
          href={COMPANY_INFO.phoneHref}
          className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call {COMPANY_INFO.phone}</span>
        </a>
        <Link
          to="/contact"
          className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-amber-500/20"
        >
          <span>Get Free Estimate</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
