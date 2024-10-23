"use client";
import React, { useState } from "react";

import MenuOverlay from "./MenuOverlay";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // border-[#33353F]
  return (
    <nav className="h-24 flex items-center fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-8 flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <div className="flex items-center justify-center h-[35rem] w-full">
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
