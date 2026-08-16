import type { DevToArticle } from "@/shared/lib/devto";

export function BlogCard({ article }: { article: DevToArticle }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
    >
      {article.cover_image && (
        <img
          src={article.cover_image}
          alt=""
          className="h-44 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
          {article.tag_list.slice(0, 2).join(" · ") || "Update"}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-primary">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {article.description}
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          {new Date(article.published_at).toLocaleDateString()} ·{" "}
          {article.reading_time_minutes} min read
        </p>
      </div>
    </a>
  );
}
