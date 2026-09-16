import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { HeroShopifyIllustration } from '../components/common/HeroShopifyIllustration';
import { BrandPartnersRow } from '../components/common/BrandPartnersRow';
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
  const navigate = useNavigate();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioItem | null>(null);
  const [quickInput, setQuickInput] = useState('');

  const handleQuickStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickInput.trim()) {
      navigate(`/contact?contact=${encodeURIComponent(quickInput.trim())}`);
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-28">
      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 overflow-hidden bg-gradient-to-b from-[#e8fbf2]/80 via-[#f4fcf7]/50 to-transparent">
        {/* Subtle ambient light glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-emerald-300/15 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Col: Hero Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>High-Velocity Website Development</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Bring your ideas to life with{' '}
                <span className="text-emerald-600">
                  website development
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                The future of business is yours to shape. Partner with vetted senior website development squads, engineers, and designers for high-velocity sprints with zero agency bloat.
              </p>

              {/* Pill-shaped Quick Start Action Bar */}
              <div className="pt-2">
                <form
                  onSubmit={handleQuickStart}
                  className="w-full max-w-xl mx-auto lg:mx-0 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-white border border-slate-300 shadow-xl shadow-slate-900/5 flex flex-col sm:flex-row items-center gap-2"
                >
                  <input
                    type="text"
                    value={quickInput}
                    onChange={(e) => setQuickInput(e.target.value)}
                    placeholder="Enter your email or phone number"
                    className="w-full px-4 sm:px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent rounded-full focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl sm:rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shrink-0 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <span>Start Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <p className="mt-3 text-xs text-slate-500 font-medium text-center lg:text-left">
                  Try Jyruka for free consultation • No credit card required • 100% IP handover upon delivery
                </p>
              </div>

              {/* Trust badges row */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium">Top 3% Vetted Talent</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium">Sprint Escrow Protection</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium">100% IP Handover</span>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Hero Illustration with Laptop & Canopy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 relative w-full flex items-center justify-center"
            >
              <HeroShopifyIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BRAND PARTNERS SOCIAL PROOF ROW */}
      <BrandPartnersRow />

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5"
        >
          {STATS_DATA.map((stat, i) => (
            <StatCard
              key={i}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              description={stat.description}
              className={i === STATS_DATA.length - 1 ? 'col-span-2 sm:col-span-1' : ''}
            />
          ))}
        </motion.div>
      </section>

      {/* OVERVIEW OF SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              End-to-End Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Services tailored for high-growth tech
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Engage individual senior specialists or complete cross-functional squads to tackle your roadmap with zero hiring lag.
            </p>
          </div>

          <Link
            to="/services"
            className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 self-start md:self-end"
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
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 block">
            Why Choose Jyruka
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The predictability of an agency. The agility of top website development.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
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
                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all space-y-3.5 group shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED WORK / CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured client deliveries
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Inspect past sprints delivered by Jyruka website development squads. Hover cards for 3D tilt perspective.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 self-start md:self-end"
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
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 block">
            Client Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
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
        <div className="relative rounded-3xl p-8 sm:p-14 bg-slate-950 text-white border border-slate-800 shadow-2xl overflow-hidden text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to accelerate your roadmap with an elite website development squad?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Book a 20-minute scope blueprint call. Tell us what you are building, and receive a matched specialist roster within 48 hours.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all"
              >
                Start Your Sprint Kickoff
              </Link>
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors"
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
