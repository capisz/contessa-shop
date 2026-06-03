import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Contessa Shop | Current Drop",
  description:
    "A clean storefront concept for Contessa Shop featuring three essential clothing styles and proceeds support for PCRF.",
  icons: {
    icon: "/placeholder-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${ibmPlexMono.variable}`}>{children}</body>
    </html>
  );
}
