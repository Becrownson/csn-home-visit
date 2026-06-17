"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { FAQS } from "../lib/faqs";
import { Icon } from "./Icon";

export function FAQ() {
 const reduce = useReducedMotion();
 const [open, setOpen] = useState<number | null>(0);

 return (
 <section id="faq" className="section">
 <div className="container-page max-w-3xl">
 <Reveal>
 <div className="text-center mb-10">
 <span className="eyebrow">Common questions</span>
 <h2 className="h-section mt-3">Everything you might want to know</h2>
 </div>
 </Reveal>

 <div className="space-y-3">
 {FAQS.map((f, i) => {
 const isOpen = open === i;
 return (
 <Reveal key={i} delay={i * 0.05}>
 <div
 className={`glass rounded-2xl overflow-hidden transition-colors duration-200 ${
 isOpen ? "bg-white/80" : "bg-white/55"
 }`}
 >
 <button
 onClick={() => setOpen(isOpen ? null : i)}
 aria-expanded={isOpen}
 aria-controls={`faq-panel-${i}`}
 className="w-full flex items-center justify-between gap-4 p-5 text-left"
 >
 <span className="font-semibold text-primary-900">{f.q}</span>
 <motion.span
 animate={{ rotate: isOpen ? 180 : 0 }}
 transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
 className="grid h-8 w-8 place-items-center rounded-full bg-primary-100 text-primary-700 flex-shrink-0"
 >
 <Icon.chevron size={16} />
 </motion.span>
 </button>
 <AnimatePresence initial={false}>
 {isOpen && (
 <motion.div
 id={`faq-panel-${i}`}
 key="content"
 initial={reduce ? false : { height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={reduce ? undefined : { height: 0, opacity: 0 }}
 transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
 className="overflow-hidden"
 >
 <div className="px-5 pb-5 text-ink-muted leading-relaxed">{f.a}</div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </Reveal>
 );
 })}
 </div>
 </div>
 </section>
 );
}
