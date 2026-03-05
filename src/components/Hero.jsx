import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Activity, BrainCircuit } from "lucide-react"

/* ── Marquee ticker (ANEAP-style infinite horizontal scroll) ── */
const TICKER_ITEMS = [
  "AI Strategy & Roadmapping",
  "GenAI Apps & Agents",
  "Custom Model Development",
  "Computer Vision Systems",
  "Intelligent Automation",
  "Predictive Analytics",
  "AI Governance & Safety",
  "MLOps & Deployment",
]

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="relative mt-16 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#07090f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#07090f] to-transparent" />
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-400 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07090f] pt-48 pb-28 text-white">

      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_70%)] blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08], x: [0, 40, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-1/4 top-1/3 h-[600px] w-[600px] rounded-full
                     bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_70%)] blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.06]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),
                     linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        {/* Badge with pulsing dot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <BrainCircuit className="h-4 w-4 text-blue-400" />
          Enterprise AI/ML Solutions
        </motion.div>

        {/* Heading with shimmer sweep */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          We Design &amp; Deploy
          <br />
          <span className="relative inline-block overflow-hidden">
            <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent">
              AI Systems That Ship.
            </span>
            <motion.span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-slate-400"
        >
          Enterprise-grade AI and machine learning solutions engineered for
          automation, intelligence, and real-world performance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
          </motion.a>

          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-slate-700 bg-slate-900/40 px-8 py-4 text-sm font-semibold text-slate-300 backdrop-blur-xl transition hover:border-slate-500 hover:text-white"
          >
            How It Works
          </motion.a>
        </motion.div>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-slate-500 sm:gap-10"
        >
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-400" />
            <span>AI at Scale</span>
          </div>
          <div className="hidden h-4 w-px bg-slate-700 sm:block" />
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-blue-400" />
            <span>99.9% Uptime</span>
          </div>
          <div className="hidden h-4 w-px bg-slate-700 sm:block" />
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-400" />
            <span>Enterprise Security</span>
          </div>
        </motion.div>
      </div>

      {/* ── ANEAP-style ticker strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <Ticker />
      </motion.div>
    </section>
  )
}