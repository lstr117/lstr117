/* ============================================================
 *  Gallery rendering & interaction
 * ============================================================ */

(function () {
  "use strict";

  // Sort works newest-first (by date)
  var works = (typeof WORKS !== "undefined" ? WORKS : []).slice().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  var galleryEl = document.getElementById("gallery");
  var filterBarEl = document.getElementById("filterBar");
  var emptyEl = document.getElementById("emptyState");
  var modalOverlay = document.getElementById("modalOverlay");
  var modalEl = document.getElementById("modal");

  if (!galleryEl) return; // not on gallery page

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var activeTag = "all";

  /* ---------- Build filter bar ---------- */
  function buildFilters() {
    var tags = works
      .map(function (w) { return w.tag; })
      .filter(function (v, i, arr) { return v && arr.indexOf(v) === i; });

    var html = '<button class="filter-btn active" data-tag="all">All</button>';
    tags.forEach(function (t) {
      html += '<button class="filter-btn" data-tag="' + escapeAttr(t) + '">' + escapeHtml(t) + "</button>";
    });
    filterBarEl.innerHTML = html;

    filterBarEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeTag = btn.getAttribute("data-tag");
      filterBarEl.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      renderGallery();
    });
  }

  /* ---------- Render gallery cards ---------- */
  function renderGallery() {
    var list = works.filter(function (w) {
      return activeTag === "all" || w.tag === activeTag;
    });

    if (!list.length) {
      galleryEl.innerHTML = "";
      emptyEl.style.display = "block";
      return;
    }
    emptyEl.style.display = "none";

    galleryEl.innerHTML = list.map(function (w) {
      return (
        '<article class="work-card" data-id="' + escapeAttr(w.id) + '">' +
          '<div class="thumb"><img src="' + escapeAttr(w.image) + '" alt="' + escapeAttr(w.title) + '" loading="lazy" /></div>' +
          '<div class="meta">' +
            '<div class="tag">' + escapeHtml(w.tag || "") + "</div>" +
            "<h3>" + escapeHtml(w.title) + "</h3>" +
            '<p class="excerpt">' + escapeHtml(w.englishText) + "</p>" +
            '<div class="date">' + formatDate(w.date) + "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    galleryEl.querySelectorAll(".work-card").forEach(function (card) {
      card.addEventListener("click", function () {
        openModal(card.getAttribute("data-id"));
      });
    });
  }

  /* ---------- Modal ---------- */
  function openModal(id) {
    var w = works.find(function (x) { return x.id === id; });
    if (!w) return;

    var html =
      '<button class="modal-close" aria-label="关闭">&times;</button>' +
      '<img class="modal-image" src="' + escapeAttr(w.image) + '" alt="' + escapeAttr(w.title) + '" />' +
      '<div class="modal-body">' +
        '<div class="tag">' + escapeHtml(w.tag || "") + "</div>" +
        "<h2>" + escapeHtml(w.title) + "</h2>" +
        '<div class="date">Posted ' + formatDate(w.date) + "</div>" +
        '<div class="section-label">Text</div>' +
        '<p class="english-text">' + escapeHtml(w.englishText).replace(/\n/g, "<br>") + "</p>";

    if (w.materials && w.materials.trim()) {
      html +=
        '<div class="section-label">Materials</div>' +
        '<p class="materials">' + escapeHtml(w.materials) + "</p>";
    }

    if (w.thoughts && w.thoughts.trim()) {
      html +=
        '<div class="section-label">Notes</div>' +
        '<p class="thoughts">' + escapeHtml(w.thoughts) + "</p>";
    }

    html += "</div>";

    modalEl.innerHTML = html;

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    modalEl.innerHTML = "";
    document.body.style.overflow = "";
  }

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay || e.target.closest(".modal-close")) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) closeModal();
  });

  /* ---------- Helpers ---------- */
  function formatDate(d) {
    var date = new Date(d);
    if (isNaN(date)) return d;
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function escapeAttr(s) { return escapeHtml(s); }

  /* ---------- Init ---------- */
  buildFilters();
  renderGallery();
})();
