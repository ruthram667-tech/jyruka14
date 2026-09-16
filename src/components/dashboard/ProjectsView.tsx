import React, { useState } from 'react';
import {
  FolderKanban,
  Calendar,
  DollarSign,
  Users,
  CheckCircle2,
  Clock,
  Plus,
  ArrowUpRight
} from 'lucide-react';
import { useInquiries } from '../../context/InquiryContext';
import { ProjectRecord } from '../../types';

export const ProjectsView: React.FC = () => {
  const { projects, updateProjectProgress } = useInquiries();
  const [filter, setFilter] = useState<string>('All');

  const filtered = projects.filter(
    (p) => filter === 'All' || p.status === filter
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Client Projects & Sprints
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Active website development squads, delivery schedules, milestones, and budget allocations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {['All', 'In Progress', 'In Review', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                filter === tab
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-sm font-bold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 text-zinc-400 text-xs">
            <FolderKanban className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
            <p className="font-semibold text-white">No Client Projects Initialized</p>
            <p className="text-zinc-500 mt-1">Client projects converted from inquiries or initialized by SuperAdmin will appear here.</p>
          </div>
        ) : (
          filtered.map((proj) => (
          <div
            key={proj.id}
            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-5 shadow-xl shadow-black/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-zinc-400">{proj.client}</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{proj.title}</h3>
              </div>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                  proj.status === 'Completed'
                    ? 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                    : proj.status === 'In Review'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-amber-950/40 text-amber-400 border border-amber-500/30'
                }`}
              >
                {proj.status}
              </span>
            </div>

            {/* Financials & Deadline */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-black border border-zinc-800 text-xs">
              <div>
                <span className="text-zinc-400 block text-[11px]">Total Budget</span>
                <span className="font-bold text-white">${proj.budget.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px]">Collected</span>
                <span className="font-bold text-amber-400">${proj.paid.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px]">Deadline</span>
                <span className="font-bold text-zinc-200">{proj.deadline}</span>
              </div>
            </div>

            {/* Interactive Progress Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-zinc-400 font-medium">Sprint Completion</span>
                <span className="font-bold text-amber-400">{proj.progress}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={proj.progress}
                onChange={(e) => updateProjectProgress(proj.id, Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                <span>Kickoff</span>
                <span>In Review</span>
                <span>Production Handoff</span>
              </div>
            </div>

            {/* Team assigned */}
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-zinc-300" />
                <span>Squad: <strong className="text-zinc-200">{proj.assignedTeam.join(', ')}</strong></span>
              </div>
              <span className="text-amber-400 font-semibold">{proj.category}</span>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
};
