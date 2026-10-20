/**
 * Navigation configuration.
 * Single source of truth for all nav items used across Header, Footer, and mobile menu.
 */
export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Approach', href: '/approach' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  Services: [
    { label: 'Website Development', href: '/services/website-development' },
    { label: 'Mobile App Development', href: '/services/poster-graphic-design' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'Custom Software Solutions', href: '/services/brand-strategy-innovation' },
  ],
  Studio: [
    { label: 'Selected Work', href: '/work' },
    { label: 'Creative Process', href: '/approach' },
    { label: 'About NEXZIVO', href: '/about' },
    { label: 'Start a Project', href: '/contact' },
  ],
};
