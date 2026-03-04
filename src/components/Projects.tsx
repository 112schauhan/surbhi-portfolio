import { projects } from "../data/portfolioData"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <section id="Projects" className="py-24">
      <h2 className="section-heading text-center mb-14">
        Professional Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 cursor-pointer">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>

            <p className="my-2 text-slate-300">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="text-indigo-300 hover:text-indigo-200 font-medium transition-colors active:text-indigo-400"
              >
                Visit Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
