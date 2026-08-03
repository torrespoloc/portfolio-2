import type { Metadata } from "next";
import { Bricolage_Grotesque, Mona_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/layout/NavBar";
import { SiteFooter } from "@/components/SiteFooter";
import { CustomCursor } from "@/components/CustomCursor";
import { SplashScreen } from "@/components/SplashScreen";
import { BackToTop } from "@/components/BackToTop";
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
 title: "J A C K I – AI-Native Product Designer",
 description:
 " AI-Native Product Designer. I design AI-powered products that drive conversion and retention across health tech, fintech, and real estate.",
 icons: {
 icon: "/logo.svg",
 },
 openGraph: {
 title: "J A C K I – AI-Native Product Designer",
 description:
 " AI-Native Product Designer. I design AI-powered products that drive conversion and retention across health tech, fintech, and real estate.",
 url: siteUrl,
 siteName: "Jackeline Torres",
 images: [
 {
 url: `${siteUrl}/og-image.png`,
 width: 1200,
 height: 800,
 alt: "Jackeline Torres - AI-Native Product Designer",
 },
 ],
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "J A C K I – AI-Native Product Designer",
 description:
 " AI-Native Product Designer. I design AI-powered products that drive conversion and retention across health tech, fintech, and real estate.",
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
 <a
 href="#main-content"
 className="fixed -top-full left-4 z-[9999] bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all focus:top-0 focus:outline-none"
 >
 Skip to content
 </a>
 <CustomCursor />
 <SplashScreen showOnce />
 <BackToTop />
 <header className="relative z-50 bg-transparent">
 <NavBar />
 </header>
 <main id="main-content" className="flex-1">
 {children}
 </main>
 <SiteFooter />
 </body>
 </html>
 );
}
