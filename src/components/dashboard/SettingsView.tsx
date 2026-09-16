import React, { useState } from 'react';
import {
  Settings,
  Shield,
  Bell,
  RefreshCw,
  CheckCircle2,
  Building,
  Mail,
  Globe,
  Phone,
  Instagram
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useInquiries } from '../../context/InquiryContext';
import { INITIAL_INQUIRIES, INITIAL_PROJECTS } from '../../data/mockData';
import { COMPANY_INFO } from '../../data/companyInfo';
import { JyrukaLogo } from '../common/JyrukaLogo';

export const SettingsView: React.FC = () => {
  const { user } = useAuth();
  const [notifyNewLead, setNotifyNewLead] = useState(true);
  const [notifySprintMilestone, setNotifySprintMilestone] = useState(true);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetDemoData = () => {
    try {
      localStorage.setItem('jyruka_inquiries', JSON.stringify(INITIAL_INQUIRIES));
      localStorage.setItem('jyruka_projects', JSON.stringify(INITIAL_PROJECTS));
      setResetSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 700);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl animate-in fade-in duration-300">
      <div className="pb-6 border-b border-zinc-800">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Company & Portal Settings
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Configure Jyruka internal operational parameters, owner notifications, and data management.
        </p>
      </div>

      {resetSuccess && (
        <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-800/80 text-xs text-amber-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>Demo inquiries and project records successfully restored to defaults! Reloading...</span>
        </div>
      )}

      {/* Organization Profile */}
      <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-5 shadow-xl shadow-black/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Building className="w-5 h-5 text-amber-400" />
            <span>Organization Profile & Brand Identity</span>
          </div>
          <JyrukaLogo size="sm" showSubtitle={true} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="text-zinc-400 block mb-1">Company Legal Entity</label>
            <input
              type="text"
              readOnly
              value={COMPANY_INFO.name}
              className="w-full bg-black border border-zinc-800 rounded-xl px-3 py-2 text-white font-medium"
            />
          </div>
          <div>
            <label className="text-zinc-400 block mb-1">Direct Contact Phone</label>
            <input
              type="text"
              readOnly
              value={COMPANY_INFO.phone}
              className="w-full bg-black border border-zinc-800 rounded-xl px-3 py-2 text-amber-400 font-bold"
            />
          </div>
          <div>
            <label className="text-zinc-400 block mb-1">Official Email Address</label>
            <input
              type="text"
              readOnly
              value={COMPANY_INFO.email}
              className="w-full bg-black border border-zinc-800 rounded-xl px-3 py-2 text-white font-medium"
            />
          </div>
          <div>
            <label className="text-zinc-400 block mb-1">Official Instagram</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={`${COMPANY_INFO.instagram.handle} (${COMPANY_INFO.instagram.url})`}
                className="w-full bg-black border border-zinc-800 rounded-xl px-3 py-2 text-white font-medium truncate"
              />
              <a
                href={COMPANY_INFO.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 shrink-0 transition-colors"
                title="Open Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <label className="text-zinc-400 block mb-1">Registered Office / Address</label>
            <input
              type="text"
              readOnly
              value={COMPANY_INFO.address}
              className="w-full bg-black border border-zinc-800 rounded-xl px-3 py-2 text-white font-medium"
            />
          </div>
          <div>
            <label className="text-zinc-400 block mb-1">Turnaround Commitment</label>
            <input
              type="text"
              readOnly
              value={COMPANY_INFO.responseTime}
              className="w-full bg-black border border-zinc-800 rounded-xl px-3 py-2 text-white font-medium"
            />
          </div>
        </div>
      </div>

      {/* Owner Security */}
      <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4 shadow-xl shadow-black/30">
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <Shield className="w-5 h-5 text-amber-400" />
          <span>Owner Credentials & Authentication</span>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">
          Logged in as <strong className="text-white">{user?.name}</strong> ({user?.email}) with Managing Director privileges.
        </p>

        <div className="p-3.5 rounded-xl bg-black border border-zinc-800 text-xs text-zinc-300 flex items-center justify-between">
          <span>Active Session ID: <code className="text-amber-400">JY-AUTH-2025-ADMIN</code></span>
          <span className="text-amber-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Active & Verified
          </span>
        </div>
      </div>

      {/* Notifications */}
      <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4 shadow-xl shadow-black/30">
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <Bell className="w-5 h-5 text-amber-400" />
          <span>Owner Notifications</span>
        </div>

        <div className="space-y-3 text-xs">
          <label className="flex items-center justify-between p-3 rounded-xl bg-black border border-zinc-800 cursor-pointer">
            <div>
              <span className="font-semibold text-white block">Inbound Lead Alerts</span>
              <span className="text-zinc-400">Receive immediate email dispatch when a client submits the discovery form</span>
            </div>
            <input
              type="checkbox"
              checked={notifyNewLead}
              onChange={(e) => setNotifyNewLead(e.target.checked)}
              className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-black border border-zinc-800 cursor-pointer">
            <div>
              <span className="font-semibold text-white block">Sprint Milestone Deliveries</span>
              <span className="text-zinc-400">Notify when a squad marks a sprint deliverable ready for client review</span>
            </div>
            <input
              type="checkbox"
              checked={notifySprintMilestone}
              onChange={(e) => setNotifySprintMilestone(e.target.checked)}
              className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
            />
          </label>
        </div>
      </div>

      {/* Demo Reset */}
      <div className="p-6 rounded-2xl bg-zinc-900/60 border border-rose-900/30 space-y-3 shadow-xl shadow-black/30">
        <div className="flex items-center gap-2 text-rose-300 font-bold text-base">
          <RefreshCw className="w-5 h-5 text-rose-400" />
          <span>Reset Demo Environment</span>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Restore initial seeded inquiries and project progress data to start with a fresh testing state.
        </p>
        <button
          onClick={handleResetDemoData}
          className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-md shadow-rose-600/20"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Sample Inquiries & Data</span>
        </button>
      </div>
    </div>
  );
};
