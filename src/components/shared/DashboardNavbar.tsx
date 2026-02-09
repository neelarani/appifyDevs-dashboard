"use client";
import { useState } from "react";
import { FaBell, FaBars } from "react-icons/fa";
import DashboardMobileSidebar from "./DashboardMobileSidebar";

export default function DashboardNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-red-500 shadow px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars size={20} />
          </button>
          <h1 className="text-sm md:text-xl ml-2 font-bold">
            Analytics Dashboard
          </h1>
        </div>

        {/* profile */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <div>
            <button className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar  */}
      <DashboardMobileSidebar
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
    </>
  );
}
