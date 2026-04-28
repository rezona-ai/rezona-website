import type { Metadata } from "next";
import ExploreMoreClient from "./page-client";

export const metadata: Metadata = {
  title: "Rezona Explore More",
  description: "Explore more games created with Rezona.",
};

export default function ExploreMorePage() {
  return <ExploreMoreClient />;
}
