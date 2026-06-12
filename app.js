/* Crownphysio — interactions: lead modal → WhatsApp, GSAP scroll animations */
(function () {
  var WA_NUMBER = "919561998544";

  /* ---------------- Lead modal ---------------- */
  var back = document.getElementById("leadModal");
  var painRow = document.getElementById("painChips");
  var ageRow = document.getElementById("ageChips");
  var noteBox = document.getElementById("leadNote");
  var sendBtn = document.getElementById("leadSend");

  var painAreas = [
    "Back Pain", "Neck Pain", "Knee Pain", "Shoulder Pain", "Sciatica",
    "Slip Disc", "Arthritis", "Frozen Shoulder", "Heel Pain", "Elbow Pain",
    "Hip / Sciatica", "Post-Surgery Recovery", "Stroke / Paralysis", "Senior Care", "Other"
  ];
  var ageGroups = ["Under 18", "18–40", "40–60", "60+"];

  function buildChips(row, items, single) {
    items.forEach(function (label) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = label;
      b.addEventListener("click", function () {
        if (single) {
          row.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("on"); });
          b.classList.add("on");
        } else {
          b.classList.toggle("on");
        }
      });
      row.appendChild(b);
    });
  }
  buildChips(painRow, painAreas, false);
  buildChips(ageRow, ageGroups, true);

  function selectPain(area) {
    painRow.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("on", c.textContent === area);
    });
  }

  window.openLeadModal = function (area) {
    if (area) selectPain(area);
    back.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  function closeModal() {
    back.classList.remove("open");
    document.body.style.overflow = "";
  }
  document.getElementById("leadClose").addEventListener("click", closeModal);
  back.addEventListener("click", function (e) { if (e.target === back) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* Openers: pain cards + generic triggers */
  document.querySelectorAll("[data-pain]").forEach(function (el) {
    el.addEventListener("click", function () { window.openLeadModal(el.getAttribute("data-pain")); });
  });
  document.querySelectorAll("[data-open-lead]").forEach(function (el) {
    el.addEventListener("click", function (e) { e.preventDefault(); window.openLeadModal(null); });
  });

  /* Send → WhatsApp */
  sendBtn.addEventListener("click", function () {
    var pains = Array.prototype.map.call(painRow.querySelectorAll(".chip.on"), function (c) { return c.textContent; });
    var age = ageRow.querySelector(".chip.on");
    var note = noteBox.value.trim();

    var lines = ["Namaste Crownphysio 🙏", "I need physiotherapy at home."];
    if (pains.length) lines.push("Pain area: " + pains.join(", "));
    if (age) lines.push("Patient age: " + age.textContent);
    if (note) lines.push("Note: " + note);
    lines.push("(Sent from crownphysio website)");

    var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank");
  });

  /* ---------------- Nav scrolled state ---------------- */
  var nav = document.getElementById("nav");
  function navState() { nav.classList.toggle("scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", navState, { passive: true });
  navState();

  /* ---------------- GSAP animations ---------------- */
  if (typeof gsap === "undefined") {
    document.documentElement.classList.add("no-gsap");
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    gsap.set("[data-reveal]", { opacity: 1 });
    return;
  }

  /* Hero entrance */
  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(".nav-inner", { y: -24, opacity: 0, duration: 0.7 })
    .from(".hero-tag", { y: 24, opacity: 0, duration: 0.6 }, "-=0.4")
    .from(".hero h1", { y: 40, opacity: 0, duration: 0.9 }, "-=0.35")
    .from(".hero-sub", { y: 28, opacity: 0, duration: 0.7 }, "-=0.55")
    .from(".hero-ctas > *", { y: 22, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.45")
    .from(".trust-item", { y: 18, opacity: 0, duration: 0.55, stagger: 0.08 }, "-=0.35")
    .from(".body-stage", { opacity: 0, scale: 0.94, duration: 1.1, ease: "power2.out" }, 0.3)
    .from(".float-chip", { y: 26, opacity: 0, duration: 0.7, stagger: 0.15 }, "-=0.6");

  /* Floating chips gentle parallax drift */
  gsap.to(".chip-a", { y: -14, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
  gsap.to(".chip-b", { y: 12, duration: 3.6, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 0.5 });

  /* Hero parallax on scroll */
  gsap.to(".hero-copy", {
    y: -60, opacity: 0.25, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom 30%", scrub: true }
  });

  /* Section reveals */
  gsap.utils.toArray("[data-reveal]").forEach(function (el) {
    gsap.fromTo(el,
      { y: 44, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 86%" }
      });
  });

  /* Staggered card grids */
  [".pain-grid", ".svc-grid", ".why-grid", ".how-grid", ".testi-grid"].forEach(function (sel) {
    var grid = document.querySelector(sel);
    if (!grid) return;
    gsap.fromTo(grid.children,
      { y: 36, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.07,
        scrollTrigger: { trigger: grid, start: "top 84%" }
      });
  });

  /* Stat counters */
  gsap.utils.toArray("[data-count]").forEach(function (el) {
    var end = parseInt(el.getAttribute("data-count"), 10);
    var obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 1.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
      onUpdate: function () { el.textContent = Math.round(obj.v); }
    });
  });

  /* Parallax decorative drift inside green sections */
  gsap.utils.toArray("[data-parallax]").forEach(function (el) {
    var amt = parseFloat(el.getAttribute("data-parallax")) || 40;
    gsap.fromTo(el, { y: amt }, {
      y: -amt, ease: "none",
      scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: true }
    });
  });
})();
