import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import PersonalProjects from "./components/PersonalProjects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import ParticlesBackground from "./components/UI/ParticlesBackground"

const App = () => {
  return (
    <>
      {/* Full-screen particles - same background across the app */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground fullScreen />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <PersonalProjects />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
