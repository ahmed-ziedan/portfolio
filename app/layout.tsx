import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import MotionProvider from "@/components/ui/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ahmed Ziedan",
  description: "Ahmed Ziedan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/MyLogo.svg" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
