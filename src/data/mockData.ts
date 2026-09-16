import { ServiceItem, PortfolioItem, TestimonialItem, TeamMember, PricingTier, BlogPost, StepItem, Inquiry, ProjectRecord, EmployeeAccount, WorkAssignment, TrafficAnalytics } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    title: 'Product & UI/UX Design',
    category: 'design',
    iconName: 'Palette',
    shortDesc: 'Pixel-perfect product prototypes, design systems, and responsive user experiences that convert.',
    fullDesc: 'We assemble vetted senior product designers to craft high-conversion SaaS interfaces, mobile app flows, design tokens, and comprehensive Figma design systems tailored to your brand.',
    deliverables: ['Figma Design System & Tokens', 'Interactive Prototypes', 'User Journey Maps', 'iOS & Android App UI', 'Design Handoff Documentation'],
    startingPrice: '$2,400',
    turnaroundTime: '1 - 2 weeks',
    popular: true
  },
  {
    id: 'web-engineering',
    title: 'Full-Stack Web Engineering',
    category: 'development',
    iconName: 'Code2',
    shortDesc: 'Production-ready web applications using modern React, TypeScript, Node.js, and cloud architectures.',
    fullDesc: 'Rapidly scale your development pipeline with top-tier frontend and backend website development specialists. From MVP development to complex microservices and custom dashboards.',
    deliverables: ['React / Next.js Web Apps', 'Secure REST & GraphQL APIs', 'Database Architecture', 'Third-Party API Integrations', 'CI/CD & Cloud Deployment'],
    startingPrice: '$3,200',
    turnaroundTime: '2 - 4 weeks',
    popular: true
  },
  {
    id: 'technical-marketing',
    title: 'Growth & Performance Marketing',
    category: 'marketing',
    iconName: 'TrendingUp',
    shortDesc: 'Data-driven client acquisition campaigns, SEO architectures, and automated marketing funnels.',
    fullDesc: 'Strategic growth experts managing paid campaigns, programmatic SEO, email conversion funnels, and retention optimization to drive quantifiable revenue.',
    deliverables: ['Paid Search & Social Ads (Google/Meta)', 'Technical & Programmatic SEO', 'HubSpot & Customer.io Funnels', 'A/B Testing Experiments', 'Analytics Attribution Setup'],
    startingPrice: '$1,800',
    turnaroundTime: 'Weekly sprints'
  },
  {
    id: 'content-copywriting',
    title: 'Technical Writing & Copy',
    category: 'writing',
    iconName: 'PenTool',
    shortDesc: 'High-impact product copy, developer documentation, whitepapers, and compelling launch messaging.',
    fullDesc: 'Clear, crisp narrative positioning written by specialized tech writers who understand code, SaaS metrics, and buyer psychology.',
    deliverables: ['Landing Page Copywriting', 'Developer Documentation & SDK Guides', 'Executive Whitepapers', 'Product Release Notes', 'Thought Leadership Articles'],
    startingPrice: '$1,200',
    turnaroundTime: '3 - 5 days'
  },
  {
    id: 'branding-motion',
    title: 'Brand Identity & Motion Design',
    category: 'design',
    iconName: 'Sparkles',
    shortDesc: 'Memorable brand identity packages, 3D assets, Lottie animations, and video motion graphics.',
    fullDesc: 'Distinctive visual identities that command respect in your market. Comprehensive typography, color schemes, logo systems, and kinetic motion assets.',
    deliverables: ['Complete Brand Guidelines', 'Logo System & Wordmark', 'Custom 3D & Vector Assets', 'Lottie / Framer Animations', 'Social & Pitch Deck Kits'],
    startingPrice: '$2,800',
    turnaroundTime: '1 - 3 weeks'
  },
  {
    id: 'ai-automation',
    title: 'AI Engineering & Automation',
    category: 'development',
    iconName: 'Cpu',
    shortDesc: 'Custom LLM integrations, retrieval pipelines, AI workflow automations, and agentic tools.',
    fullDesc: 'Supercharge internal operations or customer apps with bespoke AI implementations, Gemini & OpenAI pipelines, and seamless CRM integrations.',
    deliverables: ['LLM & GenAI API Integration', 'Internal Workflow Automations', 'Custom Chat & Agent Assistants', 'Vector DB & Semantic Search', 'Evaluation & Guardrails'],
    startingPrice: '$3,500',
    turnaroundTime: '2 - 3 weeks',
    popular: true
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'hydronix-iot',
    title: 'Hydronix: Real-Time Water Quality Analytics Dashboard',
    client: 'Hydronix Sensing Lab',
    category: 'Development',
    summary: 'An event-driven monitoring architecture delivering sub-second telemetry aggregation and predictive water quality analytics.',
    description: 'An IoT-based monitoring experience for water purity detection and analytics, combining hardware sensing data with a high-fidelity visual dashboard. Features event-driven architecture, Python, TensorFlow models for predictive contaminant detection, AWS IoT Core streams, and React with PostgreSQL time-series logging.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    results: [
      'Sub-second telemetry aggregation latency across active sensor nodes',
      '99.4% accuracy on predictive water contamination threshold models',
      'Continuous real-time pH, turbidity, and TDS sensor streaming'
    ],
    tags: ['IoT', 'Python', 'React', 'TensorFlow', 'PostgreSQL', 'AWS IoT Core', 'Pandas'],
    deliverables: [
      'IoT Telemetry Pipeline & Sensor Ingestion',
      'Interactive Real-Time Monitoring Dashboard',
      'Predictive Contaminant Anomaly Detection Model',
      'PostgreSQL Time-Series Schema'
    ],
    year: '2024',
    freelancerCount: 2,
    githubUrl: 'https://github.com/ruthram667-tech/portfolio',
    isRealProject: true
  },
  {
    id: 'ai-live-coach',
    title: 'AI Live Coach: Voice-Synchronized Learning Platform',
    client: 'Cognitive Education Lab',
    category: 'Development',
    summary: 'An educational platform with voice-synchronized learning experiences built using browser-native speech APIs and machine learning.',
    description: 'Engineered an AI-driven educational interface using React and the Web Speech API to enable voice-synchronized, interactive learning. The system maps user speech inputs directly to educational content, creating a responsive feedback loop that simulates a 1-on-1 tutoring experience.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    results: [
      'Zero-latency browser-native voice transcription using Web Speech API',
      'Adaptive learning pace algorithm responsive to vocal cues and pauses',
      'Simulated 1-on-1 personalized interactive voice feedback'
    ],
    tags: ['Web Speech API', 'React', 'Machine Learning', 'UX', 'Interactivity', 'Speech Synthesis'],
    deliverables: [
      'Web Speech API Voice Recognition Engine',
      'Interactive Tutor Interface & Visualizer',
      'Real-Time Speech Feedback Loop',
      'Adaptive Content Mapping Engine'
    ],
    year: '2024',
    freelancerCount: 2,
    githubUrl: 'https://github.com/ruthram667-tech/portfolio',
    isRealProject: true
  },
  {
    id: 'engineering-calculator',
    title: 'Engineering Calculator Suite: Modular Precision Tooling',
    client: 'Engineering Systems Group',
    category: 'Development',
    summary: 'A practical utility set for technical calculations, designed with algorithmic precision, speed, and usability in mind.',
    description: 'Developed a centralized, Python-based utility suite focused on modularity and high-precision outputs for engineers. The architecture leverages clean logic separation to ensure that each calculation module remains decoupled from the interface, allowing rapid scaling, zero rounding drift, and instant formula validation.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    results: [
      'Decoupled modular architecture supporting complex engineering formula sets',
      '100% precision verification across scientific calculation units',
      'Consolidated fragmented workflows into an intuitive single-pane utility'
    ],
    tags: ['Python', 'Logic', 'UI Design', 'Tooling', 'Algorithms', 'Scientific Computing'],
    deliverables: [
      'Modular Engineering Calculation Engine',
      'Formula Verification & Unit Testing Suite',
      'Responsive Web Utility Interface',
      'Decoupled Mathematical Logic Core'
    ],
    year: '2024',
    freelancerCount: 1,
    githubUrl: 'https://github.com/ruthram667-tech/portfolio',
    isRealProject: true
  },
  {
    id: 'newflex-inventory',
    title: 'Newflex: Real-Time Inventory & Warehouse Management System',
    client: 'Newflex Enterprises',
    category: 'Development',
    summary: 'An end-to-end inventory management system engineered for real-time stock tracking, automated reorder triggers, warehouse SKU organization, and audit reconciliation.',
    description: 'Architected and developed a full-stack inventory management system designed to streamline supply chain operations, warehouse SKU cataloging, and stock lifecycle tracking. Features real-time multi-location inventory synchronization, low-stock threshold alerting, supplier procurement management, batch barcode tracking, and automated stock reconciliation reports to eliminate stockouts and operational bottlenecks.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    results: [
      '99.4% stock accuracy achieved across multi-location warehouse nodes',
      'Automated low-stock threshold triggers reducing stockout incidents by 82%',
      'Real-time SKU barcode scanning and instant batch audit reconciliation'
    ],
    tags: ['Inventory Management', 'React', 'Node.js', 'PostgreSQL', 'SKU & Barcodes', 'Supply Chain', 'Analytics'],
    deliverables: [
      'Real-Time Stock & SKU Management Engine',
      'Automated Low-Stock Alert & Reorder Pipeline',
      'Multi-Warehouse Location Tracking Matrix',
      'Batch Barcode Generation & Audit Ledger'
    ],
    year: '2024',
    freelancerCount: 2,
    githubUrl: 'https://github.com/ruthram667-tech/portfolio',
    isRealProject: true
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'VP of Product',
    company: 'AeroFlow Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    content: 'Jyruka solved our talent bottleneck within 48 hours. Instead of wading through hundreds of resumes, we received two world-class senior designers who integrated directly into our Slack and shipped our core design system on schedule.',
    rating: 5,
    projectCategory: 'UI/UX Design System'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Co-Founder & CTO',
    company: 'Nexus Finance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    content: 'The engineering caliber of the Jyruka squad blew us away. They were self-sufficient, communicated proactively with weekly demos, and built bank-grade code that passed our security audit on the very first review.',
    rating: 5,
    projectCategory: 'Full-Stack Engineering'
  },
  {
    id: 'test-3',
    name: 'Sophia Chen',
    role: 'Head of Growth',
    company: 'Hyperion AI',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    content: 'Working with Jyruka feels like having an elite SWAT team on standby. Their growth specialists cut our acquisition costs by 42% while tripling our pipeline. No agency fluff, just pure high-leverage execution.',
    rating: 5,
    projectCategory: 'Technical Marketing'
  }
];

