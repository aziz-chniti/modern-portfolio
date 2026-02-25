import {
  Facebook,
  Linkedin,
  Dribbble,
  Github,
  Download,
  ArrowUp,
} from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Prog from "./minicomp/Prog";
const Hero = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setShowScroll(scrollY > 300);
      setScrollPercent(percent);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="home" className="mb-10 w-10/12 xl:w-8/12 mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10 items-center text-white px-4">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="md:space-y-6 space-y-4"
        >
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight xl:leading-relaxed">
            I am Aziz <br />
            <span className="text-transparent lg:text-5xl xl:text-6xl text-4xl ">
              <span className="bg-text-gradient bg-clip-text ">MERN Stack</span>
              <br className="hidden lg:block" />{" "}
              <span className="bg-text-gradient bg-clip-text ">Developer</span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-lg text-gray-300 md:leading-relaxed max-w-md xl:max-w-lg xl:text-2xl"
          >
            I break down complex user experience problems to create integrity
            focussed solutions that connect billions of people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-4"
          >
            <a
              href="cv.pdf"
              download
              className="px-6 py-3 w-fit rounded-full border-2 flex gap-2 tracking-wider text-primary-dark border-primary-dark hover:text-white hover:bg-primary-light hover:border-primary-light transition-all duration-300 font-medium"
            >
              Download CV <Download className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-4 lg:mt-0 mt-2">
              <IconBox href="#">
                <Facebook className="text-primary-dark group-hover:text-white duration-300 ease-in-out" />
              </IconBox>
              <IconBox href="https://www.linkedin.com/in/azizchniti/" target="_blank">
                <Linkedin className="text-primary-dark group-hover:text-white duration-300 ease-in-out" />
              </IconBox>
              <IconBox href="#">
                <Dribbble className="text-primary-dark group-hover:text-white duration-300 ease-in-out" />
              </IconBox>
              <IconBox href="https://github.com/aziz-chniti" target="_blank">
                <Github className="text-primary-dark group-hover:text-white duration-300 ease-in-out" />
              </IconBox>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="
        after:content-[''] after:-top-8 after:-right-8  after:z-[-1] after:absolute after:shadow-glow
        before:content-[''] before:bottom-9 xl:before:left-32 2xl:before:left-40 md:before:left-24 before:left-20  before:z-[-1] before:absolute before:shadow-glow
        
        flex justify-center md:justify-end relative"
        >
          <div className="h-80 w-80 xl:w-[400px] xl:h-[400px] bg-black rounded-2xl overflow-hidden shadow-lg border border-primary-dark border-2 rotate-3 group hover:rotate-0 duration-300 ease-in-out hover:border-primary-light">
            <img
              src="picture.png"
              alt="profile picture"
              loading="lazy"
              className="w-full h-full object-cover object-top "
            />
          </div>
        </motion.div>
      </div>
      <div id="topnav" className="grid grid-cols-2 xl:grid-cols-4 gap-7 mt-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex gap-3 items-center justify-center"
        >
          <Counter to={14} className="text-4xl md:text-6xl font-bold" />
          <p className="text-md font-bold text-gray-400">
            Years of <br /> Experience
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex gap-3 items-cente justify-center"
        >
          <Counter to={50} className="text-4xl md:text-6xl font-bold" val="+" />
          <p className="text-md font-bold text-gray-400">
            Project <br /> Completed
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex gap-3 items-cente justify-center"
        >
          <Counter
            to={1.5}
            className="text-4xl md:text-6xl font-bold"
            val="K"
          />
          <p className="text-md font-bold text-gray-400">
            Happy <br /> Clients
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex gap-3 items-cente justify-center"
        >
          <Counter to={2} className="text-4xl md:text-6xl font-bold" />
          <p className="text-md font-bold text-gray-400">
            Years of <br /> Experience
          </p>
        </motion.div>
      </div>
      {/* Scroll-to-top button with animated progress */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          showScroll ? { opacity: 1, scale: 1 } : {}
        }
        transition={{ duration: 0.3 }}
        className="fixed z-50 bottom-6 right-6 h-11 w-11 rounded-full border border-primary-hover flex justify-center items-center bg-black/70 cursor-pointer"
        style={{ pointerEvents: showScroll ? "auto" : "none" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Prog scrollPercent={scrollPercent} />
        <ArrowUp className="text-primary-dark" size={20} />
      </motion.div>

    </div>
  );
};

const IconBox = tw.a`
  after:content-[''] after:z-[-1] after:rounded-full after:absolute after:top-[50%] after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:w-0 hover:after:w-[110%] after:h-0 hover:after:h-[110%] after:bg-primary-light after:transition-all after:origine-center after:duration-300 after:ease-in-out
  relative border border-primary-dark group rounded-full h-9 w-9 p-2 cursor-pointer flex items-center justify-center overflow-hidden hover:border-primary-light transition-all duration-300 ease-in-out
`;
const Counter = ({ from = 0, to, duration = 3, className, val = "" }) => {
  const count = useMotionValue(from);
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) =>
        String(latest).indexOf(".") !== -1
          ? setCurrent(latest.toFixed(1))
          : setCurrent(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [count, to, duration]);

  return (
    <motion.h2 className={className}>
      {current}
      {val}{" "}
    </motion.h2>
  );
};
export default Hero;
