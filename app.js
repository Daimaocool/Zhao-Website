(function () {
  const canvas = document.querySelector("#space");
  const ctx = canvas.getContext("2d", { alpha: true });
  const pointer = { x: 0, y: 0 };
  const particles = [];
  const palette = ["#52c9a2", "#6cb8ff", "#ffd166", "#ff8a80", "#ffffff"];
  let width = 0;
  let height = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seedParticles() {
    particles.length = 0;
    for (let i = 0; i < 680; i += 1) {
      const radius = 1.8 + Math.random() * 5.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particles.push({
        x: Math.sin(phi) * Math.cos(theta) * radius,
        y: Math.cos(phi) * radius * 0.58,
        z: Math.sin(phi) * Math.sin(theta) * radius,
        color: palette[i % palette.length],
        size: 0.7 + Math.random() * 1.8,
      });
    }
  }

  function rotate(point, time) {
    const yaw = time * 0.12 + pointer.x * 0.18;
    const pitch = -0.08 + pointer.y * 0.1;
    const cosY = Math.cos(yaw);
    const sinY = Math.sin(yaw);
    const cosX = Math.cos(pitch);
    const sinX = Math.sin(pitch);
    const x1 = point.x * cosY - point.z * sinY;
    const z1 = point.x * sinY + point.z * cosY;
    const y1 = point.y * cosX - z1 * sinX;
    const z2 = point.y * sinX + z1 * cosX;
    return { x: x1, y: y1, z: z2 };
  }

  function project(point) {
    const depth = point.z + 8.2;
    const scale = Math.max(0.08, 620 / (620 + depth * 95));
    return {
      x: width * 0.64 + point.x * 92 * scale,
      y: height * 0.48 + point.y * 92 * scale,
      scale,
      depth,
    };
  }

  function drawOrb(time) {
    const center = project(rotate({ x: 1.9, y: 0.2, z: -0.15 }, time));
    const radius = Math.min(width, height) * 0.15 * center.scale;

    const glow = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, radius * 1.6);
    glow.addColorStop(0, "rgba(255,255,255,0.82)");
    glow.addColorStop(0.45, "rgba(184,240,223,0.42)");
    glow.addColorStop(1, "rgba(108,184,255,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius * 1.6, 0, Math.PI * 2);
    ctx.fill();

    const sphere = ctx.createRadialGradient(
      center.x - radius * 0.32,
      center.y - radius * 0.38,
      radius * 0.12,
      center.x,
      center.y,
      radius,
    );
    sphere.addColorStop(0, "rgba(255,255,255,0.92)");
    sphere.addColorStop(0.44, "rgba(163,238,218,0.48)");
    sphere.addColorStop(1, "rgba(108,184,255,0.22)");
    ctx.fillStyle = sphere;
    ctx.strokeStyle = "rgba(24,48,47,0.14)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    drawRing(center, radius * 1.28, time * 0.75, "#52c9a2", 0.62);
    drawRing(center, radius * 1.7, -time * 0.52 + 1.1, "#6cb8ff", 0.48);
    drawRibbon(time);
  }

  function drawRing(center, radius, angle, color, alpha) {
    ctx.save();
    ctx.translate(center.x, center.y);
    ctx.rotate(angle);
    ctx.scale(1, 0.34 + Math.sin(angle) * 0.08);
    ctx.strokeStyle = hexToRgba(color, alpha);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(0, 0, radius, radius * 0.52, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawRibbon(time) {
    ctx.strokeStyle = "rgba(255,138,128,0.58)";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    for (let i = 0; i < 150; i += 1) {
      const t = i / 18;
      const point = rotate(
        {
          x: Math.sin(t * 0.78 + time * 0.16) * 2.2 - 1.45,
          y: Math.cos(t * 0.5) * 0.68 + Math.sin(t * 1.35) * 0.14,
          z: Math.cos(t * 0.64) * 1.2 - 0.3,
        },
        time,
      );
      const screen = project(point);
      if (i === 0) ctx.moveTo(screen.x, screen.y);
      else ctx.lineTo(screen.x, screen.y);
    }
    ctx.stroke();
  }

  function drawParticles(time) {
    particles
      .map((particle) => {
        const rotated = rotate(
          {
            x: particle.x,
            y: particle.y + Math.sin(time * 0.9 + particle.x) * 0.04,
            z: particle.z,
          },
          time * 0.45,
        );
        return { particle, screen: project(rotated) };
      })
      .sort((a, b) => b.screen.depth - a.screen.depth)
      .forEach(({ particle, screen }) => {
        const alpha = Math.max(0.18, Math.min(0.78, screen.scale * 0.7));
        ctx.fillStyle = hexToRgba(particle.color, alpha);
        ctx.beginPath();
        ctx.arc(screen.x, screen.y, particle.size * screen.scale, 0, Math.PI * 2);
        ctx.fill();
      });
  }

  function hexToRgba(hex, alpha) {
    const value = hex.replace("#", "");
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function draw(timeStamp) {
    const time = timeStamp * 0.001;
    ctx.clearRect(0, 0, width, height);
    drawParticles(time);
    drawOrb(time);
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = (event.clientX / width - 0.5) * 2;
    pointer.y = (event.clientY / height - 0.5) * 2;
  });

  resize();
  seedParticles();
  requestAnimationFrame(draw);
})();
