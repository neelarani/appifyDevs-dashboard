import { getCommonNavItems } from "@/lib/navItems.config";
import { Cross } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function DashboardMobileSidebar({
  isOpen,
  setIsOpen,
}: MobileSidebarProps) {
  const navItems = getCommonNavItems()[0].items;

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-background shadow p-4 transition-transform duration-300 md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-white"
          >
            <Cross size={24} />
          </button>
        </div>

        <ul className="flex flex-col mt-8 space-y-4">
          {navItems.map((link) => (
            <li
              key={link.title}
              className="p-3 rounded hover:bg-blue-600 cursor-pointer text-white font-medium"
            >
              {link.title}
            </li>
          ))}
        </ul>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/25 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
