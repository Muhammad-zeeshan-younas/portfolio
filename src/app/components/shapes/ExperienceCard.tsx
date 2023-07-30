import React from "react";
import { motion } from "framer-motion";
import { DiJavascript, DiReact, DiRor } from "react-icons/di";

type Props = {
  role: string;
  company: string;
  joining: string;
  keyPoints: string[];
};

function ExperienceCard({ role, company, joining, keyPoints }: Props) {
  return (
    <article className="neon-effect flex flex-col rounded-lg items-center flex-shrink-0 w-[300px] sm:w-[500px] snap-center py-8 bg-[#171e40] opacity-40 hover:opacity-100 cursor-pointer transition-all duration-200 overflow-hidden">
      <img
        src="https://framerusercontent.com/images/Y4Tb0LgNnX3UtGcfnaOpq0YKCRI.png"
        alt=""
        srcSet="https://framerusercontent.com/images/Y4Tb0LgNnX3UtGcfnaOpq0YKCRI.png?scale-down-to=512 512w, https://framerusercontent.com/images/Y4Tb0LgNnX3UtGcfnaOpq0YKCRI.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/Y4Tb0LgNnX3UtGcfnaOpq0YKCRI.png 2000w"
        sizes="84px"
      ></img>
      <div className="px-10 grid gap-2">
        <h4 className="lg:text-4xl font-light">{role}</h4>
        <p className="font-bold lg:text-3xl ">{company}</p>
        <div className="flex gap-4 items-center flex-grow py-2">
          <DiRor className="w-8 h-8 bg-[#c60000] rounded-full" />
          <DiReact className="w-8 h-8 text-[#627FD1]" />
          <DiJavascript className="w-8 h-8 text-[#f7e025]" />
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 256 256"
            version="1.1"
            className="bg-white rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 73.29"
          >
            <defs></defs>
            <title>tailwind-css</title>
            <path
              fill="#38bdf8"
              d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
            />
          </svg>
        </div>
        <p className="uppercase py-1 text-gray-300 text-base">{joining}</p>
        {Array.isArray(keyPoints) && keyPoints.length > 0 ? (
          <ul className="list-disc space-y-4 ml-5 text-xs lg:text-lg flex flex-wrap">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export default ExperienceCard;