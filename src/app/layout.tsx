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

export const metadata: Metadata = {
  title: "Portfolio — Jacki Torres Poloc",
  description: "Design & development portfolio",
  icons: {
    icon: "/logo.svg",
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
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
