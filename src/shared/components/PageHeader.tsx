export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-primary py-20 text-background">
      <div className="container max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg text-background/80">{description}</p>
      </div>
    </section>
  );
}
