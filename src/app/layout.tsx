import type { Metadata } from "next";
import { Bricolage_Grotesque, Mona_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/layout/NavBar";
import { SiteFooter } from "@/components/SiteFooter";
import { CustomCursor } from "@/components/CustomCursor";
import { SplashScreen } from "@/components/SplashScreen";
import Script from "next/script";

const bricolage = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const monaSans = Mona_Sans({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});


const siteUrl = "https://www.jackelinetorres.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "J A C K I – AI Product Designer",
  description:
    " AI Product Designer crafting apps and systems that users love.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "J A C K I – AI Product Designer",
    description:
      " AI Product Designer crafting apps and systems that users love.",
    url: siteUrl,
    siteName: "Jackeline Torres",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 800,
        alt: "Jackeline Torres -  AI Product Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "J A C K I – AI Product Designer",
    description:
      " AI Product Designer crafting apps and systems that users love.",
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
      className={cn("h-full", "antialiased", bricolage.variable, monaSans.variable, "font-sans")}
    >
      <body className="min-h-screen flex flex-col">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"light";document.documentElement.classList.add(t);var m=document.querySelector('meta[name="color-scheme"]');if(m)m.setAttribute("content",t)}catch(e){document.documentElement.classList.add("light")}})()`,
          }}
        />
        <CustomCursor />
        <SplashScreen showOnce />
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
