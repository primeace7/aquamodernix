import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-primary py-20 text-background">
      <div className="container flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl font-display text-3xl font-semibold md:text-4xl"
        >
          Ready to strengthen your operation?
        </motion.h2>
        <p className="mt-4 max-w-md text-background/80">
          Book a consultation, request a supply quote, or explore a
          partnership — our team responds within one business day.
        </p>
        <Button asChild size="lg" variant="accent" className="mt-8">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}
