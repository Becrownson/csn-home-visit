/* Crownphysio — 3D human body (Three.js, procedural figure + pain markers) */
(function () {
  var container = document.getElementById("bodyStage");
  if (!container || typeof THREE === "undefined") return;

  var W = container.clientWidth, H = container.clientHeight;
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(34, W / H, 0.1, 100);
  camera.position.set(0, 0.1, 6.4);

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  container.appendChild(renderer.domElement);

  /* Lights — soft clinical green-tinted studio */
  scene.add(new THREE.AmbientLight(0xeaf6ef, 0.85));
  var key = new THREE.DirectionalLight(0xffffff, 1.15);
  key.position.set(3, 4, 5);
  scene.add(key);
  var rim = new THREE.DirectionalLight(0x74c8a0, 1.4);
  rim.position.set(-4, 2, -4);
  scene.add(rim);
  var fill = new THREE.DirectionalLight(0xc8e8d8, 0.5);
  fill.position.set(-2, -2, 3);
  scene.add(fill);

  var bodyMat = new THREE.MeshStandardMaterial({
    color: 0xdff0e7, roughness: 0.42, metalness: 0.08
  });

  var figure = new THREE.Group();

  function capsule(r, len, x, y, z, rotZ, rotX) {
    var geo = new THREE.CapsuleGeometry(r, len, 8, 20);
    var m = new THREE.Mesh(geo, bodyMat);
    m.position.set(x, y, z);
    if (rotZ) m.rotation.z = rotZ;
    if (rotX) m.rotation.x = rotX;
    figure.add(m);
    return m;
  }
  function sphere(r, x, y, z, sx, sy, sz) {
    var m = new THREE.Mesh(new THREE.SphereGeometry(r, 26, 20), bodyMat);
    m.position.set(x, y, z);
    m.scale.set(sx || 1, sy || 1, sz || 1);
    figure.add(m);
    return m;
  }

  /* Proportions: total height ~3.6 units, centered at y=0 */
  sphere(0.31, 0, 1.62, 0, 0.92, 1.08, 0.95);            // head
  capsule(0.10, 0.22, 0, 1.22, 0, 0, 0);                  // neck
  sphere(0.46, 0, 0.72, 0, 1.05, 1.25, 0.62);             // chest
  sphere(0.40, 0, 0.18, 0, 0.92, 1.05, 0.58);             // abdomen
  sphere(0.42, 0, -0.32, 0, 1.0, 0.78, 0.66);             // pelvis
  sphere(0.17, 0.52, 1.02, 0);                            // shoulder R
  sphere(0.17, -0.52, 1.02, 0);                           // shoulder L
  capsule(0.115, 0.55, 0.62, 0.55, 0, 0.16, 0);           // upper arm R
  capsule(0.115, 0.55, -0.62, 0.55, 0, -0.16, 0);         // upper arm L
  capsule(0.095, 0.52, 0.74, -0.12, 0.06, 0.10, 0);       // forearm R
  capsule(0.095, 0.52, -0.74, -0.12, 0.06, -0.10, 0);     // forearm L
  sphere(0.11, 0.80, -0.52, 0.10, 1, 1.25, 0.8);          // hand R
  sphere(0.11, -0.80, -0.52, 0.10, 1, 1.25, 0.8);         // hand L
  capsule(0.16, 0.72, 0.24, -1.02, 0, 0.045, 0);          // thigh R
  capsule(0.16, 0.72, -0.24, -1.02, 0, -0.045, 0);        // thigh L
  capsule(0.12, 0.66, 0.27, -1.84, 0.02, 0, 0);           // shin R
  capsule(0.12, 0.66, -0.27, -1.84, 0.02, 0, 0);          // shin L
  sphere(0.11, 0.27, -2.28, 0.16, 1, 0.72, 1.9);          // foot R
  sphere(0.11, -0.27, -2.28, 0.16, 1, 0.72, 1.9);         // foot L

  figure.position.y = 0.3;
  scene.add(figure);

  /* Pedestal ring */
  var ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.05, 0.015, 12, 80),
    new THREE.MeshBasicMaterial({ color: 0x9fd8bd, transparent: true, opacity: 0.7 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -2.1;
  scene.add(ring);

  /* Pain markers */
  var markerDefs = [
    { area: "Neck Pain",       label: "Neck Pain · मानदुखी",      pos: [0, 1.28, 0.13] },
    { area: "Shoulder Pain",   label: "Shoulder · खांदेदुखी",     pos: [0.55, 1.06, 0.10] },
    { area: "Back Pain",       label: "Back Pain · पाठदुखी",      pos: [0, 0.22, -0.26] },
    { area: "Elbow Pain",      label: "Elbow · टेनिस एल्बो",      pos: [-0.70, 0.22, 0.10] },
    { area: "Hip / Sciatica",  label: "Hip · Sciatica",           pos: [0.34, -0.30, -0.18] },
    { area: "Knee Pain",       label: "Knee Pain · गुडघेदुखी",    pos: [0.26, -1.48, 0.16] },
    { area: "Heel Pain",       label: "Heel Pain · टाचदुखी",      pos: [-0.27, -2.26, -0.10] }
  ];
  var markerMat = new THREE.MeshBasicMaterial({ color: 0xe8554d });
  var haloMat = new THREE.MeshBasicMaterial({ color: 0xe8554d, transparent: true, opacity: 0.3 });
  var markers = [];
  markerDefs.forEach(function (d) {
    var g = new THREE.Group();
    var core = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 12), markerMat);
    var halo = new THREE.Mesh(new THREE.SphereGeometry(0.10, 16, 12), haloMat.clone());
    g.add(core); g.add(halo);
    g.position.set(d.pos[0], d.pos[1] + 0.3, d.pos[2]);
    g.userData = d;
    figure.add(g);
    markers.push({ group: g, halo: halo, phase: Math.random() * Math.PI * 2 });
  });

  /* Interaction: raycast hover + click */
  var ray = new THREE.Raycaster();
  ray.params.Points = { threshold: 0.1 };
  var mouse = new THREE.Vector2(-2, -2);
  var tip = document.getElementById("stageTip");
  var hovered = null;

  function setMouse(e) {
    var r = renderer.domElement.getBoundingClientRect();
    var cx = (e.touches ? e.touches[0].clientX : e.clientX);
    var cy = (e.touches ? e.touches[0].clientY : e.clientY);
    mouse.x = ((cx - r.left) / r.width) * 2 - 1;
    mouse.y = -((cy - r.top) / r.height) * 2 + 1;
    return { x: cx - r.left, y: cy - r.top };
  }

  var dragging = false, dragMoved = 0, lastX = 0, userSpin = 0;

  renderer.domElement.addEventListener("pointerdown", function (e) {
    dragging = true; dragMoved = 0; lastX = e.clientX;
  });
  window.addEventListener("pointerup", function () { dragging = false; });
  window.addEventListener("pointermove", function (e) {
    if (dragging) {
      var dx = e.clientX - lastX;
      lastX = e.clientX;
      dragMoved += Math.abs(dx);
      userSpin += dx * 0.008;
    }
  });

  renderer.domElement.addEventListener("pointermove", function (e) {
    var local = setMouse(e);
    ray.setFromCamera(mouse, camera);
    var hits = ray.intersectObjects(markers.map(function (m) { return m.group; }), true);
    if (hits.length) {
      var g = hits[0].object.parent;
      hovered = g;
      renderer.domElement.style.cursor = "pointer";
      if (tip) {
        tip.textContent = g.userData.label;
        tip.style.left = local.x + "px";
        tip.style.top = local.y + "px";
        tip.classList.add("on");
      }
    } else {
      hovered = null;
      renderer.domElement.style.cursor = dragging ? "grabbing" : "grab";
      if (tip) tip.classList.remove("on");
    }
  });

  renderer.domElement.addEventListener("click", function () {
    if (dragMoved > 6) return; // was a drag, not a click
    if (hovered && window.openLeadModal) {
      window.openLeadModal(hovered.userData.area, "3d-body");
    }
  });

  /* Scroll-linked rotation */
  var scrollSpin = 0;
  function onScroll() {
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scrollSpin = (window.scrollY / max) * Math.PI * 4; // two full turns across the page
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Render loop */
  var clock = new THREE.Clock();
  var currentRot = 0;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animate() {
    requestAnimationFrame(animate);
    var t = clock.getElapsedTime();
    var idle = reduceMotion ? 0 : t * 0.12;
    var target = idle + scrollSpin + userSpin;
    currentRot += (target - currentRot) * 0.06;
    figure.rotation.y = currentRot;
    if (!reduceMotion) figure.position.y = 0.3 + Math.sin(t * 1.2) * 0.04;

    markers.forEach(function (m) {
      var s = 1 + 0.55 * (0.5 + 0.5 * Math.sin(t * 3 + m.phase));
      m.halo.scale.setScalar(s);
      m.halo.material.opacity = 0.38 - 0.22 * (0.5 + 0.5 * Math.sin(t * 3 + m.phase));
    });
    ring.rotation.z = t * 0.1;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", function () {
    W = container.clientWidth; H = container.clientHeight;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  });
})();
