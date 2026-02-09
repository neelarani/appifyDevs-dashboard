import {
  LayoutDashboard,
  FileText,
  DollarSign,
  Settings,
} from "lucide-react";


export const getCommonNavItems = () => {
  return [
    {
      items: [
        {
          title: "Dashboard Overview",
          href: "/",
          icon: LayoutDashboard,
        },
        {
          title: "Reports",
          href: "/reports",
          icon: FileText,
        },
        {
          title: "Revenue",
          href: "/revenue",
          icon: DollarSign,
        },
        {
          title: "Settings",
          href: "/setting",
          icon: Settings,
        },
      ],
    },
  ];
};
