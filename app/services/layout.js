import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export const metadata = {
  title: "Window Film Services — American Glass Coatings",
  description:
    "American Glass Coatings offers professional window tinting and film installation for commercial buildings, residential homes, yachts, and marine vessels throughout South Florida. Our expert team provides high-quality window film solutions for heat reduction, UV protection, privacy, and security.",
  openGraph: {
    type: "website",
    url: "https://www.americanglasscoatings.com/services",
    title: "Window Film Services — American Glass Coatings",
    description:
      "American Glass Coatings offers professional window tinting and film installation for commercial buildings, residential homes, yachts, and marine vessels throughout South Florida. Our expert team provides high-quality window film solutions for heat reduction, UV protection, privacy, and security.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "American Glass Coatings - Window Film Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "americanglasscoatings.com",
    url: "https://www.americanglasscoatings.com/services",
    title: "Window Film Services — American Glass Coatings",
    description:
      "American Glass Coatings offers professional window tinting and film installation for commercial buildings, residential homes, yachts, and marine vessels throughout South Florida. Our expert team provides high-quality window film solutions for heat reduction, UV protection, privacy, and security.",
    images: ["/og_image.png"],
  },
};

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
