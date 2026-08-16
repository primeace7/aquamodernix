// Dev.to's public API is unauthenticated for reads and has no rate limit
// paywall. Set VITE_DEVTO_USERNAME to the account the client publishes under.
const DEVTO_USERNAME = import.meta.env.VITE_DEVTO_USERNAME ?? "aquamodernix";
const DEVTO_API_BASE = "https://dev.to/api";

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  canonical_url: string;
}

export async function fetchDevToArticles(): Promise<DevToArticle[]> {
  const res = await fetch(
    `${DEVTO_API_BASE}/articles?username=${DEVTO_USERNAME}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch Dev.to articles (${res.status})`);
  }
  return res.json();
}
