import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Playfair_Display, Poppins } from "next/font/google";
import SiteWidgets from "./components/SiteWidgets";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mineral Exp Int — Pakistan Minerals Exports",
  description:
    "Mineral Exp Int is a leading exporter of premium Pakistan minerals, gemstones, and industrial rocks to global markets. Trusted worldwide for quality and reliability.",
  keywords: "Pakistan minerals, mineral exports, gemstones, industrial minerals, rocks, Mineral Exp Int",
  openGraph: {
    title: "Mineral Exp Int — Pakistan Minerals Exports",
    description:
      "Exporting premium Pakistan minerals and gemstones to global markets.",
    type: "website",
    url: "https://mineralexp.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${poppins.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className={manrope.className}>
        {children}
        <SiteWidgets />
        <Script
          id="reveal-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){function init(){try{var d=document.documentElement;var s=".reveal,.reveal-fade-right,.reveal-fade-left";var els=document.querySelectorAll(s);var h=window.innerHeight-80;for(var i=0;i<els.length;i++){var r=els[i].getBoundingClientRect();if(r.top<h&&r.bottom>0)els[i].classList.add("revealed");}d.classList.add("reveal-ready");}catch(e){}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();})();`,
          }}
        />
      </body>
    </html>
  );
}
