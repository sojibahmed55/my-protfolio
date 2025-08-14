import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { HiCode, HiDesktopComputer } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="mb-16 relative py-24 bg-gradient-to-b from-indigo-900 via-gray-900 to-purple-900 text-white overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/star-bg.png')] bg-cover bg-no-repeat bg-center opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-pink-500">Me</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Hi, I'm <span className="font-semibold text-white">Sojib Ahmed</span> — a passionate MERN Stack Developer focused on building clean, responsive, and user-friendly interfaces with modern technologies.
          </p>

          <h3 className="text-xl font-semibold mb-2">My Programming Journey</h3>
          <p className="text-gray-300 text-base mb-6">
            I started learning programming with a strong motivation to explore new skills and build practical applications. I focus on JavaScript, React, and full-stack web development. Constantly improving and building real-world projects to enhance my expertise.
          </p>

          {/* <div className="flex gap-4 mt-6">
            <button  className="px-6 py-3 bg-pink-500 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">Get In Touch</button>
            <button className="px-6 py-3 border border-pink-500 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition">Download CV</button>
          </div> */}
           
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Web Development */}
          <div className="bg-gray-800 bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-pink-500/50 transition">
            <div className="flex items-center gap-4 mb-2">
              <HiCode className="text-pink-500 text-2xl" />
              <h4 className="text-xl font-semibold">Web Development</h4>
            </div>
            <p className="text-gray-300 text-sm">
              Creating responsive websites and web applications with modern frameworks.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-gray-800 bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-purple-500/50 transition">
            <div className="flex items-center gap-4 mb-2">
              <HiDesktopComputer className="text-purple-500 text-2xl" />
              <h4 className="text-xl font-semibold">UI/UX Design</h4>
            </div>
            <p className="text-gray-300 text-sm">
              Designing intuitive user interfaces and seamless user experiences.
            </p>
          </div>

          {/* Contact Info Card */}
          <div className="bg-gray-800 bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition">
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-2 text-gray-300 text-sm">
              <div className="flex items-center gap-2"><FaPhoneAlt className="text-pink-500" /> 01951469883</div>
              <div className="flex items-center gap-2"><FaEnvelope className="text-cyan-400" /> sojibahmed514698@gmail.com</div>
              <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-yellow-400" /> Belkuci, Sirajganj</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
