import { motion } from "framer-motion";

const frictions = [
  {
    problem: "Fish and poultry mortality from poor water and flock management",
    response:
      "Hands-on protocols for water quality, stocking density, and biosecurity that cut losses at the source.",
  },
  {
    problem: "Rising feed costs eating into already thin margins",
    response:
      "Feed conversion audits and sourcing guidance that improve yield per naira spent.",
  },
  {
    problem: "Limited access to proven, science-backed local expertise",
    response:
      "Consulting grounded in formal aquaculture training and real Nigerian farm conditions — not imported theory.",
  },
];

export function HookSection() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Why it matters
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
            Nigeria's aquaculture and poultry operators are losing money to
            problems that are solvable.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {frictions.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <p className="font-display text-lg font-semibold text-foreground">
                {item.problem}
              </p>
              <div className="mt-3 h-px w-10 bg-accent" />
              <p className="mt-3 text-sm text-muted-foreground">
                {item.response}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
