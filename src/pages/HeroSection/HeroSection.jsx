import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="pt-9 mb-16 min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0a0f1f] via-[#0f1629] to-[#1a1f38] text-white relative overflow-hidden">
      {/* BG floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-indigo-400 rounded-full top-10 left-1/4 animate-ping"></div>
        <div className="absolute w-3 h-3 bg-pink-400 rounded-full bottom-16 right-1/3 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-purple-300 rounded-full top-1/2 left-2/3 animate-bounce"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          {/* <p className="text-sm tracking-widest text-indigo-400 uppercase mb-2">Portfolio</p> */}

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I am <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Sojib Ahmed
            </span>
          </h1>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
                "Creative Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-fuchsia-500"
            />
          </h2>

          <p className="mt-6 text-gray-300 max-w-lg mx-auto md:mx-0">
            I create visually stunning, high-performing web applications with
            modern tech. My goal is to blend creativity and performance in every
            project I build.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-50}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition-opacity font-semibold shadow-lg cursor-pointer"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-50}
              className="cursor-pointer px-6 py-3 rounded-full border border-gray-400 hover:border-pink-500 hover:text-pink-400 transition-colors font-semibold"
            >
              Get In Touch 
            </Link>
            
          </div>

          {/* Stats */}
          <div className="mt-10 flex justify-center md:justify-start gap-10">
            <div>
              <p className="text-3xl font-bold">12+</p>
              <span className="text-gray-400">Projects</span>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <span className="text-gray-400">Satisfaction</span>
            </div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          
          <div className="relative group">
            {/* Glow background */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-lg opacity-60 group-hover:opacity-90 transition duration-300"></div>

            {/* High resolution image */}
            <img
              src="https://i.ibb.co.com/GQnYjPzh/1755133909855.jpg"
              alt="Profile"
              className="relative rounded-xl w-96 h-[500px] object-cover border-2 border-transparent group-hover:border-indigo-400 transition duration-300"
              loading="lazy"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
