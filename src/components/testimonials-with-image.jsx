import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  User,
} from "lucide-react"

/* ---------------- Variants ---------------- */
const sectionFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageWrap = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const textSwap = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -20, filter: "blur(10px)" },
}

/* ---------------- Data ---------------- */
const offsets = [
  { rotate: -8, x: -24, y: 20, scale: 0.94, opacity: 0.4, blur: 2 },
  { rotate: 0, x: 0, y: 0, scale: 1, opacity: 1, blur: 0 },
  { rotate: 8, x: 24, y: 20, scale: 0.94, opacity: 0.4, blur: 2 },
]

const testimonials = [
  {
    id: 1,
    name: "Ajay",
    designation: "Proprietor",
    company: "Rose Associates",
    quote:
      "Intelidge built an automation system for Rose Associates that streamlined our 100–200 daily WhatsApp water orders with automated order capture, delivery assignment, and tracking via a simple backend. It reduced manual work and improved accuracy while staying easy for non-technical staff to use.",
    rating: 5,
  },
  {
    id: 2,
    name: "Karan Patel",
    designation: "Freelance Marketing Consultant",
    company: "Freelancer",
    quote:
      "Intelidge helped me automate lead collection and follow-ups from my campaigns. The system organizes incoming inquiries automatically and logs them into a dashboard, saving me hours of manual work every week.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    designation: "Freelance Graphic Designer",
    company: "SK Design Studio",
    quote:
      "Intelidge helped me automate client onboarding and built a tracking system that collects project details and organizes them automatically. It made managing multiple clients much easier.",
    rating: 5,
  },
]

/* Extra quote cards for the marquee row */
const marqueeQuotes = [
  { name: "Ajay", company: "Rose Associates", quote: "Reduced manual work dramatically — our order handling is now seamless.", rating: 5 },
  { name: "Karan Patel", company: "Freelancer", quote: "Saves me hours of manual work every week. Couldn't go back.", rating: 5 },
  { name: "Sneha Kulkarni", company: "SK Design Studio", quote: "Managing multiple clients has never been this easy.", rating: 5 },
  { name: "Ajay", company: "Rose Associates", quote: "The system is intuitive even for non-technical staff.", rating: 5 },
  { name: "Karan Patel", company: "Freelancer", quote: "Leads are now automatically organised into a dashboard.", rating: 5 },
  { name: "Sneha Kulkarni", company: "SK Design Studio", quote: "Client onboarding used to take hours. Now it's instant.", rating: 5 },
]

function MarqueeCard({ item }) {
  return (
    <div className="mx-3 w-80 shrink-0 rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6 backdrop-blur-sm">
      <div className="mb-3 flex gap-1">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-slate-300">"{item.quote}"</p>
      <div>
        <p className="text-sm font-semibold text-white">{item.name}</p>
        <p className="text-xs text-blue-400">{item.company}</p>
      </div>
    </div>
  )
}

function TestimonialsMarquee() {
  const doubled = [...marqueeQuotes, ...marqueeQuotes]
  return (
    <div className="relative mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#07090f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#07090f] to-transparent" />
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <MarqueeCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  )
}

/* ---------------- Main Component ---------------- */
export function TestimonialsStacked() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, index])

  const visible = [
    testimonials[(index - 1 + testimonials.length) % testimonials.length],
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07090f] via-[#0a0d14] to-[#07090f] py-32 text-white">
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl px-6"
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/40 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-xl">
              <Star className="h-3.5 w-3.5 text-blue-400" />
              Client Testimonials
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </div>

          <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            What our clients say about
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              working with us
            </span>
          </h2>
        </motion.div>

        {/* Stacked cards + text */}
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* LEFT — Stacked Cards */}
          <motion.div
            variants={imageWrap}
            className="relative mx-auto h-[420px] w-[340px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {visible.map((item, i) => (
              <motion.div
                key={item.id}
                className="absolute inset-0"
                animate={{
                  rotate: offsets[i].rotate,
                  x: offsets[i].x,
                  y: offsets[i].y,
                  scale: offsets[i].scale,
                  opacity: offsets[i].opacity,
                  zIndex: i === 1 ? 10 : 1,
                  filter: `blur(${offsets[i].blur}px)`,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-[2px]">
                  <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-slate-900/90 backdrop-blur-xl">
                    <User className="h-24 w-24 text-white/20" strokeWidth={1.5} />
                    {i === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-6 left-6 right-6"
                      >
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                          <h4 className="font-semibold text-white">{item.name}</h4>
                          <p className="mt-1 text-sm text-white/60">{item.company}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — Text */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                variants={textSwap}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <div className="relative flex h-[320px] flex-col justify-between">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl">
                    <Quote className="h-8 w-8 text-white" />
                  </div>

                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="mb-8 max-w-xl text-xl text-white/90">
                    "{testimonials[index].quote}"
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{testimonials[index].name}</h3>
                    <p className="text-sm text-white/60">{testimonials[index].designation}</p>
                    <p className="text-sm text-blue-400">{testimonials[index].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-4">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </motion.button>

              <motion.button
                onClick={next}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              <motion.button
                onClick={() => setPaused(!paused)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                {paused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
              </motion.button>

              {/* progress dots */}
              <div className="flex items-center gap-2 ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-gradient-to-r from-blue-400 to-cyan-400"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── ANEAP-style marquee quote strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <TestimonialsMarquee />
      </motion.div>
    </section>
  )
}