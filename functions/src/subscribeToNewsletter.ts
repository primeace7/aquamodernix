import * as functions from "firebase-functions";
import cors from "cors";

const corsHandler = cors({ origin: true });

// Zoho Campaigns API setup:
//   1. Create an OAuth client in the Zoho API Console (console.zoho.com)
//      with scope: ZohoCampaigns.contact.CREATE
//   2. Generate a refresh token once via Zoho's OAuth flow, then exchange it
//      for short-lived access tokens at runtime (access tokens expire ~1hr).
//   3. Set config:
//      firebase functions:config:set \
//        zoho.campaigns_client_id="..." \
//        zoho.campaigns_client_secret="..." \
//        zoho.campaigns_refresh_token="..." \
//        zoho.campaigns_list_key="..."
const CLIENT_ID = functions.config().zoho?.campaigns_client_id;
const CLIENT_SECRET = functions.config().zoho?.campaigns_client_secret;
const REFRESH_TOKEN = functions.config().zoho?.campaigns_refresh_token;
const LIST_KEY = functions.config().zoho?.campaigns_list_key;

// Zoho accounts domain — use accounts.zoho.com, .eu, .in, etc. matching
// where the Zoho account was created.
const ZOHO_ACCOUNTS_DOMAIN = "https://accounts.zoho.com";
const ZOHO_CAMPAIGNS_DOMAIN = "https://campaigns.zoho.com";

async function getAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    refresh_token: REFRESH_TOKEN,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "refresh_token",
  });

  const res = await fetch(`${ZOHO_ACCOUNTS_DOMAIN}/oauth/v2/token?${params}`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error(`Failed to refresh Zoho access token (${res.status})`);
  }

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const subscribeToNewsletter = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { email } = req.body ?? {};

    if (!email || !isValidEmail(email)) {
      res.status(400).json({ error: "A valid email address is required." });
      return;
    }

    try {
      const accessToken = await getAccessToken();

      const params = new URLSearchParams({
        resfmt: "JSON",
        listkey: LIST_KEY,
        contactinfo: JSON.stringify({ "Contact Email": email }),
      });

      const campaignsRes = await fetch(
        `${ZOHO_CAMPAIGNS_DOMAIN}/api/v1.1/json/listsubscribe?${params}`,
        {
          method: "POST",
          headers: {
            Authorization: `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );

      if (!campaignsRes.ok) {
        throw new Error(`Zoho Campaigns request failed (${campaignsRes.status})`);
      }

      res.status(200).json({ success: true });
    } catch (err) {
      functions.logger.error("Failed to subscribe to newsletter", err);
      res.status(500).json({ error: "Failed to subscribe." });
    }
  });
});
