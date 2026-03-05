import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Shield,
  Activity,
  Facebook,
  ArrowRight,
} from "lucide-react"
import { Logo } from "./Logo"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07090f] text-white">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
      </div>

      {/* ── ANEAP-style full-width CTA banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-6 mb-0 mt-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-indigo-600/20 px-8 py-16 text-center backdrop-blur-sm sm:mx-12 lg:mx-24"
        style={{ marginTop: "-1px" }}
      >
        {/* inner glows */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* animated gradient border */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background: "linear-gradient(90deg, rgba(59,130,246,0.4), rgba(34,211,238,0.4), rgba(99,102,241,0.4), rgba(59,130,246,0.4))",
            backgroundSize: "300% 100%",
            animation: "border-slide 4s linear infinite",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400"
        >
          Ready to scale?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-3xl font-semibold sm:text-4xl lg:text-5xl"
        >
          Let Intelidge do the work
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            so you can scale faster
          </span>
        </motion.h2>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-blue-600/40 transition-all duration-300 hover:shadow-blue-600/60"
        >
          <span className="relative z-10 flex items-center gap-2">
            Book a Free Call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />
        </motion.a>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <Logo className="h-12 w-auto" />
            </div>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/70">
              We build secure, production ready AI systems from strategy to deployment. Engineered for accuracy, performance, and scale.
            </p>
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Based in Vadodara, India 🇮🇳. Delivering globally</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <span>Cloud / VPC / On-premise deployment</span>
              </div>
            </div>
            <div className="mt-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-base font-semibold text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">Company</p>
            <ul className="space-y-3 text-sm text-white/70">
              {["About", "Services", "Case Studies", "Careers"].map((l, i) => (
                <li key={l}>
                  <motion.a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    whileHover={{ x: 4, color: "#fff" }}
                    transition={{ duration: 0.2 }}
                    className="inline-block transition-colors"
                  >{l}</motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">Solutions</p>
            <ul className="space-y-3 text-sm text-white/70">
              {["GenAI & Agents", "Computer Vision", "Automation & ML", "MLOps"].map((l) => (
                <li key={l}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 4, color: "#fff" }}
                    transition={{ duration: 0.2 }}
                    className="inline-block transition-colors"
                  >{l}</motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">Reliability</p>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-400" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-green-400">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} Intelidge. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms", "Security"].map((l) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                whileHover={{ color: "#fff" }}
                className="transition-colors"
              >{l}</motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "https://www.linkedin.com/company/intelidge", Icon: Linkedin, color: "hover:bg-blue-700/30" },
              { href: "https://www.instagram.com/intelidge.ai?igsh=eHF1bHQ4eWd0MzFu", Icon: Instagram, color: "hover:bg-pink-600/20" },
              { href: "https://facebook.com/intelidge", Icon: Facebook, color: "hover:bg-blue-600/20" },
            ].map(({ href, Icon, color }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:border-blue-400/50 ${color}`}
              >
                <Icon className="h-4 w-4 text-white/70" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes border-slide {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </footer>
  )
}