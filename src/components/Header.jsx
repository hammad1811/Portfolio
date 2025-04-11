import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-24 bg-[#151925] flex items-center justify-between px-10 transition-all">
        {/* Logo Section */}
      <div className="flex w-[30%]">
        <h2 className="text-white font-poppins font-semibold text-2xl">
          Portfolio
        </h2>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden fixed right-0 top-0 w-10 h-24 mr-5">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="md:flex justify-evenly items-center w-[70%] hidden">
        <NavLinks />
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className=" bg-[#151925] absolute  top-24 left-0 w-full flex items-center justify-center flex-col gap-5 py-5 z-50">
          <NavLinks onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </div>
  );
};
const NavLinks = ({onClick})=> {
    return(
        <>
        <ScrollLink
          to="mainy"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          onClick={onClick}
          className="transition-all cursor-pointer duration-400 ease-in-out text-[#03B0FD] font-inter font-medium text-lg hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full hover:after:left-0"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          onClick={onClick}
          className="transition-all cursor-pointer duration-400 ease-in-out text-[#03B0FD] font-inter font-medium text-lg hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full hover:after:left-0"
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          onClick={onClick}
          className="transition-all cursor-pointer duration-400 ease-in-out text-[#03B0FD] font-inter font-medium text-lg hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full hover:after:left-0"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="project"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          onClick={onClick}
          className="transition-all cursor-pointer duration-400 ease-in-out text-[#03B0FD] font-inter font-medium text-lg hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full hover:after:left-0"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          onClick={onClick}
          className="transition-all cursor-pointer duration-400 ease-in-out text-[#03B0FD] font-inter font-medium text-lg hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full hover:after:left-0"
        >
          Contact Me
        </ScrollLink></>
    )
  }

export default Header;
