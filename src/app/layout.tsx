import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Raushan Kumar | Frontend Developer",
    template: "%s | Raushan Kumar",
  },
  description:
    "Frontend Developer with 2 years of professional experience building React, Next.js and TypeScript applications, dashboards and business workflows.",
  openGraph: {
    title: "Raushan Kumar | Frontend Developer",
    description:
      "Frontend Developer with 2 years of professional experience building React, Next.js and TypeScript applications, dashboards and business workflows.",
    type: "website",
    siteName: "Raushan Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raushan Kumar | Frontend Developer",
    description:
      "Frontend Developer with 2 years of professional experience building React, Next.js and TypeScript applications, dashboards and business workflows.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
