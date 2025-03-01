import Footer from "@/components/footer";
import AGCChallengeSection from "@/components/home/agc-challenge-section";
import CTASection from "@/components/home/cta-section";
import FAQSection from "@/components/home/faq-section";
import Hero from "@/components/home/hero";
import ClientLogosSection from "@/components/home/previous-clients";
import ServicesSection from "@/components/home/services";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ClientLogosSection />
      <AGCChallengeSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
