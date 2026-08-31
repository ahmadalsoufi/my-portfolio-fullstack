"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// react-icons
import { PiListLight } from "react-icons/pi";
import { RiArrowDropUpLine } from "react-icons/ri";
import { VscDeveloperTools } from "react-icons/vsc";

// components
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <nav className="top-0 mx-auto flex max-w-5xl flex-col p-3 font-medium capitalize sm:flex-row sm:justify-between">
        <div className="flex justify-between">
          <h3>
            <Link
              className="flex min-h-full items-center gap-x-1 text-sm font-medium text-blue-300"
              onClick={() => {
                setIsCollapsed(true);
              }}
              href={navItems[0].href}
            >
              <p className="flex items-center justify-between gap-x-1 text-lg font-bold">
                <span className="text-blue-400">
                  <VscDeveloperTools />
                </span>
                <span>Ahmad Alsoufi's</span>
              </p>
            </Link>
          </h3>

          <button
            className="block cursor-pointer sm:hidden"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <PiListLight /> : <RiArrowDropUpLine />}
          </button>
        </div>

        <ul
          className={`${isCollapsed ? "max-h-0 opacity-0" : "max-h-52 opacity-100"} flex flex-col items-end gap-y-2 overflow-hidden transition-all duration-300 sm:max-h-none sm:flex-row sm:gap-x-6 sm:opacity-100`}
        >
          {navItems.map((nav) => (
            <li
              key={nav.label}
              className="flex min-h-full items-center text-sm font-medium"
            >
              <Link
                className={`${pathName === nav.href && "text-blue-400"} transition-colors duration-200 hover:text-blue-400`}
                onClick={() => {
                  setIsCollapsed(true);
                }}
                href={nav.href}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
