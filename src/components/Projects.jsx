import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Blog Application",
      description: "A full-stack blog application with user authentication, CRUD operations, and a rich text editor.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1638342863994-ae4eee256688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMGFwcGxpY2F0aW9ufGVufDB8fDB8fHww",
      github: "https://github.com/hammad1811/BlogApp",
      live: "https://blog-wave-chi.vercel.app/"
    },
    {
      title: "Todo App",
      description: "A full-stack Todo application with user authentication, CRUD operations",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/hammad1811/todoApp.git",
      live: "#"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with user authentication, private messaging, and group chats.",
      tags: ["Next.js", "TypeScript", "Firebase"],
      image: "https://plus.unsplash.com/premium_photo-1683262038148-2ac280407276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9kbyUyMEFwcHxlbnwwfHwwfHx8MA%3D%3D",
      github: "#",
      live: "https://fyp-chat-app.vercel.app/"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.7
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="project"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#151925]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={item}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#03B0FD] mb-3 font-inder">
            My Projects
          </h2>
          <p className="text-[#b3b3b3] text-lg max-w-2xl mx-auto font-poppins">
            Here are some of my featured works. Each project represents challenges overcome and skills mastered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl shadow-2xl border border-[#2a3042] hover:border-[#03B0FD] transition-all duration-500"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-poppins text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-[#03B0FD]/20 text-[#03B0FD] px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#1a1f30]">
                <h3 className="text-xl font-bold text-white mb-2 font-inder">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-400 hover:text-[#03B0FD] transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-400 hover:text-[#03B0FD] transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                  <span className="text-xs text-gray-400 font-poppins">
                    Featured Project
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          variants={item}
        >
          <button className="px-8 py-3 bg-transparent border-2 border-[#03B0FD] text-[#03B0FD] rounded-full font-medium hover:bg-[#03B0FD] hover:text-[#0f121b] transition-all duration-300 hover:shadow-lg hover:shadow-[#03B0FD]/30">
            View All Projects
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;