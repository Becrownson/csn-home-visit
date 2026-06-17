"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface MagneticProps {
 children: ReactNode;
 className?: string;
 strength?: number;
 as?: "button" | "div" | "a";
 onClick?: () => void;
 href?: string;
 "aria-label"?: string;
 type?: "button" | "submit";
}

/** Magnetic button — pulls toward the cursor on fine-pointer devices only. */
export function Magnetic({
 children,
 className,
 strength = 0.25,
 as = "button",
 onClick,
 href,
 type = "button",
 "aria-label": ariaLabel,
}: MagneticProps) {
 const reduce = useReducedMotion();
 const [enabled, setEnabled] = useState(false);
 const ref = useRef<HTMLElement | null>(null);
 const x = useMotionValue(0);
 const y = useMotionValue(0);
 const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
 const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

 useEffect(() => {
 if (reduce) return;
 const mq = window.matchMedia("(pointer: fine)");
 const update = () => setEnabled(mq.matches);
 update();
 mq.addEventListener?.("change", update);
 return () => mq.removeEventListener?.("change", update);
 }, [reduce]);

 const onMove = (e: React.PointerEvent) => {
 if (!enabled || !ref.current) return;
 const r = ref.current.getBoundingClientRect();
 const dx = (e.clientX - r.left - r.width / 2) * strength;
 const dy = (e.clientY - r.top - r.height / 2) * strength;
 x.set(dx);
 y.set(dy);
 };
 const onLeave = () => {
 x.set(0);
 y.set(0);
 };

 const commonProps = {
 ref: ref as any,
 className,
 onPointerMove: onMove,
 onPointerLeave: onLeave,
 style: { x: sx, y: sy },
 "aria-label": ariaLabel,
 } as const;

 if (as === "a") {
 return (
 <motion.a
 href={href}
 onClick={onClick}
 {...commonProps}
 >
 {children}
 </motion.a>
 );
 }
 if (as === "div") {
 return (
 <motion.div {...commonProps}>
 {children}
 </motion.div>
 );
 }
 return (
 <motion.button type={type} onClick={onClick} {...commonProps}>
 {children}
 </motion.button>
 );
}
