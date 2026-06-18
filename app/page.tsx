import { LeadModalProvider } from "./components/LeadModalContext";
import { LeadModal } from "./components/LeadModal";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustBand } from "./components/TrustBand";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { BodyMap } from "./components/BodyMap";
import { HowItWorks } from "./components/HowItWorks";
import { AdvancedEquipment } from "./components/AdvancedEquipment";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { LocationSection } from "./components/LocationSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function HomePage() {
 return (
 <LeadModalProvider>
 <Nav />
 <main>
 <Hero />
 <TrustBand />
 <About />
 <Services />
 <BodyMap />
 <HowItWorks />
 <AdvancedEquipment />
 <Pricing />
 <Testimonials />
 <FAQ />
 <LocationSection />
 <FinalCTA />
 </main>
 <Footer />
 <LeadModal />
 </LeadModalProvider>
 );
}