"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { LiaHandPointRight } from "react-icons/lia";

const AboutSection1 = () => {
  return (
    <section className="text-white lg:py-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex items-center">
          <Image src="/images/about.png" width={400} height={400} />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Know Who I'M</h2>
          <p className="text-base lg:text-lg">
            Hi Everyone, I am Simarjeet Singh from New Delhi, India. I am
            currently employed as a software developer at Keen & Able. I have
            completed Bachelor's in Technology from IPU.
          </p>
          <br />
          <p>Apart from coding, some other activities that I love to do!</p>
          <ul className="flex flex-col mt-2 text-lg">
            <li className="flex flex-row items-center space-x-4">
              <LiaHandPointRight /> <span>Playing Games</span>
            </li>
            <li className="flex flex-row items-center space-x-4">
              <LiaHandPointRight /> <span>Dancing</span>
            </li>
          </ul>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
