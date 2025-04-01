import React from "react";

export const metadata = {
  title:
    "Residential Window Tinting, Window Tint Film For Home — American Glass Coatings",
  description:
    "American Glass Coatings is your trusted source of high-quality glass window films and tint for residential applications. Our accredited consultants and window film installation experts are able to help you determine the best product for your residential window tinting needs.",
  openGraph: {
    type: "website",
    url: "https://www.americanglasscoatings.com/services/residential-window-film",
    title:
      "Residential Window Tinting, Window Tint Film For Home — American Glass Coatings",
    description:
      "American Glass Coatings is your trusted source of high-quality glass window films and tint for residential applications. Our accredited consultants and window film installation experts are able to help you determine the best product for your residential window tinting needs.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "American Glass Coatings - Residential Window Film",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "americanglasscoatings.com",
    url: "https://www.americanglasscoatings.com/services/residential-window-film",
    title:
      "Residential Window Tinting, Window Tint Film For Home — American Glass Coatings",
    description:
      "American Glass Coatings is your trusted source of high-quality glass window films and tint for residential applications. Our accredited consultants and window film installation experts are able to help you determine the best product for your residential window tinting needs.",
    images: ["/og_image.png"],
  },
};

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
