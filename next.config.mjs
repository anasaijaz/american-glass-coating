/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
  async redirects() {
    return [
      // Home page redirects
      {
        source: "/home",
        destination: "/",
        permanent: true, // 301 redirect (permanent)
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },

      // About page redirects
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/company",
        destination: "/about",
        permanent: true,
      },

      // Services redirects
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/residential-services",
        destination: "/services/residential-window-film",
        permanent: true,
      },
      {
        source: "/commercial-services",
        destination: "/services/commercial-window-film",
        permanent: true,
      },
      {
        source: "/marine-services",
        destination: "/services/marine-window-film",
        permanent: true,
      },
      {
        source: "/motorcoach-services",
        destination: "/services/motorcoach-window-film",
        permanent: true,
      },

      // Film types redirects
      {
        source: "/window-films",
        destination: "/film-types",
        permanent: true,
      },
      {
        source: "/solar-film",
        destination: "/film-types",
        permanent: true,
      },
      {
        source: "/security-film",
        destination: "/film-types",
        permanent: true,
      },
      {
        source: "/anti-graffiti-film",
        destination: "/film-types",
        permanent: true,
      },
      {
        source: "/decorative-film",
        destination: "/film-types",
        permanent: true,
      },

      // Gallery redirects
      {
        source: "/portfolio",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "/gallery",
        permanent: true,
      },

      // Contact redirects
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/contact",
        permanent: true,
      },

      // Dynamic redirects with path matching
      {
        source: "/blog/:slug",
        destination: "/about", // Redirect old blog posts to about page
        permanent: true,
      },
      {
        source: "/products/:path*",
        destination: "/film-types", // Redirect old product pages to film types
        permanent: true,
      },

      // Catch-all redirect for any other old pages
      {
        source: "/:path((?!_next|api|static|public|favicon.ico).*)",
        has: [
          {
            type: "header",
            key: "referer",
            value: "(.*?)/old-website(.*?)",
          },
        ],
        destination: "/",
        permanent: false, // 307 redirect (temporary)
      },
    ];
  },
};

export default nextConfig;
