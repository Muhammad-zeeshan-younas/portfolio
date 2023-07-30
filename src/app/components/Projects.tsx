import React from "react";
import data from "../data.json";
import Project from "./shapes/Project";
type Props = {};

function Projects({}: Props) {
  return (
    <div className="h-screen flex  relative overflow-hidden flex-col text-left md:flex-row px-10 justify-evenly mx-auto items-center max-w-7xl">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#6e77a0] text-center ml-8">
        projects
      </h3>
      <div className="w-full flex gap-4 snap-x snap-mandatory mt-16 overflow-auto  scrollbar-thin scrollbar-track-[#171e40]/40 scrollbar-thumb-[#08d463]/80 pb-3">
        {data.projects.map(({ name, image, description, link }) => (
          <Project
            key={name}
            name={name}
            image={image}
            description={description}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
