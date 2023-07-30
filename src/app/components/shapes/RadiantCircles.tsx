import React from "react";
import { motion } from "framer-motion";
type Props = {};

function RadiantCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="border-[#171e40] absolute rounded-full w-[200px] h-[200px] mt-52 animate-ping border" />
      <div className="border-[#171e40] absolute rounded-full w-[300px] h-[300px] mt-52 animate-ping border" />
      <div className="border-[#171e40] absolute rounded-full w-[500px] h-[500px] mt-52 animate-ping border" />
      <div className="border-[#08d463] absolute rounded-full w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] mt-52 animate-pulse opacity-20 border" />
      <div className="border-[#171e40] absolute rounded-full w-[650px] h-[650px] mt-52 animate-ping border" />
    </motion.div>
  );
}

export default RadiantCircles;
