import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '🚀' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'HTML5/CSS3', icon: '🎨' },
    { name: 'Git', icon: '🐙' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Tailwind', icon: '🌀' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'Firebase', icon: '🔥' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b bg-[#151925]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          variants={item}
        >
          <motion.h3 
            className="text-3xl sm:text-4xl font-bold text-[#03B0FD] mb-3 font-inder"
            whileHover={{ scale: 1.02 }}
          >
            Technical Skills
          </motion.h3>
          <motion.p 
            className="text-[#b3b3b3] text-lg max-w-2xl mx-auto font-poppins"
            whileHover={{ scale: 1.01 }}
          >
            Technologies I've worked with and mastered
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
          variants={container}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(3, 176, 253, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1e2333] p-4 rounded-xl text-center shadow-lg border border-[#2a3042] hover:border-[#03B0FD] transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:text-[#03B0FD] transition-colors duration-300">
                {skill.icon}
              </div>
              <span className="text-white text-sm sm:text-base font-medium font-poppins group-hover:text-[#03B0FD] transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={item}
        >
          <motion.p 
            className="text-[#b3b3b3] italic max-w-3xl mx-auto font-poppins"
            whileHover={{ scale: 1.01 }}
          >
            "Continuously expanding my skill set to build better, faster, and more efficient applications."
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;