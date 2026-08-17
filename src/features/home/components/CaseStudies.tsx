import { motion } from "framer-motion";

const cases = [
  {
    metric: "32%",
    label: "reduction in fish mortality",
    detail:
      "A pond-based catfish operation in Ogun State restructured stocking density and water exchange protocols alongside AquaModernix, cutting mortality within one production cycle.",
  },
  {
    metric: "18%",
    label: "improvement in feed conversion",
    detail:
      "A mid-size poultry operation adopted revised feeding schedules and sourcing changes recommended after an on-site production audit.",
  },
  {
    metric: "3",
    label: "new supply partnerships secured",
    detail:
      "A fisheries client expanded distribution after AquaModernix facilitated introductions and structured supply agreements with regional buyers.",
  },
];

export function CaseStudies() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Results
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
            Tangible outcomes, not just recommendations.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="font-display text-4xl font-semibold text-accent">
                {item.metric}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {item.label}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Figures are illustrative — replace with verified client outcomes
          before publishing.
        </p>
      </div>
    </section>
  );
}
