import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
