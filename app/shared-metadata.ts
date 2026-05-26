import type { Metadata } from "next";

export const siteUrl = "https://rezona.ai";

export const sharedTitle = "Rezona — Make Memeplays";

export const sharedDescription =
  "Rezona is the home of memeplays — interactive memes that you tap, play, remix, and ruin. Create yours in minutes with no code, no limits, and only pure chaos.";

export const sharedIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/logo.png", type: "image/png" },
  ],
  shortcut: "/favicon.ico",
  apple: "/logo.png",
};

export function createPageMetadata(
  title: string = sharedTitle,
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
