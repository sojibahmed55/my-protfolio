
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import { useEffect } from "react";

const skills = [
  { name: "JavaScript", icon: <FaJs size={40} />, color: "#facc15" },
  { name: "React", icon: <FaReact size={40} />, color: "#06b6d4" },
  { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#22c55e" },
  { name: "HTML5", icon: <FaHtml5 size={40} />, color: "#f97316" },
  { name: "CSS3", icon: <FaCss3Alt size={40} />, color: "#3b82f6" },
  { name: "Tailwind", icon: <SiTailwindcss size={40} />, color: "#38bdf8" },
  { name: "Firebase", icon: <SiFirebase size={40} />, color: "#fbbf24" },
  { name: "Express", icon: <SiExpress size={40} />, color: "#d1d5db" },
  { name: "Git", icon: <FaGitAlt size={40} />, color: "#f97316" },
  { name: "GitHub", icon: <FaGithub size={40} />, color: "#ffffff" },
];

const Skill =()=> {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes glowPulse {
        0%,100% { transform: scale(1); box-shadow: 0 0 15px var(--glow-color), 0 0 40px var(--glow-color); }
        50% { transform: scale(1.1); box-shadow: 0 0 25px var(--glow-color), 0 0 60px var(--glow-color); }
      }
      @keyframes floatY {
        0%,100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-6px) rotate(2deg); }
      }
      @keyframes rotateRing { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      @keyframes particles {
        0% { transform: translate(0,0) rotate(0deg); opacity: 1; }
        50% { transform: translate(5px,-5px) rotate(180deg); opacity: 0.5; }
        100% { transform: translate(0,0) rotate(360deg); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          My <span className="text-pink-500">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Technologies and tools I use to turn ideas into functional, visually stunning applications.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-15">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2, rotate: 0.1 }}
              className="relative flex flex-col items-center gap-3 cursor-pointer rounded-xl p-6"
              style={{
                "--glow-color": skill.color,
                // backgroundColor: "rgba(31,41,55,0.6)",
                borderRadius: "1rem",
              }}
            >
              {/* Rotating Ring */}
              <span
                style={{
                  position: "absolute",
                  inset: "-6px",
                  borderRadius: "50%",
                  border: `2px solid ${skill.color}`,
                  animation: "rotateRing 6s linear infinite",
                  zIndex: 0,
                }}
              ></span>

              {/* Tiny Particles */}
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    position: "absolute",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: skill.color,
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`,
                    animation: `particles ${2 + Math.random() * 2}s ease-in-out infinite`,
                    zIndex: 0,
                  }}
                ></span>
              ))}

              {/* Icon with Glow */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "inline-flex",
                  padding: "20px",
                  borderRadius: "50%",
                  color: skill.color,
                  animation: "glowPulse 3s ease-in-out infinite, floatY 6s ease-in-out infinite",
                  boxShadow: `0 0 20px ${skill.color}, 0 0 60px ${skill.color}`,
                }}
              >
                {skill.icon}
              </div>
              <p className="relative z-10 font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skill;