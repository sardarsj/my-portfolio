"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const education = () => {
  const data = [
    {
      title: "2020 - 24",
      content: (
        <div>
          <p className="text-white text-xl font-semibold">
            Bachelor of Technology (COMPUTER SCIENCE AND ENGINEERING)
          </p>
          <div className="flex flex-row justify-between">
            <p className="text-gray-100">
              Guru Tegh Bahadur Institute of Technology (GGSIPU)
            </p>
            <p className="text-gray-100">CGPA: 9.1</p>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-white text-xl font-semibold">
          Senior Secondary Education (SCIENCE)
          </p>
          <div className="flex flex-row justify-between">
            <p className="text-gray-100">
            S.S Mota Singh Model School | New Delhi
            </p>
            <p className="text-gray-100">Percentage: 86.80</p>
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <p className="text-white text-xl font-semibold">
          Secondary Education
          </p>
          <div className="flex flex-row justify-between">
            <p className="text-gray-100">
            S.S Mota Singh Model School | New Delhi
            </p>
            <p className="text-gray-100">Percentage: 90.83</p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};
export default education;
