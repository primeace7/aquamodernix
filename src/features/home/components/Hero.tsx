import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-primary text-background">
      {/* Background video - replace /videos/hero-placeholder.mp4 with the
          generated segment video once ready. Loops silently, muted for
          autoplay compliance across browsers. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero-placeholder.mp4" type="video/mp4" />
      </video>

      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />

      <div className="container relative z-10 py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
        >
          Aquaculture &middot; Poultry &middot; Agribusiness Consulting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-6xl"
        >
          Building Nigeria's next generation of aquaculture and poultry
          businesses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-background/85"
        >
          AquaModernix pairs hands-on farm and hatchery expertise with
          rigorous consulting, so operators can produce more, waste less,
          and grow with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button asChild size="lg" variant="accent">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-background/40 text-background hover:bg-background/10">
            <Link to="/blog">Read the Blog</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
