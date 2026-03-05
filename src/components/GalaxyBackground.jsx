import { useEffect, useRef } from "react"

export function GalaxyBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    let W, H, animId
    let stars = []
    let shooters = []
    let shooterTimer = 0
    let t = 0

    // ── Resize ──
    function resize() {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
      buildStars()
    }

    // ── Stars ──
    const COLORS = ["#ffffff","#ddeeff","#aaccff","#c8b8ff","#ffd6a5","#88ccff"]
    function buildStars() {
      stars = Array.from({ length: 280 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.2,
        baseAlpha: Math.random() * 0.6 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.004,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    }

    // ── Nebulae ──
    const NEBULAE = [
      { cx: 0.15, cy: 0.12, rx: 0.35, col: [59,130,246],   a: 0.12 },
      { cx: 0.80, cy: 0.18, rx: 0.28, col: [139,92,246],   a: 0.09 },
      { cx: 0.50, cy: 0.42, rx: 0.40, col: [34,211,238],   a: 0.07 },
      { cx: 0.20, cy: 0.60, rx: 0.30, col: [99,102,241],   a: 0.09 },
      { cx: 0.78, cy: 0.55, rx: 0.32, col: [59,130,246],   a: 0.10 },
      { cx: 0.45, cy: 0.78, rx: 0.36, col: [168,85,247],   a: 0.08 },
      { cx: 0.70, cy: 0.88, rx: 0.30, col: [34,211,238],   a: 0.08 },
    ]

    function drawNebulae() {
      NEBULAE.forEach((n, i) => {
        const pulse = 1 + Math.sin(t * 0.003 + i * 1.4) * 0.1
        const x = n.cx * W
        const y = n.cy * H
        const r = n.rx * Math.min(W, H) * pulse
        const [r1,g1,b1] = n.col

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
        grad.addColorStop(0,   `rgba(${r1},${g1},${b1},${n.a * 1.3})`)
        grad.addColorStop(0.5, `rgba(${r1},${g1},${b1},${n.a * 0.5})`)
        grad.addColorStop(1,   `rgba(${r1},${g1},${b1},0)`)

        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })
    }

    // ── Milky Way band ──
    function drawMilkyWay() {
      ctx.save()
      ctx.translate(W * 0.5, H * 0.45)
      ctx.rotate(-0.18)
      const grad = ctx.createLinearGradient(-W, -H * 0.1, W, H * 0.1)
      grad.addColorStop(0,   "rgba(59,130,246,0)")
      grad.addColorStop(0.3, "rgba(99,102,241,0.05)")
      grad.addColorStop(0.5, "rgba(139,92,246,0.07)")
      grad.addColorStop(0.7, "rgba(59,130,246,0.04)")
      grad.addColorStop(1,   "rgba(34,211,238,0)")
      ctx.fillStyle = grad
      ctx.fillRect(-W, -H * 0.12, W * 2, H * 0.24)
      ctx.restore()
    }

    // ── Stars draw ──
    function drawStars() {
      stars.forEach((s) => {
        const twinkle = 0.65 + Math.sin(t * s.speed + s.phase) * 0.35
        const alpha = s.baseAlpha * twinkle

        // soft glow for bigger stars
        if (s.r > 1.1) {
          const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4)
          grad.addColorStop(0, `${s.color}`)
          grad.addColorStop(1, "rgba(0,0,0,0)")
          ctx.globalAlpha = alpha * 0.35
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.fill()
        }

        // core dot
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.fill()
      })
      ctx.globalAlpha = 1
    }

    // ── Shooting stars ──
    function spawnShooter() {
      const angle = (20 + Math.random() * 25) * (Math.PI / 180)
      shooters.push({
        x: Math.random() * W,
        y: Math.random() * H * 0.5,
        vx: Math.cos(angle) * (7 + Math.random() * 5),
        vy: Math.sin(angle) * (7 + Math.random() * 5),
        life: 0,
        maxLife: 50 + Math.random() * 30,
      })
    }

    function drawShooters() {
      shooterTimer++
      if (shooterTimer > 200 + Math.random() * 300) {
        spawnShooter()
        shooterTimer = 0
      }

      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i]
        const progress = s.life / s.maxLife
        const alpha = 1 - progress

        const tailLen = 10
        const tx = s.x - s.vx * tailLen
        const ty = s.y - s.vy * tailLen

        const grad = ctx.createLinearGradient(tx, ty, s.x, s.y)
        grad.addColorStop(0, `rgba(255,255,255,0)`)
        grad.addColorStop(1, `rgba(220,235,255,${alpha.toFixed(2)})`)

        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(s.x, s.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()

        // head glow
        const hg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 5)
        hg.addColorStop(0, `rgba(255,255,255,${alpha.toFixed(2)})`)
        hg.addColorStop(1, "rgba(255,255,255,0)")
        ctx.beginPath()
        ctx.arc(s.x, s.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = hg
        ctx.fill()

        s.x += s.vx
        s.y += s.vy
        s.life++
        if (s.life >= s.maxLife) shooters.splice(i, 1)
      }
    }

    // ── Main loop ──
    function draw() {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = "#07090f"
      ctx.fillRect(0, 0, W, H)

      drawMilkyWay()
      drawNebulae()
      drawStars()
      drawShooters()

      t++
      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  )
}