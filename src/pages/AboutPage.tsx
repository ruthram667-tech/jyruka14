import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  Sparkles,
  Award,
  Zap,
  Star,
  Users2,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';
import { COMPANY_INFO } from '../data/companyInfo';

export const AboutPage: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const values = [
    {
      title: 'Craft Over Volume',
      description: 'We do not run an indiscriminate marketplace. We rigorously vet the top 3% of talent so you only ever work with genuine seniors.',
      icon: Award
    },
    {
      title: 'Radical Transparency',
      description: 'No hidden retainer lock-ins or mysterious markups. Clear sprint milestones, visible burn rates, and daily async updates.',
      icon: Eye
    },
    {
      title: 'Velocity with Stability',
      description: 'We assemble complete squads in 48 hours without sacrificing architectural rigor, automated testing, or design precision.',
      icon: Zap
    },
    {
      title: 'True Partnership',
      description: 'Every client engagement is overseen by a dedicated Jyruka Project Director who acts as your relentless advocate for outcome delivery.',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero: Story, Mission & Vision */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <Users2 className="w-3.5 h-3.5 text-amber-400" />
          <span>The Jyruka Origin & Mission</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Rewriting how high-growth companies build with freelance talent.
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Jyruka was founded in San Francisco with a singular conviction: the traditional digital agency model is broken, and open freelance marketplaces are chaotic. We built the high-velocity middle ground.
        </p>
      </section>

      {/* Story & Mission Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4 shadow-xl shadow-black/30">
          <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-500/40 text-amber-400 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Our Mission</h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            To empower founders, product teams, and visionaries to ship high-impact digital products by instantly plugging in vetted, self-sufficient freelance squads without the friction, delays, or bureaucracy of traditional hiring.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4 shadow-xl shadow-black/30">
          <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Our Vision</h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            A future where every ambitious company operates with an elastic technical & creative bench — deploying specialized freelance squads for 2-week sprints as effortlessly as spinning up cloud servers.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
            Principles We Live By
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/40 transition-all space-y-3 shadow-lg shadow-black/20"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Founder & Team Section (Animated grid, hover reveal) */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
            Leadership & Core Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet the people behind Jyruka
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Hover over any team member card to reveal their specialist competencies, project stats, and background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              className="relative rounded-3xl bg-zinc-900/60 border border-zinc-800 overflow-hidden group transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Photo */}
              <div className="relative h-72 w-full overflow-hidden bg-black">
                <img
                  src={member.avatar}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center gap-1 text-xs text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{member.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-amber-400 mt-0.5">
                  {member.role}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills tags revealed on hover */}
                <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-wrap gap-1.5">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-zinc-800 border border-zinc-700/60 text-zinc-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                  <span>{member.completedProjects}+ completed sprints</span>
                  <span className="text-amber-400 font-medium">Vetted Specialist</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Registered Office & Global Operations */}
      <section className="p-8 sm:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Registered Headquarters</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {COMPANY_INFO.name} Headquarters
            </h3>
            <p className="text-zinc-300 font-medium text-sm">
              {COMPANY_INFO.address}
            </p>
            <p className="text-xs text-zinc-500">
              Coordinating distributed senior freelancer squads, rapid sprint delivery, and client partnerships worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href={COMPANY_INFO.phoneHref}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-amber-500/40 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.displayPhone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-500/20"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
