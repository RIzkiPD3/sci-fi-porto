import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import CircuitBackground from "../components/ui/CircuitBackground";
import GSAPAnimations from "../components/ui/GSAPAnimations";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sci-Fi Portfolio | Futuristic Tech Showcase",
  description:
    "A cutting-edge portfolio showcasing innovative projects and futuristic technology solutions. Built with Next.js 14, featuring dynamic circuit animations and modern design.",
  keywords: [
    "portfolio",
    "sci-fi",
    "technology",
    "futuristic",
    "developer",
    "next.js",
    "react",
  ],
  authors: [{ name: "Sci-Fi Developer" }],
  openGraph: {
    title: "Sci-Fi Portfolio | Futuristic Tech Showcase",
    description:
      "A cutting-edge portfolio showcasing innovative projects and futuristic technology solutions.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00e6e6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${orbitron.variable} ${poppins.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}
      >
        <GSAPAnimations>
          <CircuitBackground />
          <main className="relative z-10 min-h-screen">{children}</main>
        </GSAPAnimations>
      </body>
    </html>
  );
}
