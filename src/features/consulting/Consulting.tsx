import { PageHeader } from "@/shared/components/PageHeader";
import { PageContactCta } from "@/shared/components/PageContactCta";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Fewer costly mistakes",
    detail:
      "Avoid the trial-and-error losses — stocking errors, poor site selection, weak biosecurity — that erode margins in a farm's first years.",
  },
  {
    title: "Internationally trained, locally grounded",
    detail:
      "Guidance shaped by MSc-level aquaculture training and an Erasmus Mundus scholarship, applied directly to Nigerian climate, feed markets, and infrastructure realities.",
  },
  {
    title: "Faster path to profitability",
    detail:
      "Structured production and feeding protocols that shorten the time between startup and consistent, sellable output.",
  },
  {
    title: "Ongoing, not one-off",
    detail:
      "Consulting engagements built around check-ins through a full production cycle, not a single report handed over and forgotten.",
  },
];

export function Consulting() {
  return (
    <>
      <PageHeader
        eyebrow="Consulting"
        title="Expert guidance from a trained aquaculture professional."
        description="Working with an aquaculture consultant who holds formal engineering and MSc-level training means fewer costly guesses and a faster route to a stable, profitable operation."
        image="/images/consulting-hero.jpg"
      />

      <section className="bg-background py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
            What you gain from expert consultation
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-foreground">{b.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {b.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageContactCta
        heading="Book a consultation"
        body="Share a few details about your operation and we'll recommend the right engagement."
      />
    </>
  );
}
