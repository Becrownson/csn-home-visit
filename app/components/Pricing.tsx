"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { PRICE, TIERS, discountFor, perSession, packageTotal, formatINR } from "../lib/pricing";
import { useLeadModal } from "./LeadModalContext";
import { Icon } from "./Icon";
import type { VisitType } from "../lib/wa";

const VISIT_OPTIONS: { id: VisitType; label: string; icon: "home" | "clinic" | "tele"; sub: string }[] = [
 { id: "home", label: "Home visit", icon: "home", sub: "We come to you" },
 { id: "clinic", label: "Clinic", icon: "clinic", sub: "At our Sambhajinagar clinic" },
 { id: "tele", label: "Tele", icon: "tele", sub: "Video call from home" },
];

export function Pricing() {
 const [visit, setVisit] = useState<VisitType>("home");
 const [sessions, setSessions] = useState(6);
 const { openLead } = useLeadModal();

 const tier = useMemo(() => discountFor(sessions), [sessions]);
 const per = useMemo(() => perSession(visit, sessions), [visit, sessions]);
 const total = useMemo(() => packageTotal(visit, sessions), [visit, sessions, per]);

 return (
 <section id="pricing" className="section">
 <div className="container-page">
 <Reveal>
 <div className="text-center mb-10">
 <span className="eyebrow">Transparent pricing</span>
 <h2 className="h-section mt-3">Three ways to start. One fair price.</h2>
 <p className="p-section mt-3 max-w-2xl mx-auto">
 No hidden fees. Pick a visit type, choose how many sessions, see your real price — instantly.
 </p>
 </div>
 </Reveal>

 <Reveal delay={0.15}>
 <div className="glass-strong rounded-3xl p-6 lg:p-10 max-w-4xl mx-auto">
 {/* Visit type toggle */}
 <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8">
 {VISIT_OPTIONS.map((opt) => {
 const I = (Icon as any)[opt.icon] as React.FC<{ size?: number }>;
 const active = visit === opt.id;
 return (
 <button
 key={opt.id}
 onClick={() => setVisit(opt.id)}
 className={`relative flex flex-col items-center gap-1 sm:gap-2 rounded-2xl px-2 sm:px-4 py-3 sm:py-4 text-center transition-all duration-200 ease-expo ${
 active
 ? "bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-cta"
 : "bg-white/70 text-primary-800 hover:bg-white"
 }`}
 >
 <I size={20} />
 <span className="text-xs sm:text-sm font-semibold">{opt.label}</span>
 <span className="text-[10px] sm:text-xs opacity-80">{opt.sub}</span>
 </button>
 );
 })}
 </div>

 {/* Sessions slider */}
 <div className="mb-6">
 <div className="flex items-baseline justify-between mb-3">
 <label htmlFor="sessions" className="text-sm font-semibold text-primary-800">
 Number of sessions
 </label>
 <span className="text-2xl font-bold text-primary-900 tabular-nums">{sessions}</span>
 </div>
 <input
 id="sessions"
 type="range"
 min={1}
 max={24}
 step={1}
 value={sessions}
 onChange={(e) => setSessions(Number(e.target.value))}
 className="w-full accent-accent-600 h-2"
 aria-valuemin={1}
 aria-valuemax={24}
 aria-valuenow={sessions}
 />
 <div className="flex justify-between text-[10px] text-ink-muted mt-1 tabular-nums">
 <span>1</span>
 <span>6</span>
 <span>12</span>
 <span>18</span>
 <span>24</span>
 </div>
 </div>

 {/* Tier badge */}
 {tier && (
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-100 text-accent-800 px-4 py-1.5 text-sm font-semibold"
 >
 <Icon.check size={14} />
 {tier.label} on packages of {tier.min}+
 </motion.div>
 )}

 {/* Pricing breakdown */}
 <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6 p-4 sm:p-6 bg-white/50 rounded-2xl">
 <div>
 <div className="text-xs uppercase tracking-wider text-ink-muted">Per session</div>
 <div className="text-2xl lg:text-3xl font-bold text-primary-900 mt-1 tabular-nums">
 {formatINR(per)}
 </div>
 {tier && (
 <div className="text-xs text-ink-muted line-through tabular-nums">
 {formatINR(PRICE[visit])}
 </div>
 )}
 </div>
 <div>
 <div className="text-xs uppercase tracking-wider text-ink-muted">Sessions</div>
 <div className="text-2xl lg:text-3xl font-bold text-primary-900 mt-1 tabular-nums">
 {sessions}
 </div>
 </div>
 <div>
 <div className="text-xs uppercase tracking-wider text-ink-muted">Package total</div>
 <div className="text-2xl lg:text-3xl font-bold text-accent-700 mt-1 tabular-nums">
 {formatINR(total)}
 </div>
 {tier && (
 <div className="text-xs text-accent-700 font-semibold">
 You save {formatINR(PRICE[visit] * sessions - total)}
 </div>
 )}
 </div>
 </div>

 {/* CTA */}
 <div className="flex flex-col sm:flex-row gap-3">
 <button
 onClick={() => openLead({ visitType: visit, source: `pricing-${visit}-${sessions}` })}
 className="btn-primary flex-1"
 >
 Book {sessions} {sessions === 1 ? "session" : "sessions"} · {formatINR(total)}
 </button>
 <a
 href="https://calendly.com/your-link/assessment"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-secondary"
 >
 Open booking calendar
 </a>
 </div>

 {/* Tier table */}
 <div className="mt-8 pt-6 border-t border-primary-100">
 <h4 className="text-xs uppercase tracking-wider text-ink-muted mb-3">Package discounts</h4>
 <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
 {TIERS.slice().reverse().map((t) => (
 <li
 key={t.min}
 className={`rounded-xl p-3 text-center ${
 sessions >= t.min ? "bg-accent-50 text-accent-800 font-semibold" : "bg-white/50 text-ink-muted"
 }`}
 >
 <div className="font-bold tabular-nums">{t.min}+</div>
 <div className="text-xs">{t.label}</div>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </Reveal>
 </div>
 </section>
 );
}
