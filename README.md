# AquaModernix

Marketing site for AquaModernix — consulting, aquaculture/fisheries, and
poultry business segments. React 19 + TypeScript + Tailwind CSS + Vite,
with a Firebase Cloud Functions backend for the contact form and
newsletter signup.

## Project structure

Feature-based layout:

```
src/
  app/            # routing
  shared/         # cross-feature UI primitives, layout, hooks, lib
  features/
    home/         # hero, hook section, services, case studies, CTA
    about/
    contact/
    consulting/
    aquaculture/
    poultry/
    blog/         # fetches posts from Dev.to's public API

functions/        # Firebase Cloud Functions (contact form + newsletter)
```

## Getting started

```bash
npm install
cp .env.example .env      # fill in values, see below
npm run dev
```

The UI primitives in `src/shared/components/ui/` (button, card, input,
label, select) are written by hand in shadcn's exact conventions. If you
want to add more shadcn components later, the CLI will work normally:

```bash
npx shadcn@latest add dialog
```

## Environment variables (frontend)

Set in `.env`:

- `VITE_FUNCTIONS_BASE_URL` — your deployed Cloud Functions base URL
  (e.g. `https://us-central1-your-project.cloudfunctions.net`)
- `VITE_DEVTO_USERNAME` — the Dev.to handle the client publishes under

## The hero video

`src/features/home/components/Hero.tsx` references
`/videos/hero-placeholder.mp4` and `/videos/hero-poster.jpg` — drop your
placeholder (or final generated) video and a poster frame into
`public/videos/` under those exact names, or update the paths in `Hero.tsx`.
We'll craft AI video generation prompts for the real per-segment videos
separately.

## Blog (Dev.to)

The client writes posts in any Markdown-capable editor (Dillinger,
StackEdit, Toast UI Editor), then pastes the Markdown into a new Dev.to
post and publishes. The `/blog` page fetches published posts live via
Dev.to's public API — no key required for reads. Individual posts open
on Dev.to's own page; only the listing lives on your domain.

## Cloud Functions setup

### 1. Contact form → Zoho Mail SMTP

The `submitContactForm` function sends a formatted HTML email straight
through your Zoho Mail business inbox — no separate transactional email
service needed.

```bash
firebase functions:config:set \
  zoho.user="hello@aquamodernix.com" \
  zoho.pass="your-zoho-app-specific-password" \
  zoho.to="hello@aquamodernix.com"
```

Generate an app-specific password in Zoho Mail under
**Settings → Security → App Passwords** (don't use your normal login
password for SMTP).

### 2. Newsletter signup → Zoho Campaigns

The `subscribeToNewsletter` function adds the submitted email straight
to a Zoho Campaigns mailing list — Campaigns owns and stores the
subscriber list, so there's no Firestore or other database involved.

1. In the [Zoho API Console](https://api-console.zoho.com), create a
   **Self Client** or **Server-based** OAuth client.
2. Generate a refresh token with scope `ZohoCampaigns.contact.CREATE`
   (Zoho's docs walk through the one-time grant → refresh token
   exchange).
3. In Zoho Campaigns, create your mailing list and copy its **List Key**
   from the list's settings page.
4. Set config:

```bash
firebase functions:config:set \
  zoho.campaigns_client_id="..." \
  zoho.campaigns_client_secret="..." \
  zoho.campaigns_refresh_token="..." \
  zoho.campaigns_list_key="..."
```

If your Zoho account isn't on the `.com` domain (e.g. `.eu`, `.in`),
update `ZOHO_ACCOUNTS_DOMAIN` and `ZOHO_CAMPAIGNS_DOMAIN` in
`functions/src/subscribeToNewsletter.ts` accordingly.

### Deploying

```bash
cd functions
npm install
npm run deploy
```

## Notes / things to revisit before launch

- Case study numbers on the homepage are placeholders — swap in real,
  verified client outcomes before publishing.
- Confirm CORS is scoped appropriately in both functions before going
  to production (currently open via `cors({ origin: true })` for ease of
  local development).
- Consider adding a `/blog/:slug` detail page that fetches full Markdown
  content from Dev.to's API and renders it in-app, if you'd rather keep
  readers on your domain for the full article too — currently the
  listing is on-site but individual posts open on Dev.to.
