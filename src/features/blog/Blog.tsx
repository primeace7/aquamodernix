import { useEffect, useState } from "react";
import { PageHeader } from "@/shared/components/PageHeader";
import { BlogCard } from "@/features/blog/components/BlogCard";
import { fetchDevToArticles, type DevToArticle } from "@/shared/lib/devto";

type LoadState = "loading" | "loaded" | "error";

export function Blog() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [state, setState] = useState<LoadState>("loading");

  useEffect(() => {
    fetchDevToArticles()
      .then((data) => {
        setArticles(data);
        setState("loaded");
      })
      .catch(() => setState("error"));
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Insights from the field."
        description="Practical notes on aquaculture, poultry, and agribusiness in Nigeria, published as we learn from each engagement."
      />

      <section className="bg-background py-20">
        <div className="container">
          {state === "loading" && (
            <p className="text-center text-muted-foreground">Loading posts…</p>
          )}

          {state === "error" && (
            <p className="text-center text-muted-foreground">
              Couldn't load posts right now. Please check back shortly.
            </p>
          )}

          {state === "loaded" && articles.length === 0 && (
            <p className="text-center text-muted-foreground">
              No posts published yet — check back soon.
            </p>
          )}

          {state === "loaded" && articles.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
