import {
  Code,
  Layout,
  Zap,
  Layers,
  ShieldCheck,
  Clock,
  Palette,
  MonitorSmartphone,
  Cpu,
  GraduationCap,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────
   Hero Section
   ────────────────────────────────────────────────────────── */

export const heroContent = {
  eyebrow: 'Creative Direction · Full-Stack Web · Brand Identity',
  heading: 'Build What’s Next.',
  tagline: "Build What's Next.",
  description:
    'We turn ideas into digital experiences through thoughtful design and modern technology, helping businesses and individuals move forward.',
  primaryCta: { label: "Let's Build Together", href: '/contact' },
  secondaryCta: { label: 'Explore Studio Work', href: '/work' },
};

/* ──────────────────────────────────────────────────────────
   Creative & Digital Studio Services
   ────────────────────────────────────────────────────────── */

export const servicesData = [
  {
    slug: 'website-development',
    number: '01',
    icon: Code,
    title: 'Website Development',
    category: 'Web & Digital Experiences',
    shortDescription:
      'Responsive websites that represent your brand, connect with your audience, and support your goals.',
    heroDescription:
      'We build responsive, user-friendly websites for businesses, startups, and individuals, with clear structure and smooth navigation across devices.',
    capabilities: [
      'Business, corporate, and startup websites',
      'Landing pages and campaign websites',
      'Personal portfolios and online shops',
      'Website redesign and improvement',
      'Responsive layouts and clear navigation',
    ],
    deliverables: [
      'A website planned around your needs and audience',
      'Responsive pages for desktop, tablet, and mobile',
      'Clear page structure and navigation',
      'Review and handover of the completed website',
    ],
    outcomes: [
      { metric: 'Responsive', label: 'Designed for different screen sizes' },
      { metric: 'Purposeful', label: 'Structured around your goals' },
    ],
  },
  {
    slug: 'ui-ux-design',
    number: '02',
    icon: Layout,
    title: 'UI/UX Design',
    category: 'Digital Product Design',
    shortDescription:
      'Thoughtful digital experiences that make products clearer and easier to use.',
    heroDescription:
      'We shape user interfaces around clarity, usability, and consistency, from user journeys and wireframes to prototypes and polished screen designs.',
    capabilities: [
      'Website and mobile application interface design',
      'User flows and information architecture',
      'Wireframes and interactive prototypes',
      'Dashboard and admin-panel design',
      'Design systems and reusable components',
    ],
    deliverables: [
      'User flows and wireframes',
      'Interface designs for agreed screens',
      'A prototype to review key user journeys',
      'Design specifications for implementation',
    ],
    outcomes: [
      { metric: 'User-focused', label: 'Designed around intended users' },
      { metric: 'Consistent', label: 'Clear patterns across screens' },
    ],
  },
  {
    slug: 'poster-graphic-design',
    number: '03',
    icon: MonitorSmartphone,
    title: 'Mobile App Development',
    category: 'Mobile Experiences',
    shortDescription:
      'Mobile applications planned around real needs and smooth user experiences.',
    heroDescription:
      'We help turn application ideas into practical mobile experiences, from planning core features and screens to implementing functionality and refining the user journey.',
    capabilities: [
      'Business and service applications',
      'Productivity and utility applications',
      'Student and academic applications',
      'Application prototypes and early product versions',
      'Improvements to existing applications',
    ],
    deliverables: [
      'An agreed feature scope and user flow',
      'Application screens and core functionality',
      'Review and testing of key user journeys',
      'Implementation notes and project handover',
    ],
    outcomes: [
      { metric: 'Practical', label: 'Focused on specific user needs' },
      { metric: 'Clear', label: 'Planned around agreed requirements' },
    ],
  },
  {
    slug: 'final-year-project-support',
    number: '04',
    icon: GraduationCap,
    title: 'Final-Year Project Support',
    category: 'Academic Project Guidance',
    shortDescription:
      'Structured guidance to help students understand, develop, and present software projects.',
    heroDescription:
      'We support students with project scope, planning, development, testing, and presentation preparation, with an emphasis on practical learning and understanding their work.',
    capabilities: [
      'Project idea exploration and scope definition',
      'Requirement analysis and project planning',
      'Web application and software development guidance',
      'Database design and implementation support',
      'Testing, documentation, and presentation preparation',
    ],
    deliverables: [
      'A feasible project scope and plan',
      'Guidance on architecture and implementation',
      'Testing and debugging support',
      'Documentation and demonstration preparation',
    ],
    outcomes: [
      { metric: 'Learning-led', label: 'Focused on technical understanding' },
      { metric: 'Responsible', label: 'Support aligned with academic work' },
    ],
  },
  {
    slug: 'brand-strategy-innovation',
    number: '05',
    icon: Cpu,
    title: 'Custom Software Solutions',
    category: 'Software & Business Tools',
    shortDescription:
      'Purpose-built digital tools designed around the way your business works.',
    heroDescription:
      'We create tailored software and web-based tools for specific business needs, starting with the workflows, users, and challenges the solution should address.',
    capabilities: [
      'Custom web applications',
      'Admin panels and dashboards',
      'Internal business and workflow tools',
      'Data entry and reporting interfaces',
      'Enhancements to existing digital systems',
    ],
    deliverables: [
      'Requirements and workflow definition',
      'A solution shaped around agreed needs',
      'Implementation and review of core features',
      'Handover guidance for the completed tool',
    ],
    outcomes: [
      { metric: 'Tailored', label: 'Shaped around your workflows' },
      { metric: 'Practical', label: 'Focused on day-to-day needs' },
    ],
  },
];

export const servicesContent = {
  eyebrow: 'What We Do',
  heading: 'From first idea to final product.',
  description:
    'NEXZIVO is a digital technology and design company. We help businesses, startups, individuals, and students turn ideas into useful digital solutions through thoughtful design and modern development.',
  items: servicesData,
};

/* ──────────────────────────────────────────────────────────
   Studio Working Approach
   ────────────────────────────────────────────────────────── */

export const approachContent = {
  eyebrow: 'Our Approach',
  heading: 'Thoughtful solutions. Practical technology. Clear purpose.',
  description:
    'We begin by understanding your goals and intended users, then work collaboratively to shape, build, and refine a solution around real needs.',
  steps: [
    {
      number: '01',
      title: 'Understand the Need',
      tagline: 'Start with the problem',
      description:
        'We clarify your goals, intended users, requirements, and constraints before deciding what to build.',
      details: [
        'Discuss goals and intended users',
        'Clarify requirements and constraints',
        'Agree on a practical project scope',
        'Set clear milestones and next steps',
      ],
    },
    {
      number: '02',
      title: 'Shape the Experience',
      tagline: 'Design for clarity and use',
      description:
        'We plan the structure and user journey, bringing design and technology together to make the solution clear and easy to use.',
      details: [
        'Map the key user journeys',
        'Plan page, screen, or tool structure',
        'Review design ideas and prototypes',
        'Refine the plan through collaboration',
      ],
    },
    {
      number: '03',
      title: 'Build with Purpose',
      tagline: 'Make the agreed solution',
      description:
        'We develop the agreed solution with attention to usability, maintainability, and the requirements established together.',
      details: [
        'Implement the agreed features',
        'Keep usability central throughout development',
        'Review progress and open questions',
        'Check the solution across key use cases',
      ],
    },
    {
      number: '04',
      title: 'Review and Refine',
      tagline: 'Prepare for what comes next',
      description:
        'We test key journeys, address agreed refinements, and provide a clear handover so you can take the next step with confidence.',
      details: [
        'Test important workflows',
        'Complete agreed refinements',
        'Share project files and handover guidance',
        'Identify possible future improvements',
      ],
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Portfolio / Selected Work
   ────────────────────────────────────────────────────────── */

export const workProjectsData = [
  {
    slug: 'pulse-kinetic-editorial-poster',
    title: 'Pulse: Kinetic Graphic Series',
    category: 'Poster & Graphic Design',
    tagline: 'Typographic dynamism for modern electronic arts',
    description:
      'A series of large-format promotional posters and digital assets created for an underground contemporary electronic music and visual arts showcase.',
    challenge:
      'Capturing the visceral speed and mathematical rhythm of modern sound in a static two-dimensional visual medium.',
    solution:
      'We designed an experimental typography system combining kinetic type distortion, high-contrast duotones, and textured geometric grids.',
    client: 'Pulse Arts Collective',
    timeline: '4 Weeks',
    services: ['Poster Design', 'Visual Art Direction', 'Print Production'],
    technologies: ['Adobe Illustrator', 'Custom Grid System', 'CMYK Prepress', 'Figma'],
    gradient: 'from-[#1B2431] via-[#0F141C] to-[#080A0F]',
    metrics: [
      { label: 'Exhibition Posters Printed', value: '2,500+' },
      { label: 'Digital Reach', value: '45,000+' },
    ],
  },
  {
    slug: 'zenith-digital-commerce-platform',
    title: 'Zenith: Minimalist Web Platform',
    category: 'Website Development',
    tagline: 'High-speed editorial e-commerce experience',
    description:
      'A bespoke web experience combining architectural minimalism with sub-second page transitions, dynamic filtering, and fluid responsive layouts.',
    challenge:
      'Traditional luxury retail websites are often bogged down by heavy scripts and sluggish navigation that frustrate high-intent visitors.',
    solution:
      'Engineered from scratch using React, Vite, and modern CSS tokens with zero unnecessary third-party plugins, achieving a 99 Lighthouse performance score.',
    client: 'Zenith Studio Atelier',
    timeline: '8 Weeks',
    services: ['Web Development', 'UI/UX Design', 'Performance Engineering'],
    technologies: ['React 19', 'Vite', 'Tailwind CSS v4', 'Motion'],
    gradient: 'from-[#141B25] via-[#0E131B] to-[#0A0F16]',
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Checkout Conversion Lift', value: '+42%' },
    ],
  },
  {
    slug: 'lumina-saas-interface-system',
    title: 'Lumina: Telemetry Interface System',
    category: 'UI/UX Design',
    tagline: 'Intuitive data orchestration for creative teams',
    description:
      'A unified design system and interface suite for a collaborative telemetry tool used by distributed engineering and design studios.',
    challenge:
      'Simplifying complex multi-channel data streams without reducing operational density or obscuring critical real-time alerts.',
    solution:
      'An ergonomic dark-canvas UI with modular card components, custom micro-interactions, and accessible high-contrast data visualization.',
    client: 'Lumina Systems Labs',
    timeline: '6 Weeks',
    services: ['UI/UX Design', 'Design Systems', 'Interactive Prototyping'],
    technologies: ['Figma Tokens', 'React Components', 'Canvas Visualization'],
    gradient: 'from-[#18222E] via-[#10161F] to-[#080A0F]',
    metrics: [
      { label: 'Design System Tokens', value: '180+' },
      { label: 'Task Efficiency Gain', value: '3.5x' },
    ],
  },
];

export const workShowcaseContent = {
  eyebrow: 'Selected Work',
  heading: 'Digital work shaped around real needs.',
  description:
    'Explore examples of website development and digital interface design.',
  items: workProjectsData,
};

/* ──────────────────────────────────────────────────────────
   Studio About Content
   ────────────────────────────────────────────────────────── */

export const aboutContent = {
  eyebrow: 'About the Studio',
  heading: 'We are NEXZIVO. A studio built for the digital frontier.',
  lead:
    'NEXZIVO was founded on the belief that modern brands need more than generic templates and sterile code. We craft digital experiences that combine unmistakable artistic presence with rigorous software engineering.',
  story: [
    'We are a multidisciplinary team of designers, creative coders, and full-stack developers. We reject repetitive design patterns and generic corporate templates in favor of bespoke visual identities, striking typography, and lightning-fast web applications.',
    'Whether designing a physical exhibition poster that demands notice from across the room, or architecting a responsive web platform that converts visitors into dedicated advocates, we treat every project with total craftsmanship and zero compromise.',
  ],
  values: [
    {
      icon: Palette,
      title: 'Artistic Intention',
      description:
        'We do not settle for cookie-cutter layouts. Every color, typographic pairing, and spacing ratio is chosen with deliberate purpose.',
    },
    {
      icon: Code,
      title: 'Modern Engineering',
      description:
        'Clean, accessible, and high-performance codebases built with modern tools: React, Vite, and Tailwind CSS.',
    },
    {
      icon: Zap,
      title: 'Direct Collaboration',
      description:
        'You work directly with the creative leads and developers building your project. No layers of account managers.',
    },
    {
      icon: ShieldCheck,
      title: 'Obsessive Quality',
      description:
        'Pixel-perfect responsiveness, rigorous cross-browser testing, and flawless print-ready prepress production.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Contact Page Content
   ────────────────────────────────────────────────────────── */

export const contactCtaContent = {
  eyebrow: 'Start a Project',
  heading: "Have an idea? Let's build it.",
  description:
    "Whether you're planning a website, a digital product, a mobile application, or a final-year project, tell us what you want to achieve and where you need support. Let's explore the right approach together.",
  cta: { label: 'Start a Project', href: '/contact' },
  stats: [
    { icon: Clock, label: 'Clear scope and next steps' },
    { icon: ShieldCheck, label: 'Collaborative communication' },
  ],
};

/* ──────────────────────────────────────────────────────────
   Studio Products & Labs
   ────────────────────────────────────────────────────────── */

export const productsContent = {
  eyebrow: 'Internal Labs',
  heading: 'Proprietary tools born from our studio workflows.',
  description:
    'In addition to client engagements, we build internal creative and engineering utilities to accelerate prototyping and design systems.',
  items: [
    {
      name: 'GridMatrix',
      tagline: 'Kinetic Layout & Poster Prototyper',
      status: 'Active Lab',
      icon: Cpu,
      description:
        'An experimental browser canvas for algorithmic poster composition, variable font distortion, and automated print prepress exports.',
    },
    {
      name: 'TokenSync',
      tagline: 'Figma to React Token Bridge',
      status: 'Coming Soon',
      icon: Layers,
      description:
        'Bi-directional sync engine that translates Figma color, spacing, and typography styles directly into Tailwind v4 and CSS custom properties.',
    },
    {
      name: 'LighthouseGuard',
      tagline: 'Continuous Performance Sentinel',
      status: 'Coming Soon',
      icon: MonitorSmartphone,
      description:
        'Automated CI/CD test runner that audits responsive viewports and Core Web Vitals before staging branches merge into production.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Brand Philosophy Credo
   ────────────────────────────────────────────────────────── */

export const brandPhilosophyContent = {
  statement: 'We build technology that moves ideas forward.',
};
