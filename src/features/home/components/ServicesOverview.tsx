import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/shared/components/ui/card";

const services = [
  {
    to: "/consulting",
    image: "/images/consulting-card.jpg",
    title: "Consulting",
    description:
      "Strategic and technical guidance from an aquaculture professional with formal engineering and MSc-level training — applied to real Nigerian operating conditions.",
    fromSide: -1,
  },
  {
    to: "/aquaculture",
    image: "/images/aquaculture-card.jpg",
    title: "Aquaculture & Fisheries",
    description:
      "Fish and fisheries sales, supply, and partnership — built on hatchery-to-harvest expertise that protects yield and quality.",
    fromSide: 1,
  },
  {
    to: "/poultry",
    image: "/images/poultry-card.jpg",
    title: "Poultry",
    description:
      "Poultry supply and partnership grounded in flock health, biosecurity, and production practices that hold up at scale.",
    fromSide: -1,
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="container">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
            Three ways we help agribusiness operators grow.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.to}
              initial={{ opacity: 0, x: service.fromSide * 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <Link to={service.to} className="group block h-full">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Background image with muted overlay */}
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40" />
                  </div>
                  <CardHeader>
                    <CardTitle className="mt-3">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
