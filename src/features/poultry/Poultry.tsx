import { PageHeader } from "@/shared/components/PageHeader";
import { PageContactCta } from "@/shared/components/PageContactCta";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/ui/card";

const offerings = [
  {
    title: "Sales & Supply",
    description:
      "Healthy, well-managed poultry supply for buyers and retailers, backed by consistent biosecurity and flock health practices.",
  },
  {
    title: "Production Partnership",
    description:
      "Working alongside poultry operators to improve feed conversion, flock health, and overall production efficiency.",
  },
  {
    title: "Buyer & Distributor Partnerships",
    description:
      "Structured agreements linking poultry producers with dependable, long-term buyers across the region.",
  },
];

export function Poultry() {
  return (
    <>
      <PageHeader
        eyebrow="Poultry"
        title="Poultry supply built on flock health and production discipline."
        description="AquaModernix's poultry business pairs consistent supply with the production expertise needed to keep flocks healthy and yields predictable."
        image="/images/poultry-hero.jpg"
      />

      <section className="bg-background py-20">
        <div className="container grid gap-6 md:grid-cols-3">
          {offerings.map((o) => (
            <Card key={o.title}>
              <CardHeader>
                <CardTitle>{o.title}</CardTitle>
                <CardDescription>{o.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <PageContactCta
        heading="Looking to buy, supply, or partner?"
        body="Tell us your volume and timeline and we'll follow up with next steps."
      />
    </>
  );
}
