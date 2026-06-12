/* Crownphysio v2 — interactions: booking card + modal → WhatsApp, premium GSAP motion */
(function () {
  var WA_NUMBER = "919561998544";

  var painAreas = [
    "Back Pain", "Neck Pain", "Knee Pain", "Shoulder Pain", "Sciatica",
    "Slip Disc", "Arthritis", "Frozen Shoulder", "Heel Pain", "Elbow Pain",
    "Post-Surgery Recovery", "Stroke / Paralysis", "Senior Care", "Other"
  ];
  var heroAreas = ["Back Pain", "Neck Pain", "Knee Pain", "Shoulder Pain", "Post-Surgery", "Other"];
  var ageGroups = ["Under 18", "18–40", "40–60", "60+"];

  function buildChips(row, items, single) {
    if (!row) return;
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

  function collectAndSend(painRow, ageRow, noteEl) {
    var pains = Array.prototype.map.call(painRow.querySelectorAll(".chip.on"), function (c) { return c.textContent; });
    var age = ageRow ? ageRow.querySelector(".chip.on") : null;
    var note = noteEl ? noteEl.value.trim() : "";
    var lines = ["Namaste Crownphysio 🙏", "I need physiotherapy at home."];
    if (pains.length) lines.push("Pain area: " + pains.join(", "));
    if (age) lines.push("Patient age: " + age.textContent);
    if (note) lines.push("Note: " + note);
    lines.push("(Sent from crownphysio website)");
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n")), "_blank");
  }

  /* Hero booking card */
  var heroPain = document.getElementById("heroPainChips");
  var heroAge = document.getElementById("heroAgeChips");
  var heroNote = document.getElementById("heroNote");
  buildChips(heroPain, heroAreas, false);
  buildChips(heroAge, ageGroups, true);
  var heroSend = document.getElementById("heroSend");
  if (heroSend) heroSend.addEventListener("click", function () { collectAndSend(heroPain, heroAge, heroNote); });

  /* Modal */
  var back = document.getElementById("leadModal");
  var painRow = document.getElementById("painChips");
  var ageRow = document.getElementById("ageChips");
  var noteBox = document.getElementById("leadNote");
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
  document.getElementById("leadSend").addEventListener("click", function () { collectAndSend(painRow, ageRow, noteBox); });

  document.querySelectorAll("[data-pain]").forEach(function (el) {
    el.addEventListener("click", function () { window.openLeadModal(el.getAttribute("data-pain")); });
  });
  document.querySelectorAll("[data-open-lead]").forEach(function (el) {
    el.addEventListener("click", function (e) { e.preventDefault(); window.openLeadModal(null); });
  });

  /* Nav scrolled state */
  var nav = document.getElementById("nav");
  function navState() { nav.classList.toggle("scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", navState, { passive: true });
  navState();

  /* ---------------- Motion ---------------- */
  if (typeof gsap === "undefined") {
    document.documentElement.classList.add("no-gsap");
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) { gsap.set("[data-reveal]", { opacity: 1 }); return; }

  var EASE = "expo.out";

  /* Hero entrance — calm, expensive */
  var tl = gsap.timeline({ defaults: { ease: EASE } });
  tl.from(".nav", { y: -20, opacity: 0, duration: 1 })
    .from(".hero-tag", { y: 22, opacity: 0, duration: 0.9 }, "-=0.7")
    .from(".hero h1", { y: 46, opacity: 0, duration: 1.2 }, "-=0.7")
    .from(".hero-sub", { y: 28, opacity: 0, duration: 1 }, "-=0.9")
    .from(".hero-ctas > *", { y: 20, opacity: 0, duration: 0.8, stagger: 0.09 }, "-=0.8")
    .from(".hero-proof", { y: 16, opacity: 0, duration: 0.8 }, "-=0.6")
    .from(".book-card", { y: 50, opacity: 0, duration: 1.3 }, 0.45);

  /* Ambient orb drift (scroll parallax) */
  gsap.utils.toArray(".orb").forEach(function (orb, i) {
    gsap.to(orb, {
      y: (i % 2 ? -90 : 90), ease: "none",
      scrollTrigger: { trigger: orb.parentElement, start: "top bottom", end: "bottom top", scrub: 1.2 }
    });
  });

  /* Section reveals */
  gsap.utils.toArray("[data-reveal]").forEach(function (el) {
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.1, ease: EASE,
      scrollTrigger: { trigger: el, start: "top 87%" }
    });
  });

  /* Staggered grids */
  [".pain-grid", ".svc-grid", ".why-grid", ".testi-grid", ".trust-glass", ".how-list", ".faq-list"].forEach(function (sel) {
    var grid = document.querySelector(sel);
    if (!grid) return;
    gsap.fromTo(grid.children, { y: 32, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, ease: EASE, stagger: 0.06,
      scrollTrigger: { trigger: grid, start: "top 86%" }
    });
  });

  /* Counters */
  gsap.utils.toArray("[data-count]").forEach(function (el) {
    var end = parseInt(el.getAttribute("data-count"), 10);
    var obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 2, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: function () { el.textContent = Math.round(obj.v); }
    });
  });

  /* Magnetic buttons (fine pointers only) */
  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".btn").forEach(function (btn) {
      var qx = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
      var qy = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        qx((e.clientX - r.left - r.width / 2) * 0.18);
        qy((e.clientY - r.top - r.height / 2) * 0.3);
      });
      btn.addEventListener("pointerleave", function () { qx(0); qy(0); });
    });
  }
})();
