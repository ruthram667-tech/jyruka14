import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { TrafficAnalytics, VisitorSession, PageStat } from '../types';
import { INITIAL_TRAFFIC_ANALYTICS } from '../data/mockData';

interface AnalyticsContextType {
  analytics: TrafficAnalytics;
  currentSessionDuration: number;
  formatDuration: (seconds: number) => string;
  recordCustomEvent?: (eventName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

const STORAGE_KEY = 'jyruka_traffic_analytics';

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [analytics, setAnalytics] = useState<TrafficAnalytics>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load analytics', e);
    }
    return INITIAL_TRAFFIC_ANALYTICS;
  });

  const [currentSessionDuration, setCurrentSessionDuration] = useState<number>(0);
  const currentPathRef = useRef(location.pathname);
  currentPathRef.current = location.pathname;

  // Persist analytics changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(analytics));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [analytics]);

  // Track page view on route change
  useEffect(() => {
    const path = location.pathname;
    const pageNames: Record<string, string> = {
      '/': 'Homepage',
      '/services': 'Services & Squads',
      '/portfolio': 'Portfolio & Case Studies',
      '/how-it-works': 'How It Works',
      '/contact': 'Contact & Sprint Inquiries',
      '/about': 'About Jyruka',
      '/dashboard': 'SuperAdmin Dashboard',
      '/login': 'Internal Portal Login'
    };
    const pageName = pageNames[path] || (path.startsWith('/dashboard') ? 'SuperAdmin Dashboard' : path);

    setAnalytics((prev) => {
      const existingPage = prev.pageStats[path] || {
        path,
        name: pageName,
        views: 0,
        totalDurationSeconds: 0
      };

      const updatedPageStats: Record<string, PageStat> = {
        ...prev.pageStats,
        [path]: {
          ...existingPage,
          views: existingPage.views + 1
        }
      };

      const newSession: VisitorSession = {
        id: `sess-${Math.floor(1000 + Math.random() * 9000)}`,
        page: path,
        durationSeconds: 1,
        device: navigator.userAgent.includes('Mobile') ? 'Mobile Device' : 'Desktop Browser',
        timestamp: 'Just now'
      };

      return {
        ...prev,
        totalViews: prev.totalViews + 1,
        pageStats: updatedPageStats,
        recentSessions: [newSession, ...prev.recentSessions.slice(0, 9)]
      };
    });
  }, [location.pathname]);

  // Active time tracker: every 1 second, if tab is active/visible, increment dwell time
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setCurrentSessionDuration((sec) => sec + 1);

        setAnalytics((prev) => {
          const currentPath = currentPathRef.current;
          const currentStat = prev.pageStats[currentPath] || {
            path: currentPath,
            name: currentPath,
            views: 1,
            totalDurationSeconds: 0
          };

          return {
            ...prev,
            totalDwellSeconds: prev.totalDwellSeconds + 1,
            pageStats: {
              ...prev.pageStats,
              [currentPath]: {
                ...currentStat,
                totalDurationSeconds: currentStat.totalDurationSeconds + 1
              }
            }
          };
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDuration = (totalSeconds: number): string => {
    if (totalSeconds < 60) {
      return `${totalSeconds}s`;
    }
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    }
    return `${minutes}m ${seconds}s`;
  };

  return (
    <AnalyticsContext.Provider
      value={{
        analytics,
        currentSessionDuration,
        formatDuration
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
