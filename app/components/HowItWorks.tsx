"use client";

import { Reveal } from "./motion/Reveal";
import { Stagger } from "./motion/Stagger";
import { Icon } from "./Icon";

const STEPS = [
 {
 n: "01",
 icon: "phone" as const,
 title: "Book in 60 seconds",
 body: "Tap WhatsApp, share your pain area and preferred time. We confirm a slot within minutes.",
 },
 {
 n: "02",
 icon: "mapPin" as const,
 title: "We come to you",
 body: "For home visits, our licensed physio arrives with everything needed. For tele, we send a video link.",
 },
 {
 n: "03",
 icon: "check" as const,
 title: "Recover with a plan",
 body: "Honest assessment, milestone-based exercises, and weekly progress checks — until you're back to living.",
 },
];

export function HowItWorks() {
 return (
 <section id="how-it-works" className="section">
 <div className="container-page">
 <Reveal>
 <div className="text-center mb-12">
 <span className="eyebrow">Simple process</span>
 <h2 className="h-section mt-3">From pain to plan in three steps</h2>
 </div>
 </Reveal>

 <Stagger className="grid md:grid-cols-3 gap-6" stagger={0.12}>
 {STEPS.map((s) => {
 const I = (Icon as any)[s.icon] as React.FC<{ size?: number; className?: string }>;
 return (
 <div key={s.n} className="glass rounded-glass p-6 lg:p-8 relative">
 <div className="font-display text-5xl font-bold text-primary-200">{s.n}</div>
 <div className="mt-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
 <I size={22} />
 </div>
 <h3 className="font-display text-xl font-semibold text-primary-900 mt-4">
 {s.title}
 </h3>
 <p className="text-sm text-ink-muted mt-2 leading-relaxed">{s.body}</p>
 </div>
 );
 })}
 </Stagger>
 </div>
 </section>
 );
}
