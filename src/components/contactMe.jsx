import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#151925]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={item}>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#03B0FD] mb-3 font-inder">
            Get In Touch
          </h2>
          <p className="text-[#b3b3b3] text-lg max-w-2xl mx-auto font-poppins">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Contact Info */}
          <motion.div 
            className="w-full lg:w-2/5 space-y-8"
            variants={item}
          >
            <div className="bg-[#1e2333] p-8 rounded-xl shadow-lg border border-[#2a3042] hover:border-[#03B0FD] transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#03B0FD]/10 rounded-full">
                  <FiMail className="text-[#03B0FD] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 font-inder">Email Me</h3>
                  <a 
                    href="mailto:hammadsaleem1811@gmail.com" 
                    className="text-[#b3b3b3] hover:text-[#03B0FD] transition-colors font-poppins"
                  >
                    hammadsaleem1811@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#03B0FD]/10 rounded-full">
                  <FiMapPin className="text-[#03B0FD] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 font-inder">Location</h3>
                  <p className="text-[#b3b3b3] font-poppins">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#03B0FD]/10 rounded-full">
                  <div className="text-[#03B0FD] text-xl">🔗</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-inder">Social Links</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/hammad1811" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-400 hover:text-[#03B0FD] transition-colors duration-300 text-2xl"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-400 hover:text-[#03B0FD] transition-colors duration-300 text-2xl"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              className="bg-gradient-to-r from-[#03B0FD] to-[#03B0FD]/70 p-0.5 rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              variants={item}
            >
              <div className="bg-[#151925] rounded-xl p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-4 font-inder">Availability</h3>
                <p className="text-[#b3b3b3] mb-4 font-poppins">
                  I'm currently available for freelance work and full-time positions. 
                  Let's discuss how I can contribute to your team or project.
                </p>
                <button className="px-6 py-2 bg-[#03B0FD] text-[#151925] rounded-full font-medium hover:bg-[#6fc5ff] transition-all duration-300 flex items-center gap-2">
                  <FiSend /> Send Message
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="w-full lg:w-3/5 bg-[#1e2333] p-8 rounded-xl shadow-lg border border-[#2a3042] hover:border-[#03B0FD] transition-all duration-300"
            variants={item}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-inder">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#b3b3b3] mb-2 font-poppins">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#2a3042] border border-[#3a4055] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#03B0FD] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#b3b3b3] mb-2 font-poppins">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#2a3042] border border-[#3a4055] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#03B0FD] transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#b3b3b3] mb-2 font-poppins">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-[#2a3042] border border-[#3a4055] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#03B0FD] transition-all"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#b3b3b3] mb-2 font-poppins">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-[#2a3042] border border-[#3a4055] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#03B0FD] transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-8 py-3 bg-[#03B0FD] text-[#151925] rounded-full font-medium hover:bg-[#6fc5ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#03B0FD]/30 flex items-center gap-2 mx-auto md:mx-0"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;