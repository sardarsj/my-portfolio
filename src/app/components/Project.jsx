"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../components/ui/carousel";

const Project = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center dark:bg-black w-full gap-4 mx-auto px-8">
      <Carousel className="relative max-w-5xl">
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent className="flex -ml-4 gap-4">
          <CarouselItem className="basis-1/3 flex-grow-0 flex-shrink-0">
            <Card title="Sheetal is Nisha" icon={<AceternityIcon />}>
              <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/3 flex-grow-0 flex-shrink-0">
            <Card title="Nisha is Munni" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/3 flex-grow-0 flex-shrink-0">
            <Card title="Munni is Aditi" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/3 flex-grow-0 flex-shrink-0">
            <Card title="Aditi is Priya" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={4}
                containerClassName="bg-indigo-700"
                colors={[
                  [139, 92, 246],
                  [67, 56, 202],
                ]}
              />
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/3 flex-grow-0 flex-shrink-0">
            <Card title="Priya is Sheetal" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={2}
                containerClassName="bg-teal-500"
                colors={[
                  [13, 148, 136],
                  [20, 184, 166],
                ]}
              />
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Project;

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
