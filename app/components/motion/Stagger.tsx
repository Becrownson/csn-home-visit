"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode, Children, type ElementType } from "react";

interface StaggerProps {
 children: ReactNode;
 as?: ElementType;
 itemAs?: ElementType;
 className?: string;
 itemClassName?: string;
 /** Per-item stagger delay (seconds). */
 stagger?: number;
 /** Initial vertical offset for items. */
 y?: number;
}

/** Parent that staggers its direct child elements on enter. */
export function Stagger({
 children,
 as: Tag = "div",
 itemAs: ItemTag = "div",
 className,
 itemClassName,
 stagger = 0.06,
 y = 24,
}: StaggerProps) {
 const reduce = useReducedMotion();
 const MotionTag = motion.create(Tag as any);
 const MotionItem = motion.create(ItemTag as any);

 const parent: Variants = {
 hidden: {},
 show: {
 transition: { staggerChildren: reduce ? 0 : stagger },
 },
 };

 const item: Variants = {
 hidden: { opacity: 0, y: reduce ? 0 : y },
 show: {
 opacity: 1,
 y: 0,
 transition: { duration: reduce ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] },
 },
 };

 return (
 <MotionTag
 className={className}
 initial="hidden"
 whileInView="show"
 viewport={{ once: true, amount: 0.15 }}
 variants={parent}
 >
 {Children.map(children, (child, i) => (
 <MotionItem key={i} className={itemClassName} variants={item}>
 {child}
 </MotionItem>
 ))}
 </MotionTag>
 );
}
