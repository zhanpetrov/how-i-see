# HOW I SEE — Official Film Website

One-page website and post-purchase screening room for **HOW I SEE** (2025, 15 min, B&W), a short documentary directed by Zhan Petrov.

- **Live site:** <https://zhanpetrov.github.io/how-i-see/>
- **Repository:** <https://github.com/zhanpetrov/how-i-see>

---

## How to Activate Checkout (Paste Stripe Payment Links)

`config.js` is the **only file you need to edit** to go live with Stripe.

### Step 1 — Create public Payment Links in Stripe
In your [Stripe Dashboard → Payment Links](https://dashboard.stripe.com/payment-links), create:
1. **Rent** product (48-hour streaming access) — e.g. `$4`
2. **Own** product (streaming + downloadable HD copy) — e.g. `$9`
3. *(Optional)* **Support the film** product ("Customer chooses price" / pay what you want)

> **Security rule:** Only paste public `https://buy.stripe.com/...` Payment Links into `config.js`. **Never** commit Stripe secret API keys anywhere in this repository.

### Step 2 — Paste the links into `config.js`
Open [`config.js`](./config.js) and paste each URL into `link`, matching `price` to what you set in Stripe:

```js
window.SITE = {
  mode: "links",            // "links" = Stripe Payment Links, "worker" = phase-2 paywall
  WORKER_URL: "",
  rent:    { label: "Rent", price: "$4", terms: "48 hours to watch, streaming in HD", link: "https://buy.stripe.com/YOUR_RENT_LINK" },
  buy:     { label: "Own",  price: "$9", terms: "Watch any time, plus a downloadable copy", link: "https://buy.stripe.com/YOUR_OWN_LINK" },
  support: { label: "Support the film", terms: "Pay what you want.", link: "https://buy.stripe.com/YOUR_SUPPORT_LINK" },
  trailerEmbed: "https://www.youtube-nocookie.com/embed/videoseries?list=PLEQX7QC9SchHZZeCY9vgstOFX4Oxgf8Ko",
  fragmentsUrl: "https://www.youtube.com/playlist?list=PLEQX7QC9SchHZZeCY9vgstOFX4Oxgf8Ko",
  filmfreewayUrl: "https://filmfreeway.com/projects/4067236",
  contactEmail: "zhanpetrov8@gmail.com"
};
```

- Any tier whose `link` is `""` automatically renders greyed-out (`disabled`) with **"Checkout opens soon"** beneath it.
- As soon as a `link` is non-empty, its button activates automatically and the `"Checkout opens soon"` label disappears.
- To hide the optional **Support the film** bar completely, set `support: null` in `config.js`.

### Step 3 — Commit and push to deploy
GitHub Pages deploys automatically from the `main` branch root:

```bash
git add config.js
git commit -m "Activate Stripe Payment Links"
git push origin main
```

---

## Phase 2 — Automated Paywall & `watch.html`

[`watch.html`](./watch.html) (`noindex, nofollow`) is pre-built for Phase 2 tokenized playback:
1. Deploy your Cloudflare Worker / backend paywall that creates Stripe Checkout Sessions (`POST /checkout`) and verifies completed sessions (`GET /access?session_id=...` or `GET /access?token=...`), returning `{ streamUrl, downloadUrl, expiresAt }`.
2. Set your Stripe Checkout `success_url` to `https://zhanpetrov.github.io/how-i-see/watch.html?session_id={CHECKOUT_SESSION_ID}`.
3. Update `config.js`:
   ```js
   mode: "worker",
   WORKER_URL: "https://your-worker.your-subdomain.workers.dev",
   ```

---

## Local Preview

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

## Project Files

| File | Purpose |
| :--- | :--- |
| `config.js` | Single source of truth for prices, Stripe links, embed URLs, and contact email |
| `index.html` | Main one-page film site (Hero viewfinder, Watch, The Film, Director, Screenings, Press, Credits, Footer) |
| `watch.html` | Post-purchase screening room (`noindex`) for Phase 2 tokenized streaming & download |
| `styles.css` | Pure black-and-white responsive stylesheet (`Big Shoulders Display` + `Source Serif 4`) |
| `site.js` | Wires `window.SITE` into `index.html` and `watch.html` |
| `assets/` | Monochrome viewfinder `favicon.svg` and `og-card.png` for social link previews |
