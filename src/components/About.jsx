import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profile from "../images/profile.png";


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="aboutMe"
      ref={ref}
      className="w-full bg-[#151925] min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Profile Image (Mobile: Top, Desktop: Left) */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center order-1 lg:order-none"
            variants={itemVariants}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#03B0FD] shadow-lg shadow-[#03B0FD]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#03B0FD] to-[#151925] opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <span className="text-5xl sm:text-6xl font-bold text-white">HS</span> */}
                <img 
                  src={profile} 
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 scale-150 pt-6 transform"
                />

              </div>
            </div>
          </motion.div>

          {/* Right Column - Content (Mobile: Bottom, Desktop: Right) */}
          <motion.div 
            className="w-full lg:w-3/5 order-2 lg:order-none"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#03B0FD] mb-4 sm:mb-6 font-inder"
              variants={itemVariants}
            >
              About <span className="text-white">Me</span>
            </motion.h2>
            
            <motion.div 
              className="mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-xl sm:text-2xl text-white font-medium mb-3 sm:mb-4 font-poppins"
                variants={itemVariants}
              >
                Full-Stack Web Developer
              </motion.h3>
              <motion.p 
                className="text-gray-300 text-base sm:text-lg leading-relaxed font-poppins"
                variants={itemVariants}
              >
                Creative and detail-oriented Full-Stack Web Developer proficient in the MERN stack. 
                Committed to developing scalable, efficient, and user-centric applications. 
                Demonstrates strong problem-solving skills, adaptability to emerging technologies, 
                and a passion for impactful project contributions. Currently pursuing a Bachelor's 
                degree in Computer Science.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;