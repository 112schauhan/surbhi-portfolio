import { useCallback, useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Container } from "@tsparticles/engine"

interface ParticlesBackgroundProps {
  /** When false, particles fill the container instead of the viewport (e.g. for Hero section) */
  fullScreen?: boolean
}

const ParticlesBackground = ({
  fullScreen = false,
}: ParticlesBackgroundProps) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      // optional: for custom logic
    }
  }, [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        fullScreen: { enable: fullScreen, zIndex: 0 },
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#6366f1",
          },
          links: {
            enable: true,
            color: "#6366f1",
            distance: 150,
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.9,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  )
}

export default ParticlesBackground
