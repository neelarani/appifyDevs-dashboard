import { ReactNode } from "react";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <DashboardNavbar />

        {/* Dashboard Content */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
