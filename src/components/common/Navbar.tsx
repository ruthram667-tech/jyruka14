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
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-4.5 sm:py-5 border-b border-white/5'
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
          <JyrukaLogo size="md" showSubtitle={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-[13.5px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-black bg-gradient-to-r from-amber-500 to-yellow-400 font-bold shadow-sm shadow-amber-500/30'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800/70'
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
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
            title="Call Jyruka Official"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={COMPANY_INFO.instagram.url}
            target="_blank"
            rel="noreferrer"
            id="navbar-instagram-btn"
            className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-colors"
            title={`Follow ${COMPANY_INFO.instagram.handle} on Instagram`}
          >
            <Instagram className="w-4 h-4" />
          </a>

          {isAuthenticated ? (
            <Link
              to="/dashboard"
              id="navbar-dashboard-btn"
              className="flex items-center gap-2 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-amber-400" />
              <span>Owner Dashboard</span>
            </Link>
          ) : (
            <Link
              to="/login"
              id="navbar-login-btn"
              className="flex items-center gap-1 text-zinc-400 hover:text-white px-2.5 py-2 text-xs font-medium transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-zinc-400" />
              <span>Login</span>
            </Link>
          )}

          <Link
            to="/contact"
            id="navbar-hire-cta"
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Hire a Squad</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-800 px-5 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-sm font-medium px-3.5 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
            {/* Quick Mobile Contact Links */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-amber-400"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={COMPANY_INFO.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-amber-400"
              >
                <Instagram className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.instagram.handle}</span>
              </a>
            </div>

            {isAuthenticated ? (
              <Link
                to="/dashboard"
                id="mobile-dashboard-link"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-semibold text-sm"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Open Owner Dashboard</span>
              </Link>
            ) : (
              <Link
                to="/login"
                id="mobile-login-link"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white font-medium text-sm"
              >
                <Shield className="w-4 h-4 text-zinc-400" />
                <span>Owner Login</span>
              </Link>
            )}

            <Link
              to="/contact"
              id="mobile-contact-link"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold text-sm shadow-md"
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
