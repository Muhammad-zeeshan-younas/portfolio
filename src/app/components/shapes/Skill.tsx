import React, { ReactNode } from "react";

interface SkillProps {
  skill: ReactNode; // Updated to accept a ReactNode instead of a string
  percent: string;
}

const Skill: React.FC<SkillProps> = ({ skill, percent }) => {
  return (
    <div className="flex relative group cursor-pointer">
      {skill}
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[100%] h-[100%] rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {percent}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
