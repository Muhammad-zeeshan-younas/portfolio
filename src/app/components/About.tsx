import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#6e77a0] text-center ml-8">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/avatar.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-56 sm:h-56 mt-8 lg:mt-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] border-[#171e40] bg-[#171e40] overflow-hidden"
      ></motion.img>
      <div className="space-y-4 sm:space-y-10 px-0 md:px-10">
        <h4 className="text-2xl sm:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline wavy text-[#08d463]/50 decoration-wavy">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-sm sm:text-base lg:text-lg tracking-wider text-justify">
          I&apos;m Zeeshan.I&apos;ve been coding for over a year now as a Full
          Stack developer I&apos;ve worked with startups to help build & scale
          their companies, dedicated to crafting seamless and innovative web
          experiences. Step into my portfolio, where I showcase my journey in
          building robust web applications that blend cutting-edge
          technology.Besides coding I have a passion for gaming and have
          competed in e-sport tournaments. I also coach others in both gaming
          and programming on how to excel and be better
        </p>
      </div>
    </motion.div>
  );
}

export default About;
