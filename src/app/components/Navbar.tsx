"use client";
import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="flex flex-grow justify-between p-5 items-center sticky top-0 z-20 max-w-7xl mx-auto">
      <motion.div
        key="social-icons"
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex gap-6"
      >
        <a href="https://github.com/Muhammad-zeeshan-younas" target="_blank">
          <AiFillGithub className="w-8 h-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-zeeshan-younas-b90920234/"
          target="_blank"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </motion.div>
      <motion.button
        key="download-cv"
        initial={{
          x: 200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="border-[#08d463] border-4 rounded-lg text-xs py-2 px-4 hover:scale-110 "
      >
        Download CV
      </motion.button>
    </header>
  );
}

export default Navbar;
