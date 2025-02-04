"use client";
import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaChalkboardUser } from "react-icons/fa6";
const Navbar = () => {
  const links = [
    { title: "Home", link: "/", icon: <IoHomeOutline /> },
    { title: "About", link: "/about", icon: <CiUser /> },
    // { title: "Education", link: "/education", icon: <FaChalkboardUser /> },
    { title: "Projects", link: "/projects", icon: <FaLaptopCode /> },
    { title: "Resume", link: "/resume", icon: <IoDocumentTextOutline /> },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full h-20 text-white z-10 transition-colors duration-300 ${
        isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row items-center p-4 justify-between text-lg">
        <span className="text-xl font-bold">SJ</span>
        <ul className="flex space-x-6">
          {links.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative flex flex-row items-center gap-1 group "
              >
                {item.icon}
                {item.title}
                <span
                  className="absolute top-7 left-0 h-[4px] rounded-full w-0 bg-[#94539F] transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <a href="https://github.com/sardarsj" target="_blank">
          <span className="p-2 w-20 flex justify-center border-2 rounded-sm ">
            <FaGithub className="text-2xl opacity-100" />
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
