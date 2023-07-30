import React from "react";
import Service from "./shapes/Service";
import data from "../data.json";

type Props = {};

function Services({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row px-10 justify-evenly mx-auto items-center max-w-7xl">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#6e77a0] text-center ml-8">
        services
      </h3>

      <div className="w-full flex overflow-x-auto mt-20 gap-4 text-[#6e77a0] scrollbar-thin scrollbar-track-[#171e40]/40 scrollbar-thumb-[#08d463]/80 pb-3">
        {data.services.map(({ category, services }) => (
          <Service key={category} category={category} services={services} />
        ))}
      </div>
    </div>
  );
}

export default Services;
