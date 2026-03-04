import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="About"
      className="relative min-h-screen flex items-center justify-center text-center px-6 text-white pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative text-center px-6 max-w-3xl"
      >
        <p className="text-[--color-accent] font-medium text-sm uppercase tracking-wider mb-3">
          Senior Software Engineer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I'm Surbhi Singh{" "}
          <span className="inline-block animate-bounce">👋</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          I specialize in AI-driven systems, scalable cloud-native architecture,
          and full-stack engineering.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="#Projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/25 transition-colors no-underline"
          >
            View My Work
          </motion.a>
          <motion.a
            href="/Surbhi-CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-white/10 hover:bg-white/20 active:bg-white/30 text-white px-8 py-3.5 rounded-xl font-semibold border border-white/20 transition-colors no-underline"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
