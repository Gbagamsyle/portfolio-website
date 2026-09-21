export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    title: 'Frontend Development',
    desc: 'Pixel-perfect interfaces in React, Next.js & Vue. Responsive, accessible, and blazing fast. Your vision, executed flawlessly.',
  },
  {
    title: 'Fullstack Engineering',
    desc: 'End-to-end web apps with Node.js, Express, and modern databases. REST & GraphQL APIs built to scale with your business.',
  },
  {
    title: 'UI/UX Implementation',
    desc: 'Translating Figma designs into living, breathing code. Micro-animations, transitions, and interactions that delight users.',
  },
  {
    title: 'Performance Optimization',
    desc: 'Lighthouse scores matter. I audit, refactor, and optimize existing codebases for Core Web Vitals and SEO.',
  },
  {
    title: 'API & Database Design',
    desc: 'Schema design, data modeling, and API architecture with PostgreSQL, MongoDB, and Redis that grows with you.',
  },
  {
    title: 'Tech Consultation',
    desc: 'Not sure which stack to choose? I help startups and teams pick the right tools, architecture, and roadmap from day one.',
  },
]

export const projects = [
  {
    slug: 'opsflow',
    title: 'OpsFlow',
    category: 'Operations SaaS · Full-stack',
    description: 'Real-time operations workspace for client work and project delivery',
    background: '/assets/opsflow.png',
    overview: 'A calm, multi-organization operations workspace that brings projects, clients, tasks, team coordination, and activity updates into one focused command center.',
    stack: ['Next.js', 'React', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Clerk', 'Socket.IO', 'dnd-kit', 'Playwright'],
    highlights: ['Multi-organization workspaces with authenticated membership', 'Project, client, task, and team coordination', 'Real-time activity updates and collaborative Kanban workflows'],
    githubUrl: 'https://github.com/Gbagamsyle/opsflow',
    liveUrl: null,
  },
  {
    slug: 'edge-health-sync',
    title: 'Edge-Health Sync',
    category: 'Healthcare · Edge Computing',
    description: 'Patient records and care coordination with offline-first workflows',
    background: '/assets/edge-health.jpg',
    overview: 'An open-source healthcare platform designed to move critical processing closer to patients and care teams, combining secure records, clinical workflows, and resilient offline synchronization.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Python', 'Supabase', 'Dexie'],
    highlights: ['Patient management, vitals, and QR-based record workflows', 'Offline-first synchronization for constrained environments', 'AI-assisted diagnosis workflows with cryptographic signing support'],
    githubUrl: 'https://github.com/Gbagamsyle/EdgeMed-Sync',
    liveUrl: 'https://edge-med-sync.vercel.app/',
  },
  {
    slug: 'devscraper',
    title: 'DevScraper',
    category: 'Developer Tools · Python',
    description: 'Production-oriented job aggregation pipeline for remote developers',
    background: '/assets/Devscraper.png',
    overview: 'A resilient job scraping platform that gathers remote development opportunities from multiple sources, filters for Nigeria-relevant roles, and exports clean, deduplicated results for developers.',
    stack: ['Python', 'SerpAPI', 'Twitter API v2', 'RemoteOK', 'LinkedIn', 'ThreadPoolExecutor', 'JSON', 'CSV'],
    highlights: ['Concurrent scraping across multiple job sources', 'Retry handling, deduplication, and structured logging', 'Nigeria-focused filtering with JSON and CSV exports'],
    githubUrl: 'https://github.com/Gbagamsyle/devscraper',
    liveUrl: 'https://devscraper-ugx4.onrender.com/',
  },
  {
    slug: 'metsad-one',
    title: 'Metsad Engineering Services',
    category: 'Corporate · Full-stack',
    description: 'Modern corporate platform for engineering services, contact, and business support.',
    background: '/assets/metsad-engineering.jpg',
    overview: 'A full-stack corporate web platform that presents Metsad Engineering Services clearly while connecting visitors to responsive contact and support workflows.',
    stack: ['React', 'JavaScript', 'CSS', 'Vite', 'Serverless Functions', 'Email Automation', 'Vercel'],
    highlights: ['Responsive corporate experience for technical services', 'Serverless architecture and automated email workflows', 'Production deployment with SEO and SPA routing support'],
    githubUrl: 'https://github.com/Gbagamsyle/metsad-one',
    liveUrl: 'https://www.metsadgroup.com/',
    url: 'https://www.metsadgroup.com/',
  },
  {
    slug: 'freelance-widestar',
    title: 'Wide Star Beauty Salon',
    category: 'Beauty · React',
    description: 'Editorial salon experience designed to turn discovery into bookings.',
    background: '/assets/widestar.png',
    overview: 'A premium salon website concept for Wide Star Beauty in Dubai Marina, pairing an editorial visual direction with clear service journeys, gallery discovery, and a direct path to appointment booking.',
    stack: ['React', 'Vite', 'React Router', 'JavaScript', 'CSS', 'Vercel'],
    highlights: ['Route-based journeys for services, gallery, about, contact, and booking', 'Filterable gallery and animated customer review experience', 'Responsive navigation with mobile sticky booking actions'],
    githubUrl: 'https://github.com/Gbagamsyle/freelance-widestar',
    liveUrl: 'https://widestarsalon.vercel.app/',
  },
  {
    slug: 'deccan',
    title: 'Deccan Farms',
    category: 'E-commerce · JavaScript',
    description: 'Fresh-food storefront with local delivery and WhatsApp ordering.',
    background: '/assets/deccan.png',
    overview: 'A conversion-focused fresh-food storefront for Pune customers, combining product discovery, filtering, cart and checkout flows, delivery-slot selection, and lightweight local commerce tools.',
    stack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'WhatsApp Ordering'],
    highlights: ['Product catalog with category, diet, and search filters', 'Cart, promo codes, delivery fees, and checkout simulation', 'Local admin CMS with stock, orders, and B2B lead management'],
    githubUrl: 'https://github.com/Gbagamsyle/deccan',
    liveUrl: 'https://deccanfoods.netlify.app/',
  },
]

