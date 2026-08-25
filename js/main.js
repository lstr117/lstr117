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

  /* ---------- Helper: get images array ---------- */
  function getImages(w) {
    if (Array.isArray(w.images) && w.images.length) return w.images;
    if (w.image) return [w.image];
    return [];
  }

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
      var imgs = getImages(w);
      return (
        '<article class="work-card" data-id="' + escapeAttr(w.id) + '">' +
          '<div class="thumb"><img src="' + escapeAttr(imgs[0] || "") + '" alt="' + escapeAttr(w.title) + '" loading="lazy" /></div>' +
          '<div class="meta">' +
            '<div class="tag">' + escapeHtml(w.tag || "") + "</div>" +
            "<h3>" + (w.title ? escapeHtml(w.title) : "") + "</h3>" +
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

  /* ---------- Modal with carousel ---------- */
  var currentWork = null;
  var currentIndex = 0;
  var carouselStartX = 0;
  var carouselCurrentX = 0;
  var isDragging = false;

  function openModal(id) {
    var w = works.find(function (x) { return x.id === id; });
    if (!w) return;
    currentWork = w;
    currentIndex = 0;

    var imgs = getImages(w);
    var hasMultiple = imgs.length > 1;

    var html =
      '<button class="modal-close" aria-label="关闭">&times;</button>' +
      '<div class="carousel' + (hasMultiple ? " has-multiple" : "") + '">' +
        '<button class="carousel-btn prev" aria-label="上一张">&#10094;</button>' +
        '<div class="carousel-viewport">' +
          '<div class="carousel-track" style="transform: translateX(0)">';

    imgs.forEach(function (src) {
      html += '<img class="carousel-slide" src="' + escapeAttr(src) + '" alt="" />';
    });

    html +=
          '</div>' +
        '</div>' +
        '<button class="carousel-btn next" aria-label="下一张">&#10095;</button>' +
        (hasMultiple ? '<div class="carousel-dots"></div>' : "") +
      '</div>' +
      '<div class="modal-body">' +
        '<div class="tag">' + escapeHtml(w.tag || "") + "</div>" +
        (w.title ? "<h2>" + escapeHtml(w.title) + "</h2>" : "") +
        '<div class="date">Posted ' + formatDate(w.date) + "</div>" +
        '<div class="section-label">Text</div>' +
        '<p class="english-text">' + escapeHtml(w.englishText).replace(/\n/g, "<br>") + "</p>";

    if (w.materials && w.materials.trim()) {
      html +=
        '<div class="section-label">Materials</div>' +
        '<p class="materials">' + escapeHtml(w.materials).replace(/\n/g, "<br>") + "</p>";
    }

    if (w.thoughts && w.thoughts.trim()) {
      html +=
        '<div class="section-label">Notes</div>' +
        '<p class="thoughts">' + escapeHtml(w.thoughts) + "</p>";
    }

    html += "</div>";

    modalEl.innerHTML = html;

    // Build dots
    if (hasMultiple) {
      var dotsEl = modalEl.querySelector(".carousel-dots");
      imgs.forEach(function (_, i) {
        var dot = document.createElement("span");
        dot.className = "carousel-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("data-index", i);
        dotsEl.appendChild(dot);
      });
    }

    // Bind carousel controls
    if (hasMultiple) {
      modalEl.querySelector(".carousel-btn.prev").addEventListener("click", function () {
        goToSlide(currentIndex - 1);
      });
      modalEl.querySelector(".carousel-btn.next").addEventListener("click", function () {
        goToSlide(currentIndex + 1);
      });

      modalEl.querySelectorAll(".carousel-dot").forEach(function (dot) {
        dot.addEventListener("click", function () {
          goToSlide(parseInt(dot.getAttribute("data-index"), 10));
        });
      });

      // Touch / drag
      var viewport = modalEl.querySelector(".carousel-viewport");
      viewport.addEventListener("touchstart", onDragStart, { passive: true });
      viewport.addEventListener("touchmove", onDragMove, { passive: true });
      viewport.addEventListener("touchend", onDragEnd);
      viewport.addEventListener("mousedown", onDragStart);
      viewport.addEventListener("mousemove", onDragMove);
      viewport.addEventListener("mouseup", onDragEnd);
      viewport.addEventListener("mouseleave", onDragEnd);
    }

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function goToSlide(index) {
    if (!currentWork) return;
    var imgs = getImages(currentWork);
    var total = imgs.length;
    if (!total) return;

    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    currentIndex = index;

    var track = modalEl.querySelector(".carousel-track");
    if (track) {
      track.style.transform = "translateX(" + (-index * 100) + "%)";
    }

    var dots = modalEl.querySelectorAll(".carousel-dot");
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === index);
    });
  }

  function onDragStart(e) {
    isDragging = true;
    var pt = e.touches ? e.touches[0] : e;
    carouselStartX = pt.clientX;
    carouselCurrentX = pt.clientX;
    var track = modalEl.querySelector(".carousel-track");
    if (track) track.style.transition = "none";
  }

  function onDragMove(e) {
    if (!isDragging) return;
    var pt = e.touches ? e.touches[0] : e;
    carouselCurrentX = pt.clientX;
    var viewport = modalEl.querySelector(".carousel-viewport");
    var track = modalEl.querySelector(".carousel-track");
    if (!viewport || !track) return;
    var deltaX = carouselCurrentX - carouselStartX;
    var offsetPercent = (deltaX / viewport.offsetWidth) * 100;
    track.style.transform = "translateX(" + (-currentIndex * 100 + offsetPercent) + "%)";
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    var track = modalEl.querySelector(".carousel-track");
    if (track) track.style.transition = "";

    var deltaX = carouselCurrentX - carouselStartX;
    var threshold = 50; // px
    if (deltaX < -threshold) {
      goToSlide(currentIndex + 1);
    } else if (deltaX > threshold) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(currentIndex); // snap back
    }
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    modalEl.innerHTML = "";
    currentWork = null;
    currentIndex = 0;
    document.body.style.overflow = "";
  }

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay || e.target.closest(".modal-close")) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (!modalOverlay.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    else if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
    else if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
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
