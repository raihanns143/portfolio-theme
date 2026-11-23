/**
 * Portfolio Data Configuration for ABU RAIHAN
 */

export const profile = {
  fullName: 'Md Abu Raihan',
  name: 'Abu Raihan',
  first: 'Raihan',
  email: 'raihanns143@gmail.com',
  phone: '+8801619887937',
  location: 'Rajshahi, Bangladesh',
  timezone: 'Asia/Dhaka',
  links: {
    linkedin: 'https://www.linkedin.com/in/iamraihanns/',
    github: 'https://github.com/raihanns143',
    facebook: 'https://www.facebook.com/iamraihanns',
  },
  resume: '/assets/Abu_Raihan_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    width: 1100,
    height: 1034,
    alt: 'Portrait of Abu Raihan',
  },
  roles: ['Frontend Developer', 'Tech Developer', 'Diploma Engineer', 'Problem Solver'],
  availability: 'Available for opportunities',
  interests: [
    'Frontend Development',
    'Full-Stack Web Development',
    'Networking Systems',
    'IoT & Microcontrollers',
    'Practical System Engineering',
  ],
};

export const stats = [
  { value: 6, decimals: 0, suffix: '+', label: 'Production & IoT projects' },
  { value: 4.86, decimals: 2, suffix: '', label: 'SSC GPA (out of 5.0)' },
  { value: 8, decimals: 0, suffix: 'th', label: 'Semester, Diploma CST' },
  { value: 1, decimals: 0, suffix: ' yr', label: 'Tech & support experience' },
];

export const education = [
  {
    school: 'Bangladesh Polytechnic Institute, Rajshahi',
    place: 'Rajshahi, Bangladesh',
    degree: 'Diploma in Computer Science & Technology',
    period: 'Ongoing (8th Semester)',
    score: 'Final Year Student',
  },
  {
    school: 'Ahsanullah Memorial Government High School',
    place: 'Naogaon, Bangladesh',
    degree: 'Secondary School Certificate (SSC)',
    period: 'Passing Year: 2022',
    score: 'GPA 4.86 / 5.00',
  },
];

export type SkillCategory = { id: string; index: string; title: string; blurb: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    index: '01',
    title: 'Frontend',
    blurb: 'Responsive, fluid interfaces engineered with React, Next.js, TypeScript, and modern animation.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend',
    blurb: 'Modular REST APIs and server-side logic built with Python, Flask, Node.js, and PHP.',
    skills: ['Python', 'Flask', 'PHP', 'Node.js', 'REST APIs', 'Auth.js'],
  },
  {
    id: 'databases',
    index: '03',
    title: 'Databases & ORM',
    blurb: 'Relational data modeling, schema indexing, and structured database queries.',
    skills: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'SQLAlchemy'],
  },
  {
    id: 'networking',
    index: '04',
    title: 'Networking & Systems',
    blurb: 'Subnet packet inspection, ARP probing, and network protocol diagnostics.',
    skills: ['TCP/IP', 'IPv4', 'IPv6', 'NAT/PAT', 'Scapy', 'Psutil'],
  },
  {
    id: 'iot',
    index: '05',
    title: 'IoT & Embedded',
    blurb: 'Microcontroller firmware, cloud telemetry, and environmental sensor calibration.',
    skills: ['ESP32', 'Embedded C/C++', 'Blynk IoT', 'pH Sensor', 'Turbidity Sensor', 'Temp Probes'],
  },
  {
    id: 'tools',
    index: '06',
    title: 'Tools & Workflow',
    blurb: 'Version control, client state management, Linux environments, and build tooling.',
    skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Vite', 'Zustand', 'TanStack Query'],
  },
];

export const fundamentals = [
  'Data Structures',
  'Algorithms',
  'Computer Networks',
  'Operating Systems',
  'DBMS',
  'OOP',
  'IoT Architecture',
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  kind: string;
  summary: string;
  stack: string[];
  contribution: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  motif: 'freshmart' | 'vibe' | 'bloodon' | 'network' | 'waterq' | 'news';
};

