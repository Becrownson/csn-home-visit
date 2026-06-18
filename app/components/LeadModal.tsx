"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLeadModal } from "./LeadModalContext";
import { buildWaUrl, openWhatsApp, type VisitType } from "../lib/wa";
import { AREAS } from "../lib/areas";
import { Icon } from "./Icon";

const VISIT_OPTIONS: { id: VisitType; label: string }[] = [
 { id: "home", label: "Home visit" },
 { id: "clinic", label: "Clinic" },
 { id: "tele", label: "Tele" },
];

export function LeadModal() {
 const reduce = useReducedMotion();
 const { open, preset, closeLead } = useLeadModal();

 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [area, setArea] = useState(AREAS[0]);
 const [visit, setVisit] = useState<VisitType>("home");
 const [condition, setCondition] = useState(preset?.condition ?? "");

 useEffect(() => {
 if (open) {
 if (preset?.visitType) setVisit(preset.visitType);
 if (preset?.condition) setCondition(preset.condition);
 }
 }, [open, preset]);

 useEffect(() => {
 if (!open) return;
 const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeLead();
 document.addEventListener("keydown", onKey);
 document.body.style.overflow = "hidden";
 return () => {
 document.removeEventListener("keydown", onKey);
 document.body.style.overflow = "";
 };
 }, [open, closeLead]);

 const onSubmit = (e: FormEvent) => {
 e.preventDefault();
 openWhatsApp({ name, phone, area, visitType: visit, condition, source: "lead-modal" });
 };

 return (
 <AnimatePresence>
 {open && (
 <motion.div
 className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
 initial={reduce ? false : { opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.2 }}
 role="dialog"
 aria-modal="true"
 aria-label="Book a session"
 >
 <div
 className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm"
 onClick={closeLead}
 aria-hidden
 />
 <motion.div
 initial={reduce ? false : { y: "100%", opacity: 0.5 }}
 animate={{ y: 0, opacity: 1 }}
 exit={reduce ? { opacity: 0 } : { y: "100%", opacity: 0 }}
 transition={{ type: "spring", stiffness: 240, damping: 28 }}
 className="relative w-full sm:max-w-md glass-strong rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
 >
 <button
 onClick={closeLead}
 aria-label="Close"
 className="absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary-800 hover:bg-white shadow-sm"
 >
 <Icon.close size={18} />
 </button>

 {/* Image header */}
 <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 aspect-[16/9] overflow-hidden rounded-t-3xl sm:rounded-t-3xl">
 <Image
 src="/images/website/06_about_team.jpg"
 alt="CrownPhysio team of licensed therapists"
 fill
 sizes="(max-width: 640px) 100vw, 480px"
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/10 to-transparent" />
 <div className="absolute bottom-3 left-5 right-5 text-white">
 <div className="text-[10px] uppercase tracking-wider font-semibold text-cyan-200">
 Booking in 60s
 </div>
 <div className="font-display text-base font-semibold mt-0.5">
 Confirmed on WhatsApp within minutes
 </div>
 </div>
 </div>

 <h2 className="font-display text-2xl font-semibold text-primary-900">Book a session</h2>
 <p className="text-sm text-ink-muted mt-1">
 We&apos;ll confirm your slot on WhatsApp within minutes.
 </p>

 <form onSubmit={onSubmit} className="mt-5 space-y-4">
 <div>
 <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Your name</label>
 <input
 required
 value={name}
 onChange={(e) => setName(e.target.value)}
 className="mt-1 w-full rounded-xl bg-white/80 border border-primary-100 px-4 py-3 text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
 placeholder="Full name"
 />
 </div>
 <div>
 <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Phone</label>
 <input
 required
 type="tel"
 value={phone}
 onChange={(e) => setPhone(e.target.value)}
 className="mt-1 w-full rounded-xl bg-white/80 border border-primary-100 px-4 py-3 text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
 placeholder="+91 ..."
 />
 </div>
 <div>
 <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Area</label>
 <select
 value={area}
 onChange={(e) => setArea(e.target.value)}
 className="mt-1 w-full rounded-xl bg-white/80 border border-primary-100 px-4 py-3 text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
 >
 {AREAS.map((a) => (
 <option key={a}>{a}</option>
 ))}
 </select>
 </div>
 <div>
 <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Visit type</label>
 <div className="mt-1 grid grid-cols-3 gap-2">
 {VISIT_OPTIONS.map((v) => (
 <button
 type="button"
 key={v.id}
 onClick={() => setVisit(v.id)}
 className={`rounded-xl py-2 text-sm font-semibold transition-colors ${
 visit === v.id
 ? "bg-accent-600 text-white"
 : "bg-white/70 text-primary-800 hover:bg-white"
 }`}
 >
 {v.label}
 </button>
 ))}
 </div>
 </div>
 <div>
 <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Condition (optional)</label>
 <input
 value={condition}
 onChange={(e) => setCondition(e.target.value)}
 className="mt-1 w-full rounded-xl bg-white/80 border border-primary-100 px-4 py-3 text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
 placeholder="e.g. Lower back pain"
 />
 </div>
 <button type="submit" className="btn-primary w-full">
 <Icon.whatsapp size={18} />
 Send to WhatsApp
 </button>
 </form>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 );
}
