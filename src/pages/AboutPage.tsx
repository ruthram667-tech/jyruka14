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
import { TEAM_MEMBERS, COLLABORATOR_COMPANY } from '../data/mockData';
import { COMPANY_INFO } from '../data/companyInfo';

export const AboutPage: React.FC = () => {
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-semibold">
          <Users2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>The Jyruka Origin & Mission</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Rewriting how high-growth companies build with website development teams.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Jyruka was founded with a singular conviction: the traditional digital agency model is broken, and unvetted open marketplaces are chaotic. We built the high-velocity middle ground.
        </p>
      </section>

      {/* Story & Mission Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            To empower founders, product teams, and visionaries to ship high-impact digital products by instantly plugging in vetted, self-sufficient website development squads without the friction, delays, or bureaucracy of traditional hiring.
          </p>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our Vision</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A future where every ambitious company operates with an elastic technical & creative bench — deploying specialized website development squads for 2-week sprints as effortlessly as spinning up cloud servers.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 block">
            Principles We Live By
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-md transition-all space-y-3 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Founder & Collaborator Section */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 block">
            Leadership & Strategic Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Founder & Official Collaborator
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Directed by founder Ruthramoorthy and powered in strategic partnership with UnitaryX.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Founder Card: Ruthramoorthy */}
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:border-emerald-500/50 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Founder</span>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 flex items-center gap-1 text-xs text-amber-500 font-bold shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{member.rating.toFixed(1)}</span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{member.completedProjects}+ Production Deliveries</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Full-Stack & UI/UX Specialist
                </span>
              </div>
            </motion.div>
          ))}

          {/* Collaborator Card: UnitaryX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:border-sky-500/50 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Logo / Brand Header */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/40 to-slate-100 flex flex-col items-center justify-center p-8 border-b border-slate-100">
                {/* Circular badge */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white border border-slate-200 shadow-xl p-4 flex items-center justify-center transition-transform duration-500 hover:scale-105">
                  <img
                    src={COLLABORATOR_COMPANY.logo}
                    alt={COLLABORATOR_COMPANY.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-sky-600/90 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Official Collaborator</span>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 flex items-center gap-1 text-xs text-amber-500 font-bold shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{COLLABORATOR_COMPANY.rating.toFixed(1)}</span>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    {COLLABORATOR_COMPANY.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sky-700 mt-0.5">
                    "{COLLABORATOR_COMPANY.tagline}"
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COLLABORATOR_COMPANY.bio}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Collaboration Focus
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {COLLABORATOR_COMPANY.collaborationAreas.map((area, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom status */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">{COLLABORATOR_COMPANY.status}</span>
              <span className="text-sky-700 font-bold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Strategic Tech Alliance
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registered Office & Global Operations */}
      <section className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Registered Headquarters</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {COMPANY_INFO.name} Headquarters
            </h3>
            <p className="text-slate-700 font-medium text-sm">
              {COMPANY_INFO.address}
            </p>
            <p className="text-xs text-slate-500">
              Coordinating distributed senior website development squads, rapid sprint delivery, and client partnerships worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href={COMPANY_INFO.phoneHref}
              className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-semibold text-slate-900 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_INFO.displayPhone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-4 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
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
