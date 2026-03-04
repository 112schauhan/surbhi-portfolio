import { motion } from "framer-motion"
import { skills } from "../data/portfolioData"

const Skills = () => {
  return (
    <section id="Skills" className="py-24">
      <h2 className="section-heading text-center mb-14">Skills</h2>

      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center px-6">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-200 font-medium transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default Skills
