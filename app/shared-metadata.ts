import type { Metadata } from "next";

export const siteUrl = "https://rezona.ai";

export const sharedDescription =
  "Rezona is an AI-powered game creation platform where anyone can turn ideas into playable games in seconds. No coding, no limits, just creativity.";

export const sharedIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/logo.png", type: "image/png" },
  ],
  shortcut: "/favicon.ico",
  apple: "/logo.png",
};

export function createPageMetadata(
  title: string,
  overrides: Omit<Metadata, "title" | "icons"> = {}
): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title,
    description: sharedDescription,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description: sharedDescription,
      url: siteUrl,
      siteName: "Rezona",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: sharedDescription,
    },
    icons: sharedIcons,
    ...overrides,
  };
}
