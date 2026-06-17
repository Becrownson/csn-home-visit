"use client";

import { Reveal } from "./motion/Reveal";
import { Counter } from "./motion/Counter";
import { Icon } from "./Icon";

const STATS = [
 { value: 350, suffix: "+", label: "Patients recovered" },
 { value: 20, suffix: "+", label: "Years experience" },
 { value: 7, suffix: "", label: "Days a week" },
 { value: 100, suffix: "%", label: "Licensed therapists" },
];

const PROOFS = [
 { icon: "home", text: "Home-visit citywide" },
 { icon: "tele", text: "Tele-consultation" },
 { icon: "clock", text: "Same-day slots" },
 { icon: "globe", text: "Hindi • Marathi • English" },
];

export function TrustBand() {
 return (
 <section className="py-12 lg:py-16">
 <div className="container-page">
 <Reveal>
 <div className="glass rounded-3xl p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
 {STATS.map((s) => (
 <div key={s.label} className="text-center">
 <div className="text-3xl lg:text-4xl font-bold text-primary-900">
 <Counter to={s.value} suffix={s.suffix} />
 </div>
 <div className="text-sm text-ink-muted mt-1">{s.label}</div>
 </div>
 ))}
 </div>
 </Reveal>

 <Reveal delay={0.2}>
 <ul className="mt-8 flex flex-wrap gap-3 justify-center">
 {PROOFS.map((p) => {
 const I = (Icon as any)[p.icon] as React.FC<{ size?: number }>;
 return (
 <li
 key={p.text}
 className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-primary-800"
 >
 <I size={16} />
 {p.text}
 </li>
 );
 })}
 </ul>
 </Reveal>
 </div>
 </section>
 );
}
