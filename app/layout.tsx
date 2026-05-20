import type { Metadata, Viewport } from "next";
import "./globals.css";
import { createPageMetadata } from "./shared-metadata";

export const metadata: Metadata = createPageMetadata(
  "REZONA | AI-powered game creation platform where anyone can turn ideas into playable games in seconds. No coding, no limits, just creativity."
);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full bg-[#050505] text-[#f4f4f4]">{children}</body>
    </html>
  );
}
