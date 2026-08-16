// Base URL of your deployed Firebase Cloud Functions.
// Set VITE_FUNCTIONS_BASE_URL in a .env file, e.g.:
// VITE_FUNCTIONS_BASE_URL=https://us-central1-your-project.cloudfunctions.net
const FUNCTIONS_BASE_URL = import.meta.env.VITE_FUNCTIONS_BASE_URL ?? "";

export type ContactReason =
  | "aquaculture_consultation"
  | "poultry_supply"
  | "fisheries_aquaculture_supply"
  | "general_enquiry"
  | "partnership";

export interface ContactFormPayload {
  name: string;
  email: string;
  reason: ContactReason;
  message: string;
}

/**
 * Submits the contact form to the `submitContactForm` Cloud Function,
 * which formats the submission as HTML and sends it via Zoho Mail SMTP
 * to the business inbox.
 */
export async function submitContactForm(payload: ContactFormPayload) {
  const res = await fetch(`${FUNCTIONS_BASE_URL}/submitContactForm`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Contact form submission failed (${res.status})`);
  }
  return res.json();
}

/**
 * Submits an email to the `subscribeToNewsletter` Cloud Function,
 * which adds the contact to the Zoho Campaigns mailing list via
 * Zoho's API (no Firestore storage needed - Campaigns owns the list).
 */
export async function subscribeToNewsletter(email: string) {
  const res = await fetch(`${FUNCTIONS_BASE_URL}/subscribeToNewsletter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) {
    throw new Error(`Newsletter subscription failed (${res.status})`);
  }
  return res.json();
}
