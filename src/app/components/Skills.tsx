"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./shapes/Skill";
import {
  DiReact,
  DiHtml5,
  DiRor,
  DiJavascript,
  DiSass,
  DiLinux,
  DiVisualstudio,
  DiNodejs,
} from "react-icons/di";
type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#6e77a0] text-center ml-8">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-2xl text-[#6e77a0] text-center ml-8">
        Hover over a skill to view proficiency
      </h3>
      <div className="grid grid-cols-4 gap-8 px-7 sm:px-0">
        <Skill
          skill={
            <DiHtml5 className="w-24 h-24 text-[#E86228] border border-[#323b6a] rounded-full p-1 filter group-hover:grayscale transition duration-300 ease-in-out" />
          }
          percent="90"
        />
        <Skill
          skill={
            <DiSass className="w-24 h-24 text-[#CF6B9D]  border border-[#323b6a] rounded-full p-1 filter group-hover:grayscale transition duration-300 ease-in-out" />
          }
          percent="87"
        />
        <Skill
          skill={
            <DiReact className="w-24 h-24 text-[#627FD1]  border border-[#323b6a] rounded-full p-1 filter group-hover:grayscale transition duration-300 ease-in-out" />
          }
          percent="90"
        />
        <Skill
          skill={
            <DiRor className="w-24 h-24 bg-[#c60000] text-white border border-[#323b6a] rounded-full p-1 filter group-hover:grayscale transition duration-300 ease-in-out" />
          }
          percent="75"
        />
        <Skill
          skill={
            <DiNodejs className="w-24 h-24 text-emerald-400  border border-[#323b6a] rounded-full p-1 filter group-hover:grayscale transition duration-300 ease-in-out" />
          }
          percent="70"
        />
        <Skill
          skill={
            <DiJavascript className="w-24 h-24 text-[#f7e025]  border border-[#323b6a] rounded-full p-1 filter group-hover:grayscale transition duration-300 ease-in-out" />
          }
          percent="85"
        />
        <Skill
          skill={
            <DiLinux className="w-24 h-24 text-black bg-white border border-[#323b6a] rounded-full p-1 filter group-hover:grayscale transition duration-300 ease-in-out" />
          }
          percent="40"
        />
        <Skill
          skill={
            <DiVisualstudio className="w-24 h-24 text-white bg-[#6b61bd] border border-[#323b6a] rounded-full p-1 filter group-hover:grayscale transition duration-300 ease-in-out" />
          }
          percent="70"
        />
      </div>
    </motion.div>
  );
}

export default Skills;
