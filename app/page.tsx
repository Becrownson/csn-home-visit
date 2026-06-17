import { LeadModalProvider } from "./components/LeadModalContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustBand } from "./components/TrustBand";
import { Services } from "./components/Services";
import { BodyMap } from "./components/BodyMap";
import { Pricing } from "./components/Pricing";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { LeadModal } from "./components/LeadModal";

export default function Home() {
 return (
 <LeadModalProvider>
 <Nav />
 <main>
 <Hero />
 <TrustBand />
 <Services />
 <BodyMap />
 <Pricing />
 <HowItWorks />
 <Testimonials />
 <FAQ />
 <FinalCTA />
 </main>
 <Footer />
 <FloatingWhatsApp />
 <LeadModal />
 </LeadModalProvider>
 );
}
