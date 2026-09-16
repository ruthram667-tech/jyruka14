import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Lock,
  Award,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { Hero3DScene } from '../components/3d/Hero3DScene';
import { ServiceCard } from '../components/cards/ServiceCard';
import { PortfolioCard } from '../components/cards/PortfolioCard';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { StatCard } from '../components/cards/StatCard';
import { CaseStudyModal } from '../components/modals/CaseStudyModal';
import {
  SERVICES_DATA,
  PORTFOLIO_DATA,
  TESTIMONIALS_DATA,
  STATS_DATA,
  TRUST_POINTS
} from '../data/mockData';
import { PortfolioItem } from '../types';

const TRUST_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Lock,
  Award
};

export const HomePage: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioItem | null>(null);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-12 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-amber-500/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Col: Hero Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Next-Gen Freelance Services Startup</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Elite freelance squads{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                  assembled in 48 hours.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Jyruka matches ambitious founders and scale-ups with vetted senior engineering, design, marketing, and technical content specialists. High-velocity sprints with zero agency bloat.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  id="hero-cta-get-started"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/portfolio"
                  id="hero-cta-portfolio"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-500/40 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Case Studies</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </Link>
              </div>

              {/* Trust badges row */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Top 3% Vetted Talent</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Sprint Escrow Protection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>100% IP Handover</span>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Interactive 3D Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <Hero3DScene />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {STATS_DATA.map((stat, i) => (
            <StatCard
              key={i}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              description={stat.description}
            />
          ))}
        </motion.div>
      </section>

      {/* OVERVIEW OF SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              End-to-End Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Services tailored for high-growth tech
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              Engage individual senior specialists or complete cross-functional squads to tackle your roadmap with zero hiring lag.
            </p>
          </div>

          <Link
            to="/services"
            className="text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 self-start md:self-end"
          >
            <span>View All Service Scopes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE JYRUKA (TRUST POINTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
            Why Choose Jyruka
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The predictability of an agency. The agility of top freelancing.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            We eliminated bloated agency markups and the chaotic roulette of open marketplaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_POINTS.map((pt, i) => {
            const Icon = TRUST_ICONS[pt.icon] || ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 transition-all space-y-3.5 group shadow-lg shadow-black/20"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-400 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-400 group-hover:text-black flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {pt.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pt.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED WORK / CASE STUDIES (CARDS WITH HOVER TILT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured client deliveries
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              Inspect past sprints delivered by Jyruka freelance squads. Hover cards for 3D tilt perspective.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 self-start md:self-end"
          >
            <span>Explore Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onSelect={(p) => setSelectedCaseStudy(p)}
            />
          ))}
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
            Client Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by founders, loved by product leads
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* FINAL HOME CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-amber-950/40 via-zinc-900/90 to-black border border-amber-500/40 shadow-2xl shadow-amber-500/10 overflow-hidden text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to accelerate your roadmap with an elite freelance squad?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Book a 20-minute scope blueprint call. Tell us what you are building, and receive a matched specialist roster within 48 hours.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold text-sm shadow-xl shadow-amber-500/25 transition-all"
              >
                Start Your Sprint Kickoff
              </Link>
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-amber-500/30 text-sm font-semibold transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        item={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
};
