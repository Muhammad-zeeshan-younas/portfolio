"use client";
import React from "react";
import ExperienceCard from "./shapes/ExperienceCard";

import data from "../data.json";
type Props = {};

function Experience({}: Props) {
  return (
    <div className="h-screen  flex relative flex-col text-left md:flex-row px-10 justify-evenly mx-auto items-center max-w-7xl">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-2xl text-[#6e77a0] text-center ml-8">
        Experience
      </h3>
      <div className="w-full flex snap-x snap-mandatory mt-16 justify-center items-center">
        {data.company.map(({ role, company, joining, keyPoints }) => (
          <ExperienceCard
            key={company}
            role={role}
            company={company}
            joining={joining}
            keyPoints={keyPoints}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
