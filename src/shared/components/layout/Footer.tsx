import { Link } from "react-router-dom";
import { NewsletterSignup } from "@/shared/components/layout/NewsletterSignup";

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-primary text-background">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">AquaModernix</p>
          <p className="mt-2 max-w-xs text-sm text-background/70">
            Aquaculture, poultry, and agribusiness consulting built on hands-on
            expertise and a track record of results across Nigeria.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm text-background/80">
          <Link to="/about" className="hover:text-accent">
            About
          </Link>
          <Link to="/consulting" className="hover:text-accent">
            Consulting
          </Link>
          <Link to="/aquaculture" className="hover:text-accent">
            Aquaculture
          </Link>
          <Link to="/poultry" className="hover:text-accent">
            Poultry
          </Link>
          <Link to="/blog" className="hover:text-accent">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-accent">
            Contact
          </Link>
        </nav>

        <NewsletterSignup />
      </div>

      <div className="border-t border-background/10 py-5 text-center text-xs text-background/50">
        © {new Date().getFullYear()} AquaModernix. All rights reserved.
      </div>
    </footer>
  );
}
