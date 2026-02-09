"use client";
import { useState } from "react";
import { FaBell, FaBars } from "react-icons/fa";
import DashboardMobileSidebar from "./DashboardMobileSidebar";
import { ModeToggle } from "./ModeToggle";

export default function DashboardNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profile = {
    name: "Admin User",
    email: "admin@example.com",
  };

  return (
    <>
      <nav className="bg-background border-b border-sidebar-border shadow px-6 py-4 flex justify-between items-center relative">
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

        {/* Profile */}
        <div className="flex items-center space-x-4 relative">
          <div className="flex items-center space-x-4 ">
            <ModeToggle />
          </div>
          <button className="relative">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </button>

            {/* Profile dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg p-4 text-gray-800 z-50">
                <div className="mb-2">
                  <p className="font-medium">{profile.name}</p>
                  <p className="text-sm text-gray-500">{profile.email}</p>
                </div>
                <button
                  className="w-full text-left px-2 py-1 hover:bg-red-100 rounded text-red-600 font-medium"
                  onClick={() => alert("Logged out")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <DashboardMobileSidebar
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
    </>
  );
}
