"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode, type ElementType } from "react";

interface RevealProps {
 children: ReactNode;
 as?: ElementType;
 delay?: number;
 y?: number;
 className?: string;
 /** Reveal once on enter, don't re-animate on scroll back. */
 once?: boolean;
}

export function Reveal({
 children,
 as: Tag = "div",
 delay = 0,
 y = 24,
 className,
 once = true,
}: RevealProps) {
 const reduce = useReducedMotion();
 const MotionTag = motion.create(Tag as any);

 const variants: Variants = {
 hidden: { opacity: 0, y: reduce ? 0 : y },
 show: {
 opacity: 1,
 y: 0,
 transition: { duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1], delay },
 },
 };

 return (
 <MotionTag
 className={className}
 initial="hidden"
 whileInView="show"
 viewport={{ once, amount: 0.2 }}
 variants={variants}
 >
 {children}
 </MotionTag>
 );
}
