// ============================================================================
// HOW I SEE — Site Configuration (the only file you ever need to edit)
// ============================================================================
// Phase 1 ("links"): Paste your public Stripe Payment Links into `rent.link`,
// `buy.link`, and (optionally) `support.link`. While a link is "", its button
// stays greyed out with a "Checkout opens soon" notice.
//
// Phase 2 ("worker"): Set `mode: "worker"` and `WORKER_URL` to your paywall
// worker endpoint to unlock instant tokenized playback on watch.html.
// NEVER put Stripe secret API keys in this file — only public Payment Links.
// ============================================================================

window.SITE = {
  mode: "links",            // "links" = Stripe Payment Links, "worker" = phase-2 paywall
  WORKER_URL: "",
  rent:    { label: "Rent", price: "$4", terms: "48 hours to watch, streaming in HD", link: "https://buy.stripe.com/fZu6oH3m48PPbOibS87g400" },
  buy:     { label: "Own",  price: "$9", terms: "Watch any time, as often as you like", link: "https://buy.stripe.com/4gM3cvaOwgih7y209q7g401" },
  support: { label: "Support the film", terms: "Pay what you want, from $5. Goes to the next cut and festival fees. Includes the film.", link: "https://buy.stripe.com/7sYeVd09S1nn6tY09q7g402" },
  trailerEmbed: "https://www.youtube-nocookie.com/embed/videoseries?list=PLEQX7QC9SchHZZeCY9vgstOFX4Oxgf8Ko",
  fragmentsUrl: "https://www.youtube.com/playlist?list=PLEQX7QC9SchHZZeCY9vgstOFX4Oxgf8Ko",
  filmfreewayUrl: "https://filmfreeway.com/projects/4067236",
  contactEmail: "zhanpetrov8@gmail.com"
};
