import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ServiceCard } from '../components/cards/ServiceCard';
import { SERVICES_DATA } from '../data/mockData';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'design', label: 'Product & Design' },
    { id: 'development', label: 'Engineering' },
    { id: 'marketing', label: 'Growth & Marketing' },
    { id: 'writing', label: 'Technical Writing' }
  ];

  const filtered = SERVICES_DATA.filter((s) =>
    selectedCategory === 'all' ? true : s.category === selectedCategory
  );

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>Vetted Freelance Capabilities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Specialized service scopes, zero overhead.
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          From rapid 2-week MVP builds to full design system architectures, engage dedicated senior talent ready to deliver on day one.
        </p>
      </section>

      {/* Category Pills Filter */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold shadow-lg shadow-amber-500/20'
                : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} detailed={true} />
        ))}
      </div>

      {/* Custom Cross-Discipline Squad Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl shadow-black/30">
        <div className="space-y-3 max-w-2xl text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Multi-Disciplinary Needs?
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Assemble a custom cross-functional squad
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Need a Designer and a Frontend Engineer paired with a Technical Writer for your upcoming release? We tailor custom cross-skill squads managed under a unified sprint agreement.
          </p>
        </div>

        <Link
          to="/contact?service=Custom%20Squad"
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black text-sm font-bold shadow-lg shadow-amber-500/25 transition-all whitespace-nowrap"
        >
          Request Custom Squad
        </Link>
      </section>
    </div>
  );
};
