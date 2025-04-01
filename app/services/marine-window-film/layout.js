import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export const metadata = {
  title:
    "Marine Window Tinting, Yacht Window Tinting — American Glass Coatings",
  description:
    "Adding a high-performance window film is the ideal way to improve your boat's comfort, privacy and style. American Glass Coatings helps you to determine the finest product for your yacht or marine vessel.",
  openGraph: {
    type: "website",
    url: "https://www.americanglasscoatings.com/services/marine-window-film",
    title:
      "Marine Window Tinting, Yacht Window Tinting — American Glass Coatings",
    description:
      "Adding a high-performance window film is the ideal way to improve your boat's comfort, privacy and style. American Glass Coatings helps you to determine the finest product for your yacht or marine vessel.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "American Glass Coatings - Marine Window Film",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "americanglasscoatings.com",
    url: "https://www.americanglasscoatings.com/services/marine-window-film",
    title:
      "Marine Window Tinting, Yacht Window Tinting — American Glass Coatings",
    description:
      "Adding a high-performance window film is the ideal way to improve your boat's comfort, privacy and style. American Glass Coatings helps you to determine the finest product for your yacht or marine vessel.",
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
