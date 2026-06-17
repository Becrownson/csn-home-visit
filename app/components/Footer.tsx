import { Icon } from "./Icon";
import { AREAS } from "../lib/areas";
import { PHONE_DISPLAY, EMAIL, WHATSAPP_NUMBER } from "../lib/wa";

export function Footer() {
 return (
 <footer className="bg-primary-900 text-primary-100 pt-16 pb-8">
 <div className="container-page">
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
 {/* Brand */}
 <div>
 <div className="flex items-center gap-2 font-display text-lg font-semibold text-white">
 <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary-400 to-accent-400 text-white">
 <Icon.sport size={18} />
 </span>
 CrownPhysio
 </div>
 <p className="text-sm text-primary-200 mt-3 leading-relaxed">
 Premium home-visit, in-clinic & tele physiotherapy in Chhatrapati Sambhajinagar since 2004.
 </p>
 </div>

 {/* Contact */}
 <div>
 <h4 className="text-xs uppercase tracking-wider text-primary-300 font-semibold">Contact</h4>
 <ul className="mt-3 space-y-2 text-sm">
 <li>
 <a href={`tel:+91${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-white transition-colors">
 <Icon.phone size={14} /> {PHONE_DISPLAY}
 </a>
 </li>
 <li>
 <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
 <Icon.whatsapp size={14} /> WhatsApp
 </a>
 </li>
 <li>
 <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
 <Icon.mail size={14} /> {EMAIL}
 </a>
 </li>
 </ul>
 </div>

 {/* Service modes */}
 <div>
 <h4 className="text-xs uppercase tracking-wider text-primary-300 font-semibold">Modes</h4>
 <ul className="mt-3 space-y-2 text-sm">
 <li className="flex items-center gap-2"><Icon.home size={14} /> Home visit</li>
 <li className="flex items-center gap-2"><Icon.clinic size={14} /> In-clinic</li>
 <li className="flex items-center gap-2"><Icon.tele size={14} /> Tele consultation</li>
 </ul>
 </div>

 {/* Service areas */}
 <div>
 <h4 className="text-xs uppercase tracking-wider text-primary-300 font-semibold">Service areas</h4>
 <ul className="mt-3 space-y-1.5 text-sm">
 {AREAS.map((a) => (
 <li key={a} className="text-primary-200">{a}</li>
 ))}
 </ul>
 </div>
 </div>

 <div className="pt-6 border-t border-primary-800 text-xs text-primary-300 flex flex-wrap items-center justify-between gap-2">
 <div>© {new Date().getFullYear()} CrownPhysio.online · All rights reserved.</div>
 <div>Built with care in Chhatrapati Sambhajinagar</div>
 </div>
 </div>
 </footer>
 );
}
