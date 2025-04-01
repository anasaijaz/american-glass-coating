import PageHero from "@/components/page-hero";
import AboutJPG from "@/assets/about/about.jpg";
import ClientLogosSection from "@/components/home/previous-clients";
import AboutContent from "@/components/about/about-content";
import StatsSection from "@/components/about/stats-section";
import ServiceAreasSection from "@/components/about/service-area-section";
import TrustIndicatorsSection from "@/components/about/trust-indicator-section";

export const metadata = {
  title: "About Us — American Glass Coatings",
  description:
    "Based in South Florida, the American Glass Coatings team has been proudly serving customers for over 45 years with high-quality window film installations for residential, commercial, marine and recreational vehicles.",
  openGraph: {
    type: "website",
    url: "https://www.americanglasscoatings.com/about",
    title: "About Us — American Glass Coatings",
    description:
      "Based in South Florida, the American Glass Coatings team has been proudly serving customers for over 45 years with high-quality window film installations for residential, commercial, marine and recreational vehicles.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "American Glass Coatings - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "americanglasscoatings.com",
    url: "https://www.americanglasscoatings.com/about-us",
    title: "About Us — American Glass Coatings",
    description:
      "Based in South Florida, the American Glass Coatings team has been proudly serving customers for over 45 years with high-quality window film installations for residential, commercial, marine and recreational vehicles.",
    images: ["/og_image.png"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About American Glass Coatings"
        subtitle="Over 45 Years of Excellence in Window Film Solutions"
        backgroundImage={AboutJPG}
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AboutContent />
          </div>
          <StatsSection />
        </div>
      </section>

      <ServiceAreasSection />
      <TrustIndicatorsSection />
      <ClientLogosSection />
    </main>
  );
}
