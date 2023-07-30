import React from "react";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";

type Props = {
  image: string;
  name: string;
  description: string;
  link: string;
};

function Project({ image, name, description, link }: Props) {
  return (
    <article className="neon-effect flex flex-col rounded-lg flex-shrink-0 w-[290px] sm:w-[500px] snap-center pb-3 bg-[#171e40] opacity-40 group hover:opacity-100 cursor-pointer transition-all duration-200 overflow-hidden">
      <div className="flex items-center justify-center relative transition-all duration-500 group-hover:bg-gradient-to-b group-hover:from-[#ffffff00] group-hover:to-[#000000ba] border-b-2 border-[#323b6a] group-hover:border-[#08d463]">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FaGlobe className="w-5 h-5 absolute right-3 top-4 cursor-pointer text-[#08d463] hidden group-hover:block animate-spin" />
        </a>
        <div className="sm:w-96 sm:h-60  w-40 h-40 px-12 relative">
          <Image src={image} alt="" fill className="" />
        </div>
        <h3 className="absolute bottom-0 left-4 uppercase text-2xl hidden group-hover:block transition-all duration-500 text-[#08d463]">
          {name}
        </h3>
      </div>
      <p className="text-justify px-4 py-2 text-sm sm:text-base">
        {description}
      </p>
    </article>
  );
}

export default Project;
