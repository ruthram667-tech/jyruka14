import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  Phone,
  Instagram,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useInquiries } from '../context/InquiryContext';
import { COMPANY_INFO } from '../data/companyInfo';
import { JyrukaLogo } from '../components/common/JyrukaLogo';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { addInquiry } = useInquiries();

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serviceCategory, setServiceCategory] = useState('Product & UI/UX Design');
  const [budgetRange, setBudgetRange] = useState('$5,000 - $10,000');
  const [timeline, setTimeline] = useState('Within 2 weeks');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync service or plan from URL if present
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const planParam = searchParams.get('plan');
    if (serviceParam) {
      setServiceCategory(serviceParam);
    } else if (planParam) {
      setServiceCategory(`Pricing Tier: ${planParam}`);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim() || !message.trim()) return;

    addInquiry({
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      companyName: companyName.trim() || undefined,
      serviceCategory,
      budgetRange,
      timeline,
      message: message.trim()
    });

    setSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
          <span>Sprint Discovery Kickoff</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Let's assemble your dream squad.
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Tell us about your product roadmap, tech stack, or creative goals. We review requirements and match vetted specialists within 48 hours.
        </p>
      </section>

      {/* Main Grid: Form + Info Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 shadow-2xl shadow-black/40">
          {submitted ? (
            <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Inquiry Successfully Dispatched!
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{clientName}</strong>. A Jyruka Project Director is reviewing your scope and will reach out to <strong className="text-white">{clientEmail}</strong> within 24 hours.
              </p>

              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-300 max-w-md mx-auto">
                <Sparkles className="w-4 h-4 inline mr-1 text-amber-400" />
                This inquiry has been immediately synchronized to the internal <strong>Owner Dashboard</strong>.
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    id="contact-name"
                    placeholder="e.g. Alex Morgan"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-black border border-zinc-800 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    id="contact-email"
                    placeholder="alex@company.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-black border border-zinc-800 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Company / Project Name
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    placeholder="Acme Corp or Stealth Startup"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-black border border-zinc-800 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    id="contact-service"
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full bg-black border border-zinc-800 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Product & UI/UX Design">Product & UI/UX Design</option>
                    <option value="Full-Stack Web Engineering">Full-Stack Web Engineering</option>
                    <option value="Growth & Performance Marketing">Growth & Performance Marketing</option>
                    <option value="Technical Writing & Copy">Technical Writing & Copy</option>
                    <option value="Brand Identity & Motion Design">Brand Identity & Motion Design</option>
                    <option value="AI Engineering & Automation">AI Engineering & Automation</option>
                    <option value="Custom Multi-Disciplinary Squad">Custom Multi-Disciplinary Squad</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Anticipated Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-black border border-zinc-800 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="$2,500 - $5,000">$2,500 - $5,000 (Single Sprint)</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000 (Standard Sprint)</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000 (Managed Squad)</option>
                    <option value="$25,000+">$25,000+ (Custom Studio)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Target Kickoff Timeline
                  </label>
                  <select
                    id="contact-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-black border border-zinc-800 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Immediately (Within 48 hours)">Immediately (Within 48 hours)</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Next month">Next month</option>
                    <option value="Exploring for future quarter">Exploring for future quarter</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Project Brief & Objective *
                </label>
                <textarea
                  required
                  rows={4}
                  id="contact-message"
                  placeholder="Describe what you want to build, current challenges, technical preferences, or specific deliverables..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black border border-zinc-800 text-sm text-white rounded-xl p-4 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-600 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Sprint Discovery Request</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>NDA Protected • 48-Hour Response Time • No Obligation</span>
              </div>
            </form>
          )}
        </div>

        {/* Contact Info Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Official Brand Identity Card */}
          <div className="p-6 rounded-3xl bg-zinc-900/70 border border-zinc-800 shadow-xl shadow-black/30 space-y-3">
            <div className="flex items-center justify-between">
              <JyrukaLogo size="md" showSubtitle={true} />
              <span className="text-[11px] font-bold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2.5 py-1 rounded-full">
                Official Company
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-6 shadow-xl shadow-black/20">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Founder Contact
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Reach out directly for urgent squad bookings and sprint inquiries.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-zinc-400 block">Direct Phone</span>
                  <div className="flex items-center gap-3 mt-0.5">
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="font-bold text-white hover:text-amber-400 transition-colors text-base"
                    >
                      {COMPANY_INFO.displayPhone}
                    </a>
                    <a
                      href={COMPANY_INFO.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:text-white inline-flex items-center gap-1 transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                  <span className="text-[11px] text-zinc-500 block mt-0.5">
                    Available Mon–Sat for founder discovery calls
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Official Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-semibold text-white hover:text-amber-400 transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <span className="text-[11px] text-zinc-500 block mt-0.5">
                    Inbound discovery, RFPs & sprint briefs
                  </span>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3.5 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Official Instagram</span>
                  <a
                    href={COMPANY_INFO.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{COMPANY_INFO.instagram.handle}</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                  </a>
                  <span className="text-[11px] text-zinc-500 block mt-0.5">
                    Behind-the-scenes, project showcases & hiring drops
                  </span>
                </div>
              </div>

              {/* Registered Office & Hub */}
              <div className="flex items-start gap-3.5 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Registered Office</span>
                  <span className="font-semibold text-white">
                    {COMPANY_INFO.address}
                  </span>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Karur, Tamil Nadu 639113 • Supporting global clients & remote squads
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-3.5 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Turnaround SLA</span>
                  <span className="font-semibold text-white">
                    {COMPANY_INFO.responseTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-amber-950/20 border border-amber-500/30 text-xs text-zinc-300 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Are you a senior freelance specialist?</span>
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              We continually screen senior designers, full-stack engineers, and marketing strategists for our client squads.
            </p>
            <a
              href={`mailto:${COMPANY_INFO.email}?subject=Specialist%20Roster%20Audition%20-%20Jyruka`}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold pt-1"
            >
              <span>Apply to Join Roster</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