export const projects: Project[] = [
  {
    id: 'freshmart-pro',
    index: '01',
    title: 'FreshMart Pro',
    year: '2026',
    kind: 'Full-Stack · E-Commerce Platform',
    summary:
      'An end-to-end e-commerce solution featuring a customer-facing storefront, persistent shopping cart, coupon system, order lifecycle management, and a comprehensive admin management panel.',
    stack: ['Next.js', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js', 'Zustand', 'Tailwind CSS', 'Framer Motion'],
    contribution: [
      'Architected indexed relational schema in PostgreSQL using Prisma ORM to support multi-variant SKUs, real-time inventory adjustments, and order auditing.',
      'Engineered high-performance e-commerce architecture utilizing Next.js Server Components, Auth.js v5 JWT sessions, and Zustand for responsive client-side state.',
      'Implemented role-based access control (RBAC) supporting USER, ADMIN, MANAGER, and EDITOR permissions alongside an administrative catalog moderation dashboard.',
    ],
    features: [
      'Categorized grocery storefront with SKU-level variants',
      'Persistent server-side cart & customer wishlist',
      'Role-based access control (USER, ADMIN, MANAGER, EDITOR)',
      'Admin management dashboard for catalog & order tracking',
      'Responsive design with Tailwind CSS and Framer Motion',
    ],
    metrics: [
      { value: '100%', label: 'Type safety with TypeScript & Prisma' },
      { value: '4 Levels', label: 'Role-based access permissions' },
      { value: 'Instant', label: 'Cart updates via Zustand' },
      { value: 'Vercel', label: 'Automated CI/CD deployment' },
    ],
    github: 'https://github.com/raihanns143/freshmart',
    live: 'https://freshmart-roan.vercel.app/',
    motif: 'freshmart',
  },
  {
    id: 'vibe',
    index: '02',
    title: 'Vibe',
    year: '2026',
    kind: 'Social Platform · Web Application',
    summary:
      'A responsive modern social platform featuring dynamic post composition, community feeds, interactive polls, comment threads, and profile management with fluid micro-interactions.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion', 'Lucide React'],
    contribution: [
      'Designed and engineered an ultra-fast social networking client utilizing React 19, Motion for layout animations, and Tailwind CSS for high-contrast dark ergonomics.',
      'Created butter-smooth list animations and reactive re-renders when toggling likes, bookmarks, and expanding deep comment trees without frame drops.',
      'Built interactive social polling components, user profile timelines with verified badges, and responsive touch-first navigation.',
    ],
    features: [
      'Interactive social feed with rich media & polling',
      'Nested comment threads and real-time like toggles',
      'Fluid micro-interactions powered by Motion',
      'User profile timelines with verified status badges',
      'High-contrast dark aesthetic optimized for mobile & desktop',
    ],
    metrics: [
      { value: '60 FPS', label: 'Fluid animations with Motion' },
      { value: 'React 19', label: 'Next-gen client architecture' },
      { value: '0 Drops', label: 'Frame-rate stability in feed' },
      { value: '100%', label: 'Responsive cross-device UX' },
    ],
    github: 'https://github.com/raihanns143/Vibe',
    live: 'https://vibe-blond-one.vercel.app/',
    motif: 'vibe',
  },
  {
    id: 'bloodon',
    index: '03',
    title: 'BloodOn',
    year: '2026',
    kind: 'Full-Stack Web Application',
    summary:
      'A centralized platform connecting emergency medical patients with verified, eligible blood donors through location and blood-group filtering.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js', 'Tailwind CSS'],
    contribution: [
      'Engineered emergency dispatch system enabling hospital families to publish urgent blood requests with geographic and urgency tags.',
      'Designed searchable donor directory filtered by blood group and geographic district with eligibility tracking to safeguard post-donation recovery intervals.',
      'Implemented secure authentication and privacy controls to ensure sensitive donor contact details remain protected.',
    ],
    features: [
      'Emergency blood request dispatch with hospital tags',
      'Searchable donor directory by district and blood group',
      'Donor eligibility recovery countdown tracker',
      'Secure authentication and donor privacy controls',
      'Mobile-first high-contrast interface for quick access',
    ],
    metrics: [
      { value: '8 Groups', label: 'Full blood group coverage' },
      { value: 'Instant', label: 'Emergency broadcast dispatch' },
      { value: 'Verified', label: 'Donor recovery interval tracking' },
      { value: 'Next.js', label: 'App Router architecture' },
    ],
    github: 'https://github.com/raihanns143/bloodon',
    live: 'https://bloodon.vercel.app/',
    motif: 'bloodon',
  },
  {
    id: 'smart-network-monitor',
    index: '04',
    title: 'Smart Network Monitor & Device Tracker',
    year: '2026',
    kind: 'Network Diagnostics · Python & Flask',
    summary:
      'A network diagnostic and device tracking system that audits local subnet activity, discovers connected devices via ARP probing, and presents traffic data through a web interface.',
    stack: ['Python', 'Flask', 'MySQL', 'Scapy', 'Psutil', 'SQLAlchemy', 'Bootstrap', 'Chart.js'],
    contribution: [
      'Leveraged Scapy for packet inspection and subnet-wide ARP scanning to catalog active IP, MAC addresses, and hardware vendors.',
      'Captured real-time network interface bandwidth metrics using Psutil without straining CPU or thread resources.',
      'Created persistent historical connection logging in MySQL and visualized network trends through clean Chart.js dashboards.',
    ],
    features: [
      'Subnet-wide ARP scanning for IP, MAC, and vendor data',
      'Real-time interface bandwidth metrics captured via Psutil',
      'Persistent historical connection logging in MySQL',
      'Clean browser dashboard displaying network activity trends',
      'Alert indicators for unrecognized device connections',
    ],
    metrics: [
      { value: 'Subnet', label: 'Wide ARP packet probing' },
      { value: 'Scapy', label: 'Raw packet inspection' },
      { value: 'Real-Time', label: 'Bandwidth metrics via Psutil' },
      { value: 'Self-Hosted', label: 'Transparent local visibility' },
    ],
    github: 'https://github.com/raihanns143/Smart-network-monitor',
    live: 'https://smart-network-monitor-alpha.vercel.app/',
    motif: 'network',
  },
  {
    id: 'waterq',
    index: '05',
    title: 'WaterQ IoT Sensor Node',
    year: '2025',
    kind: 'IoT · Embedded Systems · Hardware',
    summary:
      'An embedded hardware and cloud IoT solution built around the ESP32 microcontroller, monitoring water temperature, pH acidity, and turbidity with cloud alerts.',
    stack: ['ESP32', 'Embedded C/C++', 'IoT Sensors', 'Blynk IoT', 'Analog Calibration'],
    contribution: [
      'Constructed standalone sensor node connecting ESP32 to analog turbidity, pH, and submersible temperature probes.',
      'Programmed firmware in embedded C/C++ implementing voltage calibration algorithms and analog noise filtering.',
      'Integrated periodic telemetry transmission to Blynk IoT with automated threshold alerts for safe water parameters.',
    ],
    features: [
      'Continuous sampling for pH acidity, turbidity, and temp',
      'On-chip analog calibration algorithms in embedded C/C++',
      'Wireless telemetry transmission to Blynk IoT platform',
      'Automated threshold alerts on anomalous parameters',
      'Interval-based sampling routine optimized for energy efficiency',
    ],
    metrics: [
      { value: '3 Probes', label: 'Simultaneous parameter sampling' },
      { value: '24/7', label: 'Continuous IoT telemetry' },
      { value: 'ESP32', label: 'Microcontroller hardware' },
      { value: 'Cloud', label: 'Blynk threshold alerts' },
    ],
    github: 'https://github.com/raihanns143/WaterQ-IoT',
    motif: 'waterq',
  },
  {
    id: 'news-today',
    index: '06',
    title: 'News Today',
    year: '2025',
    kind: 'Web Application · Publishing CMS',
    summary:
      'A dynamic web publishing portal providing editors with a content management workflow and readers with a fast, categorized news reading interface.',
    stack: ['React', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    contribution: [
      'Built decoupled architecture featuring a React reader frontend paired with lightweight PHP/MySQL REST endpoints.',
      'Developed editorial CMS interface for creating, editing, and publishing categorized news articles.',
      'Structured normalized MySQL relational schema with indexing for fast category navigation and search.',
    ],
    features: [
      'Editorial CMS workflow for drafting and publishing articles',
      'Categorized news sections with responsive typography',
      'Decoupled React frontend for swift article delivery',
      'Indexed relational MySQL schema for quick title lookups',
    ],
    metrics: [
      { value: 'Decoupled', label: 'React frontend & PHP backend' },
      { value: 'REST API', label: 'Structured CRUD endpoints' },
      { value: 'Indexed', label: 'MySQL relational storage' },
      { value: 'Responsive', label: 'Mobile-first reader layout' },
    ],
    github: 'https://github.com/raihanns143/Dailynews',
    live: 'https://dailynews-bpi.vercel.app/',
    motif: 'news',
  },
];

