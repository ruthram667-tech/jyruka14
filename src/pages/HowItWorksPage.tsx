import React from 'react';
import { Link } from 'react-router-dom';
import {
  GitCommit,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { StepCard } from '../components/cards/StepCard';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <GitCommit className="w-3.5 h-3.5 text-amber-400" />
          <span>The Engagement Lifecycle</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          How clients engage Jyruka.
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          From initial blueprint to sprint delivery, our process is designed for clarity, accountability, and maximum engineering velocity.
        </p>
      </section>

      {/* 4 Steps Section with connecting timeline */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <StepCard
              key={step.step}
              step={step}
              isLast={idx === HOW_IT_WORKS_STEPS.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Engagement Models Breakdown */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
            Flexible Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Choose your engagement model
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4 shadow-lg shadow-black/20">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Model 01
            </span>
            <h3 className="text-xl font-bold text-white">Dedicated Sprint</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Targeted 2-week execution block with 1 senior specialist. Ideal for shipping a critical MVP feature, redesigning onboarding, or unblocking an architectural puzzle.
            </p>
            <div className="pt-4 border-t border-zinc-800 space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Fixed sprint milestone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Direct Slack integration</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-b from-amber-950/40 via-zinc-900/90 to-zinc-950 border border-amber-500/50 space-y-4 shadow-xl shadow-amber-500/10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Model 02 (Recommended)
            </span>
            <h3 className="text-xl font-bold text-white">Managed Squad</h3>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
              Multi-disciplinary team (e.g. 1 Lead Engineer + 1 Senior UI Designer) led by a Jyruka Project Director. Perfect for continuous product roadmap velocity.
            </p>
            <div className="pt-4 border-t border-zinc-800 space-y-2 text-xs text-zinc-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Rolling backlog execution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Skill swapping as needs evolve</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4 shadow-lg shadow-black/20">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Model 03
            </span>
            <h3 className="text-xl font-bold text-white">Custom Studio</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Full-cycle engineering, design, marketing, and technical writing squads for high-stakes 0-to-1 launches or complex enterprise cloud migrations.
            </p>
            <div className="pt-4 border-t border-zinc-800 space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>3 to 5 senior specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Executive project governance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="text-center p-12 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-5 shadow-xl shadow-black/30">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to kick off your sprint blueprint?
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Share your requirements. We match you with vetted specialists within 48 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold text-sm shadow-xl shadow-amber-500/25 transition-all"
        >
          <span>Schedule Discovery Call</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};
