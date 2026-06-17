import type { Metadata, Viewport } from "next";
import { Figtree, Noto_Sans } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
 subsets: ["latin"],
 variable: "--font-display",
 display: "swap",
 weight: ["300", "400", "500", "600", "700", "800"],
});

const noto = Noto_Sans({
 subsets: ["latin"],
 variable: "--font-body",
 display: "swap",
 weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
 title: {
 default: "CrownPhysio.online — Physiotherapy in Chhatrapati Sambhajinagar | Home, Clinic, Tele",
 template: "%s · CrownPhysio.online",
 },
 description:
 "Premium home-visit, in-clinic and tele physiotherapy in Chhatrapati Sambhajinagar. Pain relief, post-surgery, stroke rehab, sports & women's health. Trusted since 2004.",
 keywords: [
 "physiotherapy Chhatrapati Sambhajinagar",
 "home visit physiotherapist",
 "tele physiotherapy",
 "back pain treatment Sambhajinagar",
 "post-surgery rehab",
 "stroke rehabilitation",
 "sports injury",
 "women's health physio",
 "senior care physiotherapy",
 "CIDCO Garkheda Osmanpura",
 ],
 authors: [{ name: "CrownPhysio" }],
 creator: "CrownPhysio.online",
 metadataBase: new URL("https://crownphysio.online"),
 openGraph: {
 type: "website",
 locale: "en_IN",
 url: "https://crownphysio.online",
 siteName: "CrownPhysio.online",
 title: "CrownPhysio.online — Physiotherapy in Chhatrapati Sambhajinagar",
 description: "Home, clinic & tele physiotherapy. Trusted since 2004.",
 },
 twitter: {
 card: "summary_large_image",
 title: "CrownPhysio.online",
 description: "Premium physiotherapy in Chhatrapati Sambhajinagar",
 },
 alternates: {
 canonical: "https://crownphysio.online",
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true },
 },
};

export const viewport: Viewport = {
 themeColor: "#0891B2",
 width: "device-width",
 initialScale: 1,
 maximumScale: 5,
};

const jsonLd = {
 "@context": "https://schema.org",
 "@type": "MedicalBusiness",
 name: "CrownPhysio.online",
 description:
 "Home-visit, in-clinic and tele physiotherapy in Chhatrapati Sambhajinagar.",
 url: "https://crownphysio.online",
 telephone: "+91-95619-98544",
 email: "Crownphysio@gmail.com",
 areaServed: [
 { "@type": "City", name: "Chhatrapati Sambhajinagar" },
 { "@type": "Place", name: "CIDCO" },
 { "@type": "Place", name: "Garkheda" },
 { "@type": "Place", name: "Osmanpura" },
 { "@type": "Place", name: "Jalna Road" },
 { "@type": "Place", name: "Cantonment" },
 { "@type": "Place", name: "Nirala Bazaar" },
 ],
 availableService: [
 { "@type": "MedicalProcedure", name: "Home-visit Physiotherapy" },
 { "@type": "MedicalProcedure", name: "In-clinic Physiotherapy" },
 { "@type": "MedicalProcedure", name: "Tele Physiotherapy" },
 { "@type": "MedicalProcedure", name: "Stroke & Neuro Rehabilitation" },
 { "@type": "MedicalProcedure", name: "Sports Injury Recovery" },
 { "@type": "MedicalProcedure", name: "Post-surgery Rehabilitation" },
 { "@type": "MedicalProcedure", name: "Women's Health Physiotherapy" },
 { "@type": "MedicalProcedure", name: "Senior Care Physiotherapy" },
 ],
 priceRange: "₹₹",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en" className={`${figtree.variable} ${noto.variable}`}>
 <body className="font-sans">
 {children}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />
 </body>
 </html>
 );
}
