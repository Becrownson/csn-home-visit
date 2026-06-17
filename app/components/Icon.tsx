import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number): SVGProps<SVGSVGElement> => ({
 width: size,
 height: size,
 viewBox: "0 0 24 24",
 fill: "none",
 stroke: "currentColor",
 strokeWidth: 1.6,
 strokeLinecap: "round",
 strokeLinejoin: "round",
 "aria-hidden": true,
});

export const Icon = {
 home: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="M3 11.5 12 4l9 7.5" />
 <path d="M5 10v10h14V10" />
 <path d="M10 20v-6h4v6" />
 </svg>
 ),
 clinic: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="M4 21V8l8-4 8 4v13" />
 <path d="M9 21v-7h6v7" />
 <path d="M12 11v3M10.5 12.5h3" />
 </svg>
 ),
 tele: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <rect x="3" y="6" width="13" height="12" rx="2" />
 <path d="m17 10 4-2v8l-4-2z" />
 </svg>
 ),
 neuro: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5.7V14a3 3 0 0 0 3 3v0a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 3-3v-1.3A3 3 0 0 0 18 7V6a3 3 0 0 0-3-3 3 3 0 0 0-6 0Z" />
 </svg>
 ),
 sport: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <circle cx="12" cy="12" r="9" />
 <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
 </svg>
 ),
 women: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <circle cx="12" cy="8" r="4" />
 <path d="M5 21c1-4 4-6 7-6s6 2 7 6" />
 </svg>
 ),
 senior: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <circle cx="12" cy="5" r="2.5" />
 <path d="M9 22v-6l-2-3 3-4h4l3 4-2 3v6" />
 <path d="M9 13h6" />
 </svg>
 ),
 surgery: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="m12 3 8 4-8 4-8-4z" />
 <path d="M4 11v6l8 4 8-4v-6" />
 <path d="M12 11v10" />
 </svg>
 ),
 arrow: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="M5 12h14M13 5l7 7-7 7" />
 </svg>
 ),
 check: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="M4 12.5 9 17.5 20 6.5" />
 </svg>
 ),
 close: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="M6 6 18 18M6 18 18 6" />
 </svg>
 ),
 chevron: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="m6 9 6 6 6-6" />
 </svg>
 ),
 menu: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="M4 7h16M4 12h16M4 17h16" />
 </svg>
 ),
 whatsapp: ({ size = 24, ...p }: IconProps) => (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
 <path d="M19.05 4.91A9.84 9.84 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.93 9.93 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7.01 15.24h-.01a8.25 8.25 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.23-.74-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.42.06-.64.31s-.84.83-.84 2.02 1 2.36 1.14 2.51c.14.16 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.31Z" />
 </svg>
 ),
 phone: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
 </svg>
 ),
 mail: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <rect x="3" y="5" width="18" height="14" rx="2" />
 <path d="m3 7 9 6 9-6" />
 </svg>
 ),
 star: ({ size = 24, ...p }: IconProps) => (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
 <path d="m12 2 3 7 7 .5-5.5 4.5 1.5 7-6-4-6 4 1.5-7L2 9.5 9 9z" />
 </svg>
 ),
 clock: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <circle cx="12" cy="12" r="9" />
 <path d="M12 7v5l3 2" />
 </svg>
 ),
 mapPin: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <path d="M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12Z" />
 <circle cx="12" cy="10" r="2.5" />
 </svg>
 ),
 globe: ({ size = 24, ...p }: IconProps) => (
 <svg {...base(size)} {...p}>
 <circle cx="12" cy="12" r="9" />
 <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
 </svg>
 ),
};
