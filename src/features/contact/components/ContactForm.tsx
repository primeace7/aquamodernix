import { useState, type FormEvent } from "react";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { AutoResizeTextarea } from "@/shared/components/ui/auto-resize-textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/components/ui/select";
import { submitContactForm, type ContactReason } from "@/shared/lib/api";

const reasonOptions: { value: ContactReason; label: string }[] = [
  { value: "aquaculture_consultation", label: "Aquaculture Consultation" },
  { value: "poultry_supply", label: "Poultry Purchase / Supply" },
  { value: "fisheries_aquaculture_supply", label: "Fisheries / Aquaculture Purchase / Supply" },
  { value: "general_enquiry", label: "General Enquiry" },
  { value: "partnership", label: "Partnership" },
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState<ContactReason | "">("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!reason) return;
    setStatus("loading");
    try {
      await submitContactForm({ name, email, reason, message });
      setStatus("success");
      setName("");
      setEmail("");
      setReason("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-primary">
          Message sent
        </h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out — our team will respond within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason">Reason for contact</Label>
        <Select value={reason} onValueChange={(v) => setReason(v as ContactReason)}>
          <SelectTrigger id="reason">
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            {reasonOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <AutoResizeTextarea
          id="message"
          required
          maxHeightPx={280}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your operation and what you need..."
        />
      </div>

      <Button type="submit" size="lg" variant="accent" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong sending your message. Please try again or
          email us directly.
        </p>
      )}
    </form>
  );
}
