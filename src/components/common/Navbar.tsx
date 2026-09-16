import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowRight,
  Shield,
  LayoutDashboard,
  Phone,
  Mail,
  Instagram
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { JyrukaLogo } from './JyrukaLogo';
import { COMPANY_INFO } from '../../data/companyInfo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md shadow-slate-900/5'
          : 'bg-white/80 sm:bg-white/60 backdrop-blur-sm py-3.5 sm:py-4 border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Official Handshake & Jyruka Wordmark */}
        <Link
          to="/"
          id="navbar-brand-logo"
          className="flex items-center group focus:outline-none"
          title="Jyruka Home"
        >
          <JyrukaLogo size="md" showSubtitle={true} theme="light" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/90 backdrop-blur-sm border border-slate-200/80 rounded-full px-3 py-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-[13px] font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Portal Login / Quick Contact */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={COMPANY_INFO.phoneHref}
            id="navbar-phone-btn"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            title="Call Jyruka Official"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={COMPANY_INFO.instagram.url}
            target="_blank"
            rel="noreferrer"
            id="navbar-instagram-btn"
            className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 flex items-center justify-center transition-colors"
            title={`Follow ${COMPANY_INFO.instagram.handle} on Instagram`}
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>

          {isAuthenticated ? (
            <Link
              to="/dashboard"
              id="navbar-dashboard-btn"
              className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-emerald-600" />
              <span>SuperAdmin</span>
            </Link>
          ) : (
            <Link
              to="/login"
              id="navbar-login-btn"
              className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 px-2.5 py-1.5 text-xs font-medium transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>SuperAdmin</span>
            </Link>
          )}

          <Link
            to="/contact"
            id="navbar-hire-cta"
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Website Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-sm font-semibold px-3 py-2.5 rounded-xl transition-colors flex items-center justify-center min-h-[44px] ${
                    isActive
                      ? 'bg-slate-900 text-white font-bold shadow-sm'
                      : 'text-slate-700 bg-slate-100 border border-slate-200/80 hover:bg-slate-200/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            {/* Quick Mobile Contact Links */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={COMPANY_INFO.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold min-h-[44px]"
              >
                <Instagram className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instagram</span>
              </a>
            </div>

            {isAuthenticated ? (
              <Link
                to="/dashboard"
                id="mobile-dashboard-link"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-semibold text-sm min-h-[44px]"
              >
                <LayoutDashboard className="w-4 h-4 text-emerald-600" />
                <span>Open SuperAdmin Portal</span>
              </Link>
            ) : (
              <Link
                to="/login"
                id="mobile-login-link"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-medium text-sm min-h-[44px]"
              >
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>SuperAdmin Login</span>
              </Link>
            )}

            <Link
              to="/contact"
              id="mobile-contact-link"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md min-h-[44px]"
            >
              <span>Get Started / Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
