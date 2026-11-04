// ============================================================================
// HOW I SEE — Site Configuration (the only file you ever need to edit)
// ============================================================================
// Phase 1 ("links"): the film is free (`free`, `freeVideoId`); `support.link` is a
// pay-what-you-want Stripe Payment Link. While a link is "", its button
// stays greyed out with a "Checkout opens soon" notice.
//
// Phase 2 ("worker"): Set `mode: "worker"` and `WORKER_URL` to your paywall
// worker endpoint to unlock instant tokenized playback on watch.html.
// NEVER put Stripe secret API keys in this file — only public Payment Links.
// ============================================================================

window.SITE = {
  mode: "links",            // "links" = Stripe Payment Links, "worker" = phase-2 paywall
  WORKER_URL: "",
  // Free release: the Screening Room (watch.html) plays this YouTube video for everyone.
  freeVideoId: "7PF84Qt1Ggg",
  free:    { label: "Watch free", price: "$0", priceJa: "0\u5186", terms: "The full film, streaming in HD. No account, no payment.", link: "watch.html" },
  support: { label: "Support the film", price: "Any amount", priceJa: "\u4efb\u610f\u306e\u91d1\u984d", terms: "Pay what you want, any amount from $1. Goes to the next cut and festival fees.", link: "https://buy.stripe.com/7sYeVd09S1nn6tY09q7g402" },
  posterSrc: "assets/poster.jpg",
  trailerSrc: "assets/trailer.mp4",
  trailerPoster: "assets/trailer-poster.jpg",
  trailerEmbed: "",
  vr360VideoId: "f-DT6I0NT-I",
  vr360YoutubeUrl: "https://youtu.be/f-DT6I0NT-I",
  vr360Src: "assets/hyde-ellis-360.mp4",
  vr360Poster: "assets/hyde-ellis-360-poster.jpg",
  interviewsVideoId: "QgwRsArIVKI",
  interviewsYoutubeUrl: "https://youtu.be/QgwRsArIVKI",
  filmfreewayUrl: "https://filmfreeway.com/projects/4067236",
  contactEmail: "zhanpetrov8@gmail.com"
};
