import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  DashboardSidebar,
  DashboardTab
} from '../components/dashboard/DashboardSidebar';
import { OverviewView } from '../components/dashboard/OverviewView';
import { AnalyticsView } from '../components/dashboard/AnalyticsView';
import { InquiriesView } from '../components/dashboard/InquiriesView';
import { WorkAssignmentView } from '../components/dashboard/WorkAssignmentView';
import { TeamView } from '../components/dashboard/TeamView';
import { ProjectsView } from '../components/dashboard/ProjectsView';
import { SettingsView } from '../components/dashboard/SettingsView';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Bell, Activity } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const isSuperAdmin = user?.role === 'superadmin';
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<DashboardTab>('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const renderActiveView = () => {
    switch (currentTab) {
      case 'overview':
        return <OverviewView onNavigateTab={(tab) => setCurrentTab(tab)} />;
      case 'analytics':
        return <AnalyticsView />;
      case 'inquiries':
        return <InquiriesView onNavigateToAssignments={() => setCurrentTab('assignments')} />;
      case 'assignments':
        return <WorkAssignmentView />;
      case 'employees':
        return <TeamView />;
      case 'projects':
        return <ProjectsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <OverviewView onNavigateTab={(tab) => setCurrentTab(tab)} />;
    }
  };

  const getTabTitle = () => {
    switch (currentTab) {
      case 'overview':
        return 'Executive Overview';
      case 'analytics':
        return 'Webpage Traffic & Dwell Time';
      case 'inquiries':
        return 'Client Project Requests';
      case 'assignments':
        return 'Work Assignments';
      case 'employees':
        return 'Employee Accounts & Roster';
      case 'projects':
        return 'Portfolio Projects';
      case 'settings':
        return 'Settings';
      default:
        return currentTab;
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex overflow-x-hidden">
      {/* Persistent left sidebar (only visible in private dashboard) */}
      <DashboardSidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-black overflow-y-auto">
        {/* Internal Top Bar */}
        <header className="h-18 border-b border-zinc-800/80 px-6 sm:px-8 flex items-center justify-between bg-black/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Internal Portal
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-sm font-bold text-white capitalize">
              {getTabTitle()}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{isSuperAdmin ? 'SuperAdmin' : 'Employee'}: {user?.name}</span>
            </div>
          </div>
        </header>

        {/* View Container */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {renderActiveView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};
