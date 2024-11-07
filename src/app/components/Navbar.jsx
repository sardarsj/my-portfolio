"use client";
import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  const links = [
    { title: "Home", link: "/", icon: <IoHomeOutline /> },
    { title: "About", link: "/about", icon: <CiUser /> },
    { title: "Projects", link: "/projects", icon: <FaLaptopCode /> },
    { title: "Resume", link: "/resume", icon: <IoDocumentTextOutline /> },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full h-20 text-white z-10 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row items-center p-4 justify-between text-lg">
        <span className="text-xl font-bold">SJ</span>
        <ul className="flex space-x-6">
          {links.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="border-b-4 border-transparent hover:border-[#94539F] rounded-b-md flex flex-row items-center gap-1"
              >
                {item.icon}
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <span className="p-2 rounded-sm border-2 ">
          <FaGithub className="text-2xl" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
