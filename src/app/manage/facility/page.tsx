"use client";
import FacilityForm from "@/components/Management/FacilityForm";
import OperatorForm from "@/components/Management/OperatorForm";
import PermissionForm from "@/components/Management/PermissionForm";
import StationForm from "@/components/Management/StationForm";
import TeamForm from "@/components/Management/TeamForm";
import VendorForm from "@/components/Management/VendorForm";
import CustomButton from "@/components/ui/CustomButton";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const tabs = [
  { tab: "Add Facility", data: <FacilityForm /> },
  { tab: "Add Vendor", data: <VendorForm /> },
  { tab: "Add Operator", data: <OperatorForm /> },
  { tab: "Add Team", data: <TeamForm /> },
  { tab: "Add Station", data: <StationForm /> },
  { tab: "Roles & Permission", data: <PermissionForm /> },
];

export default function page() {
  const [isEnabled, setIsEnabled] = useState(false);

  const [activeTab, setActiveTab] = useState("Add Facility");

  // Find the active tab object
  const activeTabData = tabs.find(({ tab }) => tab === activeTab)?.data;

  return (
    <div className="w-[97%] mx-auto py-4">
      <div className="wrapper bg-white py-4 px-3 rounded-[10px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#181818] font-poppins font-semibold text-lg px-2">
            {activeTab}
          </h1>
          <div className="flex">
            <CustomButton
              text="Add more Business"
              size="xs"
              icon={<Plus />}
              className="mr-3"
            />
            <div className="settings  mx-3">
              <button className="w-11 h-11 border border-[#00B09B] border-opacity-20 rounded-[6px] flex justify-center items-center hover:bg-gray-50">
                <img src="/icons/settings-t.svg" alt="settings" />
              </button>
            </div>
            <div className="  mr-3">
              <button className="w-11 h-11 border border-[#00B09B] border-opacity-20 rounded-[6px] flex justify-center items-center hover:bg-gray-50">
                <img src="/icons/kebab-g.svg" alt="kebab" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          {tabs.map(({ tab }) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn px-3 py-2 rounded-md hover:opacity-90 font-poppins text-sm ${
                activeTab === tab
                  ? "bg-[#00B09B] text-white"
                  : "bg-[#ECECEC] text-[#888888]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTabData}
      </div>
    </div>
  );
}
