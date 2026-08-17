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
      "Consistent, quality-controlled fish and fisheries supply for buyers, retailers, and processors — sourced and inspected against clear standards.",
  },
  {
    title: "Production Partnership",
    description:
      "Collaborative arrangements with farm operators to improve yield, reduce mortality, and scale output sustainably.",
  },
  {
    title: "Buyer & Distributor Partnerships",
    description:
      "Structured supply agreements that connect producing farms with reliable, long-term buyers across regional markets.",
  },
];

export function Aquaculture() {
  return (
    <>
      <PageHeader
        eyebrow="Aquaculture & Fisheries"
        title="Reliable fish supply, built on real production expertise."
        description="From hatchery to harvest, AquaModernix's aquaculture business combines quality-controlled supply with the technical know-how to keep production consistent."
        image="/images/aquaculture-hero.jpg"
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
