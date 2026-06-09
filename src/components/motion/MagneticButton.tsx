"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const SPRING = { stiffness: 500, damping: 28, mass: 0.5 };

// Omit DOM animation events that conflict with Framer Motion's event types
type NativeButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "onAnimationStart" | "onAnimationEnd" | "onDragStart" | "onDrag" | "onDragEnd"
>;

interface MagneticButtonProps extends NativeButtonProps {
  /** 0–1: how far the button shifts toward the cursor. Default 0.38 */
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 0.38,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  const track = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={track}
      onMouseLeave={reset}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
