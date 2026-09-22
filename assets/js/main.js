/* ==========================================================================
   DRA SOLUTIONS — Comportamento da página
   Aplica os links de assets/js/config.js aos botões e habilita pequenas
   melhorias progressivas. Nenhuma dependência externa.
   ========================================================================== */

(function () {
  "use strict";

  function buildWhatsAppUrl(number, message) {
    var base = "https://wa.me/" + String(number).replace(/\D/g, "");
    return message ? base + "?text=" + encodeURIComponent(message) : base;
  }

  function isRealLink(href) {
    return typeof href === "string" && href.trim() !== "" && href.trim() !== "#";
  }

  function applyLinks() {
    if (typeof companyLinks === "undefined") return;

    var map = {
      whatsapp: buildWhatsAppUrl(companyLinks.whatsappNumber, companyLinks.whatsappMessage),
      website: companyLinks.website,
      instagram: companyLinks.instagram,
    };

    Object.keys(map).forEach(function (key) {
      var el = document.querySelector('[data-link="' + key + '"]');
      if (!el) return;

      var href = map[key];
      el.setAttribute("href", href);

      // Links ainda não configurados ("#") ficam visualmente ativos mas
      // não abrem em nova aba nem quebram a navegação por teclado.
      if (isRealLink(href) && key !== "whatsapp") {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  function setFooterYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLinks();
    setFooterYear();
  });
})();
