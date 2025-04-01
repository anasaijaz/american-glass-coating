import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export const metadata = {
  title: "Window Film Types & Solutions — American Glass Coatings",
  description:
    "Explore our premium window film solutions including Solar & UV Films, Safety & Security Films, Anti-Graffiti Films, and Decorative Films. American Glass Coatings offers high-quality window tinting for commercial, residential, marine, and motorcoach applications.",
  openGraph: {
    type: "website",
    url: "https://www.americanglasscoatings.com/film-types",
    title: "Window Film Types & Solutions — American Glass Coatings",
    description:
      "Explore our premium window film solutions including Solar & UV Films, Safety & Security Films, Anti-Graffiti Films, and Decorative Films. American Glass Coatings offers high-quality window tinting for commercial, residential, marine, and motorcoach applications.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "American Glass Coatings - Window Film Types",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "americanglasscoatings.com",
    url: "https://www.americanglasscoatings.com/film-types",
    title: "Window Film Types & Solutions — American Glass Coatings",
    description:
      "Explore our premium window film solutions including Solar & UV Films, Safety & Security Films, Anti-Graffiti Films, and Decorative Films. American Glass Coatings offers high-quality window tinting for commercial, residential, marine, and motorcoach applications.",
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
