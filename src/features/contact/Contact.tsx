import { PageHeader } from "@/shared/components/PageHeader";
import { ContactForm } from "@/features/contact/components/ContactForm";

export function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's talk about your operation."
        description="Whether it's a consultation, a supply order, or a partnership, tell us what you need and we'll follow up within one business day."
      />

      <section className="bg-background py-20">
        <div className="container max-w-xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
