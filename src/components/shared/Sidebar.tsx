"use client";
import { getCommonNavItems } from "@/lib/navItems.config";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const links = getCommonNavItems()[0].items;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-background border-r border-sidebar-border shadow h-screen p-4 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="self-end mb-6 text-foreground hover:text-green-500"
        >
          {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
        <ul className="flex-1 space-y-4">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <li
                key={link.title}
                className="flex items-center space-x-2 p-2 rounded hover:bg-blue-50 cursor-pointer hover:text-green-500"
              >
                {Icon && <Icon className="w-4 h-4" />}

                {!isCollapsed && <span>{link.title}</span>}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
