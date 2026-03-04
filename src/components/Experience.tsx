import { experiences } from "../data/portfolioData"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <section id="Experience" className="py-24">
      <h2 className="section-heading text-center mb-14">Experience</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 cursor-pointer">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 text-slate-200 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
            <p className="text-indigo-300 font-medium">{exp.role}</p>
            <p className="text-sm text-slate-400 mb-3">{exp.duration}</p>

            <ul className="list-disc ml-5 space-y-1 text-slate-300">
              {exp.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
