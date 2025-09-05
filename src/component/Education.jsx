import { AwardIcon, GraduationCapIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { useScrollVisibility } from "../hooks/scrollVisibility";

const expTab = [
  {
    duration: "2022 - Present",
    title: "LEAD DEVELOPER",
    address: "Blockdots, London",
  },
  {
    duration: "2020 - 2022",
    title: "Full Stack Web Developer",
    address: "Nairobi, Kenya",
  },
  {
    duration: "2021 - 2022",
    title: "UI Designer",
    address: "Nairobi, Kenya",
  },
];
const eduTab = [
  {
    duration: "2022 - 2025",
    title: "Programming course",
    address: "Harverd University",
  },
  {
    duration: "2020 - 2022",
    title: "Graphic design course",
    address: "Youtube tutorials",
  },
  {
    duration: "2019 - 2020",
    title: "Web design course",
    address: "University of California",
  },
];
const Education = () => {
  const isVisible = useScrollVisibility("resume");
  return (
    <div id="resume" className="bg-black">
      <div  className="py-16 xl:w-8/12 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10 items-center text-white px-4">
          {/* Left Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <h1 className=" flex gap-2 text-3xl lg:text-5xl font-bold">
                {/* <AwardIcon size={36} className="text-primary" /> */}
                <img
                  src="./aword.svg"
                  className="w-11 relative -top-2 md:-top-1 text-primary"
                  alt=""
                />
                My Experience
              </h1>
            </motion.div>
            <div className="mt-8 grid grid-cols-1 gap-4">
              {expTab.map((item, index) => (
                <ExperienceItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <H3Title>{item.duration}</H3Title>
                  <H1Title>{item.title}</H1Title>
                  <Parg>{item.address}</Parg>
                </ExperienceItem>
              ))}
            </div>
          </div>
          {/* Right Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <h1 className=" flex gap-2 text-3xl lg:text-5xl font-bold">
                {/* <AwardIcon size={36} className="text-primary" /> */}
                <GraduationCapIcon size={46} className="text-primary mr-1  relative -top-2 md:top-0" />
                My Education
              </h1>
            </motion.div>
            <div className="mt-8 grid grid-cols-1 gap-4">
              {eduTab.map((item, index) => (
                <ExperienceItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <H3Title>{item.duration}</H3Title>
                  <H1Title>{item.title}</H1Title>
                  <Parg>{item.address}</Parg>
                </ExperienceItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = tw(motion.div)`
bg-background-light rounded-md p-4 hover:bg-gradient-primary group duration-300 ease-in-out
`;

const H3Title = tw.h3`
font-semibold text-primary group-hover:text-white duration-300 ease-in-out
`;
const H1Title = tw.h1`
font-semibold text-lg leading-9
`;
const Parg = tw.p`
 text-gray-300
`;
export default Education;
