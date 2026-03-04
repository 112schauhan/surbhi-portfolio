import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="Contact" className="py-20 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          I'm open to AI engineering, full-stack, and cloud-native
          opportunities. If you'd like to collaborate or discuss innovative
          projects, feel free to reach out.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:surbhi.surbhisingh.singh13@gmail.com"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 transition-colors"
          >
            <FaEnvelope className="text-indigo-400 text-2xl shrink-0" />
            <div>
              <h4 className="font-semibold text-white">Email</h4>
              <p className="text-slate-300 text-sm">
                surbhi.surbhisingh.singh13@gmail.com
              </p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+917011174427"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 transition-colors"
          >
            <FaPhone className="text-indigo-400 text-2xl shrink-0" />
            <div>
              <h4 className="font-semibold text-white">Phone</h4>
              <p className="text-slate-300">+91-7011174427</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.linkedin.com/in/surbhi-singh-8a9673160/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 transition-colors"
          >
            <FaLinkedin className="text-indigo-400 text-2xl shrink-0" />
            <div>
              <h4 className="font-semibold text-white">LinkedIn</h4>
              <p className="text-slate-300 text-sm">
                linkedin.com/in/surbhi-singh
              </p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/112schauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 transition-colors"
          >
            <FaGithub className="text-indigo-400 text-2xl shrink-0" />
            <div>
              <h4 className="font-semibold text-white">GitHub</h4>
              <p className="text-slate-300 text-sm">github.com/112schauhan</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact
