import { Mail, MapPin, Phone } from "lucide-react";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { useScrollVisibility } from "../hooks/scrollVisibility";
function Contact() {
  const isVisible = useScrollVisibility("contact");
  return (
    <div id="contact" className="py-16 xl:w-8/12 mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 px-4 lg:gap-11">
        <form className="bg-background-light py-8 px-4 rounded-lg lg:max-w-md lg:px-8 lg:py-12">
          <div>
            <motion.h1
              className="text-3xl lg:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              Let's work together!
            </motion.h1>
            <motion.p
              className="text-gray-300 mt-3"
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              i design and code beautifully simple things and i love what i
              dio.Just simple lke that!
            </motion.p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 lg:gap-5">
            <Input
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.3 }}
              type="text"
              placeholder="First name"
              required
            />
            <Input
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.3 }}
              type="text"
              placeholder="last name"
              required
            />
            <Input
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.3 }}
              type="text"
              placeholder="Email address"
              required
            />
            <Input
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.3 }}
              type="text"
              placeholder="Phone number"
              required
            />
          </div>
          <motion.textarea
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.3 }}
            required
            className="w-full h-36 my-4 lg:my-8 bg-black border border-gray-800 focus:border-primary text-white py-3 px-4 rounded outline-0 placeholder:text-[16px] resize-none"
            placeholder="I need a professional website..."
          ></motion.textarea>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-[1.2rem] text-slate-200 bg-gradient-primary h-12 px-8 rounded-lg hover:bg-gradient-primary-l transition-all duration-300 ease-in-out"
          >
            Send Message
          </motion.button>
        </form>
        <div className=" pl-5 flex flex-col justify-center md:mt-0 mt-8">
          <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.2}}
          className="flex items-center mb-8">
            <ContDiv>
              <Phone />
            </ContDiv>
            <div className="ml-4">
              <p className="text-gray-300 md:leading-relaxed max-w-md xl:max-w-lg xl:text-2xl">
                Phone
              </p>
              <h1 className="text-2xl font-bold">+216 20 656 575</h1>
            </div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.3}}
          className="flex items-center mb-8">
            <ContDiv>
              <Mail />
            </ContDiv>
            <div className="ml-4">
              <p className="text-gray-300 md:leading-relaxed max-w-md xl:max-w-lg xl:text-2xl">
                Email
              </p>
              <h1 className="text-2xl font-bold">barmajli.ai@gmail.com</h1>
            </div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5}}
          className="flex items-center mb-8">
            <ContDiv>
              <MapPin />
            </ContDiv>
            <div className="ml-4">
              <p className="text-gray-300 md:leading-relaxed max-w-md xl:max-w-lg xl:text-2xl">
                Address
              </p>
              <h1 className="text-2xl font-bold">Sousse, Kroussia 4026</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
const Input = tw(motion.input)`
text-lg bg-black border border-gray-800 focus:border-primary text-white py-3 px-4 rounded outline-0 placeholder:text-[16px]
`;

const ContDiv = tw.div`
bg-gradient-primary-l h-11 w-11 rounded-full flex justify-center items-center
`;

export default Contact;
