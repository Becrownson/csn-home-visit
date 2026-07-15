"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Icon } from "./Icon";
import { useLeadModal } from "./LeadModalContext";

const LINKS = [
 { href: "#services", label: "Services" },
 { href: "#top", label: "Conditions" },
 { href: "#pricing", label: "Pricing" },
 { href: "#how-it-works", label: "How it works" },
 { href: "#testimonials", label: "Reviews" },
 { href: "#visit", label: "Visit" },
 { href: "#faq", label: "FAQ" },
];

export function Nav() {
 const [scrolled, setScrolled] = useState(false);
 const [open, setOpen] = useState(false);
 const reduce = useReducedMotion();
 const { openLead } = useLeadModal();

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 24);
 onScroll();
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
 <>
 <motion.nav
 initial={reduce ? false : { y: -30, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="fixed top-4 inset-x-4 sm:top-6 sm:inset-x-6 z-40"
 aria-label="Primary"
 >
 <div
 className={`mx-auto max-w-6xl rounded-full transition-all duration-300 ease-expo ${
 scrolled
 ? "glass-strong shadow-glass"
 : "glass-soft"
 }`}
 >
 <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5">
 {/* Brand */}
 <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-primary-900">
 <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white">
 <Icon.sport size={18} />
 </span>
 <span className="hidden sm:inline">HomePhysio</span>
 </a>

 {/* Desktop links */}
 <ul className="hidden lg:flex items-center gap-1">
 {LINKS.map((l) => (
 <li key={l.href}>
 <a
 href={l.href}
 className="px-3 py-2 text-sm font-medium text-ink-muted hover:text-primary-700 rounded-full transition-colors"
 >
 {l.label}
 </a>
 </li>
 ))}
 </ul>

 {/* CTA + mobile toggle */}
 <div className="flex items-center gap-2">
 <a
 href="#pricing"
 className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-accent-600 text-white text-sm font-semibold px-4 py-2 shadow-cta hover:bg-accent-700 transition-colors"
 >
 Book now
 <Icon.arrow size={14} />
 </a>
 <button
 onClick={() => setOpen(true)}
 className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-white/80 border border-white/60 text-primary-800"
 aria-label="Open menu"
 >
 <Icon.menu size={20} />
 </button>
 </div>
 </div>
 </div>
 </motion.nav>

 {/* Mobile drawer */}
 <AnimatePresence>
 {open && (
 <motion.div
 initial={reduce ? false : { opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.2 }}
 className="fixed inset-0 z-50 lg:hidden"
 >
 <div
 className="absolute inset-0 bg-primary-900/40 backdrop-blur-sm"
 onClick={() => setOpen(false)}
 aria-hidden
 />
 <motion.div
 initial={reduce ? false : { x: "100%" }}
 animate={{ x: 0 }}
 exit={{ x: "100%" }}
 transition={{ type: "spring", stiffness: 260, damping: 28 }}
 className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-primary-50 shadow-2xl p-6 flex flex-col"
 role="dialog"
 aria-label="Menu"
 >
 <div className="flex justify-end">
 <button
 onClick={() => setOpen(false)}
 className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary-800"
 aria-label="Close menu"
 >
 <Icon.close size={20} />
 </button>
 </div>
 <ul className="mt-8 space-y-1">
 {LINKS.map((l) => (
 <li key={l.href}>
 <a
 href={l.href}
 onClick={() => setOpen(false)}
 className="block px-4 py-3 text-lg font-semibold text-primary-900 rounded-2xl hover:bg-white"
 >
 {l.label}
 </a>
 </li>
 ))}
 </ul>
 <button
 onClick={() => {
 setOpen(false);
 openLead({ source: "nav-mobile" });
 }}
 className="mt-8 btn-primary w-full"
 >
 Book a session
 </button>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </>
 );
}
