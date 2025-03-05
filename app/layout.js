import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src: "./fonts/Work.ttf",
  variable: "--font-work-sans",
  weight: "100 900",
});

const oswaldSans = localFont({
  src: "./fonts/Oswald.ttf",
  variable: "--font-oswald-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "American Glass Coating",
  description:
    "South Florida's most trusted window film specialists for residential, commercial, motorcoach, and marine applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswaldSans.variable} ${workSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
