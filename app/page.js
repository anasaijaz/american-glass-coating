import Footer from "@/components/footer";
import AGCChallengeSection from "@/components/home/agc-challenge-section";
import CTASection from "@/components/home/cta-section";
import FAQSection from "@/components/home/faq-section";
import Hero from "@/components/home/hero";
import ClientLogosSection from "@/components/home/previous-clients";
import ServicesSection from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import WorkShowcase from "@/components/home/work-showcase";
import Navbar from "@/components/navbar";
import stuartProjects from "@/lib/stuart-projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ClientLogosSection />
      <AGCChallengeSection />
      {/* <WorkShowcase /> */}
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
