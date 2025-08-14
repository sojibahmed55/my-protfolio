import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Roommate Finder Website",
    img: "https://i.ibb.co.com/9kxrTJ0f/Screenshot-2025-08-14-074607.png",
    desc: "A premium roommate-finding platform with modern UI, smooth animations,",
    tech: ["React", "TailwindCSS", "mongoDB"],
    
    live: "https://meek-maamoul-a65104.netlify.app/",
    github: "https://github.com/sojibahmed55/roommate-finder",
  },
  {
    id: 2,
    name: "Online Group-Study",
    img: "https://i.ibb.co.com/Z63Wjhxf/Screenshot-2025-08-14-074541.png",
    desc: "A feature-rich assignment management platform for tracking, submitting, and grading assignments with a clean and responsive UI.",
    tech: ["React", "TailwindCSS", "MongoDB"],
    live: "https://lucent-meringue-afa91c.netlify.app/",
    github: "https://github.com/sojibahmed55/11th-assignments",
  },
  {
    id: 3,
    name: "Tourism Management System",
    img: "https://i.ibb.co.com/JwJmHhKC/Screenshot-2025-08-14-074522.png",
    desc: "A complete tourism management platform with tour bookings, itinerary management, and integrated secure payment system for hassle-free travel planning.",
    tech: ["React", "TailwindCSS", "MongoDB","Stripe"],
    live: "https://aquamarine-dasik-63dc36.netlify.app/",
    github: "https://github.com/sojibahmed55/tourism-management",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 mb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.07),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.07),transparent)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-pink-500">Projects</span>
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-gray-800/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-pink-500 transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-pink-400 transition">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-900 rounded-full border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/40 transition"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-600 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;