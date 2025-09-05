import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useScrollVisibility } from "../hooks/scrollVisibility";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonials = [
  {
    id: 1,
    name: "Tim Bailey",
    role: "SEO Specialist, Theme Junction",
    image: "clients/client.jpg",
    quote:
      "Taylor is a professional Designer he really helps my business by providing value to my business.",
    icon: "play",
  },
  {
    id: 2,
    name: "Brandon Fraser",
    role: "Senior Software Dev, Cosmic Sport",
    image: "clients/client.jpg",
    quote:
      "Taylor is a professional Designer he really helps my business by providing value to my business.",
    icon: "quote",
  },
  {
    id: 3,
    name: "Tim Bailey",
    role: "SEO Specialist, Theme Junction",
    image: "clients/client.jpg",
    quote:
      "Taylor is a professional Designer he really helps my business by providing value to my business.",
    icon: "play",
  },
  {
    id: 4,
    name: "Brandon Fraser",
    role: "Senior Software Dev, Cosmic Sport",
    image: "clients/client.jpg",
    quote:
      "Taylor is a professional Designer he really helps my business by providing value to my business.",
    icon: "quote",
  },
  {
    id: 5,
    name: "Brandon Fraser",
    role: "Senior Software Dev, Cosmic Sport",
    image: "clients/client.jpg",
    quote:
      "Taylor is a professional Designer he really helps my business by providing value to my business.",
    icon: "quote",
  },
  {
    id: 6,
    name: "Tim Bailey",
    role: "SEO Specialist, Theme Junction",
    image: "clients/client.jpg",
    quote:
      "Taylor is a professional Designer he really helps my business by providing value to my business.",
    icon: "play",
  },
  {
    id: 7,
    name: "Brandon Fraser",
    role: "Senior Software Dev, Cosmic Sport",
    image: "clients/client.jpg",
    quote:
      "Taylor is a professional Designer he really helps my business by providing value to my business.",
    icon: "quote",
  },
];

const Client = () => {
  const isVisible = useScrollVisibility("testimonials");
  return (
    <div id="testimonials" className="bg-black">
      <div  className="py-16 xl:w-9/12 mx-auto">
        <div className="mx-auto w-11/12 px-4 flex flex-col gap-10 xl:flex-row xl:justify-between">
          <div>
            <motion.h1
              className="bg-text-gradient bg-clip-text text-transparent font-extrabold text-4xl xl:text-3xl leading-loose"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              My Client's Stories
            </motion.h1>
            <motion.p
              className="w-[70%]  text-gray-300"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Empowering people in new a digital journey with my super services.
            </motion.p>
          </div>

          <motion.div 
          initial={{opacity: 0}}
          animate={isVisible ? {opacity: 1}:{}}
          transition={{duration: 0.4, delay: 0.1}}
          className="xl:w-7/12 w-11/12 mx-auto relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              slidesPerView={1}
              grabCursor={true}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="mt-10 xl:mt-0">
                  <div className="bg-background-light rounded-xl p-6 flex flex-col gap-4 h-[400px] max-w-[400px]  xl:h-[330px] xl:min-w-[260px]">
                    <div className="rounded-sm rounded-es-full overflow-hidden w-32 h-32 xl:w-24 xl:h-24">
                      <img
                        src={t.image}
                        alt={t.name}
                        className=" w-full object-cover"
                      />
                    </div>

                    <p className="text-gray-200 text-sm mt-4">“{t.quote}”</p>
                    <div className="mt-4">
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Client;
