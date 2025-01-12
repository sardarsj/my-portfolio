"use client";
import { HoverEffect } from "../../components/ui/card-hover-effect";

export const projects = [
  {
    image: "/images/about.png",
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "#",
  },
  {
    image: "/images/about.png",
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "#",
  },
  {
    image: "/images/about.png",
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "#",
  },
  {
    image: "/images/about.png",
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "#",
  },
  {
    image: "/images/about.png",
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "#",
  },
  {
    image: "/images/about.png",
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "#",
  },
];

const project = () => {
  return (
    <>
      <h2 className="text-white mt-10 text-center font-bold text-3xl">
        My Recent Works{" "}
      </h2>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default project;
