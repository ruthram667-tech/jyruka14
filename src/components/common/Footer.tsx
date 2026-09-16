import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { JyrukaLogo } from './JyrukaLogo';
import { COMPANY_INFO } from '../../data/companyInfo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim().includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-black border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background ambient radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-zinc-900">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" title="Jyruka Official">
              <JyrukaLogo size="md" showSubtitle={true} />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              The high-velocity website development platform connecting fast-moving founders with vetted senior engineering, design, marketing, and content squads.
            </p>
            
            {/* Direct Contact Badges */}
            <div className="pt-1 space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-amber-300 transition-colors font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="hover:text-amber-300 transition-colors font-semibold"
                >
                  {COMPANY_INFO.displayPhone}
                </a>
                <span className="text-zinc-600">•</span>
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-2 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300">
                  {COMPANY_INFO.address}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 text-xs font-semibold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.instagram.handle}</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Sprint availability: 4 squads open for immediate matching</span>
            </div>
          </div>

          {/* Quick Links 1: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Product & UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Full-Stack Engineering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Growth & Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Technical Copy & Docs
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Brand Identity & Motion
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors">
                  About Jyruka
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-amber-300 transition-colors">
                  Portfolio / Case Studies
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-amber-300 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors">
                  Contact & Hiring
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-4">
              Founder Dispatch
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Bi-weekly digest on agile team scaling, sprint blueprints, and top-tier talent playbooks.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-amber-950/40 border border-amber-800/60 rounded-xl text-xs text-amber-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>You are subscribed! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="founder@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}

            <div className="pt-4">
              <Link
                to="/login"
                id="footer-owner-login"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-amber-400 transition-colors"
              >
                <Shield className="w-3 h-3" />
                <span>SuperAdmin Portal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Jyruka Inc. All rights reserved. Vetted website development.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-zinc-400">
              Built with precision for ambitious businesses
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