export const STATS_DATA = [
  { label: 'Projects Delivered', value: 10, suffix: '+', description: 'Shipped on time and on budget' },
  { label: 'Profit Generated', value: 50, suffix: 'k+', prefix: '$', description: 'Direct client profit & ROI delivered' },
  { label: 'Client Satisfaction', value: 98, suffix: '%', description: 'Based on post-sprint reviews' },
  { label: 'Talent Match Time', value: 48, suffix: 'h', description: 'From kickoff to squad deployment' },
  { label: 'Vetted Specialists', value: 50, suffix: '+', description: 'Top 3% design & tech experts' }
];

export const TRUST_POINTS = [
  {
    title: 'Top 3% Vetted Talent',
    description: 'Every designer, engineer, and writer is rigorously screened through technical auditions, portfolio audits, and communication assessments.',
    icon: 'ShieldCheck'
  },
  {
    title: '48-Hour Rapid Kickoff',
    description: 'Skip the 3-month hiring slog. We match you with dedicated specialists ready to begin productive sprints within two business days.',
    icon: 'Zap'
  },
  {
    title: 'Dedicated Squad Lead',
    description: 'Each client engagement includes a dedicated Jyruka Project Director who ensures transparent roadmaps, QA, and clear weekly demos.',
    icon: 'Users'
  },
  {
    title: 'Zero Retainer Traps',
    description: 'Work with flexible sprint-based agreements. Scale up during critical launch periods, scale down whenever needed with zero lock-in.',
    icon: 'Clock'
  },
  {
    title: 'IP Ownership & Security',
    description: 'You own 100% of all intellectual property, source code, design files, and assets generated during every engagement.',
    icon: 'Lock'
  },
  {
    title: 'Guaranteed Outcomes',
    description: 'Every sprint begins with clearly defined deliverables and acceptance criteria. If a milestone does not meet specs, we revise it at zero cost.',
    icon: 'Award'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ruthramoorthy-founder',
    name: 'Ruthramoorthy',
    role: 'Founder • UI/UX Designer & Full-Stack Developer',
    bio: 'Founder and technical visionary at Jyruka. Specialized in high-conversion UI/UX design systems, scalable React architectures, and full-stack web solutions from concept to production.',
    avatar: '/ruthram-profile.png',
    skills: ['UI/UX Design', 'Full-Stack Development', 'React & TypeScript', 'Design Systems', 'Python & IoT', 'Tailwind CSS'],
    status: 'Active',
    completedProjects: 15,
    rating: 5.0,
    socials: { linkedin: '#', twitter: '#' }
  }
];

