import { useState, type FormEvent } from "react";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { subscribeToNewsletter } from "@/shared/lib/api";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await subscribeToNewsletter(email);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <h3 className="font-display text-base font-semibold text-background">
        Keep in touch
      </h3>
      <p className="mt-1 text-sm text-background/70">
        Subscribe for updates on aquaculture, poultry, and agribusiness insights.
      </p>

      <form onSubmit={handleSubmit} className="mt-3 flex max-w-sm gap-2">
        <Input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-background/20 bg-background/10 text-background placeholder:text-background/50"
        />
        <Button type="submit" variant="accent" disabled={status === "loading"}>
          {status === "loading" ? "Joining…" : "Subscribe"}
        </Button>
      </form>

      {status === "success" && (
        <p className="mt-2 text-sm text-accent">You're subscribed — thank you!</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm text-destructive-foreground/80">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
