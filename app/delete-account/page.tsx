import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "REZONA",
  description:
    "Rezona is an AI-powered game creation platform where anyone can turn ideas into playable games in seconds. No coding, no limits, just creativity.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function DeleteAccountPage() {
  redirect("https://forms.gle/DpACxYCU627V6m5HA");
}
