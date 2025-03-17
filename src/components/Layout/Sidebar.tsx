"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SidebarItem {
  title: string;
  icon?: string;
  link?: string;
  subItems?: SidebarItem[];
}

const DashboardItems: SidebarItem[] = [
  { title: "Home", icon: "/icons/home.svg", link: "/" },
  { title: "Dashboard", icon: "/icons/user.svg", link: "/dashboard" },
  {
    title: "Transactions",
    icon: "/icons/user.svg",
    subItems: [
      {
        title: "Previous Transactions",
        link: "/transactions",
      },
      {
        title: "Test Customization",
        link: "/test-customization",
        icon: "/icons/user.svg",
      },
      { title: "Test Codes", link: "/test-codes", icon: "/icons/user.svg" },
    ],
  },
  {
    title: "Management",
    icon: "/icons/user.svg",
    subItems: [
      {
        title: "Company",
        link: "/manage/company",
      },
      {
        title: "Facility",
        link: "/manage/facility",
      },
    ],
  },
  {
    title: "Configurations",
    icon: "/icons/user.svg",
    subItems: [
      {
        title: "Test Plan Configurations",
        link: "/test-plans",
        icon: "/icons/user.svg",
      },
      {
        title: "Company License Details",
        link: "/licenses",
        icon: "/icons/user.svg",
      },
    ],
  },
  {
    title: "Reports",
    icon: "/icons/user.svg",
    subItems: [
      {
        title: "Print Labels & Reports",
        link: "/reports/labels",
        icon: "/icons/user.svg",
      },
      {
        title: "Email Reports",
        link: "/email-reports",
        icon: "/icons/user.svg",
      },
      {
        title: "QA Reporting's",
        link: "/qa-reporting",
        icon: "/icons/user.svg",
      },
      {
        title: "Firmware Reporting",
        link: "/firmware-reporting",
        icon: "/icons/user.svg",
      },
    ],
  },
  { title: "Help", icon: "/icons/user.svg", link: "/help" },
  { title: "Settings", icon: "/icons/user.svg", link: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="sidebar w-full h-screen border-r border-gray-200">
      <div className="logo border-b border-[#E3E3E3] p-[18px]">
        <Link href="/">
          <h1 className="text-[22px] font-bold font-aeonik">
            <span className="text-[#00B09B]">R</span>
            <span className="text-secondary mr-1">3</span>
            <span className="uppercase">Diagnostics</span>
          </h1>
        </Link>
      </div>

      <div className="tabs p-4">
        {DashboardItems.map((item, index) => {
          const isActive =
            item.link &&
            (pathname === item.link || pathname.startsWith(`${item.link}/`));

          return (
            <div key={index}>
              {item.link && !item.subItems ? (
                <Link href={item.link} className="block">
                  <div
                    className={`tab flex items-center px-4 py-2 rounded-md cursor-pointer transition-all ${
                      isActive
                        ? "bg-[#00B09B] bg-opacity-10 text-[#00B09B]"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="icon mr-3">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-[18px] h-[18px]"
                      />
                    </div>
                    <div className="title font-poppins text-sm">
                      {item.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  onClick={() => item.subItems && toggleSection(item.title)}
                  className={`tab flex items-center px-4 py-2 rounded-md cursor-pointer transition-all ${
                    isActive
                      ? "bg-[#00B09B] bg-opacity-10 text-[#00B09B]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="icon mr-3">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                  <div className="title font-poppins text-sm">{item.title}</div>
                  {item.subItems && (
                    <span className="ml-auto">
                      {openSections[item.title] ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  )}
                </div>
              )}

              {item.subItems && openSections[item.title] && (
                <div className="ml-6">
                  {item.subItems.map((subItem, subIndex) => {
                    const isSubActive =
                      subItem.link &&
                      (pathname === subItem.link ||
                        pathname.startsWith(`${subItem.link}/`));

                    return (
                      <Link
                        href={subItem.link || "#"}
                        key={subIndex}
                        className="block"
                      >
                        <div
                          className={`tab flex items-center px-4 py-2 rounded-md cursor-pointer transition-all ${
                            isSubActive
                              ? "bg-[#00B09B] bg-opacity-10 text-[#00B09B]"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {subItem.icon && (
                            <div className="icon mr-3">
                              <img
                                src={subItem.icon}
                                alt={subItem.title}
                                className="w-[18px] h-[18px]"
                              />
                            </div>
                          )}
                          <div className="title font-poppins text-sm">
                            {subItem.title}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