export type TimelineItem = { period: string; title: string; org: string; place?: string; kind: string; points: string[] };

export const timeline: TimelineItem[] = [
  {
    period: '2023 — Present',
    title: 'Diploma in Computer Science & Technology',
    org: 'Bangladesh Polytechnic Institute, Rajshahi',
    place: 'Rajshahi, Bangladesh',
    kind: 'Education',
    points: [
      'Currently in 8th semester, with a strong foundation in computer science, software engineering, and networking systems.',
      'Engineered multiple functional full-stack web applications and physical IoT microcontroller prototypes.',
      'Active participant in polytechnic engineering labs, collaborative coding, and practical software design.',
    ],
  },
  {
    period: '1 Year Duration',
    title: 'Telecom & Technical Support',
    org: 'Online Telecom',
    place: 'Naogaon, Bangladesh',
    kind: 'Work',
    points: [
      'Customer assistance, telecom product troubleshooting, and day-to-day service support.',
      'Operating system administration, smartphone configuration, and network troubleshooting.',
      'Communicated directly with customers to understand technical needs and provide fast, reliable solutions.',
    ],
  },
  {
    period: 'Passing Year 2022',
    title: 'Secondary School Certificate (SSC)',
    org: 'Ahsanullah Memorial Government High School',
    place: 'Naogaon, Bangladesh',
    kind: 'Education',
    points: [
      'Graduated with GPA 4.86 / 5.00 in the Science group.',
      'Established solid foundations in mathematics, physical sciences, and introductory computing.',
    ],
  },
];

