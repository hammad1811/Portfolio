import React from "react";
import { motion } from "framer-motion";
import github from "../images/github.png";
import linked_in from "../images/linked_in.png";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <motion.div className="w-full bg-[#151925] h-screen flex relative overflow-hidden pt-24 px-28" id="mainy">
      {/* Left side (50%) */}
      <div className="lg:w-[50%] w-full h-full flex flex-col items-evenly justify-center">
        <div className="flex flex-col items-start justify-center h-full w-full">
          <h3 className=" font-poppins font-medium text-[25px] text-left text-white ">
            Hey! It's Me
          </h3>
          <h2 className="text-[#03B0FD] font-inder font-normal text-[60px] text-left m-0">
            Hammad <span className="text-white">Saleem</span>
          </h2>
          <p className="text-white font-poppins text-[25px] text-left my-[20px] flex gap-2 font-semibold">
            I am a  
            <Typewriter
              options={{
                strings: ["Web Developer", "Full Stack Developer", "MERN Stack Developer", "Frontend Developer"],
                autoStart: true,
                loop: true,
              
              }}
            />
          </p>

          <div className="flex items-center">
            <p className="text-white font-poppins font-light text-[25px] text-left my-[20px]">
              follow me:{" "}
            </p>
            <div className="flex items-center">
              <a
                href="https://github.com/hammad1811"
                target="_blank"
                rel="noreferrer"
                className="mx-[7px]"
              >
                <img src={github} alt="" className="h-[30px] w-[30px]" />
              </a>
              <a href="" target="_blank" rel="noreferrer" className="mx-[7px]">
                <img src={linked_in} alt="" className="h-[30px] w-[30px]" />
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <a href="mailto:hammadsaleem1811@gmail.com">
              <button className="cursor-pointer py-[12.5px] px-[30px] h-[50px] w-[150px] border-2 border-[#03B0FD] rounded-[25px] bg-[#151925] text-[#03B0FD] font-inter font-semibold text-[16px] transition-all duration-500 hover:bg-[#151925] hover:shadow-[0_0_20px_rgba(111,197,255,0.31)] hover:scale-110 active:bg-[#151925] active:shadow-none active:scale-[0.98] active:duration-250">
                E-Mail Me
              </button>
            </a>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1GpuNjYlfMjuykiU8t6JDee5ZhE8EYOux/view?usp=drive_link",
                  "_blank"
                )
              }
              className="py-[12.5px] px-[30px] h-[50px] w-[150px] border-0 rounded-[25px] bg-[#03B0FD] text-[#151925] font-inter font-semibold text-[16px] transition-all duration-500 hover:bg-[#6fc5ff] hover:shadow-[0_0_20px_rgba(111,197,255,0.31)] hover:scale-110 active:bg-[#3d94cf] active:shadow-none active:scale-[0.98] active:duration-250 ml-[30px] cursor-pointer"
            >
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Right side (50%) with centered 3D image */}
      <div className="w-[50%] hidden h-full lg:flex items-center justify-center">
        {/* 3D Image Container */}
        <motion.div
          className="w-[70%] h-[70%] flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {/* 3D Animated Image */}
          <motion.img
            className="w-full h-full object-contain"
            src="data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22b%22 gradientTransform=%22rotate(-45 .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22%2300cefc%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%233c1d4b%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M921 673.5q-74 173.5-247.5 191t-347 0Q153 847 86.5 673.5T130 370q110-130 240-234.5t281-21Q802 198 898.5 349T921 673.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M921 673.5q-74 173.5-247.5 191t-347 0Q153 847 86.5 673.5T130 370q110-130 240-234.5t281-21Q802 198 898.5 349T921 673.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="3D Background"
            initial={{ opacity: 0.9, rotateY: 20 }}
            animate={{
              rotateY: [20, -20, 20],
              rotateX: [0, 5, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Main;
