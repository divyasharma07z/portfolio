import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-12"
      >
        Contact Me 📩
      </motion.h1>

      <p className="text-gray-400 text-lg max-w-2xl text-center mb-12">
        Feel free to reach out! Whether it’s for work opportunities, collaboration, or just a friendly chat.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
        {/* Phone Card */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 4px 30px rgba(255, 126, 179, 0.5)" }}
          transition={{ duration: 0.3 }}
          className="relative p-8 rounded-3xl border border-transparent bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-lg hover:border-pink-500 transition-all"
        >
          <FaPhone className="text-5xl text-[#ff7eb3] mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200">Phone</h3>
          <p className="text-lg text-gray-400 mt-2"></p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 4px 30px rgba(133, 231, 255, 0.5)" }}
          transition={{ duration: 0.3 }}
          className="relative p-8 rounded-3xl border border-transparent bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-lg hover:border-blue-500 transition-all"
        >
          <FaEnvelope className="text-5xl text-[#85e7ff] mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200">Email</h3>
          <p className="text-lg text-gray-400 mt-2">
            <a href="mailto:divyasharma007d@gmail.com" className="text-[#85e7ff] hover:underline">
              divyasharma007d@gmail.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 flex gap-6 flex-wrap justify-center max-w-4xl">
        {/* LinkedIn */}
        <motion.a
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ duration: 0.3 }}
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-gray-900 bg-opacity-70 border border-gray-700 hover:bg-gradient-to-r from-[#ff7eb3] to-[#85e7ff] transition-all duration-300"
        >
          <FaLinkedin className="text-xl" /> LinkedIn
        </motion.a>

        {/* GitHub */}
        <motion.a
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ duration: 0.3 }}
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-gray-900 bg-opacity-70 border border-gray-700 hover:bg-gradient-to-r from-[#85e7ff] to-[#ff7eb3] transition-all duration-300"
        >
          <FaGithub className="text-xl" /> GitHub
        </motion.a>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-gray-500 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <p>&copy; 2025 Divya Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
