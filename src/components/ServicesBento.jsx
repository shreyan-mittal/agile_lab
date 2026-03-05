import { motion } from "framer-motion"
import { Brain, Sparkles, Eye, Shield, Zap, Target, ArrowUpRight, Workflow, LineChart } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const services = [
  {
    id: "strategy",
    icon: Target,
    title: "AI Strategy & Roadmapping",
    description: "Identify high-impact AI opportunities, evaluate data readiness, and define a clear execution roadmap aligned with ROI.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.3)",
    span: "md:col-span-3",
    featured: true,
  },
  {
    id: "genai",
    icon: Sparkles,
    title: "GenAI Apps & Agents",
    description: "Production-ready copilots, RAG systems, and autonomous workflows with safety guardrails.",
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(34,211,238,0.25)",
    span: "md:col-span-1",
  },
  {
    id: "models",
    icon: Brain,
    title: "Custom Model Development",
    description: "Domain specific ML & LLM solutions optimized for accuracy, latency, and cost.",
    gradient: "from-blue-600 to-indigo-600",
    glowColor: "rgba(99,102,241,0.25)",
    span: "md:col-span-1",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Computer Vision Systems",
    description: "OCR, detection, and quality inspection pipelines for real-time visual intelligence.",
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(20,184,166,0.25)",
    span: "md:col-span-1",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Transform manual processes with AI-powered workflow automation, document processing, and decision engines.",
    gradient: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59,130,246,0.25)",
    span: "md:col-span-1",
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast trends, detect anomalies, and optimize operations with advanced machine learning models.",
    gradient: "from-indigo-500 to-purple-500",
    glowColor: "rgba(139,92,246,0.25)",
    span: "md:col-span-1",
  },
  {
    id: "governance",
    icon: Shield,
    title: "AI Governance & Safety",
    description: "Model evaluation, guardrails, compliance, and human-in-the-loop systems for enterprise AI.",
    gradient: "from-indigo-600 to-blue-600",
    glowColor: "rgba(99,102,241,0.25)",
    span: "md:col-span-1",
  },
]

export function ServicesBento() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-[#07090f] via-[#0a0d14] to-[#07090f] py-32 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_65%)] blur-3xl"
          style={{ animation: 'pulse-glow 8s ease-in-out infinite' }}
        />
        <div
          className="absolute -bottom-48 right-1/4 h-[500px] w-[500px] rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18),transparent_65%)] blur-3xl"
          style={{ animation: 'pulse-glow 10s ease-in-out infinite 1s' }}
        />
        <div
          className="absolute inset-0 opacity-[0.15]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),
                     linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 text-center"
        >
          <motion.div variants={item} className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/40 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-xl">
              <Zap className="h-3.5 w-3.5 text-blue-400" />
              Services
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            AI services engineered for
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              scale and impact
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            From strategy to production. We design, build, and deploy
            AI systems that deliver measurable outcomes.
          </motion.p>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6"
        >
          {services.map((service) => (
            <BentoCard key={service.id} service={service} variants={item} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 
                       px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-900/40 
                       transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Build Together
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            {/* shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </section>
  )
}

function BentoCard({ service, variants }) {
  const Icon = service.icon

  return (
    <motion.div
      variants={variants}
      className={`group relative overflow-hidden rounded-3xl ${service.span}`}
    >
      {/* animated glow border on hover */}
      <div
        className="absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.glowColor}, transparent 60%)`,
        }}
      />

      <div
        className="relative h-full overflow-hidden rounded-3xl border border-slate-800/50
                   bg-slate-900/50 p-8 shadow-lg shadow-black/40 backdrop-blur-sm
                   transition-all duration-500
                   hover:border-slate-700/50 hover:shadow-2xl hover:shadow-blue-900/20"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          e.currentTarget.style.setProperty("--mouse-x", `${x}%`)
          e.currentTarget.style.setProperty("--mouse-y", `${y}%`)
        }}
      >
        {/* top-right corner shine */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle, ${service.glowColor}, transparent 70%)` }} />

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl
                     bg-gradient-to-br ${service.gradient} shadow-lg`}
        >
          <Icon className="h-7 w-7 text-white" />
        </motion.div>

        {/* Content */}
        <div className="relative">
          <h3 className={`font-semibold leading-tight text-slate-200 ${
            service.featured ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}>
            {service.title}
          </h3>

          <p className={`mt-3 leading-relaxed text-slate-400 ${
            service.featured ? 'text-base sm:text-lg max-w-2xl' : 'text-sm'
          }`}>
            {service.description}
          </p>

          {service.featured && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`mt-6 h-1 w-32 origin-left rounded-full bg-gradient-to-r ${service.gradient}`}
            />
          )}
        </div>

        {/* bottom gradient sweep on hover */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r ${service.gradient}`}
        />
      </div>
    </motion.div>
  )
}