export const stackItems = [
  { icon: '⚛️', name: 'React', category: 'Frontend' },
  { icon: '▲', name: 'Next.js', category: 'Framework' },
  { icon: '', mark: 'TS', name: 'TypeScript', category: 'Language' },
  { icon: 'JS', name: 'JavaScript', category: 'Language' },
  { icon: '◇', name: 'HTML & CSS', category: 'Web' },
  { icon: '🌊', name: 'Tailwind CSS', category: 'Styling' },
  { icon: '◈', name: 'Figma', category: 'Design' },
  { icon: '', mark: 'node', name: 'Node.js', category: 'Backend' },
  { icon: 'EX', name: 'Express', category: 'Backend' },
  { icon: '◉', name: 'GraphQL', category: 'API' },
  { icon: '🐘', name: 'PostgreSQL', category: 'Database' },
  { icon: '🍃', name: 'MongoDB', category: 'Database' },
  { icon: 'RS', name: 'Redis', category: 'Database' },
  { icon: '🐳', name: 'Docker', category: 'DevOps' },
  { icon: '☁', name: 'AWS', category: 'Cloud' },
  { icon: '⌘', name: 'Git & GitHub', category: 'Workflow' },
]

export const testimonials = [
  {
    q: '"Ogaba delivered our platform in record time without cutting a single corner on quality. The codebase is clean, the UI is gorgeous, and the performance scores are through the roof. Genuinely one of the best developers we\'ve worked with."',
    name: 'Amara Nwosu',
    role: 'CEO, PayFlow Africa',
  },
  {
    q: '"Working with Ogaba felt less like hiring a developer and more like gaining a co-founder. He understood the business goals, asked the right questions, and built exactly what we needed — and more."',
    name: 'Tunde Okafor',
    role: 'Founder, TradeBase Nigeria',
  },
  {
    q: '"The attention to detail is unreal. Every animation, every hover state, every breakpoint — handled perfectly. Our users compliment the interface daily. Ogaba is the real deal."',
    name: 'Chisom Eze',
    role: 'Product Lead, Helika',
  },
]
