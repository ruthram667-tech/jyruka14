import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Eye,
  Clock,
  Activity,
  Users,
  TrendingUp,
  Globe2,
  Smartphone,
  Laptop,
  ArrowUpRight,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { useAnalytics } from '../../context/AnalyticsContext';

export const AnalyticsView: React.FC = () => {
  const { analytics, currentSessionDuration, formatDuration } = useAnalytics();
  const [filterPeriod, setFilterPeriod] = useState<'all' | 'today'>('all');

  const averageDwellSeconds =
    analytics.totalViews > 0
      ? Math.round(analytics.totalDwellSeconds / analytics.totalViews)
      : 0;

  const pageStatsArray = Object.values(analytics.pageStats).sort(
    (a, b) => b.views - a.views
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-2">
            <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Real-Time Traffic Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Webpage Views & Visitor Time Spent
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Live telemetry tracking how many people view your website and how much time they spend on each page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{analytics.activeVisitorsNow} Active Visitors Right Now</span>
          </div>
        </div>
      </div>

      {/* Primary KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Page Views */}
        <motion.div
          whileHover={{ y: -2 }}
          className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Total Page Views
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Eye className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {analytics.totalViews.toLocaleString()}
            </span>
            <span className="text-xs font-semibold text-emerald-400 flex items-center">
              <Activity className="w-3 h-3 mr-1" /> Live
            </span>
          </div>
          <p className="text-xs text-zinc-500 mt-1.5">
            Total recorded hits across all Jyruka routes
          </p>
        </motion.div>

        {/* Total Time Spent (Dwell Time) */}
        <motion.div
          whileHover={{ y: -2 }}
          className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Total Time Spent
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {formatDuration(analytics.totalDwellSeconds)}
            </span>
            <span className="text-xs font-semibold text-emerald-400 flex items-center">
              <ArrowUpRight className="w-3 h-3" /> Live
            </span>
          </div>
          <p className="text-xs text-zinc-500 mt-1.5">
            Cumulative dwell time by all website visitors
          </p>
        </motion.div>

        {/* Average Time Spent per Visitor */}
        <motion.div
          whileHover={{ y: -2 }}
          className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Avg Dwell Per Visit
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {formatDuration(averageDwellSeconds)}
            </span>
            <span className="text-xs font-semibold text-amber-400">High engagement</span>
          </div>
          <p className="text-xs text-zinc-500 mt-1.5">
            Average reading & browsing duration per page
          </p>
        </motion.div>

        {/* Current Active Session */}
        <motion.div
          whileHover={{ y: -2 }}
          className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Your Current Session
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-emerald-400 tracking-tight font-mono">
              {formatDuration(currentSessionDuration)}
            </span>
          </div>
          <p className="text-xs text-zinc-500 mt-1.5">
            Heartbeat active in this browser tab
          </p>
        </motion.div>
      </div>

      {/* Detailed Page Breakdown & Traffic Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Page Views & Time Spent per Page Table */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Views & Time Spent by Webpage
              </h2>
              <p className="text-xs text-zinc-400">
                Granular engagement stats per route across the portfolio and service pages.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-zinc-800/60 uppercase font-semibold text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="py-3 px-4">Webpage / Route</th>
                  <th className="py-3 px-4 text-right">Views</th>
                  <th className="py-3 px-4 text-right">Total Time Spent</th>
                  <th className="py-3 px-4 text-right">Avg Dwell</th>
                  <th className="py-3 px-4 text-right">Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {pageStatsArray.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-zinc-500">
                      No page traffic recorded yet. Traffic will appear here as visitors browse your website.
                    </td>
                  </tr>
                ) : (
                  pageStatsArray.map((stat) => {
                  const sharePct =
                    analytics.totalViews > 0
                      ? Math.round((stat.views / analytics.totalViews) * 100)
                      : 0;
                  const avg = stat.views > 0 ? Math.round(stat.totalDurationSeconds / stat.views) : 0;

                  return (
                    <tr key={stat.path} className="hover:bg-zinc-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <div>
                          <span className="font-semibold text-sm">{stat.name}</span>
                          <span className="block text-[11px] text-zinc-500 font-mono">{stat.path}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right font-semibold text-white">
                        {stat.views.toLocaleString()}
                      </td>
                      <td className="py-3.5 px-4 text-right text-amber-300 font-mono">
                        {formatDuration(stat.totalDurationSeconds)}
                      </td>
                      <td className="py-3.5 px-4 text-right text-zinc-300 font-mono">
                        {formatDuration(avg)}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <div className="w-16 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                            <div
                              className="h-full bg-amber-400 rounded-full"
                              style={{ width: `${sharePct}%` }}
                            />
                          </div>
                          <span className="text-[11px] text-zinc-400">{sharePct}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                }))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Visitor Sessions Stream */}
        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Recent Visitor Feed</span>
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live
              </span>
            </div>
            <p className="text-xs text-zinc-400 mb-4">
              Stream of incoming web visitors and time spent before exit.
            </p>

            <div className="space-y-3">
              {analytics.recentSessions.length === 0 ? (
                <div className="py-8 text-center text-zinc-500 text-xs">
                  <Activity className="w-7 h-7 text-zinc-600 mx-auto mb-2 opacity-50" />
                  <p className="font-semibold text-zinc-400">No visitor sessions logged yet</p>
                  <p className="text-[11px] text-zinc-600 mt-1">Sessions will appear here in real-time as visitors navigate the site.</p>
                </div>
              ) : (
                analytics.recentSessions.slice(0, 5).map((sess) => (
                <div
                  key={sess.id}
                  className="p-3 rounded-xl bg-black/50 border border-zinc-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                      {sess.device.includes('Mobile') ? (
                        <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                      ) : (
                        <Laptop className="w-3.5 h-3.5 text-amber-400" />
                      )}
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-semibold text-white truncate">{sess.page}</div>
                      <div className="text-[10px] text-zinc-500">{sess.device}</div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-mono text-amber-300 font-semibold">
                      {formatDuration(sess.durationSeconds)}
                    </div>
                    <div className="text-[10px] text-zinc-500">{sess.timestamp}</div>
                  </div>
                </div>
              )))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-zinc-800 text-[11px] text-zinc-500 flex items-center justify-between">
            <span>Tracking active via Jyruka Telemetry</span>
            <span className="text-amber-400 font-mono font-semibold">100% Client-Safe</span>
          </div>
        </div>
      </div>
    </div>
  );
};
