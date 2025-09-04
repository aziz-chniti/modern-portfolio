import { motion } from "motion/react";
import tw from "tailwind-styled-components";
import { useScrollVisibility } from "../hooks/scrollVisibility.js";
const skills = [
  // {
  //   img: "src/assets/skills/html.svg",
  //   deg: "87%",
  //   title: "HTML",
  // },
  // {
  //   img: "src/assets/skills/css.svg",
  //   deg: "85%",
  //   title: "CSS",
  // },
  {
    img: "src/assets/skills/javascript.svg",
    deg: "75%",
    title: "Javascript",
  },
  {
    img: "src/assets/skills/react.svg",
    deg: "80%",
    title: "React",
  },
  {
    img: "src/assets/skills/tailwindcss.svg",
    deg: "80%",
    title: "Tailwind",
  },
  {
    img: "src/assets/skills/express-js.svg",
    deg: "80%",
    title: "Express",
  },
  {
    img: "src/assets/skills/mongodb.svg",
    deg: "76%",
    title: "MongoDB",
  },
  {
    img: "src/assets/skills/figma.svg",
    deg: "60%",
    title: "Figma",
  },
  {
    img: "src/assets/skills/git.svg",
    deg: "76%",
    title: "Git",
  },
];

function Skills() {
    const isVisible = useScrollVisibility("skills");
  return (
    <div id="skills" className="py-16 xl:w-8/12 mx-auto">
      <div className="text-center mx-1">
        <motion.h1 
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="bg-text-gradient bg-clip-text text-transparent font-extrabold text-4xl leading-loose ">
          My SKILLS
        </motion.h1>
        <div className="flex justify-center items-center gap-3 flex-wrap">
          {skills.map((item, index) => {
            return (
              <Skill key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ?{ opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 * index, duration: 0.5 }}
              >
                <Icon>
                  <img
                    src={item.img}
                    alt=""
                    className="w-10 mb-5 grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-300 ease-in-out"
                  />
                  <p className="text-gray-500 font-bold text-[1.4rem] absolute group-hover:text-primary bottom-2">{item.deg}</p>
                </Icon>
                <p className=" font-bold text-primary mt-3">{item.title}</p>
              </Skill>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Skill = tw(motion.div)`
text-center mt-4
`;
const Icon = tw.div` relative
backdrop-blur-sm
bg-background-light h-40 w-40 flex flex-col items-center justify-center rounded-2xl p-4 hover:bg-primary-hover
border-2 border-border hover:border-primary-dark group transition-all duration-300 ease-in-out
`;

export default Skills;
