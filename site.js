/* ==========================================================================
   HOW I SEE — Configuration Wiring & Phase-2 Screening Room Controller
   Reads exclusively from window.SITE (defined in config.js).
   ========================================================================== */

(function () {
  "use strict";

  var cfg = window.SITE || {};

  function trimStr(val) {
    return typeof val === "string" ? val.trim() : "";
  }

  function wireGlobalLinks() {
    var trailerUrl = trimStr(cfg.trailerEmbed);
    var trailerEl = document.getElementById("trailer-iframe");
    if (trailerEl && trailerUrl && trailerEl.getAttribute("src") !== trailerUrl) {
      trailerEl.setAttribute("src", trailerUrl);
    }

    var fragmentsUrl = trimStr(cfg.fragmentsUrl);
    if (fragmentsUrl) {
      var fragLinks = document.querySelectorAll("[data-site-fragments]");
      for (var i = 0; i < fragLinks.length; i++) {
        fragLinks[i].setAttribute("href", fragmentsUrl);
      }
    }

    var ffUrl = trimStr(cfg.filmfreewayUrl);
    if (ffUrl) {
      var ffLinks = document.querySelectorAll("[data-site-filmfreeway]");
      for (var j = 0; j < ffLinks.length; j++) {
        ffLinks[j].setAttribute("href", ffUrl);
      }
    }

    var email = trimStr(cfg.contactEmail);
    if (email) {
      var emailLinks = document.querySelectorAll("[data-site-email]");
      for (var k = 0; k < emailLinks.length; k++) {
        emailLinks[k].setAttribute("href", "mailto:" + email);
        if (emailLinks[k].getAttribute("data-site-email") === "text") {
          emailLinks[k].textContent = email;
        }
      }
    }
  }

  function startWorkerCheckout(workerUrl, tierKey, btnEl, statusEl, defaultLabel) {
    btnEl.disabled = true;
    btnEl.textContent = "Opening checkout…";
    if (statusEl) {
      statusEl.hidden = true;
    }

    fetch(workerUrl + "/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tier: tierKey })
    })
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Checkout HTTP " + res.status);
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.url) {
          window.location.href = data.url;
          return;
        }
        throw new Error("Missing checkout URL");
      })
      .catch(function () {
        btnEl.disabled = false;
        btnEl.textContent = defaultLabel;
        if (statusEl) {
          statusEl.textContent = "Unable to reach checkout. Please try again.";
          statusEl.hidden = false;
        }
      });
  }

  function wireTickets() {
    var cards = document.querySelectorAll("[data-tier]");
    if (!cards.length) return;

    var isWorkerMode = trimStr(cfg.mode).toLowerCase() === "worker";
    var workerUrl = trimStr(cfg.WORKER_URL).replace(/\/+$/, "");

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var tierKey = card.getAttribute("data-tier");
      var tierCfg = cfg[tierKey];

      if (!tierCfg) {
        if (tierKey === "support") {
          card.hidden = true;
        }
        continue;
      }

      var label = trimStr(tierCfg.label) || tierKey;
      var price = trimStr(tierCfg.price);
      var terms = trimStr(tierCfg.terms);
      var directLink = trimStr(tierCfg.link);

      var labelEl = card.querySelector("[data-tier-label]");
      var priceEl = card.querySelector("[data-tier-price]");
      var termsEl = card.querySelector("[data-tier-terms]");
      var slotEl = card.querySelector("[data-tier-slot]");
      var statusEl = card.querySelector("[data-tier-status]");

      if (labelEl) labelEl.textContent = label;
      if (priceEl) priceEl.textContent = price;
      if (termsEl) termsEl.textContent = terms;

      if (!slotEl) continue;

      var btnVariant = tierKey === "support" ? "btn btn--outline" : "btn btn--ticket";
      var ctaLabel = price ? label + " — " + price : label;
      slotEl.innerHTML = "";

      if (!isWorkerMode && directLink) {
        var linkEl = document.createElement("a");
        linkEl.className = btnVariant;
        linkEl.href = directLink;
        linkEl.rel = "noopener";
        linkEl.textContent = ctaLabel;
        slotEl.appendChild(linkEl);
        if (statusEl) statusEl.hidden = true;
      } else if (isWorkerMode && workerUrl) {
        var activeBtn = document.createElement("button");
        activeBtn.type = "button";
        activeBtn.className = btnVariant;
        activeBtn.textContent = ctaLabel;
        (function (tKey, bEl, sEl, cLabel) {
          bEl.addEventListener("click", function () {
            startWorkerCheckout(workerUrl, tKey, bEl, sEl, cLabel);
          });
        })(tierKey, activeBtn, statusEl, ctaLabel);
        slotEl.appendChild(activeBtn);
        if (statusEl) statusEl.hidden = true;
      } else {
        var disabledBtn = document.createElement("button");
        disabledBtn.type = "button";
        disabledBtn.className = btnVariant + " is-disabled";
        disabledBtn.disabled = true;
        disabledBtn.setAttribute("aria-disabled", "true");
        disabledBtn.textContent = ctaLabel;
        slotEl.appendChild(disabledBtn);
        if (statusEl) {
          statusEl.textContent = "Checkout opens soon";
          statusEl.hidden = false;
        }
      }
    }
  }

  function wireWatchRoom() {
    var root = document.getElementById("watch-player-root");
    if (!root) return;

    var isWorkerMode = trimStr(cfg.mode).toLowerCase() === "worker";
    var workerUrl = trimStr(cfg.WORKER_URL).replace(/\/+$/, "");
    var params = new URLSearchParams(window.location.search);
    var token = trimStr(params.get("token"));
    var sessionId = trimStr(params.get("session_id"));

    var gateEl = document.getElementById("watch-gate");
    var gateTitle = document.getElementById("watch-gate-title");
    var gateCopy = document.getElementById("watch-gate-copy");
    var videoEl = document.getElementById("film-video");
    var hudModeEl = document.getElementById("watch-hud-mode");
    var controlsBar = document.getElementById("watch-controls-bar");
    var expiryEl = document.getElementById("watch-expiry");
    var downloadEl = document.getElementById("watch-download");

    if (!isWorkerMode || !workerUrl || (!token && !sessionId)) {
      return;
    }

    if (gateTitle) gateTitle.textContent = "Verifying Screening Pass";
    if (gateCopy) gateCopy.textContent = "Checking your access token…";

    var query = new URLSearchParams();
    if (token) query.set("token", token);
    if (sessionId) query.set("session_id", sessionId);

    fetch(workerUrl + "/access?" + query.toString(), {
      method: "GET",
      headers: { "Accept": "application/json" }
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Access denied");
        return res.json();
      })
      .then(function (data) {
        if (!data || !data.streamUrl) {
          throw new Error("Missing stream URL");
        }
        if (videoEl) {
          videoEl.src = data.streamUrl;
          videoEl.hidden = false;
        }
        if (gateEl) {
          gateEl.hidden = true;
        }
        if (hudModeEl) {
          hudModeEl.textContent = data.downloadUrl ? "OWNED · HD" : "RENTAL · HD";
        }
        if (controlsBar) {
          controlsBar.hidden = false;
        }
        if (expiryEl) {
          if (data.expiresAt) {
            var dt = new Date(data.expiresAt);
            expiryEl.textContent =
              "48-hour rental active · Until " +
              (isNaN(dt.getTime()) ? data.expiresAt : dt.toLocaleString());
          } else {
            expiryEl.textContent = "Permanent access · Stream any time";
          }
        }
        if (downloadEl && data.downloadUrl) {
          downloadEl.href = data.downloadUrl;
          downloadEl.hidden = false;
        }
      })
      .catch(function () {
        if (gateTitle) gateTitle.textContent = "Access Expired or Invalid";
        if (gateCopy) {
          gateCopy.textContent =
            "This screening link could not be verified or its 48-hour rental window has ended. Return to the film page or contact us if you need help with your order.";
        }
      });
  }

  wireGlobalLinks();
  wireTickets();
  wireWatchRoom();
})();
