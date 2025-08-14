import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. I will get back to you soon!",
      icon: "success",
      confirmButtonColor: "#ec4899",
      background: "#1f2937",
      color: "#fff",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 mb-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.15),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.15),transparent)]"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Contact <span className="text-pink-500">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Have a project in mind? Let’s build something amazing together.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-pink-500/30 transition"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-pink-500 text-2xl" />
                <p className="text-lg">+880 1951469883</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <p className="text-lg">sojibahmed514698@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                <p className="text-lg">Belkuci, Sirajganj</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-cyan-400/30 transition"
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 py-3 rounded-lg font-semibold shadow-lg hover:shadow-pink-500/50 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Follow Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          
          <div className="max-w-md mx-auto rounded-2xl shadow-xl p-8 text-center 
    bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] 
    backdrop-blur-lg bg-opacity-80 border border-white/10">
      {/* Title */}
      <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Follow Me</h3>

      {/* Subtitle */}
      <p className="text-gray-100 mb-6 leading-relaxed">
        Let’s build something amazing together!  
        I’m open to collaborations, exciting projects, and networking with creative minds from all over the world.
      </p>

      {/* Icons */}
      <div className="flex justify-center gap-6 mt-6">
        {/* GitHub */}
        <a
          href="https://github.com/sojibahmed55"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#333333] hover:scale-110 hover:shadow-pink-500/50 transition-transform duration-300 shadow-lg"
        >
          <FaGithub className="text-white text-2xl" />
        </a>
      
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sojib-ahmed-958738379"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0A66C2] hover:scale-110 hover:shadow-blue-500/50 transition-transform duration-300 shadow-lg"
        >
          <FaLinkedinIn className="text-white text-2xl" />
        </a>
      
        {/* Facebook */}
        <a
          href="https://www.facebook.com/sojib.ahmed.424160"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1877F2] hover:scale-110 hover:shadow-blue-400/50 transition-transform duration-300 shadow-lg"
        >
          <FaFacebookF className="text-white text-2xl" />
        </a>
      </div>
    </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
