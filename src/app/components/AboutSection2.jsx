"use client";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Marquee from "react-fast-marquee";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
const logos = [
  { icon: <DiJava size={80} />, name: "Java" },
  { icon: <DiJavascript1 size={80} />, name: "JavaScript" },
  { icon: <DiReact size={80} />, name: "React" },
  { icon: <DiNodejs size={80} />, name: "Node.js" },
  { icon: <DiMongodb size={80} />, name: "MongoDB" },
  { icon: <DiGit size={80} />, name: "Git" },
  { icon: <SiNextdotjs size={80} />, name: "Next.js" },
];

const AboutSection2 = () => {
  return (
    <section className="mt-8 flex justify-center flex-col items-center">
      <h2 className="text-white font-bold text-3xl">Professional Skillset </h2>
      <div className="my-10 w-full">
        <Marquee
          className=""
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {logos.map((logo, index) => (
            <div key={index} className="mx-4">
              <HoverBorderGradient
                containerClassName="rounded-lg"
                as="button"
                className="text-white p-8 flex items-center "
              >
                <div className="flex flex-col justify-center items-center">
                  <>{logo.icon}</>
                  <>{logo.name}</>
                </div>
              </HoverBorderGradient>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
export default AboutSection2;
