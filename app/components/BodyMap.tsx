"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { REGIONS } from "../lib/bodyMap";
import { useLeadModal } from "./LeadModalContext";
import { Icon } from "./Icon";

const IMAGES = Array.from({ length: 10 }, (_, i) => `/images/human-body/body-${i + 1}.png`);

const FLOAT_CLASSES = [
 "float-a", "float-b", "float-c", "float-d", "float-e",
 "float-f", "float-g", "float-h", "float-i", "float-j",
];

const FLOAT_DURATIONS = [4.2, 3.8, 5.0, 4.5, 3.6, 4.8, 4.0, 5.2, 3.9, 4.3];

export function BodyMap() {
 const [idx, setIdx] = useState(0);
 const reduce = useReducedMotion();
 const { openLead } = useLeadModal();
 const region = REGIONS[idx];

 useEffect(() => {
 const t = setInterval(() => setIdx((i) => (i + 1) % IMAGES.length), 4000);
 return () => clearInterval(t);
 }, []);

 return (
 <section id="body-map" className="section bg-gradient-to-b from-primary-50/30 to-primary-50/60">
 <div className="container-page">
 <Reveal>
 <div className="text-center mb-12">
 <span className="eyebrow">Where does it hurt?</span>
 <h2 className="h-section mt-3">We treat every part of you</h2>
 <p className="p-section mt-3 max-w-2xl mx-auto">
 From head to toe, our physiotherapists bring expert care right to your doorstep.
 </p>
 </div>
 </Reveal>

 <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
 <Reveal>
 <div className="relative max-w-sm mx-auto h-[420px] sm:h-[480px] flex items-center justify-center overflow-hidden">
 <AnimatePresence mode="sync">
 <motion.img
 key={idx}
 src={IMAGES[idx]}
 alt={`Body region ${idx + 1}`}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.9, ease: "easeInOut" }}
 className={`absolute inset-0 w-full h-full object-contain drop-shadow-2xl pointer-events-none ${reduce ? "" : FLOAT_CLASSES[idx]}`}
 style={reduce ? undefined : { animationDuration: `${FLOAT_DURATIONS[idx]}s` }}
 />
 </AnimatePresence>
 </div>
 </Reveal>

 <Reveal delay={0.2}>
 <AnimatePresence mode="sync">
 <motion.div
 key={region.id}
 initial={{ opacity: 0, y: 14 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -14 }}
 transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
 className="glass rounded-glass p-6 lg:p-8"
 >
 <div className="flex items-start justify-between gap-4">
 <div>
 <span className="eyebrow text-primary-600">Region</span>
 <h3 className="font-display text-2xl lg:text-3xl font-semibold text-primary-900 mt-1">
 {region.title}
 </h3>
 </div>
 <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-100 text-accent-700 shrink-0">
 <Icon.check size={22} />
 </span>
 </div>

 <div className="mt-6">
 <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
 Conditions we treat
 </h4>
 <ul className="mt-3 flex flex-wrap gap-2">
 {region.conditions.map((c) => (
 <li
 key={c}
 className="bg-white/80 border border-primary-100 rounded-full px-3 py-1 text-sm text-primary-800"
 >
 {c}
 </li>
 ))}
 </ul>
 </div>

 <div className="mt-6">
 <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
 Our approach
 </h4>
 <p className="mt-2 text-base text-ink leading-relaxed">{region.approach}</p>
 </div>

 <div className="mt-6">
 <button
 onClick={() => openLead({ condition: region.title, source: "body-map" })}
 className="btn-primary"
 >
 Book for {region.title}
 <Icon.arrow size={16} />
 </button>
 </div>
 </motion.div>
 </AnimatePresence>
 </Reveal>
 </div>
 </div>
 </section>
 );
}