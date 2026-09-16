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
    <div className="relative overflow-hidden">
      {/* Ambient Top Glow matching brand look */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#e8fbf2]/90 via-[#f4fcf7]/60 to-transparent pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-emerald-300/20 blur-[130px] pointer-events-none" />

      <div className="relative z-10 pt-28 sm:pt-36 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-semibold shadow-sm">
            <GitCommit className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Engagement Lifecycle</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How clients engage Jyruka.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From initial blueprint to sprint delivery, our technology delivery process is designed for clarity, accountability, and maximum engineering velocity.
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
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 block">
            Flexible Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose your engagement model
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Model 01
            </span>
            <h3 className="text-xl font-bold text-slate-900">Dedicated Sprint</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Targeted 2-week execution block with 1 senior specialist. Ideal for shipping a critical MVP feature, redesigning onboarding, or unblocking an architectural puzzle.
            </p>
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Fixed sprint milestone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct Slack integration</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-emerald-50/60 border-2 border-emerald-500 space-y-4 shadow-sm relative">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-full">
              Model 02 (Recommended)
            </span>
            <h3 className="text-xl font-bold text-slate-900">Managed Squad</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Multi-disciplinary team (e.g. 1 Lead Engineer + 1 Senior UI Designer) led by a Jyruka Project Director. Perfect for continuous product roadmap velocity.
            </p>
            <div className="pt-4 border-t border-emerald-200/60 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Rolling backlog execution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Skill swapping as needs evolve</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Model 03
            </span>
            <h3 className="text-xl font-bold text-slate-900">Custom Studio</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Full-cycle engineering, design, marketing, and technical writing squads for high-stakes 0-to-1 launches or complex enterprise cloud migrations.
            </p>
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>3 to 5 senior specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Executive project governance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="text-center p-12 rounded-3xl bg-slate-950 border border-slate-800 space-y-5 shadow-2xl text-white">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to kick off your sprint blueprint?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Share your requirements. We match you with vetted technology specialists within 48 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all"
        >
          <span>Schedule Discovery Call</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
      </div>
    </div>
  );
};
