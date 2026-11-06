// ============================================================================
// HOW I SEE — Site Configuration (the only file you ever need to edit)
// ============================================================================
// Phase 1 ("links"): `film.link` (pay what you want) and `interviews.link` ($100)
// are Stripe Payment Links. While a link is "", its button
// stays greyed out with a "Checkout opens soon" notice.
//
// Phase 2 ("worker"): Set `mode: "worker"` and `WORKER_URL` to your paywall
// worker endpoint to unlock instant tokenized playback on watch.html.
// NEVER put Stripe secret API keys in this file — only public Payment Links.
// ============================================================================

window.SITE = {
  mode: "links",            // "links" = Stripe Payment Links, "worker" = phase-2 paywall
  WORKER_URL: "",
  // The film: pay what you want (minimum $1). Stripe sends buyers to
  // watch.html with the film's video id; the id is not stored in this file.
  // Optional `linkJa`: separate Japanese-titled Stripe Payment Link so top product text on buy.stripe.com is also in Japanese.
  film:       { label: "Watch the film", price: "Pay what you want", priceJa: "\u4efb\u610f\u306e\u91d1\u984d", terms: "The full film, 15 min, streaming in HD. Pay what you want, from $1.", link: "https://buy.stripe.com/7sYeVd09S1nn6tY09q7g402", linkJa: "" },
  // Full uncut street interviews: $100. Stripe sends buyers to interviews.html with the
  // video id and access key; neither is stored in this file.
  interviews: { label: "Full uncut interviews", price: "$100", priceJa: "100\u30c9\u30eb", terms: "All 41:43 of the uncut street interviews, 11 chapters, with verbatim transcripts in English and Japanese.", link: "https://buy.stripe.com/eVq8wPf4M6HHaKeg8o7g403", linkJa: "" },
  posterSrc: "assets/poster.jpg",
  trailerSrc: "assets/trailer.mp4",
  trailerPoster: "assets/trailer-poster.jpg",
  trailerEmbed: "",
  vr360VideoId: "f-DT6I0NT-I",
  vr360YoutubeUrl: "https://youtu.be/f-DT6I0NT-I",
  vr360Src: "assets/hyde-ellis-360.mp4",
  vr360Poster: "assets/hyde-ellis-360-poster.jpg",
  filmfreewayUrl: "https://filmfreeway.com/projects/4067236",
  contactEmail: "zhanpetrov8@gmail.com"
};
