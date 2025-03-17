"use client";
import CircleStat from "@/components/Stats/CircleStat";
import Filters from "@/components/Transactions/Filters";
import TrxTable from "@/components/Transactions/TrxTable";
import DynamicTable from "@/components/ui/DynamicTable";
import React, { useState } from "react";

export default function Page() {
  const statsData = [
    { label: "Pass", value: 122, color: "#00B09B" },
    { label: "Fail", value: 122, color: "#95C93E" },
    { label: "Pending", value: 34, color: "#C9ECE8" },
  ];
  const statsData2 = [
    { label: "Android", value: 122, color: "#00B09B" },
    { label: "IOS", value: 122, color: "#95C93E" },
  ];
  const statsData3 = [
    { label: "Black Devices", value: 122, color: "#00B09B" },
    { label: "Clean Devices", value: 122, color: "#95C93E" },
    { label: "Pending Devices", value: 34, color: "#C9ECE8" },
  ];
  const statsData4 = [
    { label: "FMUF RP", value: 122, color: "#00B09B" },
    { label: "FMUF RP", value: 34, color: "#95C93E" },
  ];

  const columns = [
    { key: "company_name", label: "Company", center: true, info: true },
    { key: "facility", label: "Facility", center: true, info: true },
    { key: "username", label: "User Name", center: true },
    { key: "uploaded", label: "Uploaded", center: true },
    { key: "remaining", label: "Remaining", center: true },
    { key: "diagnostics", label: "Diagnostics", center: true },
    { key: "total_devices", label: "Total Devices", center: true, info: true },
    { key: "ios", label: "iOS", center: true },
    { key: "ios_pass", label: "Pass", center: true },
    { key: "ios_fail", label: "Fail", center: true },
    { key: "android", label: "Android", center: true },
    { key: "android_pass", label: "Pass", center: true },
    { key: "android_fail", label: "Fail", center: true },
    { key: "data_erasure", label: "Data Erasure", center: true },
    { key: "yes", label: "Yes", center: true },
    { key: "no", label: "No", center: true },
  ];

  const data = [
    {
      id: 1,
      company_name: "Uni Brother Limited",
      facility: "New York",
      username: "John Smith",
      uploaded: "35",
      remaining: "30",
      total_devices: "150",
      diagnostics: "120",
      ios: "30",
      ios_pass: "22",
      ios_fail: "8",
      android: "30",
      android_pass: "22",
      android_fail: "8",
      data_erasure: "30",
      yes: "22",
      no: "8",
    },
    {
      id: 2,
      company_name: "Uni Brother Limited",
      facility: "New York",
      username: "Jane Doe",
      uploaded: "40",
      remaining: "25",
      total_devices: "140",
      diagnostics: "110",
      ios: "35",
      ios_pass: "28",
      ios_fail: "7",
      android: "30",
      android_pass: "20",
      android_fail: "10",
      data_erasure: "25",
      yes: "20",
      no: "5",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-evenly my-4">
        <CircleStat title="Devices" data={statsData} />
        <CircleStat title="Devices" data={statsData2} />
        <CircleStat title="Devices" data={statsData3} />
        <CircleStat title="Devices" data={statsData4} />
      </div>

      <div className="bg-white">
        <Filters />
        <div className="mt-6 mx-4 pb-1 overflow-hidden">
          <div className="bg-white p rounded-lg shadow">
            <DynamicTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
