import type { Metadata } from "next";
import "../explore-more.css";
import { createPageMetadata } from "../shared-metadata";
import ExploreMoreClient from "./page-client";

export const metadata: Metadata = createPageMetadata();

export default function ExploreMorePage() {
  return <ExploreMoreClient />;
}
