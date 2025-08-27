import AboutSection from "./componet/AboutSection";
import CallToActionSection from "./componet/CallToActionSection";
import ContactSection from "./componet/ContactSection";
import FaqSection from "./componet/FaqSection";
import FeaturesAltSection from "./componet/FeaturesAltSection";
import FeaturesSection from "./componet/FeaturesSection";
import Footer from "./componet/footer";
import Header from "./componet/header";
import HeroSection from "./componet/HeroSection";
import PortfolioSection from "./componet/PortfolioSection";
import PricingSection from "./componet/PricingSection";
import ServicesSection from "./componet/ServicesSection";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <FeaturesSection />
    <FeaturesAltSection />
    <CallToActionSection />
    <PortfolioSection />
    <PricingSection />
    <FaqSection />
    <ContactSection />
    <Footer />
    </>
  );
}
