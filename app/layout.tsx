import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contessa | Wear what you stand for",
  description:
    "A limited essentials drop of slogan tees and crops. 20% of proceeds support the Palestine Children's Relief Fund.",
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
      <body>{children}</body>
    </html>
  );
}
