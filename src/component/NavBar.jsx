import { useState } from "react";
import { motion } from "framer-motion";
import { MenuBar } from "./minicomp/MenuBar";
import { X } from "lucide-react";
import { useScrollVisibility } from "../hooks/scrollVisibility";

const navName = [
  "Services",
  "Works",
  "Resume",
  "Skills",
  "Testimonials",
  "Contact",
];
const NavBar = () => {
  const isVisible = useScrollVisibility("topnav", 300, true);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        initial={false}
        animate={
          isVisible
            ? {
                position: "fixed",
                top: 0,
                left: "50%",
                x: "-50%",
                width: "100%",
                opacity: 1,
                boxShadow: "shadow-glow-light",
                backgroundColor: "#070213",
                zIndex: 50,
              }
            : {
                position: "relative",
                left: "auto",
                x: 0,
                width: "100%",
                opacity: 1,
                boxShadow: "none",
                backgroundColor: "transparent",
                zIndex: 50,
              }
        }
      >
        <header className={`z-50 py-4 w-10/12 xl:w-8/12 mx-auto relative`}>
          <div className=" flex items-center justify-between p-2">
            {/* Logo */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="cursor-pointer text-primary-dark text-3xl font-bold bg-gradient-to-l from-slate-100 to-slate-400 w-11 h-11 rounded-sm flex justify-center items-center"
            >
              A
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-6">
              {navName.map((name, index) => (
                <motion.a
                  className="relative pb-1 group font-bold text-lg"
                  key={index}
                  href={`#${name.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-primary-l group-hover:w-[80%] duration-300"></span>
                </motion.a>
              ))}
            </nav>

            {/* Right side: Hire button and menu icon */}
            <div className="flex items-center gap-4">
              <a href="https://www.upwork.com/freelancers/~014afdcf19c4e3bb74" target="_blank" rel="noopener noreferrer">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-[1.2rem] text-slate-200 bg-gradient-primary w-32 h-11 rounded-lg hover:bg-gradient-primary-l transition-all duration-300 ease-in-out"
              >
                Hire me!
              </motion.button></a>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="h-11 w-11 flex justify-center items-center lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-[100%] w-11" /> : <MenuBar/>}
              </motion.button>
            </div>
          </div>
        </header>
      </motion.div>
      {/* Fullscreen mobile nav */}
      {isOpen && (
        <div
          className={`fixed inset-0
             bg-background-light bg-opacity-90 top-20 backdrop-blur-md flex flex-col justify-center items-center gap-8 z-50 lg:hidden`}
        >
          {navName.map((name, index) => (
            <motion.a
              key={index}
              href={`#${name.toLowerCase()}`}
              className="relative pb-1 group text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            >
              {name}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-primary-l group-hover:w-[80%] duration-300"></span>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
