import { PageHeader } from "@/shared/components/PageHeader";
import { PageContactCta } from "@/shared/components/PageContactCta";
import { GraduationCap, Award, Users } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Bachelor's in Agricultural Engineering",
    detail:
      "A technical foundation in the systems and infrastructure that underpin productive farms and hatcheries.",
  },
  {
    icon: Award,
    title: "Erasmus Mundus Scholar",
    detail:
      "Selected for one of the most competitive international scholarship programs, reflecting recognized academic distinction.",
  },
  {
    icon: Users,
    title: "MSc in Aquaculture",
    detail:
      "Graduate-level training in modern aquaculture science, applied directly to Nigerian farm and fisheries conditions.",
  },
];

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About AquaModernix"
        title="Built on formal training and hands-on results."
        description="AquaModernix exists to bring rigorous, internationally-trained aquaculture and agribusiness expertise to operators across Nigeria — without the disconnect from local conditions that imported consulting often carries."
      />

      <section className="bg-background py-20">
        <div className="container grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Track record
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground md:text-3xl">
              A consultancy measured by client outcomes.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement — whether a consulting audit, a poultry supply
              partnership, or an aquaculture buildout — is judged on
              measurable results: lower mortality, better feed conversion,
              stronger margins, and partnerships that last beyond a single
              transaction. That standard shapes how AquaModernix works with
              every client, from smallholder operations to larger commercial
              farms.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              The founder
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground md:text-3xl">
              Expertise shaped by formal training and fieldwork.
            </h2>
            <div className="mt-6 space-y-5">
              {credentials.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{c.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageContactCta
        heading="Want to work directly with our team?"
        body="Tell us about your operation and we'll recommend the right starting point."
      />
    </>
  );
}
