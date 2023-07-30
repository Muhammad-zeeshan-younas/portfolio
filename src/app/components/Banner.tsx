"use client";
import Image from "next/image";
import React from "react";
import RadiantCircles from "./shapes/RadiantCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

type Props = {};

function Banner({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Muhammad Zeeshan Younas",
      "Fullstack Developer",
      "Content Creator (Gaming)",
      "I Also Teach Other How To Code",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 text-center overflow-hidden snap-center">
      <RadiantCircles />
      <div className="relative w-32 h-32 rounded-full border-[#171e40] bg-[#171e40] overflow-hidden">
        <Image
          src="/avatar.png"
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="z-20">
        <h2 className="text-lg text-[#6e77a0] uppercase pb-4 tracking-widest lg:tracking-[15px] lg:text-[2xl]">
          Software Engineer
        </h2>
        <p className="text-[#e1e3f9] text-xl lg:text-4xl uppercase">
          <span>{text}</span>
          <Cursor cursorColor="#08d463" />
        </p>
        <div className="pt-5">
          <a href="#about" className="heroButton">
            About
          </a>

          <a href="#experience" className="heroButton">
            Experience
          </a>

          <a href="#skills" className="heroButton">
            Skills
          </a>

          <a href="#projects" className="heroButton">
            Projects
          </a>
          <a href="#services" className="heroButton">
            Services
          </a>
          <a href="#contact" className="heroButton">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