export const COLLABORATOR_COMPANY = {
  id: 'unitaryx',
  name: 'UnitaryX',
  tagline: "We Don't Compete, We Lead",
  role: 'Official Collaborator & Strategic Technology Partner',
  logo: '/unitaryx-logo.svg',
  bio: 'Strategic engineering and digital solutions collaborator partnering with Jyruka on high-impact web architectures, custom development sprints, and product launches.',
  collaborationAreas: [
    'Enterprise Web Architectures',
    'Full-Stack System Engineering',
    'Custom Digital Product Sprints',
    'Joint Technology Advisory'
  ],
  status: 'Active Partner',
  rating: 5.0
};

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: 1,
    title: 'Consultation & Scope Blueprint',
    subtitle: 'Define your vision and outcomes',
    description: 'Share your project objectives, timeline, and technical requirements. Within 24 hours, we produce a comprehensive project blueprint with transparent deliverables and estimates.',
    iconName: 'MessageSquareText',
    duration: 'Day 1'
  },
  {
    step: 2,
    title: 'Hand-Picked Squad Match',
    subtitle: 'Vetted talent matched precisely',
    description: 'We match you with our senior website development specialists whose domain expertise matches your tech stack. You meet the talent and approve the team before any work starts.',
    iconName: 'UserCheck',
    duration: 'Day 2 - 3'
  },
  {
    step: 3,
    title: 'Agile Sprints & Weekly Demos',
    subtitle: 'Transparent, high-velocity execution',
    description: 'Work commences in focused two-week sprints. Receive daily asynchronous Slack updates, live staging links, and weekly demo walkthroughs with your dedicated Project Director.',
    iconName: 'GitBranch',
    duration: 'Ongoing Sprints'
  },
  {
    step: 4,
    title: 'QA, Polish & Full Handoff',
    subtitle: 'Complete ownership and support',
    description: 'Rigorous cross-browser testing, code audits, and accessibility validation. We transition full IP, documentation, and provide 30-day post-launch warranty support.',
    iconName: 'Sparkles',
    duration: 'Final Sprint'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter-sprint',
    name: 'Dedicated Sprint',
    price: 3400,
    period: 'sprint',
    description: 'Ideal for fast MVPs, landing pages, design overhauls, or solving specific technical bottlenecks.',
    features: [
      '1 Dedicated Senior Specialist (Design or Dev)',
      '1 Focused 2-Week Sprint',
      'Daily Async Standups & Direct Slack Channel',
      'End-of-Sprint Staging Demo & Code Review',
      'Full IP & Source Files Ownership',
      '14-Day Post-Sprint Bug Warranty'
    ],
    ctaText: 'Book a Sprint'
  },
  {
    id: 'growth-squad',
    name: 'Managed Squad',
    badge: 'Most Popular',
    recommended: true,
    price: 7800,
    period: 'month',
    description: 'A cross-functional website development dream team tailored to build, scale, and iterate on your core product continuously.',
    features: [
      '2 Senior Specialists (e.g. 1 Dev + 1 Designer/Marketer)',
      'Dedicated Jyruka Project Director',
      'Bi-Weekly Sprints with Rolling Backlog',
      'Priority Turnaround & Rapid Iteration',
      'Continuous Staging Deployments & QA',
      'Flexible Skill Swapping as Needs Evolve',
      '30-Day Post-Launch Warranty Support'
    ],
    ctaText: 'Deploy a Squad'
  },
  {
    id: 'enterprise-custom',
    name: 'Custom Studio',
    price: 14500,
    period: 'month',
    description: 'Full-cycle multi-disciplinary team for high-stakes product launches, complex migrations, or enterprise scale.',
    features: [
      'Custom Squad (3-5 Senior Specialists)',
      'Full Engineering, Design, Growth & Writing',
      'Executive Project Leadership & SLA Guarantees',
      'Enterprise Security & Compliance Standards',
      'Custom CI/CD Pipelines & DevOps Setup',
      'Quarterly Strategic Product Roadmapping',
      '24/7 Priority Emergency Support'
    ],
    ctaText: 'Contact for Custom Scope'
  }
];

