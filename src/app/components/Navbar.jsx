"use client";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
const Navbar = () => {
  const links = [
    { title: "Home", link: "#", icon: <IoHomeOutline /> },
    { title: "About", link: "#", icon: <CiUser /> },
    { title: "Projects", link: "#", icon: <FaLaptopCode /> },
    { title: "Experience", link: "#", icon: <IoBagCheckOutline /> },
    { title: "Resume", link: "#", icon: <IoDocumentTextOutline /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full m-1  p-4 h-16 text-white z-10">
      <div className="flex flex-row items-center justify-between">
        <span>SJ</span>
        <ul className="flex space-x-6">
          {links.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:border-b-[#94539F] hover:border-b-2 flex flex-row items-center gap-1"
              >
                {item.icon}
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
