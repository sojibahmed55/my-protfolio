import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0a0f1f] via-[#0f1629] to-[#1a1f38] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text */}
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Sojib Ahmed. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/sojib.ahmed.424160"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#1877F2] hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaFacebookF className="text-white text-lg" />
          </a>

          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/sojib-ahmed-958738379"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#0A66C2] hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaLinkedinIn className="text-white text-lg" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sojibahmed55"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#333333] hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaGithub className="text-white text-lg" />
          </a>
        </div>
      </div>
    </footer>
    );
};

export default Footer;