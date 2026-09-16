import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Users, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PortfolioItem } from '../../types';

interface CaseStudyModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl z-10 text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100 shadow-sm transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Banner */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-950 shadow-sm">
                {item.category}
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {item.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-200">
                <span className="font-semibold text-white">{item.client}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {item.year}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-slate-200" />
                  {item.freelancerCount} Senior Specialists
                </span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Project Overview
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Results / Key Metrics */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Quantifiable Outcomes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {item.results.map((res, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Technologies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Scope Deliverables
                </h3>
                <ul className="space-y-2">
                  {item.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Tech Stack & Competencies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Need similar website development outcomes for your next release? Let's build your blueprint.
              </div>
              <Link
                to={`/contact?service=${encodeURIComponent(item.category)}`}
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Inquire About This Squad</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
