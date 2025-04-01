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

export const metadata = {
  title:
    "Window tinting for commercial, residential, marine, and motor-coach applications",
  description:
    "Commercial, Residential, Marine window tinting and window film installations. Call today at (561) 541-4005",
  openGraph: {
    type: "website",
    url: "https://www.americanglasscoatings.com/",
    title:
      "Window tinting for commercial, residential, marine, and motor-coach applications",
    description:
      "Commercial, Residential, Marine, and Motor-Coach window tinting and window film installations. Call today at (561) 541-4005",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "American Glass Coatings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Window tinting for commercial, residential, marine, and motor-coach applications",
    description:
      "Commercial, Residential, Marine, and Motor-Coach window tinting and window film installations. Call today at (561) 541-4005",
    images: ["/og_image.png"],
  },
};

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
