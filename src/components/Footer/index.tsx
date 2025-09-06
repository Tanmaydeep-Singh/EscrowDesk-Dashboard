import { Github, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative mt-20 pb-2">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />

      {/* Brand Name */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center"
      >
        <h1 className="mb-12 bg-clip-text text-transparent text-4xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-blue-400 to-purple-500">
          ESCROWDESK
        </h1>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent mb-6" />

      {/* Footer Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        {/* Rights Text */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} EscrowDesk. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
          >
            <Github className="w-6 h-6 text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
          >
            <Twitter className="w-6 h-6 text-gray-400 hover:text-sky-400 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
