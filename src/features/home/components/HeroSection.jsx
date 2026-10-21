import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { heroContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import heroMockup from '@/assets/showcase/hero-showcase.jpg';

/**
 * HeroSection — Refined editorial hero with flexible layout.
 * Prevents vertical clipping, provides intentional headline wrapping,
 * keeps CTAs and capability tags fully visible across viewports,
 * and maintains balanced proportions beneath the 80px fixed navbar.
 */
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

export function HeroSection() {
  const reducedMotion = useReducedMotionPreference();

  // Coordinated entrance animation variants (respects reducedMotion)
  const fadeUp = (delay = 0, yOffset = 18, duration = 0.6) => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: yOffset },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    };
  };

  const showcaseVariant = () => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1, y: 0, scale: 1 },
        animate: { opacity: 1, y: 0, scale: 1 },
      };
    }
    return {
      initial: { opacity: 0, y: 22, scale: 0.96 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.75, delay: 0.3, ease: EASE_OUT_EXPO },
    };
  };

  const bgShapeVariant = (delay = 0) => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
      };
    }
    return {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.9, delay, ease: EASE_OUT_EXPO },
    };
  };

  return (
    <section
      id="hero"
      className="relative bg-[#F7F9FC] text-[#141B2A] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 border-b border-[#E3E8F0] overflow-hidden"
    >
      {/* Project-Related Subtle Background: Soft gradients and oversized brand-inspired geometric shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Soft atmospheric gradient glows */}
        <motion.div
          {...bgShapeVariant(0)}
          className="absolute -top-40 right-[-5%] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-[#2764F5]/8 via-[#35C5E8]/6 to-transparent blur-3xl"
        />
        <motion.div
          {...bgShapeVariant(0.1)}
          className="absolute top-1/4 left-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-[#35C5E8]/7 via-[#2764F5]/4 to-transparent blur-3xl"
        />
        <motion.div
          {...bgShapeVariant(0.15)}
          className="absolute -bottom-24 right-1/4 h-[380px] w-[380px] rounded-full bg-[#2764F5]/4 blur-3xl"
        />

        {/* Oversized Brand-Inspired Geometric Ribbon / Polygon (Top Right) */}
        <motion.svg
          {...bgShapeVariant(0.1)}
          className="absolute -top-16 -right-20 w-[420px] h-[420px] lg:w-[580px] lg:h-[580px] text-[#2764F5]/[0.035] transform rotate-12"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 120 40 L 420 40 L 360 440 L 60 440 Z"
            stroke="currentColor"
            strokeWidth="32"
            strokeLinejoin="round"
          />
          <path
            d="M 190 120 L 460 120 L 400 380 L 130 380 Z"
            stroke="currentColor"
            strokeWidth="12"
            strokeDasharray="16 16"
          />
        </motion.svg>

        {/* Subtle Isometric Grid Dot Cluster (Top Left Edge) */}
        <motion.svg
          {...bgShapeVariant(0.15)}
          className="absolute top-12 left-4 w-56 h-56 text-[#2764F5]/[0.045] hidden sm:block"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <pattern id="hero-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" />
          </pattern>
          <rect width="200" height="200" fill="url(#hero-dots)" />
        </motion.svg>

        {/* Oversized Subtle Curved Arc (Bottom Left Edge) */}
        <motion.svg
          {...bgShapeVariant(0.2)}
          className="absolute -bottom-20 -left-20 w-[360px] h-[360px] text-[#35C5E8]/[0.05]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="100" cy="300" r="220" stroke="currentColor" strokeWidth="24" />
          <circle cx="100" cy="300" r="160" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        </motion.svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Headline, Copy, CTAs, Capabilities */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start gap-5 sm:gap-6 order-1 pr-0 lg:pr-4">
            {/* Studio Eyebrow Badge */}
            <motion.div {...fadeUp(0.04, 12, 0.45)}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3E8F0] shadow-xs text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#2764F5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2764F5]" />
                {heroContent.eyebrow}
              </span>
            </motion.div>

            {/* Headline with 3 Staggered Animated Lines (each translates 16-18px up and fades in) */}
            <h1 className="font-heading text-[2.2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[clamp(2.5rem,3vw,3.35rem)] xl:text-[clamp(2.9rem,3.4vw,3.65rem)] font-extrabold tracking-tight leading-[1.12] text-[#141B2A] max-w-xl">
              {heroContent.lines.map((line, idx) => (
                <motion.span
                  key={idx}
                  className="block whitespace-normal sm:whitespace-nowrap"
                  {...fadeUp(0.1 + idx * 0.09, 18, 0.55)}
                >
                  {line.highlight ? (
                    <span className="text-[#2764F5]">{line.text}</span>
                  ) : (
                    <span>{line.text}</span>
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Supporting Description with gentle fade-up */}
            <motion.p
              className="max-w-lg text-[15px] sm:text-[16.5px] lg:text-[17px] xl:text-[18px] text-[#687386] leading-relaxed"
              {...fadeUp(0.38, 16, 0.55)}
            >
              {heroContent.description}
            </motion.p>

            {/* CTA Buttons: Smooth fade-up in natural flow */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1"
              {...fadeUp(0.48, 16, 0.55)}
            >
              <Button
                to={heroContent.primaryCta.href}
                variant="primary"
                size="md"
                iconRight={<ArrowRight size={17} />}
                className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px] shadow-sm hover:shadow"
              >
                {heroContent.primaryCta.label}
              </Button>

              <Button
                to={heroContent.secondaryCta.href}
                variant="secondary"
                size="md"
                className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px]"
              >
                {heroContent.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Studio Capabilities Indicator: Staggered entrance */}
            <motion.div
              className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 sm:pt-6 mt-1 border-t border-[#E3E8F0] w-full text-[12.5px] sm:text-[13px] font-semibold text-[#141B2A]"
              {...fadeUp(0.58, 12, 0.55)}
            >
              <span className="text-[11.5px] sm:text-xs font-bold uppercase tracking-wider text-[#2764F5]">
                Studio Focus:
              </span>
              <span>Websites</span>
              <span className="text-[#CBD5E1]">·</span>
              <span>Mobile Apps</span>
              <span className="text-[#CBD5E1]">·</span>
              <span>UI/UX</span>
              <span className="text-[#CBD5E1]">·</span>
              <span>Graphic Design</span>
              <span className="text-[#CBD5E1]">·</span>
              <span>Custom Software</span>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase (gentle 22px translate up and scale from 0.96 -> 1.0) */}
          <div className="lg:col-span-6 xl:col-span-6 w-full order-2">
            <motion.div
              className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#DCE4F0] bg-white shadow-[0_22px_55px_-12px_rgba(16,27,45,0.13)] transition-shadow duration-300 hover:shadow-[0_28px_65px_-12px_rgba(16,27,45,0.19)]"
              {...showcaseVariant()}
            >
              {/* Showcase Framing: slightly taller 16:9.8 ratio so both height and width expand proportionally */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.6] lg:aspect-[16/9.8] w-full overflow-hidden bg-[#101B2D]">
                <img
                  src={heroMockup}
                  alt="NEXZIVO Creative Studio Showcase — Website design, typography exhibition poster, and mobile app UI dashboard"
                  className="h-full w-full object-cover object-center transform transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              {/* Minimalist, Integrated Showcase Caption Bar */}
              <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 bg-white border-t border-[#EAEFF6]">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <span className="flex h-2 w-2 shrink-0 rounded-full bg-[#2764F5]" />
                  <span className="text-xs sm:text-[13px] font-bold text-[#141B2A] tracking-tight">
                    NEXZIVO Studio Showcase
                  </span>
                  <span className="text-[11.5px] sm:text-xs text-[#687386] hidden sm:inline text-nowrap">
                    · Web, Poster &amp; Mobile Interfaces
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-[13px] font-semibold text-[#2764F5] shrink-0 ml-2">
                  <span className="hidden sm:inline">Crafted with intention</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
