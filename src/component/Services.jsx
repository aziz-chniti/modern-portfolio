import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { ArrowDownRight} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollVisibility } from "../hooks/scrollVisibility";
import { useState } from "react";
const LinkTab = [
  {
    id: "01",
    title: "Web Development",
    text: "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    text: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods...",
  },
  {
    id: "03",
    title: "Cotent Writing",
    text: "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.",
  },
  {
    id: "04",
    title: "Digital Marketing",
    text: "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.",
  },
];
const Services = () => {
  const isVisible = useScrollVisibility("services");
  const [hover, setHover] = useState("01");

  return (
    <div className="bg-black">
      <div id="services" className="py-16 xl:w-8/12 mx-auto">
        <div className="title text-center">
          <motion.h1
            className="bg-text-gradient bg-clip-text text-transparent font-extrabold text-4xl leading-loose"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            My Quality Services 
          </motion.h1>
          <motion.p
            className="w-[70%] m-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </motion.p>
        </div>
        <div className="mt-10 px-8 relative" id="group-services">
          {LinkTab.map((item, index) => (
            <div key={item.id} className="relative">
              {isVisible && hover === item.id && (
                <HoverBg
                  layoutId="HoverBg"
                  className="w-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              <WorkLink
                onMouseOver={() => setHover(item.id)}
                key={index}
                to="#"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {/* Left section: Number + Title */}
                <DivTit>
                  <ItemCount $active={hover === item.id}>{item.id}</ItemCount>
                  <Title>{item.title}</Title>
                </DivTit>

                {/* Right section: Description + Arrow */}
                <div className="flex items-center justify-between gap-4  flex-1">
                  <Parg>{item.text}</Parg>
                  <ArrowIcon size={39} $active={hover === item.id} />
                </div>
              </WorkLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkLink = tw(motion(Link))` 
group flex md:items-center md:flex-row md:justify-between py-8 px-4  border-primary-dark border-b
flex-col bg-transparent z-10
`;
const HoverBg = tw(motion.div)`
  absolute inset-0 z-1 bg-gradient-primary cursor-pointer
`;

const DivTit = tw.div`
flex items-center gap-4 md:w-5/12 w-full
`;
const Title = tw.h2`
md:text-3xl text-2xl font-semibold z-10
`;
const ItemCount = tw.span` z-10
text-[1.3rem] font-semibold ${({ $active }) =>
  $active ? "text-white" : "text-primary-dark"}
`;

const Parg = tw.p`
text-sm md:max-w-[80%] text-gray-300 w-[90%] z-10
`;

const ArrowIcon = tw(ArrowDownRight)`
rotate-0 text-primary-dark transform duration-300 ease-in-out
${({ $active }) => $active && "text-white -rotate-90"}
`;
export default Services;
