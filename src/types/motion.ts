import type { Variants, Transition } from "framer-motion";

// ── Spring presets ────────────────────────────────────────────────────────────

export interface SpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
}

/** Application-wide spring presets */
export const SPRINGS = {
  /** Snappy UI feedback — buttons, tooltips */
  snappy: { stiffness: 500, damping: 28, mass: 0.5 } satisfies SpringConfig,
  /** Default motion — cards, sections */
  default: { stiffness: 420, damping: 30, mass: 0.5 } satisfies SpringConfig,
  /** Slow, weighty reveals — hero, large panels */
  gentle: { stiffness: 220, damping: 26, mass: 0.8 } satisfies SpringConfig,
} as const;

// ── Cubic-bezier easing curves ────────────────────────────────────────────────

/** Ease-Out-Expo: fast start, gentle settle — use for entrances */
export const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;

/** Ease-In-Out-Expo: use for transitions between states */
export const EASE_IN_OUT_EXPO = [0.87, 0, 0.13, 1] as const;

// ── Transition presets ────────────────────────────────────────────────────────

export const TRANSITIONS = {
  spring: (config: SpringConfig = SPRINGS.default): Transition => ({
    type: "spring",
    ...config,
  }),
  tween: (duration = 0.4): Transition => ({
    type: "tween",
    duration,
    ease: EASE_OUT_EXPO,
  }),
} as const;

// ── Common variant factories ──────────────────────────────────────────────────

export function fadeUp(
  /** pixels to travel upward before settling */
  distance = 32,
  spring: SpringConfig = SPRINGS.default
): Variants {
  return {
    hidden: { opacity: 0, y: distance, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", ...spring },
    },
  };
}

export function staggerContainer(
  staggerChildren = 0.08,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}

// ── 3D tilt / magnetic types ──────────────────────────────────────────────────

export interface MagneticConfig {
  /** Fraction of offset applied to the element (0–1). Default 0.38 */
  strength: number;
  spring: SpringConfig;
}

export interface TiltConfig {
  /** Maximum rotation in degrees. Default 5 */
  maxDeg: number;
  spring: SpringConfig;
  /** Whether to add a glare/shimmer layer */
  shimmer: boolean;
}

// ── Reduced-motion ────────────────────────────────────────────────────────────

/** Returns a no-op transition when the user prefers reduced motion */
export function accessibleTransition(
  prefersReducedMotion: boolean,
  transition: Transition
): Transition {
  return prefersReducedMotion ? { duration: 0 } : transition;
}
