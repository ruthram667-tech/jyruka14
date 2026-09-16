import React from 'react';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Calendar
} from 'lucide-react';

export const ReportsView: React.FC = () => {
  const serviceDistribution = [
    { name: 'Full-Stack Engineering', share: '38%', revenue: '$32,800', growth: '+28%' },
    { name: 'Product & UI/UX Design', share: '30%', revenue: '$25,900', growth: '+19%' },
    { name: 'AI Engineering & Automation', share: '18%', revenue: '$15,500', growth: '+85%' },
    { name: 'Growth Marketing & SEO', share: '9%', revenue: '$7,800', growth: '+12%' },
    { name: 'Technical Writing & Docs', share: '5%', revenue: '$4,500', growth: '+8%' }
  ];

  const monthlyRunRate = [
    { month: 'May', amount: 18, height: '40%' },
    { month: 'Jun', amount: 24, height: '55%' },
    { month: 'Jul', amount: 29, height: '65%' },
    { month: 'Aug', amount: 36, height: '80%' },
    { month: 'Sep', amount: 42, height: '95%' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Financial & Performance Analytics
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Revenue trajectory, service category demand, and sprint velocity reporting.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-xl">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Quarterly Period: Q3 FY2025</span>
        </div>
      </div>

      {/* Top summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 shadow-xl shadow-black/30">
          <span className="text-xs font-semibold text-zinc-400">Quarterly Gross Revenue</span>
          <div className="mt-2 text-3xl font-extrabold text-white">$86,500</div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
            <TrendingUp className="w-4 h-4" />
            <span>+38.4% YoY Growth</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 shadow-xl shadow-black/30">
          <span className="text-xs font-semibold text-zinc-400">Average Sprint Size</span>
          <div className="mt-2 text-3xl font-extrabold text-white">$7,200</div>
          <div className="mt-2 text-xs text-zinc-400">
            Across 12 completed sprint milestones
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 shadow-xl shadow-black/30">
          <span className="text-xs font-semibold text-zinc-400">Client Repeat / Retention Rate</span>
          <div className="mt-2 text-3xl font-extrabold text-white">82%</div>
          <div className="mt-2 text-xs text-amber-400 font-medium">
            Clients renew for 2+ consecutive sprints
          </div>
        </div>
      </div>

      {/* Monthly Bar Chart Visual */}
      <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-6 shadow-xl shadow-black/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Monthly Revenue Trajectory ($k)</h3>
            <p className="text-xs text-zinc-400">Steady upward acceleration driven by managed squads</p>
          </div>
          <span className="text-xs font-bold text-amber-300 bg-amber-950/40 px-3 py-1 rounded-lg border border-amber-800/50">
            Current Run Rate: ~$42k / mo
          </span>
        </div>

        {/* Visual Chart Bars */}
        <div className="h-56 pt-8 pb-4 flex items-end justify-between gap-4 border-b border-zinc-800">
          {monthlyRunRate.map((bar) => (
            <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                ${bar.amount}k
              </span>
              <div
                className="w-full max-w-[56px] rounded-t-xl bg-gradient-to-t from-zinc-700 via-amber-500 to-yellow-400 transition-all duration-500 group-hover:brightness-125 shadow-lg shadow-amber-500/20"
                style={{ height: bar.height }}
              />
              <span className="text-xs font-semibold text-zinc-400">{bar.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Category Breakdown */}
      <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4 shadow-xl shadow-black/30">
        <h3 className="text-base font-bold text-white">Service Category Revenue Share</h3>
        <div className="space-y-3">
          {serviceDistribution.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-xl bg-black border border-zinc-800/80 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="font-bold text-white text-sm">{item.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-zinc-400 font-medium">{item.share} share</span>
                <span className="font-bold text-white">{item.revenue}</span>
                <span className="text-amber-400 font-semibold">{item.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
