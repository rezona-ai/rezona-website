import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createPageMetadata } from "../shared-metadata";

export const metadata: Metadata = createPageMetadata("REZONA | Delete Account");

export default function DeleteAccountPage() {
  redirect("https://forms.gle/DpACxYCU627V6m5HA");
}
