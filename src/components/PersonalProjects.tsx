import { personalProjects } from "../data/portfolioData"

const PersonalProjects = () => {
  return (
    <section id="PersonalProjects" className="py-24">
      <h2 className="section-heading text-center mb-14">Personal Projects</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 cursor-pointer">
        {personalProjects.map((project) => (
          <div
            key={project.name}
            className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl text-slate-200 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>

            <p className="text-slate-300 my-2">{project.description}</p>

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

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="text-indigo-300 hover:text-indigo-200 transition-colors active:text-indigo-400"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default PersonalProjects
