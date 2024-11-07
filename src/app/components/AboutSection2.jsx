"use client";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
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
  { icon: <DiJava size={60} />, name: "Java" },
  { icon: <DiJavascript1 size={60} />, name: "JavaScript" },
  { icon: <DiReact size={60} />, name: "React" },
  { icon: <DiNodejs size={60} />, name: "Node.js" },
  { icon: <DiMongodb size={60} />, name: "MongoDB" },
  { icon: <DiGit size={60} />, name: "Git" },
  { icon: <SiNextdotjs size={60} />, name: "Next.js" },
];

const AboutSection2 = () => {
  return (
    <section className="mt-8 flex justify-center flex-col items-center">
      <h2 className="text-white font-bold text-3xl">Professional Skillset </h2>
      <div className="grid grid-cols-5 text-white text-2xl gap-4 mt-6 ">
        {logos.map((logo, index) => (
          <div key={index}>
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as="button"
              className="text-white p-8 flex items-center space-x-2"
            >
              {logo.icon}
            </HoverBorderGradient>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AboutSection2;
