"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { REGIONS, getRegion } from "../lib/bodyMap";
import { useLeadModal } from "./LeadModalContext";
import { Icon } from "./Icon";

export function BodyMap() {
 const [active, setActive] = useState<string | null>("back");
 const reduce = useReducedMotion();
 const { openLead } = useLeadModal();
 const region = active ? getRegion(active) : null;

 return (
 <section id="body-map" className="section bg-gradient-to-b from-primary-50/30 to-primary-50/60">
 <div className="container-page">
 <Reveal>
 <div className="text-center mb-12">
 <span className="eyebrow">Where does it hurt?</span>
 <h2 className="h-section mt-3">Tap a body region to see how we treat it</h2>
 <p className="p-section mt-3 max-w-2xl mx-auto">
 Interactive body map. Click any region to see the conditions we treat and our treatment approach.
 </p>
 </div>
 </Reveal>

 <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
 {/* Silhouette */}
 <Reveal>
 <div className="relative aspect-[3/5] max-w-md mx-auto">
 <svg
 viewBox="0 0 200 400"
 className="w-full h-full"
 role="img"
 aria-label="Interactive body map"
 >
 {/* Stylized human silhouette */}
 <defs>
 <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
 <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.2" />
 <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
 </linearGradient>
 </defs>
 <path
 d="M100 30 Q85 30 80 45 Q78 60 82 75 L88 95 L78 110 L70 130 L65 160 L62 200 L65 240 L70 280 L75 320 L80 360 L85 385 L90 395 L100 395 L110 395 L115 385 L120 360 L125 320 L130 280 L135 240 L138 200 L135 160 L130 130 L122 110 L112 95 L118 75 Q122 60 120 45 Q115 30 100 30 Z"
 fill="url(#bodyGrad)"
 stroke="#0891B2"
 strokeWidth="1.5"
 strokeOpacity="0.4"
 />
 </svg>

 {/* Hotspots overlay */}
 {REGIONS.map((r) => (
 <button
 key={r.id}
 onClick={() => setActive(r.id)}
 aria-label={r.title}
 aria-pressed={active === r.id}
 className="absolute -translate-x-1/2 -translate-y-1/2 group"
 style={{ left: `${r.x}%`, top: `${r.y}%` }}
 >
 <span
 className={`block rounded-full transition-all duration-200 ease-expo ${
 active === r.id
 ? "h-7 w-7 bg-accent-500 ring-4 ring-accent-200"
 : "h-4 w-4 bg-primary-500 ring-2 ring-white group-hover:scale-150"
 }`}
 />
 {active === r.id && (
 <motion.span
 layoutId="hotspot-ring"
 className="absolute inset-0 rounded-full border-2 border-accent-500"
 transition={{ type: "spring", stiffness: 300, damping: 20 }}
 />
 )}
 </button>
 ))}
 </div>
 </Reveal>

 {/* Details panel */}
 <Reveal delay={0.2}>
 <AnimatePresence mode="wait">
 {region ? (
 <motion.div
 key={region.id}
 initial={reduce ? false : { opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -8 }}
 transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
 className="glass rounded-glass p-6 lg:p-8"
 >
 <div className="flex items-start justify-between gap-4">
 <div>
 <span className="eyebrow text-primary-600">Region</span>
 <h3 className="font-display text-2xl lg:text-3xl font-semibold text-primary-900 mt-1">
 {region.title}
 </h3>
 </div>
 <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-100 text-accent-700">
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

 <div className="mt-6 flex gap-3">
 <button
 onClick={() => openLead({ condition: region.title, source: "body-map" })}
 className="btn-primary"
 >
 Book for {region.title}
 <Icon.arrow size={16} />
 </button>
 </div>
 </motion.div>
 ) : (
 <div className="glass rounded-glass p-6 lg:p-8 text-center">
 <p className="text-ink-muted">Select a region on the body map to see details.</p>
 </div>
 )}
 </AnimatePresence>
 </Reveal>
 </div>
 </div>
 </section>
 );
}
