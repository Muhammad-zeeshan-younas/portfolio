import React from "react";

type Props = {
  category: string;
  services: string[];
};

function Service({ category, services }: Props) {
  return (
    <article className="neon-effect flex flex-col sm:h-[300px] rounded-lg items-center flex-shrink-0 w-[280px] sm:w-[500px] snap-start py-8 bg-[#171e40] opacity-40 hover:opacity-100 cursor-pointer transition-all duration-200 overflow-hidden">
      <div className="px-10 grid gap-4">
        <h4 className="lg:text-2xl font-light uppercase text-center">
          {category}
        </h4>

        {Array.isArray(services) ? (
          <ul className="list-disc space-y-4 text-base flex flex-wrap text-[#e1e3f9] ml-2 sm:ml-8">
            {services.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export default Service;
