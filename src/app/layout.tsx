import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/layout/NavBar";
import { SiteFooter } from "@/components/SiteFooter";
import { CustomCursor } from "@/components/CustomCursor";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const siteUrl = "https://www.jackelinetorres.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jackeline Torres - Senior Product Designer",
  description:
    "Senior Product Designer crafting apps and systems that users love.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Jackeline Torres - Senior Product Designer",
    description:
      "Senior Product Designer crafting apps and systems that users love.",
    url: siteUrl,
    siteName: "Jackeline Torres",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 800,
        alt: "Jackeline Torres - Senior Product Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jackeline Torres - Senior Product Designer",
    description:
      "Senior Product Designer crafting apps and systems that users love.",
    images: [`${siteUrl}/og-image.png`],
  },
  other: {
    "color-scheme": "light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", dmSans.variable, playfair.variable, "font-sans", "light")}
    >
      <body className="min-h-screen flex flex-col">
        <CustomCursor />
        <header className="relative z-50 bg-transparent">
          <NavBar />
        </header>
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
