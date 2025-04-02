import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaMoneyBillWave, FaEdit, FaPaintBrush, FaShoppingCart, FaUser } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Password Generator",
    description: "A tool to generate secure passwords.",
    fullDescription: "This app generates random, secure passwords with customizable lengths and complexity to ensure maximum security for your accounts.",
    image: "passwordgenerator.png", // Image from public folder
    icon: <FaLock />,
    colors: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    title: "Currency Converter",
    description: "A simple app to convert currencies.",
    fullDescription: "This app allows users to convert various currencies in real-time using current exchange rates, making it easy to manage international transactions.",
    image: "currencyconvertor.png",
    icon: <FaMoneyBillWave />,
    colors: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    title: "Text Editor",
    description: "A simple text editor with basic functionalities.",
    fullDescription: "This lightweight text editor provides essential features like saving, opening files, and text formatting to offer a seamless editing experience.",
    image: "texteditor.png",
    icon: <FaEdit />,
    colors: "from-green-400 to-teal-500",
  },
  {
    id: 4,
    title: "Background Changer",
    description: "A simple app to change the background with a click.",
    fullDescription: "This app allows users to change their background with a single click, offering a variety of images and effects to personalize the look and feel of their environment.",
    image: "bgchanger.png",
    icon: <FaPaintBrush />,
    colors: "from-blue-400 to-cyan-500",
  },
  {
    id: 5,
    title: "Shopique E-Commerce Website",
    description: "A modern e-commerce website with Shopique Points system.",
    fullDescription: "Shopique is a fully functional e-commerce platform that allows users to browse products, make purchases, and earn Shopique Points for rewards. It also includes user authentication and a loyalty program.",
    image: "shopique.png",
    icon: <FaShoppingCart />,
    colors: "from-red-400 to-rose-500",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "My personal portfolio showcasing my work.",
    fullDescription: "This portfolio highlights my web development projects, including e-commerce websites, apps, and other creative solutions that demonstrate my skills and expertise.",
    image: "dp.png",
    icon: <FaUser />,
    colors: "from-indigo-400 to-purple-500",
  },
];

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const toggleDescription = (id) => {
    setActiveProjectId(activeProjectId === id ? null : id);
  };

  return (
    <div className="min-h-screen px-8 py-20 bg-black text-white flex flex-col items-center">
      <h1 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-16">
        My Projects 🚀
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative p-8 rounded-3xl border border-gray-800 shadow-lg backdrop-blur-xl bg-opacity-10 bg-white transition-transform transform"
          >
            {/* Project Icon */}
            <div className="text-4xl mb-4 text-gray-300">{project.icon}</div>

            {/* Project Image */}
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-xl mb-4" />

            {/* Gradient Title */}
            <p className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.colors}`}>
              {project.title}
            </p>

            {/* Description */}
            <p className="text-gray-300 mt-3 text-lg">{project.description}</p>

            {/* Read More Button */}
            <button
              onClick={() => toggleDescription(project.id)}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-400 text-white rounded-lg transition duration-300 hover:opacity-80 hover:shadow-lg"
            >
              {activeProjectId === project.id ? "Show Less" : "Read More →"}
            </button>

            {/* Detailed Description */}
            {activeProjectId === project.id && (
              <div className="mt-4 text-gray-300">{project.fullDescription}</div>
            )}

            {/* Soft Neon Border Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff7eb3]/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 rounded-3xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
