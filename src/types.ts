export interface ServiceItem {
  id: string;
  title: string;
  category: 'design' | 'development' | 'marketing' | 'writing' | 'strategy';
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  startingPrice: string;
  turnaroundTime: string;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'Design' | 'Development' | 'Marketing' | 'Writing';
  summary: string;
  description: string;
  image: string;
  results: string[];
  tags: string[];
  deliverables: string[];
  year: string;
  freelancerCount: number;
  githubUrl?: string;
  demoUrl?: string;
  isRealProject?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectCategory: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  hourlyRate?: string;
  status: 'Active' | 'Available' | 'On Project';
  completedProjects: number;
  rating: number;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: number;
  period: 'sprint' | 'month' | 'project';
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
}

export interface StepItem {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  duration: string;
}

export interface Inquiry {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  companyName?: string;
  serviceCategory: string;
  budgetRange: string;
  timeline: string;
  message: string;
  createdAt: string;
  status: 'New' | 'Under Review' | 'Contacted' | 'Converted' | 'Archived';
  priority: 'Low' | 'Medium' | 'High';
}

export interface ProjectRecord {
  id: string;
  title: string;
  client: string;
  status: 'In Progress' | 'In Review' | 'Planning' | 'Completed';
  category: string;
  budget: number;
  paid: number;
  deadline: string;
  progress: number;
  assignedTeam: string[];
}

export interface EmployeeAccount {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  department: string;
  phone?: string;
  status: 'Active' | 'On Leave' | 'Suspended';
  createdAt: string;
  avatar?: string;
}

export interface WorkAssignment {
  id: string;
  title: string;
  description: string;
  assignedToEmployeeId: string;
  assignedToEmployeeName: string;
  clientRequestId?: string;
  clientName?: string;
  priority: 'Urgent' | 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Under Review' | 'Completed';
  dueDate: string;
  createdAt: string;
  deliverableNotes?: string;
  tags: string[];
}

export interface VisitorSession {
  id: string;
  page: string;
  durationSeconds: number;
  device: string;
  timestamp: string;
}

export interface PageStat {
  path: string;
  name: string;
  views: number;
  totalDurationSeconds: number;
}

export interface TrafficAnalytics {
  totalViews: number;
  totalDwellSeconds: number;
  activeVisitorsNow: number;
  pageStats: Record<string, PageStat>;
  recentSessions: VisitorSession[];
}
