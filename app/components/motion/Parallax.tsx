"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface ParallaxProps {
 children: ReactNode;
 className?: string;
 /** Distance to travel in pixels (positive = down on scroll). */
 distance?: number;
}

/** A wrapper that translates its child on vertical scroll. */
export function Parallax({ children, className, distance = 60 }: ParallaxProps) {
 const ref = useRef<HTMLDivElement | null>(null);
 const reduce = useReducedMotion();
 const { scrollYProgress } = useScroll({
 target: ref,
 offset: ["start end", "end start"],
 });
 const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-distance, distance]);

 return (
 <motion.div ref={ref} style={{ y }} className={className}>
 {children}
 </motion.div>
 );
}