export type Recognition = { title: string; org: string; detail: string; kind: string; link?: string };

export const recognitions: Recognition[] = [
  {
    title: '6+ Production & Open Source Projects',
    org: 'GitHub · Personal Portfolio',
    kind: 'Engineering',
    detail: 'Engineered web applications, REST backends, and IoT systems deployed on Vercel and hardware nodes.',
    link: 'https://github.com/raihanns143',
  },
  {
    title: 'SSC GPA 4.86 / 5.00',
    org: 'Ahsanullah Memorial Govt High School',
    kind: 'Academic',
    detail: 'Outstanding academic standing in secondary school science curriculum.',
  },
  {
    title: 'IoT Environmental Prototype (WaterQ)',
    org: 'Bangladesh Polytechnic Institute',
    kind: 'Hardware & IoT',
    detail: 'Engineered ESP32 multi-sensor node streaming real-time pH, turbidity, and temperature telemetry.',
    link: 'https://github.com/raihanns143/WaterQ-IoT',
  },
  {
    title: 'Network Packet Diagnostic Utility',
    org: 'Smart Network Monitor',
    kind: 'Systems & Networking',
    detail: 'Built custom ARP scanner and bandwidth monitor with Scapy and Psutil.',
    link: 'https://github.com/raihanns143/Smart-network-monitor',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'BPI Rajshahi', name: 'Diploma in Computer Science & Technology (8th Sem)', link: 'https://www.linkedin.com/in/iamraihanns/' },
  { issuer: 'Education Board', name: 'Secondary School Certificate (SSC) — GPA 4.86', link: 'https://www.linkedin.com/in/iamraihanns/' },
  { issuer: 'Frontend', name: 'Modern React & TypeScript Development', link: 'https://github.com/raihanns143' },
  { issuer: 'Full-Stack', name: 'Next.js App Router, Prisma ORM & PostgreSQL', link: 'https://github.com/raihanns143' },
  { issuer: 'Systems', name: 'Network Fundamentals, TCP/IP & Scapy', link: 'https://github.com/raihanns143' },
  { issuer: 'IoT', name: 'ESP32 Embedded C/C++ & Blynk Cloud Telemetry', link: 'https://github.com/raihanns143' },
  { issuer: 'Tools', name: 'Git, GitHub Version Control & Linux CLI', link: 'https://github.com/raihanns143' },
  { issuer: 'Support', name: 'Computer Hardware, OS Administration & Troubleshooting', link: 'https://www.linkedin.com/in/iamraihanns/' },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

/** Which projects use a given skill — used by the Expertise section. */
export function projectsUsing(skill: string): string[] {
  const s = skill.toLowerCase().replace(/\.js$/, '');
  return projects
    .filter((p) =>
      p.stack.some((t) => {
        const item = t.toLowerCase().replace(/\.js$/, '');
        return item === s || item.includes(s) || s.includes(item);
      })
    )
    .map((p) => p.title);
}
