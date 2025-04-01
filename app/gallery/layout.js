import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export const metadata = {
  title: "Photo Gallery — American Glass Coatings",
  description:
    "Browse our gallery of completed window film projects. See examples of our residential, commercial, marine, and recreational vehicle window tinting installations throughout South Florida.",
  openGraph: {
    type: "website",
    url: "https://www.americanglasscoatings.com/gallery",
    title: "Photo Gallery — American Glass Coatings",
    description:
      "Browse our gallery of completed window film projects. See examples of our residential, commercial, marine, and recreational vehicle window tinting installations throughout South Florida.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "American Glass Coatings - Photo Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "americanglasscoatings.com",
    url: "https://www.americanglasscoatings.com/gallery",
    title: "Photo Gallery — American Glass Coatings",
    description:
      "Browse our gallery of completed window film projects. See examples of our residential, commercial, marine, and recreational vehicle window tinting installations throughout South Florida.",
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
