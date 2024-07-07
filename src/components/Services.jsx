import React, { useEffect } from "react";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"; // Import motion from framer-motion.
import SectionWrapper from "../hoc/SectionWrapper";
import {styles} from "../styles";

// Rest of your component code...


const Services = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b pt-10 pb-36 " id="services">
        <motion.h2
          className={`${styles.sectionHeadText} text-center text-3xl font-bold mb-10 mt-20 md:mt-40 text-white`}
          data-aos="zoom-in"
        >
          Services.
        </motion.h2>
        <section className="container mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mx-4 md:mx-10 lg:mx-28">
            <div
              className="rounded-lg shadow-lg py-8 px-10 mb-4 md:mb-8 lg:mb-0 bg-[#1d1836] col-span-1 row-span-2 flex justify-center items-center"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <motion.h3 className="text-4xl font-bold text-gray-100 mr-2">2+</motion.h3>
              <p className="text-lg font-medium text-gray-100">Years Experience</p>
            </div>
            <div
              className="rounded-lg shadow-lg py-8 px-10 mb-4 md:mb-8 lg:mb-0 bg-[#1d1836] flex justify-center items-center"
              data-aos="fade-down"
            >
              <AiFillIeCircle className="text-4xl text-gray-100 mr-4" />
              <span className="text-lg font-medium text-gray-100">Web Development</span>
            </div>
            <div
              className="rounded-lg shadow-lg py-8 px-10 mb-4 md:mb-8 lg:mb-0 bg-[#1d1836] flex justify-center items-center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <AiFillAndroid className="text-4xl text-gray-100 mr-4" />
              <span className="text-lg font-medium text-gray-100">Google Cloud</span>
            </div>
            <div
              className="rounded-lg shadow-lg py-8 px-10 mb-4 md:mb-8 lg:mb-0 bg-[#1d1836] col-span-2 flex justify-center items-center"
              data-aos="fade-up"
            >
              <AiFillWindows className="text-4xl text-gray-100 mr-4" />
              <span className="text-lg font-medium text-gray-100">Competitive Programming</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionWrapper(Services,"Services");
