import { useState } from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { processContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

const scrollViewportConfig = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -50px 0px',
};

/**
 * ApproachSection / Our Process — Interactive Connected Timeline Workflow:
 * 1. Discover — Focus & listen (search-pulse icon)
 * 2. Design — Visual direction & UX (creative pencil angle slide)
 * 3. Build — Engineering & creation (stacked layer lift)
 * 4. Deliver — Testing & handover (completion check-circle pop)
 *
 * Connected horizontal timeline line on desktop, vertical connector on mobile.
 */
export function ApproachSection() {
  const reducedMotion = useReducedMotionPreference();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Heading reveal variants
  const eyebrowVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: EASE_OUT_EXPO },
    },
  };

  const lineDrawVariant = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '1.25rem',
      opacity: 1,
      transition: { duration: 0.45, delay: 0.1, ease: EASE_OUT_EXPO },
    },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: 0.12, ease: EASE_OUT_EXPO },
    },
  };

  const descriptionVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.22, ease: EASE_OUT_EXPO },
    },
  };

  // Connecting timeline line variants
  const timelineLineVariant = {
    hidden: { scaleX: 0, originX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      originX: 0,
      opacity: 1,
      transition: { duration: 1.0, delay: 0.25, ease: EASE_OUT_EXPO },
    },
  };

  // Distinct entrance per step
  const cardEntranceVariant = (idx) => {
    // 01: Discover (gentle focus sharpen + settle)
    // 02: Design (subtle lateral slide & settle)
    // 03: Build (upward layer glide)
    // 04: Deliver (refined completion settle)
    const yOffsets = [24, 20, 24, 18];
    const xOffsets = [0, 8, 0, 0];

    return {
      hidden: {
        opacity: 0,
        y: yOffsets[idx] || 20,
        x: xOffsets[idx] || 0,
        scale: idx === 0 ? 0.98 : 1,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.65,
          delay: 0.2 + idx * 0.14,
          ease: EASE_OUT_EXPO,
        },
      },
    };
  };

  // Micro-motion for step icons based on step index
  const getIconAnimation = (idx, isHovered) => {
    if (!isHovered || reducedMotion) return {};
    switch (idx) {
      case 0: // Discover: search focus pulse
        return { scale: [1, 1.15, 1.08], rotate: [0, -6, 0], transition: { duration: 0.35 } };
      case 1: // Design: drawing pencil gesture
        return { rotate: [0, -12, 4, 0], x: [0, 2, -1, 0], transition: { duration: 0.4 } };
      case 2: // Build: layer lift
        return { y: [0, -4, 0], scale: [1, 1.08, 1], transition: { duration: 0.35 } };
      case 3: // Deliver: checkmark completion pop
        return { scale: [1, 1.2, 1.1], transition: { duration: 0.3 } };
      default:
        return { scale: 1.08 };
    }
  };

  return (
    <section id="process" className="section relative bg-[#F7F9FC] border-b border-[#E3E8F0] overflow-hidden">
      {/* Subtle Project-Themed Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Soft edge ambient glows */}
        <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-[#2764F5]/5 via-[#35C5E8]/4 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[450px] w-[450px] rounded-full bg-gradient-to-tl from-[#35C5E8]/5 via-[#2764F5]/3 to-transparent blur-3xl" />

        {/* Oversized Brand Geometry / Slanted Polygonal Ribbon (Top Right Edge) */}
        <svg
          className="absolute -top-20 -right-24 w-[460px] h-[460px] text-[#2764F5]/[0.035] transform -rotate-12"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M 140 60 L 440 60 L 360 440 L 60 440 Z"
            stroke="currentColor"
            strokeWidth="28"
            strokeLinejoin="round"
          />
          <path
            d="M 200 120 L 420 120 L 360 380 L 140 380 Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="14 14"
          />
        </svg>

        {/* Subtle Geometric Stepped Ring (Bottom Left Edge) */}
        <svg
          className="absolute -bottom-20 -left-20 w-[380px] h-[380px] text-[#35C5E8]/[0.04]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="150" cy="250" r="180" stroke="currentColor" strokeWidth="20" />
          <circle cx="150" cy="250" r="120" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Editorial Heading Entrance */}
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewportConfig}
          className="max-w-3xl mb-14"
        >
          <div className="flex flex-col gap-3">
            <motion.div variants={eyebrowVariant} className="inline-flex items-center gap-2">
              <motion.span
                variants={lineDrawVariant}
                className="h-0.5 rounded-full bg-[#2764F5]"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                {processContent.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={headingVariant}
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#141B2A]"
            >
              {processContent.heading}
            </motion.h2>

            <motion.p
              variants={descriptionVariant}
              className="max-w-2xl text-base leading-relaxed sm:text-lg text-[#687386]"
            >
              {processContent.description}
            </motion.p>
          </div>
        </motion.div>

        {/* 4-Step Process Timeline Container */}
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewportConfig}
          className="relative"
        >
          {/* Subtle Connected Horizontal Timeline Line (Desktop lg+) */}
          <div className="hidden lg:block pointer-events-none absolute top-12 left-10 right-10 h-0.5 z-0" aria-hidden="true">
            {/* Base subtle guide line */}
            <div className="absolute inset-0 bg-[#E2E8F0]" />
            {/* Animated drawing line */}
            <motion.div
              variants={reducedMotion ? undefined : timelineLineVariant}
              className="absolute inset-0 bg-gradient-to-r from-[#2764F5] via-[#35C5E8] to-[#2764F5] opacity-60"
            />
            {/* Hover highlight glow segment */}
            {hoveredIdx !== null && (
              <motion.div
                layoutId="timeline-highlight"
                className="absolute top-[-1px] h-[3px] bg-[#2764F5] rounded-full shadow-[0_0_8px_rgba(39,100,245,0.6)]"
                style={{
                  left: `${hoveredIdx * 25}%`,
                  width: '25%',
                }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
              />
            )}
          </div>

          {/* 4-Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processContent.steps.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <motion.div
                  key={step.number}
                  custom={idx}
                  variants={reducedMotion ? undefined : cardEntranceVariant(idx)}
                  className="flex flex-col h-full"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <article
                    className={`relative flex flex-col justify-between h-full p-7 rounded-2xl bg-white border transition-all duration-300 shadow-sm overflow-hidden group ${
                      isHovered
                        ? 'border-[#2764F5] shadow-lg -translate-y-1'
                        : 'border-[#E3E8F0] hover:border-[#2764F5]/40 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Top Step Highlight Accent Strip on Hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2764F5] to-[#35C5E8] transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    {/* Step header: Number + Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className={`font-mono text-3xl font-extrabold transition-colors duration-200 ${
                            isHovered ? 'text-[#2764F5]' : 'text-[#CBD5E1] group-hover:text-[#2764F5]'
                          }`}
                        >
                          {step.number}
                        </span>

                        <motion.div
                          animate={getIconAnimation(idx, isHovered)}
                          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 ${
                            isHovered
                              ? 'bg-[#2764F5] text-white shadow-sm shadow-[#2764F5]/30'
                              : 'bg-[#2764F5]/10 text-[#2764F5] group-hover:bg-[#2764F5] group-hover:text-white'
                          }`}
                        >
                          <Icon size={20} />
                        </motion.div>
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#2764F5] block mb-1">
                        {step.tagline}
                      </span>

                      <h3 className="font-heading text-xl font-bold text-[#141B2A] mb-3">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-[#687386]">
                        {step.description}
                      </p>
                    </div>

                    {/* Step indicator footer with completion badge on step 04 */}
                    <div className="mt-6 pt-4 border-t border-[#E3E8F0] flex items-center justify-between text-xs text-[#687386]">
                      <span className="font-medium">
                        Step 0{idx + 1} of 04
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          idx === 3
                            ? 'bg-[#2764F5] ring-4 ring-[#2764F5]/15'
                            : isHovered
                            ? 'bg-[#2764F5] scale-125'
                            : 'bg-[#35C5E8]'
                        }`}
                      />
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
