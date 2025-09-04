import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useState, useEffect } from "react";
import { useScrollVisibility } from "../hooks/scrollVisibility";
import { ArrowUp } from "lucide-react";
const Works = () => {
  const isVisible = useScrollVisibility("works");
  const [activeLink, setActiveLink] = useState("All");
  const [category, setCategory] = useState("All");

  const tabs = ["All", "Apps", "Branding", "Content", "UX/UI"];

  const workTab = [
    {
      id: 1,
      categ: "apps",
      img: "src/assets/workImg/work-1.jpg",
    },
    {
      id: 2,
      categ: "apps",
      img: "src/assets/workImg/work-2.jpg",
    },
    {
      id: 3,
      categ: "ux/ui",
      img: "src/assets/workImg/work-3.jpg",
    },
    {
      id: 4,
      categ: "branding",
      img: "src/assets/workImg/work-4.jpg",
    },
    {
      id: 5,
      categ: "content",
      img: "src/assets/workImg/work-7.jpg",
    },
  ];
  const [works, setWorks] = useState([...workTab]);
  useEffect(() => {
    if (category === "All") {
      setWorks([...workTab]);
    } else {
      setWorks(
        workTab.filter((item) => item.categ === category.toLocaleLowerCase())
      );
    }
  }, [category]);

  return (
    <div id="works" className="w-10/12 xl:w-8/12 mx-auto">
      <div className="py-16">
        <div className="text-center">
          <motion.h1
            className="bg-text-gradient bg-clip-text text-transparent font-extrabold text-4xl leading-loose"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            My Quality Services
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <LinkGroup>
              {tabs.map((label) => (
                <div key={label} className="relative">
                  {activeLink === label && (
                    <ActiveBg
                      layoutId="activeBg"
                      className="w-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <LinkBtn
                    onClick={(e) => {
                      setActiveLink(label);
                      setCategory(e.target.textContent);
                    }}
                  >
                    {label}
                  </LinkBtn>
                </div>
              ))}
            </LinkGroup>
          </motion.div>
        </div>
        <WorkGroup>
          {works.map((work) => (
            <ImgCover
              key={work.id}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <img src={work.img} alt="" />
              <LinkCont />
            </ImgCover>
          ))}
        </WorkGroup>
      </div>
    </div>
  );
};

const LinkGroup = tw.div`
  flex gap-2 items-center justify-center p-1 my-5 sm:mb-8 sm:mt-20 bg-black w-fit mx-auto rounded-full relative
`;

const LinkBtn = tw.button`
  relative z-10 sm:px-6 sm:py-3 px-3 py-2 text-white rounded-full transition-all duration-300
`;

const ActiveBg = tw(motion.div)`
  absolute z-0 h-full rounded-full bg-gradient-primary
`;

const WorkGroup = tw.div`
after:content-[''] after:top-[50%]  after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1] after:absolute after:shadow-glow-light after:absolute 
grid gap-8 grid-cols-1 md:grid-cols-2 relative
`;

const ImgCover = tw(motion.div)`group
px-8 pt-8 bg-background-light rounded-sm relative overflow-hidden
`;
const LinkPro = tw(Link)` 
flex items-center gap-2 absolute -bottom-8 opacity-0 left-[50%] translate-x-[-50%] w-[85%]  bg-gradient-primary text-white px-4 py-2 rounded-md
 group-hover:opacity-100 group-hover:bottom-4   duration-300 ease-in-out
`;
const LinkCont = () => {
  return (
    <LinkPro>
      <div>
        <h3 className="font-bold text-lg">Profile</h3>
        <p className="text-gray-300 text-sm">
          Project was about precision and information...
        </p>
      </div>
      <ArrowUp className="absolute top-4 right-4 -rotate-180 group-hover:rotate-45 duration-300 ease-in-out" />
    </LinkPro>
  );
};
export default Works;