export const FAQS = [
  {
    question: 'How is Jyruka different from standard website development agencies?',
    answer: 'Unlike traditional agencies laden with overhead and bureaucratic account managers, Jyruka curates the top 3% of specialized talent and pairs every engagement with a dedicated Project Director. You get enterprise-grade quality and accountability with the speed, transparency, and flexible rates of agile website development.'
  },
  {
    question: 'How fast can a Jyruka team start on our project?',
    answer: 'Most engagements kick off within 48 to 72 hours. Once we finalize your scope blueprint during your initial discovery call, our roster matches the exact specialists needed and introduces them for kickoff.'
  },
  {
    question: 'Who owns the intellectual property and code?',
    answer: 'You do. 100% of all code, design files, documentation, branding assets, and deliverables are your exclusive property upon payment completion.'
  },
  {
    question: 'What if we need to swap skills mid-engagement?',
    answer: 'That is the core superpower of our Managed Squad model. If you finish your product design phase and need an additional frontend engineer or technical writer, we seamlessly swap or add specialists without long onboarding friction.'
  },
  {
    question: 'How do payments and billing work?',
    answer: 'We bill either by fixed-price sprint or monthly squad retainer. We hold sprint funds in milestone escrow, releasing payment upon your review and approval of the sprint deliverables.'
  },
  {
    question: 'Can we hire the specialist full-time later if we want?',
    answer: 'Yes! We offer a smooth contract-to-hire transition pathway with fair buy-out terms once a mutually beneficial trial period has concluded.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'future-of-agile-freelancing',
    title: 'Why High-Growth Companies Are Replacing Traditional Agencies with Managed Website Development Squads',
    excerpt: 'Traditional agency retainers carry enormous overhead. Discover how modular, senior-only website development squads allow founders to ship 3x faster while cutting costs by 45%.',
    content: `For decades, businesses faced a frustrating dilemma: hire slow, expensive traditional digital agencies laden with account managers, or spend weeks gambling on unvetted providers across chaotic open platforms.

Jyruka was founded on a third path: the Managed Website Development Squad. By combining hand-vetted senior specialists with dedicated project direction, modern companies get the speed and precision of dedicated in-house talent without the hiring lag.

Key advantages include:
1. Direct access to builders without layers of telephone games.
2. Elastic scaling — add a 3D specialist for two weeks, then transition to a backend engineer.
3. Transparent sprint milestones where you only pay for tangible, shippable outcomes.`,
    category: 'Website Development Strategy',
    readTime: '4 min read',
    date: 'Sep 12, 2025',
    author: {
      name: 'Ruthramoorthy',
      role: 'Founder • UI/UX Designer & Full-Stack Developer',
      avatar: '/ruthram-profile.png'
    },
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'design-systems-that-scale',
    title: 'Building Design Systems that Engineering Teams Actually Love to Use',
    excerpt: 'How tokenized design variables and strict component guidelines bridge the friction between Figma mockups and production React apps.',
    content: `A beautiful Figma file that cannot be cleanly implemented in code is technical debt in disguise. When our creative team audits client applications, we consistently discover fragmented button variants, diverging color shades, and inconsistent spacing rules.

In this guide, we walk through our battle-tested methodology:
- Creating single-source design tokens for colors, shadows, and radii.
- Establishing zero-tolerance component naming parity between Figma and React.
- Automating accessibility audits before code hits the staging environment.`,
    category: 'Product Design',
    readTime: '6 min read',
    date: 'Aug 28, 2025',
    author: {
      name: 'Ruthramoorthy',
      role: 'Founder • UI/UX Designer & Full-Stack Developer',
      avatar: '/ruthram-profile.png'
    },
    coverImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'react-19-performance-guide',
    title: 'Modern Frontend Architecture: Speed, Scalable Systems, and Clean Interaction Design',
    excerpt: 'A deep dive into optimizing web client rendering latency, subtle motion, and responsive component systems.',
    content: `User attention is scarcer than ever. If a web application stutters during navigation, users bounce.

Our engineering standards strictly adhere to the following principles:
- Keeping bundle sizes lean by tree-shaking libraries and using lightweight UI primitives.
- Ensuring seamless responsive accessibility on mobile devices.
- Utilizing Framer Motion layout springs to create tactile, native-feeling feedback for every user interaction.`,
    category: 'Engineering',
    readTime: '5 min read',
    date: 'Aug 14, 2025',
    author: {
      name: 'UnitaryX Tech Team',
      role: 'Official Strategic Collaborator',
      avatar: '/unitaryx-logo.svg'
    },
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80'
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [];

export const INITIAL_PROJECTS: ProjectRecord[] = [];

export const INITIAL_EMPLOYEES: EmployeeAccount[] = [];

export const INITIAL_WORK_ASSIGNMENTS: WorkAssignment[] = [];

export const INITIAL_TRAFFIC_ANALYTICS: TrafficAnalytics = {
  totalViews: 0,
  totalDwellSeconds: 0,
  activeVisitorsNow: 1,
  pageStats: {},
  recentSessions: []
};
