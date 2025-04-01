import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export const metadata = {
  title: "Contact — American Glass Coatings",
  description:
    "Get in touch with American Glass Coatings for expert window film solutions in South Florida. Contact us for a free consultation on residential, commercial, marine, and recreational vehicle window tinting.",
  openGraph: {
    type: "website",
    url: "https://www.americanglasscoatings.com/contact",
    title: "Contact — American Glass Coatings",
    description:
      "Get in touch with American Glass Coatings for expert window film solutions in South Florida. Contact us for a free consultation on residential, commercial, marine, and recreational vehicle window tinting.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "American Glass Coatings - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "americanglasscoatings.com",
    url: "https://www.americanglasscoatings.com/contact",
    title: "Contact — American Glass Coatings",
    description:
      "Get in touch with American Glass Coatings for expert window film solutions in South Florida. Contact us for a free consultation on residential, commercial, marine, and recreational vehicle window tinting.",
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
