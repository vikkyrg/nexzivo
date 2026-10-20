
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroContent } from "../data/homeContent";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

function AnimatedHeadline({ text, reducedMotion }) {
  const words = text.split(" ");

  if (reducedMotion) {
    return <span>{text}</span>;
  }

  return (
    <>
      {words.map((word, index) => {
        const highlight =
          word.toLowerCase().includes("distinction") ||
          word.toLowerCase().includes("next");

        return (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden mr-3 sm:mr-4"
          >
            <motion.span
              className={`inline-block ${
                highlight
                  ? "text-[var(--color-accent-soft)]"
                  : "text-[var(--color-soft-white)]"
              }`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + index * 0.1,
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </>
  );
}

function HeroShowreel({ reducedMotion }) {
  return (
    <div className="nexzivo-showreel" aria-hidden="true">
      {!reducedMotion && (
        <video
          className="nexzivo-showreel-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/nexzivo-poster.jpg"
        >
          <source
            src="/videos/nexzivo-showreel.mp4"
            type="video/mp4"
          />
        </video>
      )}

      <div className="nexzivo-showreel-tint" />
      <div className="nexzivo-showreel-grid" />

      <motion.div
        className="nexzivo-orbit-decoration"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={reducedMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span />
        <span />
        <span />
      </motion.div>

      <div className="nexzivo-showreel-label">
        <span className="nexzivo-live-dot" />
        DESIGN IN MOTION
      </div>
    </div>
  );
}

export function HeroSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section
      id="hero"
      className="nexzivo-hero relative min-h-[92vh] flex items-center overflow-hidden bg-[var(--color-obsidian)] text-[var(--color-soft-white)] pt-24 pb-16"
    >
      <HeroShowreel reducedMotion={reducedMotion} />

      <div className="nexzivo-hero-vignette" aria-hidden="true" />

      <Container>
        <div className="relative z-10 w-full flex flex-col items-start gap-6 py-12 lg:py-16">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
              <span className="h-px w-9 bg-[var(--color-accent)]" />
              {heroContent.eyebrow}
            </span>
          </motion.div>

          <h1 className="max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-[6.3rem] font-bold tracking-tight leading-[0.99]">
            <AnimatedHeadline
              text={heroContent.heading}
              reducedMotion={reducedMotion}
            />
          </h1>

          <motion.p
            className="max-w-xl text-base sm:text-lg lg:text-xl text-[var(--color-subtle-gray)] leading-relaxed"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 pt-1"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Button
              to={heroContent.primaryCta.href}
              variant="primary"
              size="lg"
            >
              {heroContent.primaryCta.label}
            </Button>

            <Button
              to={heroContent.secondaryCta.href}
              variant="outline"
              size="lg"
              iconRight={<ArrowRight size={16} />}
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            className="nexzivo-hero-disciplines grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 pt-8 mt-5 border-t border-[var(--color-slate-border)] w-full"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {[
              { title: "Web Development", tag: "FAST · SCALABLE" },
              { title: "Product Design", tag: "HUMAN · INTUITIVE" },
              { title: "UI/UX Design", tag: "THOUGHTFUL · CLEAR" },
              { title: "Brand Identity", tag: "DISTINCT · BOLD" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-soft)]">
                  {item.tag}
                </span>

                <span className="text-sm font-semibold text-[var(--color-soft-white)]">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
