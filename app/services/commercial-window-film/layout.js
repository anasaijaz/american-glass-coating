import React from "react";

export const metadata = {
  title:
    "Window Film For Commercial Buildings, Commercial Window Tinting — American Glass Coatings",
  description:
    "American Glass Coatings has a dedicated team of accredited consultants and commercial window film installers to help you determine the right product for your business.",
  openGraph: {
    type: "website",
    url: "https://www.americanglasscoatings.com/services/commercial-window-film",
    title:
      "Window Film For Commercial Buildings, Commercial Window Tinting — American Glass Coatings",
    description:
      "American Glass Coatings has a dedicated team of accredited consultants and commercial window film installers to help you determine the right product for your business.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "American Glass Coatings - Commercial Window Film",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "americanglasscoatings.com",
    url: "https://www.americanglasscoatings.com/services/commercial-window-film",
    title:
      "Window Film For Commercial Buildings, Commercial Window Tinting — American Glass Coatings",
    description:
      "American Glass Coatings has a dedicated team of accredited consultants and commercial window film installers to help you determine the right product for your business.",
    images: ["/og_image.png"],
  },
};

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
