import {
  Code,
  Layout,
  Palette,
  Smartphone,
  Cpu,
  Search,
  PencilRuler,
  Layers,
  CheckCircle,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────
   Hero Section Content
   Headline kept strong and concise, with natural supporting copy
   representing the full studio offering.
   ────────────────────────────────────────────────────────── */

export const heroContent = {
  eyebrow: 'Creative Digital Studio',
  lines: [
    { text: 'Creative design.', highlight: false },
    { text: 'Digital experiences.', highlight: true },
    { text: 'Built for what’s next.', highlight: false },
  ],
  description:
    'We design and build websites, mobile apps, intuitive interfaces, creative visuals, and custom software tailored to your business.',
  primaryCta: { label: 'Explore Our Work', href: '/work' },
  secondaryCta: { label: 'Start a Project', href: '/contact' },
};

/* ──────────────────────────────────────────────────────────
   Studio Core Services (All 5 Studio Services)
   1. Website Design & Development
   2. Mobile App Development
   3. UI/UX Design
   4. Poster & Graphic Design
   5. Custom Software Solutions
   ────────────────────────────────────────────────────────── */

export const coreStudioServices = [
  {
    slug: 'website-development',
    number: '01',
    icon: Code,
    title: 'Website Design & Development',
    category: 'Websites & Digital Experiences',
    badge: 'Responsive & Fast',
    shortDescription:
      'Professional, responsive websites designed to showcase your brand, connect with customers, and support your business goals.',
    capabilities: [
      'Business and corporate websites',
      'Portfolio and landing pages',
      'E-commerce websites and editorial showcases',
      'High-speed engineering and mobile perfection',
    ],
    imageKey: 'web',
    link: '/services/website-development',
  },
  {
    slug: 'mobile-app-development',
    number: '02',
    icon: Smartphone,
    title: 'Mobile App Development',
    category: 'Mobile Experiences',
    badge: 'Intuitive & Connected',
    shortDescription:
      'Intuitive mobile applications designed to make everyday tasks easier and connect your business with customers on the go.',
    capabilities: [
      'Customer and service booking applications',
      'Mobile dashboards and interactive workflows',
      'Cross-platform iOS and Android experiences',
      'Smooth performance, offline states, and push sync',
    ],
    imageKey: 'mobile',
    link: '/services/mobile-app-development',
  },
  {
    slug: 'ui-ux-design',
    number: '03',
    icon: Layout,
    title: 'UI/UX Design',
    category: 'Digital Product Design',
    badge: 'Human-Centered & Polished',
    shortDescription:
      'Thoughtful user experiences and polished interfaces that make websites and applications clear, intuitive, and enjoyable to use.',
    capabilities: [
      'Wireframing, user journeys, and information architecture',
      'Mobile and web interface design',
      'Clickable interactive design prototypes',
      'Figma design systems and component tokens',
    ],
    imageKey: 'uiux',
    link: '/services/ui-ux-design',
  },
  {
    slug: 'poster-graphic-design',
    number: '04',
    icon: Palette,
    title: 'Poster & Graphic Design',
    category: 'Visual & Brand Art Direction',
    badge: 'Artistic & Expressive',
    shortDescription:
      'Creative visual designs that communicate your message, strengthen your brand, and capture attention.',
    capabilities: [
      'Exhibition posters and promotional event artwork',
      'Art direction, typographic systems, and visual identity',
      'Print collateral, lookbooks, and editorial layouts',
      'Social media graphics and digital brand campaigns',
    ],
    imageKey: 'poster',
    link: '/services/poster-graphic-design',
  },
  {
    slug: 'brand-strategy-innovation',
    number: '05',
    icon: Cpu,
    title: 'Custom Software Solutions',
    category: 'Business & Management Systems',
    badge: 'Tailored & Efficient',
    shortDescription:
      'Business-focused software built around your workflows, helping you manage operations, organize information, and work more efficiently.',
    capabilities: [
      'Admin panels and operations dashboards',
      'Billing and invoicing software',
      'Inventory and business management systems',
      'Custom internal tools and workflow applications',
    ],
    imageKey: 'software',
    link: '/services/brand-strategy-innovation',
  },
];

export const servicesSectionContent = {
  eyebrow: 'Studio Capabilities',
  heading: 'From websites to custom software, we build digital solutions for your ideas.',
  description:
    'NEXZIVO helps businesses and creators bring their ideas to life through thoughtful design, modern technology, and tailored digital solutions.',
};

/* Backwards-compatible array for existing service detail routes and overview */
export const servicesData = [
  {
    slug: 'website-development',
    number: '01',
    icon: Code,
    title: 'Website Design & Development',
    category: 'Web & Digital Experiences',
    shortDescription:
      'Professional, responsive websites designed to showcase your brand, connect with customers, and support your business goals.',
    heroDescription:
      'We build responsive, user-friendly websites for businesses, startups, and individuals, with clear structure, accessible design, and smooth navigation across all devices.',
    capabilities: [
      'Business and corporate websites',
      'Portfolio and landing pages',
      'E-commerce websites and editorial showcases',
      'Website redesign and performance improvement',
      'Responsive layouts and clear typography',
    ],
    deliverables: [
      'A website planned around your goals and audience',
      'Responsive pages for desktop, tablet, and mobile',
      'Clear page structure, SEO tags, and navigation',
      'Testing, deployment, and handover guidance',
    ],
    outcomes: [
      { metric: 'Responsive', label: 'Flawless across all screen sizes' },
      { metric: 'Performant', label: 'Engineered for sub-second speed' },
    ],
  },
  {
    slug: 'mobile-app-development',
    number: '02',
    icon: Smartphone,
    title: 'Mobile App Development',
    category: 'Mobile Experiences',
    shortDescription:
      'Intuitive mobile applications designed to make everyday tasks easier and connect your business with customers on the go.',
    heroDescription:
      'We turn application ideas into practical, fluid mobile experiences, from planning core features and screens to implementing functionality and refining the user journey.',
    capabilities: [
      'Customer and service booking applications',
      'Mobile dashboards and interactive workflows',
      'Cross-platform iOS and Android experiences',
      'Smooth performance, offline states, and push sync',
      'Improvements and redesigns for existing apps',
    ],
    deliverables: [
      'Agreed feature scope and user flow specification',
      'Application screens, navigation, and core functionality',
      'Review and testing of key user journeys on devices',
      'Implementation notes, source code, and project handover',
    ],
    outcomes: [
      { metric: 'Intuitive', label: 'Fast and effortless on the go' },
      { metric: 'Connected', label: 'Seamless sync with backend tools' },
    ],
  },
  {
    slug: 'ui-ux-design',
    number: '03',
    icon: Layout,
    title: 'UI/UX Design',
    category: 'Digital Product Design',
    shortDescription:
      'Thoughtful user experiences and polished interfaces that make websites and applications clear, intuitive, and enjoyable to use.',
    heroDescription:
      'We shape user interfaces around real human behavior, from user journeys and wireframes to high-fidelity prototypes and complete design systems.',
    capabilities: [
      'Mobile application and web interface design',
      'User flows, wireframes, and prototypes',
      'Dashboard and admin panel UX/UI',
      'Design systems and component token libraries',
      'Usability audits and interaction polish',
    ],
    deliverables: [
      'User flow maps and wireframe architecture',
      'High-fidelity screen layouts in Figma',
      'Interactive clickable prototype for testing',
      'Design tokens and developer handover specs',
    ],
    outcomes: [
      { metric: 'User-Focused', label: 'Designed around intended users' },
      { metric: 'Consistent', label: 'Clear design patterns across screens' },
    ],
  },
  {
    slug: 'poster-graphic-design',
    number: '04',
    icon: Palette,
    title: 'Poster & Graphic Design',
    category: 'Visual & Brand Design',
    shortDescription:
      'Creative visual designs that communicate your message, strengthen your brand, and capture attention.',
    heroDescription:
      'From large-scale exhibition posters and event marketing to cohesive visual systems, we craft graphic artwork with deliberate typography, high contrast, and unmistakable presence.',
    capabilities: [
      'Promotional and cultural event posters',
      'Visual identity guidelines and typography systems',
      'Print collateral and prepress preparation',
      'Digital campaign banners and promotional graphics',
      'Social media graphics and branding materials',
    ],
    deliverables: [
      'High-resolution vector print-ready files (CMYK)',
      'Digital web & social-optimized artwork assets',
      'Color palette, font pairings, and mockups',
      'Complete asset packaging and usage guide',
    ],
    outcomes: [
      { metric: 'Striking', label: 'Commanding visual notice anywhere' },
      { metric: 'Cohesive', label: 'Consistent branding across touchpoints' },
    ],
  },
  {
    slug: 'brand-strategy-innovation',
    number: '05',
    icon: Cpu,
    title: 'Custom Software Solutions',
    category: 'Software & Business Tools',
    shortDescription:
      'Business-focused software built around your workflows, helping you manage operations, organize information, and work more efficiently.',
    heroDescription:
      'We create tailored software and web-based applications for specific workflows, starting with the challenges, data structures, and users the solution should address.',
    capabilities: [
      'Admin panels and operations dashboards',
      'Billing and invoicing software',
      'Inventory and business management systems',
      'Custom internal tools and workflow applications',
      'API integrations, reporting, and enhancements',
    ],
    deliverables: [
      'Requirements and workflow architecture',
      'Custom web software built with modern frameworks',
      'Testing across key use cases and browsers',
      'Handover documentation and code repository',
    ],
    outcomes: [
      { metric: 'Tailored', label: 'Built around your exact workflows' },
      { metric: 'Efficient', label: 'Streamlining daily operations' },
    ],
  },
];

/* ──────────────────────────────────────────────────────────
   Selected Work / Portfolio
   Organized into relevant categories:
   - Websites
   - Mobile Apps
   - UI/UX
   - Graphic Design
   - Custom Software
   ────────────────────────────────────────────────────────── */

export const workPortfolioCategories = [
  'All Work',
  'Websites',
  'Mobile Apps',
  'UI/UX',
  'Graphic Design',
  'Custom Software',
];

export const workProjectsData = [
  {
    slug: 'zenith-digital-commerce-platform',
    title: 'Zenith: Minimalist Web Platform',
    category: 'Websites',
    serviceCategory: 'Website Design & Development',
    tagline: 'High-speed editorial web experience for luxury architecture',
    description:
      'A bespoke digital platform combining architectural minimalism with sub-second transitions, dynamic gallery filtering, and fluid responsive layouts.',
    client: 'Zenith Studio Atelier',
    timeline: '8 Weeks',
    services: ['Website Development', 'UI/UX Design', 'Performance Engineering'],
    technologies: ['React 19', 'Vite', 'Tailwind CSS', 'Motion'],
    imageKey: 'zenith',
    aspect: 'wide',
    challenge:
      'Traditional luxury retail websites are often bogged down by heavy scripts and sluggish navigation that frustrate high-intent visitors.',
    solution:
      'Engineered with React 19, Vite, and modern CSS tokens with zero unnecessary third-party plugins, achieving a 99 Lighthouse performance score and fluid client transitions.',
    gradient: 'from-[#101B2D] via-[#18263E] to-[#2764F5]',
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Conversion Lift', value: '+42%' },
    ],
  },
  {
    slug: 'nexabook-mobile-appointment-platform',
    title: 'NexaBook: Mobile Service Scheduling',
    category: 'Mobile Apps',
    serviceCategory: 'Mobile App Development',
    tagline: 'Frictionless customer booking and real-time appointment flow',
    description:
      'An intuitive mobile application designed to simplify service scheduling, instant appointment confirmation, and automated reminders on iOS and Android.',
    client: 'Nexa Service Network',
    timeline: '7 Weeks',
    services: ['Mobile App Development', 'UI/UX Design', 'API Integration'],
    technologies: ['React Native', 'TypeScript', 'REST API', 'Figma'],
    imageKey: 'mobileProject',
    aspect: 'portrait',
    challenge:
      'Service providers experienced high customer drop-off due to multi-step booking forms and slow mobile performance.',
    solution:
      'Designed a three-step mobile booking flow with instant slot availability, smart calendar integration, and push notifications that reduced drop-off by 55%.',
    gradient: 'from-[#101B2D] via-[#1E2638] to-[#2764F5]',
    metrics: [
      { label: 'Booking Completion', value: '94%' },
      { label: 'Drop-off Reduction', value: '-55%' },
    ],
  },
  {
    slug: 'pulse-kinetic-editorial-poster',
    title: 'Pulse: Kinetic Graphic Series',
    category: 'Graphic Design',
    serviceCategory: 'Poster & Graphic Design',
    tagline: 'Typographic dynamism for modern electronic arts',
    description:
      'A series of large-format promotional posters and digital campaign assets created for an underground contemporary electronic music and arts festival.',
    client: 'Pulse Arts Collective',
    timeline: '4 Weeks',
    services: ['Poster Design', 'Art Direction', 'Print Production'],
    technologies: ['Vector Typography', 'Geometric Grid', 'CMYK Prepress'],
    imageKey: 'pulse',
    aspect: 'portrait',
    challenge:
      'Capturing the visceral speed and mathematical rhythm of modern sound in a static two-dimensional visual medium with maximum exhibition presence.',
    solution:
      'We designed an experimental typography system combining kinetic type distortion, high-contrast duotones, and textured geometric grids formatted for high-definition print and digital motion.',
    gradient: 'from-[#101B2D] via-[#151D2A] to-[#35C5E8]',
    metrics: [
      { label: 'Exhibition Posters Printed', value: '2,500+' },
      { label: 'Digital Reach', value: '45,000+' },
    ],
  },
  {
    slug: 'lumina-saas-interface-system',
    title: 'Lumina: Telemetry Interface System',
    category: 'UI/UX',
    serviceCategory: 'UI/UX Design',
    tagline: 'Intuitive data orchestration for creative engineering teams',
    description:
      'A unified design system and interface suite for collaborative telemetry tools, presenting complex multi-channel data streams with zero friction.',
    client: 'Lumina Systems Labs',
    timeline: '6 Weeks',
    services: ['UI/UX Design', 'Design Systems', 'Interactive Prototyping'],
    technologies: ['Figma Tokens', 'React Components', 'Component Library'],
    imageKey: 'lumina',
    aspect: 'wide',
    challenge:
      'Simplifying complex multi-channel data streams without reducing operational density or obscuring critical real-time alerts.',
    solution:
      'An ergonomic dark-canvas UI with modular card components, custom micro-interactions, and accessible high-contrast data visualization designed for fast team decision making.',
    gradient: 'from-[#101B2D] via-[#1E2E48] to-[#2764F5]',
    metrics: [
      { label: 'Design System Tokens', value: '180+' },
      { label: 'Task Efficiency Gain', value: '3.5x' },
    ],
  },
  {
    slug: 'nexus-ops-management-dashboard',
    title: 'NexusOps: Business & Invoicing System',
    category: 'Custom Software',
    serviceCategory: 'Custom Software Solutions',
    tagline: 'Custom administrative suite for billing, inventory, and operations',
    description:
      'A comprehensive internal business management application featuring automated invoice generation, real-time revenue analytics, and live stock tracking.',
    client: 'Aura Logistics & Retail',
    timeline: '10 Weeks',
    services: ['Custom Software Development', 'Database Design', 'Admin UX/UI'],
    technologies: ['React 19', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    imageKey: 'softwareProject',
    aspect: 'wide',
    challenge:
      'The client relied on disjointed spreadsheets and manual invoice generation, leading to reconciliation delays and stock discrepancies.',
    solution:
      'Built a centralized administrative panel that automates invoice issuance, syncs stock levels in real time, and produces comprehensive visual financial reports.',
    gradient: 'from-[#101B2D] via-[#18263E] to-[#35C5E8]',
    metrics: [
      { label: 'Billing Processing Time', value: '-70%' },
      { label: 'Data Accuracy', value: '99.8%' },
    ],
  },
];

export const workShowcaseContent = {
  eyebrow: 'Selected Work',
  heading: 'Selected work. Thoughtfully created.',
  description:
    'Explore genuine examples of our craft across website development, mobile apps, UI/UX systems, expressive graphic design, and custom software.',
  items: workProjectsData,
};

/* ──────────────────────────────────────────────────────────
   About the Studio
   Approach: Approachable, thoughtful design, useful technology,
   creative problem-solving.
   ────────────────────────────────────────────────────────── */

export const aboutStudioContent = {
  eyebrow: 'About the Studio',
  heading: 'Thoughtful design. Useful technology. Creative problem-solving.',
  description:
    'NEXZIVO is an independent creative digital studio. We work closely with businesses, founders, and creators to shape distinctive websites, intuitive mobile apps, high-impact graphic design, and custom business management software.',
  pillars: [
    {
      title: 'Design with Intent',
      description:
        'We believe every layout, typography choice, and color interaction should serve a distinct purpose—communicating clearly without unnecessary visual clutter.',
    },
    {
      title: 'Craftsmanship & Engineering',
      description:
        'We build accessible, high-performance websites, mobile apps, and business software using clean modern frameworks so your users experience speed, reliability, and precision.',
    },
    {
      title: 'Direct Collaboration',
      description:
        'You collaborate directly with the designers and engineers doing the actual work, ensuring fast communication, transparent updates, and clear deliverables.',
    },
  ],
  stats: [
    { value: '5', label: 'Core Digital Disciplines' },
    { value: '100%', label: 'Bespoke Craft, Zero Generic Templates' },
    { value: '24h', label: 'Prompt Response & Clear Consultation' },
  ],
};

/* ──────────────────────────────────────────────────────────
   Our Process (Clear 4-step workflow)
   1. Discover — Understand the client's goals and requirements.
   2. Design — Develop the visual direction and user experience.
   3. Build — Create the website, mobile app, or custom software.
   4. Deliver — Refine, test, and hand over the finished work.
   ────────────────────────────────────────────────────────── */

export const processContent = {
  eyebrow: 'Our Process',
  heading: 'A disciplined four-step approach to every engagement.',
  description:
    'From the initial spark to final delivery, we follow a transparent and collaborative workflow that keeps projects on schedule and aligned with your goals.',
  steps: [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand goals & scope',
      description:
        'We start by listening: understanding your goals, intended audience, technical requirements, and aesthetic direction before committing to a plan.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Design',
      tagline: 'Visual direction & UX',
      description:
        'We develop the visual direction, wireframes, typography pairings, and user experience, collaborating closely on prototypes and screen reviews.',
      icon: PencilRuler,
    },
    {
      number: '03',
      title: 'Build',
      tagline: 'Engineering & creation',
      description:
        'We create the website, mobile app, poster artwork, or custom software with rigorous attention to detail, responsiveness, clean code, and accessibility.',
      icon: Layers,
    },
    {
      number: '04',
      title: 'Deliver',
      tagline: 'Testing & handover',
      description:
        'We test key user journeys across devices, refine details based on feedback, and provide a comprehensive handover with full asset ownership.',
      icon: CheckCircle,
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Contact CTA
   Deep-navy section (#101B2D)
   Headline: "Have an idea? Let’s make it happen."
   Button: "Start a Project"
   ────────────────────────────────────────────────────────── */

export const contactCtaContent = {
  eyebrow: 'Start a Conversation',
  heading: 'Have an idea? Let’s make it happen.',
  description:
    'Whether you need a bespoke website, mobile application, intuitive UI/UX interface system, bold graphic design, or custom business software, we are ready to bring your vision to life.',
  cta: { label: 'Start a Project', href: '/contact' },
  features: [
    'Direct communication with studio leads',
    'Transparent timelines and clear deliverables',
    'Tailored proposals suited to your project scope',
  ],
};

/* Backwards-compatible exports for /about, /approach, and /products routes */
export const aboutContent = {
  eyebrow: aboutStudioContent.eyebrow,
  heading: aboutStudioContent.heading,
  lead: aboutStudioContent.description,
  story: [
    'We are a multidisciplinary team of designers, creative coders, and full-stack developers. We reject repetitive design patterns and generic corporate templates in favor of bespoke visual identities, striking typography, and lightning-fast web and mobile applications.',
    'Whether designing a physical exhibition poster that demands notice from across the room, architecting a custom business management tool, or engineering a responsive web platform that converts visitors into dedicated advocates, we treat every project with total craftsmanship and zero compromise.',
  ],
  values: [
    {
      title: 'Artistic Intention',
      description: 'We do not settle for cookie-cutter layouts. Every color, typographic pairing, and spacing ratio is chosen with deliberate purpose.',
    },
    {
      title: 'Modern Engineering',
      description: 'Clean, accessible, and high-performance codebases built with modern tools: React, Vite, and Tailwind CSS.',
    },
    {
      title: 'Direct Collaboration',
      description: 'You work directly with the creative leads and developers building your project. No layers of account managers.',
    },
    {
      title: 'Obsessive Quality',
      description: 'Pixel-perfect responsiveness, rigorous cross-browser testing, and flawless prepress and software production.',
    },
  ],
};

export const approachContent = {
  eyebrow: processContent.eyebrow,
  heading: processContent.heading,
  description: processContent.description,
  steps: processContent.steps.map((step) => ({
    ...step,
    details: [
      `Key phase: ${step.tagline}`,
      step.description,
      'Close collaboration & milestone check-ins',
      'Quality control & review',
    ],
  })),
};

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
      description:
        'An experimental browser canvas for algorithmic poster composition, variable font distortion, and automated print prepress exports.',
    },
    {
      name: 'TokenSync',
      tagline: 'Figma to React Token Bridge',
      status: 'Coming Soon',
      description:
        'Bi-directional sync engine that translates Figma color, spacing, and typography styles directly into Tailwind CSS and CSS custom properties.',
    },
    {
      name: 'LighthouseGuard',
      tagline: 'Continuous Performance Sentinel',
      status: 'Coming Soon',
      description:
        'Automated CI/CD test runner that audits responsive viewports and Core Web Vitals before staging branches merge into production.',
    },
  ],
};
