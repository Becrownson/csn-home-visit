"use client";

import { motion, useReducedMotion } from "framer-motion";
import { openWhatsApp } from "../lib/wa";
import { Icon } from "./Icon";

export function FloatingWhatsApp() {
 const reduce = useReducedMotion();
 return (
 <motion.button
 initial={reduce ? false : { scale: 0, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 transition={{ delay: reduce ? 0 : 1.5, type: "spring", stiffness: 220, damping: 18 }}
 onClick={() => openWhatsApp({ source: "floating-fab" })}
 aria-label="Chat on WhatsApp"
 className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-cta hover:scale-110 active:scale-95 transition-transform duration-200"
 >
 <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
 <Icon.whatsapp size={26} className="relative" />
 </motion.button>
 );
}
