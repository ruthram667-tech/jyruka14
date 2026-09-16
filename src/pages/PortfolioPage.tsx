import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { PortfolioCard } from '../components/cards/PortfolioCard';
import { CaseStudyModal } from '../components/modals/CaseStudyModal';
import { PORTFOLIO_DATA } from '../data/mockData';
import { PortfolioItem } from '../types';

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Writing'];

  const filteredItems = PORTFOLIO_DATA.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Proven Deliverables</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Work delivered by Jyruka squads.
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Explore client case studies across engineering, design systems, technical copy, and growth sprints. Click any card to inspect full metrics and deliverables.
        </p>
      </section>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold shadow-lg shadow-amber-500/20'
                : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid with animated transitions */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard item={item} onSelect={(p) => setSelectedItem(p)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal */}
      <CaseStudyModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
