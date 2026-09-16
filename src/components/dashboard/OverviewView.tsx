import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Inbox,
  FolderKanban,
  Users2,
  DollarSign,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  Activity,
  Briefcase,
  UserPlus
} from 'lucide-react';
import { useInquiries } from '../../context/InquiryContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import { useEmployees } from '../../context/EmployeeContext';
import { DashboardTab } from './DashboardSidebar';

interface OverviewViewProps {
  onNavigateTab: (tab: DashboardTab) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onNavigateTab }) => {
  const { inquiries, projects } = useInquiries();
  const { analytics, formatDuration } = useAnalytics();
  const { employees, tasks } = useEmployees();

  const newInquiries = inquiries.filter((i) => i.status === 'New');
  const activeTasks = tasks.filter((t) => t.status === 'In Progress' || t.status === 'Pending');

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Executive Command Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            SuperAdmin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Live website traffic telemetry, client project requests, employee rosters, and task allocations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigateTab('analytics')}
            id="overview-quick-traffic-btn"
            className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold flex items-center gap-2 border border-zinc-800 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>Traffic Telemetry</span>
          </button>

          <button
            onClick={() => onNavigateTab('assignments')}
            id="overview-quick-assign-btn"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black text-xs font-bold flex items-center gap-2 shadow-md shadow-amber-500/20 transition-colors cursor-pointer"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Assign Work ({tasks.length})</span>
          </button>
        </div>
      </div>

      {/* Primary KPI Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Webpage Views */}
        <div
          onClick={() => onNavigateTab('analytics')}
          className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 transition-all cursor-pointer shadow-md shadow-black/20 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Webpage Views</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
            {analytics.totalViews.toLocaleString()}
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1" />
            <span>{analytics.activeVisitorsNow} Active now</span>
          </div>
        </div>

        {/* Total Time Spent */}
        <div
          onClick={() => onNavigateTab('analytics')}
          className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 transition-all cursor-pointer shadow-md shadow-black/20 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Total Time Spent</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
            {formatDuration(analytics.totalDwellSeconds)}
          </div>
          <div className="mt-1 text-xs text-zinc-400">
            Across all website routes
          </div>
        </div>

        {/* Inbound Client Requests */}
        <div
          onClick={() => onNavigateTab('inquiries')}
          className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 transition-all cursor-pointer shadow-md shadow-black/20 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Client Requests</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
            {inquiries.length} Requests
          </div>
          <div className="mt-1 text-xs text-amber-400 font-medium">
            {newInquiries.length} new incoming leads
          </div>
        </div>

        {/* Employee Accounts & Tasks */}
        <div
          onClick={() => onNavigateTab('employees')}
          className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 transition-all cursor-pointer shadow-md shadow-black/20 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Employee Accounts</span>
            <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center">
              <Users2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
            {employees.length} Staff
          </div>
          <div className="mt-1 text-xs text-zinc-400">
            {activeTasks.length} active assignments
          </div>
        </div>
      </div>

      {/* Main Content Grid: Live Client Requests & Work Assignments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Work Assignments for Employees (2 Cols) */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-5 shadow-xl shadow-black/30">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Assigned Employee Deliverables</h2>
              <p className="text-xs text-zinc-400">Current work assigned to staff accounts</p>
            </div>
            <button
              onClick={() => onNavigateTab('assignments')}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 cursor-pointer"
            >
              <span>Manage all assignments</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {tasks.slice(0, 4).map((task) => (
              <div
                key={task.id}
                className="p-4 rounded-xl bg-black border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between gap-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white">{task.title}</h4>
                    <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">{task.description}</p>
                  </div>
                  <span
                    className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold shrink-0 ${
                      task.status === 'Completed'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : task.status === 'In Progress'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-zinc-800 text-zinc-300'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="text-zinc-300 font-medium">Assigned: {task.assignedToEmployeeName}</span>
                  <span>Due: {task.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inbound Client Project Requests (1 Col) */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-5 shadow-xl shadow-black/30">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Client Project Requests</h2>
              <p className="text-xs text-zinc-400">Inbound inquiries from prospects</p>
            </div>
            <button
              onClick={() => onNavigateTab('inquiries')}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium cursor-pointer"
            >
              View All ({inquiries.length})
            </button>
          </div>

          <div className="space-y-3">
            {inquiries.slice(0, 4).map((inq) => (
              <div
                key={inq.id}
                onClick={() => onNavigateTab('inquiries')}
                className="p-3.5 rounded-xl bg-black border border-zinc-800/80 hover:border-amber-500/40 cursor-pointer transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white truncate max-w-[140px]">
                    {inq.clientName}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                      inq.status === 'New'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
                        : inq.status === 'Converted'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {inq.status}
                  </span>
                </div>
                <div className="text-[11px] text-amber-400 font-medium truncate">
                  {inq.serviceCategory}
                </div>
                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-tight">
                  {inq.message}
                </p>
                <div className="text-[10px] text-zinc-500 pt-1 flex justify-between">
                  <span>{inq.budgetRange}</span>
                  <span>{inq.createdAt.slice(0, 10)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
