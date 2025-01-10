"use client";

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

import { FocusCards } from "@/components/ui/focus-cards";

const Skillset = () => {
  const cards = [
    { icon: <DiJava size={80} />, title: "Java" },
    { icon: <DiJavascript1 size={80} />, title: "JavaScript" },
    { icon: <DiReact size={80} />, title: "React" },
    { icon: <DiNodejs size={80} />, title: "Node.js" },
    { icon: <DiMongodb size={80} />, title: "MongoDB" },
    { icon: <DiGit size={80} />, title: "Git" },
    { icon: <SiNextdotjs size={80} />, title: "Next.js" },
  ];

  return (
    <section className="mt-8 flex justify-center flex-col items-center">
        <h2 className="text-2xl my-8 text-white">Professional Skillset</h2>
      <FocusCards cards={cards} />
    </section>
  );
};
export default Skillset;
