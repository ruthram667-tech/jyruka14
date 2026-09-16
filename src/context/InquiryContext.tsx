import React, { createContext, useContext, useState, useEffect } from 'react';
import { Inquiry, ProjectRecord } from '../types';
import { INITIAL_INQUIRIES, INITIAL_PROJECTS } from '../data/mockData';

interface InquiryContextType {
  inquiries: Inquiry[];
  projects: ProjectRecord[];
  addInquiry: (newInquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status' | 'priority'>) => void;
  updateInquiryStatus: (id: string, status: Inquiry['status']) => void;
  deleteInquiry: (id: string) => void;
  updateProjectProgress: (id: string, progress: number) => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem('jyruka_inquiries');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Storage error', e);
    }
    return INITIAL_INQUIRIES;
  });

  const [projects, setProjects] = useState<ProjectRecord[]>(() => {
    try {
      const saved = localStorage.getItem('jyruka_projects');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Storage error', e);
    }
    return INITIAL_PROJECTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('jyruka_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem('jyruka_projects', JSON.stringify(projects));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [projects]);

  const addInquiry = (data: Omit<Inquiry, 'id' | 'createdAt' | 'status' | 'priority'>) => {
    const newEntry: Inquiry = {
      ...data,
      id: `inq-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16),
      status: 'New',
      priority: data.budgetRange.includes('10,000') || data.timeline.includes('2 weeks') ? 'High' : 'Medium'
    };
    setInquiries((prev) => [newEntry, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: Inquiry['status']) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((item) => item.id !== id));
  };

  const updateProjectProgress = (id: string, progress: number) => {
    setProjects((prev) =>
      prev.map((proj) =>
        proj.id === id
          ? {
              ...proj,
              progress: Math.min(100, Math.max(0, progress)),
              status: progress >= 100 ? 'Completed' : progress >= 85 ? 'In Review' : 'In Progress'
            }
          : proj
      )
    );
  };

  return (
    <InquiryContext.Provider
      value={{
        inquiries,
        projects,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        updateProjectProgress
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiries = (): InquiryContextType => {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiries must be used within an InquiryProvider');
  }
  return context;
};
