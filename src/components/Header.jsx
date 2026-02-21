import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import DebGif from "../assets/images/DebGif.gif";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Moments", to: "milestones-section" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`container mx-auto  transition-all duration-300 ${
          isSticky ? "px-3 md:px-3" : "px-0"
        }`}
      >
        <motion.div
          className={`flex justify-between  items-center transition-all duration-300 ${
            isSticky
              ? "bg-gradient-to-r from-blue-900/30 to-gray-900/30 backdrop-blur-md border-b border-primary/20 rounded-xl shadow-2xl shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),10px_10px_15px_rgba(0,0,0,0.8)] shadow-primary/20 px-6 py-2"
              : ""
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center"
          >
            <img
              src={DebGif}
              alt="logo"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-2xl font-bold text-white bonheur-royale-regular">
              <span className="text-primary text-4xl">D</span>ebfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-xl font-medium text-white hover:text-primary transition-colors cursor-pointer relative group "
                    activeClass="text-primary"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full "></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary text-2xl z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 100 }}
          className={`fixed top-0 right-0 w-55 h-screen bg-dark/95 backdrop-blur-lg shadow-2xl md:hidden z-40 pt-20 px-6 ${
            isMenuOpen ? "shadow-[0_0_30px_rgba(0,238,255,0.3)]" : ""
          }`}
          style={{
            borderLeft: "1px solid rgba(0, 238, 255, 0.2)",
            boxShadow: isMenuOpen ? "0 0 30px rgba(0, 238, 255, 0.3)" : "",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-20 rounded-l-xl "></div>
          <ul className="flex flex-col space-y-6 relative z-10 ">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-lg font-medium text-white hover:text-primary transition-colors cursor-pointer block py-2 pl-4 border-l-2 border-transparent hover:border-primary shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),10px_10px_15px_rgba(0,0,0,0.8)]
"
                  activeClass="text-primary border-primary "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
