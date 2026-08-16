import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import cors from "cors";

const corsHandler = cors({ origin: true });

// Set these with:
//   firebase functions:config:set zoho.user="hello@aquamodernix.com" zoho.pass="app-specific-password" zoho.to="hello@aquamodernix.com"
// Zoho Mail SMTP: smtp.zoho.com, port 465 (SSL)
const ZOHO_USER = functions.config().zoho?.user;
const ZOHO_PASS = functions.config().zoho?.pass;
const NOTIFY_TO = functions.config().zoho?.to ?? ZOHO_USER;

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: { user: ZOHO_USER, pass: ZOHO_PASS },
});

const REASON_LABELS: Record<string, string> = {
  aquaculture_consultation: "Aquaculture Consultation",
  poultry_supply: "Poultry Purchase / Supply",
  fisheries_aquaculture_supply: "Fisheries / Aquaculture Purchase / Supply",
  general_enquiry: "General Enquiry",
  partnership: "Partnership",
};

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildEmailHtml(name: string, email: string, reasonLabel: string, message: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color:#123A3A;">New Contact Form Submission</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding:8px 0; font-weight:bold; width:120px;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Reason</td><td>${escapeHtml(reasonLabel)}</td></tr>
      </table>
      <p style="font-weight:bold; margin-top:16px;">Message</p>
      <p style="white-space: pre-wrap; border-left: 3px solid #C7902E; padding-left:12px;">${escapeHtml(message)}</p>
    </div>
  `;
}

export const submitContactForm = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { name, email, reason, message } = req.body ?? {};

    if (!name || !email || !reason || !message) {
      res.status(400).json({ error: "Missing required fields." });
      return;
    }

    const reasonLabel = REASON_LABELS[reason] ?? reason;

    try {
      await transporter.sendMail({
        from: `"AquaModernix Website" <${ZOHO_USER}>`,
        to: NOTIFY_TO,
        replyTo: email,
        subject: `New Enquiry: ${reasonLabel} — ${name}`,
        html: buildEmailHtml(name, email, reasonLabel, message),
      });

      res.status(200).json({ success: true });
    } catch (err) {
      functions.logger.error("Failed to send contact email", err);
      res.status(500).json({ error: "Failed to send message." });
    }
  });
});
