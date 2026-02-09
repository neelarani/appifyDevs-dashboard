"use client";
import { useState } from "react";
import {
  FaTachometerAlt,
  FaChartLine,
  FaShoppingCart,
  FaUsers,
  FaDollarSign,
  FaCog,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const links = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Reports", icon: <FaChartLine /> },
    { name: "Orders", icon: <FaShoppingCart /> },
    { name: "Users", icon: <FaUsers /> },
    { name: "Revenue", icon: <FaDollarSign /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-red-500 shadow h-screen p-4 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="self-end mb-6 text-gray-600 hover:text-blue-500"
        >
          {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
        <ul className="flex-1 space-y-4">
          {links.map((link) => (
            <li
              key={link.name}
              className="flex items-center space-x-2 p-2 rounded hover:bg-blue-50 cursor-pointer"
            >
              {link.icon}
              {!isCollapsed && <span>{link.name}</span>}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
