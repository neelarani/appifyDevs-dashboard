import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/Sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/*  Navbar */}
        <DashboardNavbar />

        {/* dashboard content */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
