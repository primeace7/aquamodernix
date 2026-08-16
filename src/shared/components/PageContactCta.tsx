import { Link } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";

export function PageContactCta({
  heading = "Ready to talk specifics?",
  body = "Reach out and we'll follow up within one business day.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-border bg-muted/40 py-16">
      <div className="container flex flex-col items-center text-center">
        <h2 className="font-display text-2xl font-semibold text-primary md:text-3xl">
          {heading}
        </h2>
        <p className="mt-2 max-w-md text-muted-foreground">{body}</p>
        <Button asChild size="lg" variant="accent" className="mt-6">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}
