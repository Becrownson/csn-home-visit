"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CounterProps {
 to: number;
 duration?: number;
 className?: string;
 suffix?: string;
 prefix?: string;
 /** Optional formatter — defaults to toLocaleString. */
 format?: (n: number) => string;
}

export function Counter({
 to,
 duration = 2,
 className,
 suffix = "",
 prefix = "",
 format,
}: CounterProps) {
 const ref = useRef<HTMLSpanElement | null>(null);
 const inView = useInView(ref, { once: true, amount: 0.5 });
 const reduce = useReducedMotion();
 const [value, setValue] = useState(0);

 useEffect(() => {
 if (!inView) return;
 if (reduce) {
 setValue(to);
 return;
 }
 const controls = animate(0, to, {
 duration,
 ease: [0.16, 1, 0.3, 1],
 onUpdate: (v) => setValue(v),
 });
 return () => controls.stop();
 }, [inView, to, duration, reduce]);

 const display = format ? format(value) : Math.round(value).toLocaleString("en-IN");

 return (
 <span ref={ref} className={className}>
 {prefix}
 {display}
 {suffix}
 </span>
 );
}
