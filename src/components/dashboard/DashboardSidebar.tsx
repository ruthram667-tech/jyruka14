import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  Inbox,
  FolderKanban,
  Users2,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Globe,
  Briefcase,
  Activity
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useInquiries } from '../../context/InquiryContext';
import { useEmployees } from '../../context/EmployeeContext';
import { JyrukaLogo } from '../common/JyrukaLogo';

export type DashboardTab =
  | 'overview'
  | 'analytics'
  | 'inquiries'
  | 'assignments'
  | 'employees'
  | 'projects'
  | 'settings';

interface DashboardSidebarProps {
  currentTab: DashboardTab;
  onSelectTab: (tab: DashboardTab) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  currentTab,
  onSelectTab,
  collapsed,
  onToggleCollapse
}) => {
  const { user, logout } = useAuth();
  const { inquiries } = useInquiries();
  const { tasks } = useEmployees();
  const navigate = useNavigate();

  const newInquiriesCount = inquiries.filter((i) => i.status === 'New').length;
  const pendingTasksCount = tasks.filter((t) => t.status === 'Pending' || t.status === 'In Progress').length;

  const navItems = [
    {
      id: 'overview' as DashboardTab,
      label: 'Overview',
      icon: LayoutDashboard
    },
    {
      id: 'analytics' as DashboardTab,
      label: 'Traffic & Dwell Time',
      icon: Activity
    },
    {
      id: 'inquiries' as DashboardTab,
      label: 'Client Requests',
      icon: Inbox,
      badge: newInquiriesCount > 0 ? newInquiriesCount : undefined
    },
    {
      id: 'assignments' as DashboardTab,
      label: 'Work Assignments',
      icon: Briefcase,
      badge: pendingTasksCount > 0 ? pendingTasksCount : undefined
    },
    {
      id: 'employees' as DashboardTab,
      label: 'Employee Accounts',
      icon: Users2
    },
    {
      id: 'projects' as DashboardTab,
      label: 'Portfolio Projects',
      icon: FolderKanban
    },
    {
      id: 'settings' as DashboardTab,
      label: 'Settings',
      icon: Settings
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 260 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="relative shrink-0 min-h-screen bg-black border-r border-zinc-800/80 flex flex-col justify-between select-none z-30 shadow-2xl shadow-black/80"
    >
      {/* Top Header */}
      <div>
        <div className="h-18 px-4 flex items-center justify-between border-b border-zinc-800/80">
          <Link
            to="/"
            className={`flex items-center overflow-hidden transition-all ${
              collapsed ? 'justify-center w-full' : 'gap-2'
            }`}
            title="Return to Public Site"
          >
            {collapsed ? (
              <JyrukaLogo variant="icon" size="sm" />
            ) : (
              <div className="flex items-center gap-2">
                <JyrukaLogo size="sm" showSubtitle={false} />
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded border border-amber-500/30 shrink-0">
                  Portal
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation list */}
        <nav className="p-3 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;

            return (
              <button
                key={item.id}
                id={`sidebar-tab-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200 relative group ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900 font-medium'
                } ${collapsed ? 'justify-center' : ''}`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-black' : 'text-zinc-400 group-hover:text-amber-400'}`} />

                {!collapsed && <span className="truncate">{item.label}</span>}

                {/* Badge for inquiries count */}
                {item.badge !== undefined && (
                  <span
                    className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-black text-amber-400'
                        : 'bg-amber-500 text-black animate-pulse'
                    } ${collapsed ? 'absolute top-1 right-1 px-1.5 py-0.2 text-[10px]' : ''}`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Collapse Toggle Handle */}
      <button
        onClick={onToggleCollapse}
        id="sidebar-toggle-btn"
        className="absolute -right-3.5 top-20 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-40"
        title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </button>

      {/* Bottom User Area & Exit */}
      <div className="p-3 border-t border-zinc-800/80 space-y-2">
        {/* Switch to Public Site */}
        <Link
          to="/"
          className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors ${
            collapsed ? 'justify-center' : ''
          }`}
          title="Visit Public Website"
        >
          <Globe className="w-4 h-4 text-amber-400 shrink-0" />
          {!collapsed && <span>Public Website</span>}
        </Link>

        {/* User profile capsule */}
        {!collapsed && user && (
          <div className="px-3 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center gap-2.5">
            <img
              src={user.avatar}
              alt={user.name}
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full object-cover border border-amber-500/40 shrink-0"
            />
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-white truncate">{user.name}</div>
              <div className="text-[10px] text-zinc-400 truncate">{user.email}</div>
            </div>
          </div>
        )}

        {/* Logout button */}
        <button
          onClick={handleLogout}
          id="sidebar-logout-btn"
          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-200 hover:bg-rose-950/40 border border-transparent hover:border-rose-900/40 transition-colors ${
            collapsed ? 'justify-center' : ''
          }`}
          title="Logout"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!collapsed && <span>Logout Session</span>}
        </button>
      </div>
    </motion.aside>
  );
};
