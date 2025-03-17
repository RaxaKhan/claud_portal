"use client";

const data = [
  {
    id: 1,
    company_name: "Uni Brother Limited",
    facility: "New York",
    username: "Jhon Smith",
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
    facility: "Lahore",
    username: "Jhon Smith",
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
];

import React, { useState } from "react";
import CustomCheckbox from "../ui/CustomCheckbox";

export default function TrxTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [openMenus, setOpenMenus] = useState({});

  //   const toggleRowSelection = (id: any) => {
  //     setSelectedRows((prev) =>
  //       prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
  //     );
  //   };

  //   const toggleMenu = (id: any) => {
  //     setOpenMenus((prev) => ({
  //       ...prev,
  //       [id]: !prev[id],
  //     }));
  //   };

  return (
    <div className="trx-table w- overflow-x-auto">
      <div className="overflow-x-auto shadow-md border border-gray-200">
        <table className="text-left border-collapse border-[#888888] ">
          <thead>
            <tr className="bg-[#03B199] text-white font-normal border border-[#888888]">
              <th className="p-3">
                <CustomCheckbox
                  checked={selectedRows.length === data.length}
                  onChange={
                    (e: any) => console.log("object")
                    // setSelectedRows(
                    //   e.target.checked ? data.map((d) => d.id) : []
                    // )
                  }
                />
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium">
                <div className="flex justify-center">
                  <span>Company</span>
                  <img src="/icons/info.svg" alt="info" className="ml-2" />
                </div>
              </th>
              <th className="px-5 py-3 whitespace-nowrap text-sm font-medium">
                <div className="flex">
                  Facility
                  <img src="/icons/info.svg" alt="info" className="ml-2" />
                </div>
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                User Name
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Uploaded
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Remaining
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Diagnostics
              </th>
              <th className="px-5 py-3 whitespace-nowrap text-sm font-medium text-center">
                <div className="flex">
                  Total Devices{" "}
                  <img src="/icons/info.svg" alt="info" className="ml-2" />
                </div>
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                iOS
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Pass
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Fail
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Android
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Pass
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Fail
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Data Erasure
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                Yes
              </th>
              <th className="p-3 whitespace-nowrap text-sm font-medium text-center">
                No
              </th>
              <th className="p-3 flex">
                <span className="text-sm font-medium">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((row) => (
              <tr
                key={row.id}
                className={` hover:bg-gray-50 transition text-sm even:bg-[#E6F7F5] odd:bg-white `}
              >
                <td className="p-3">
                  <CustomCheckbox
                  // checked={selectedRows.includes(row.id)}
                  // onChange={() => toggleRowSelection(row.id)}
                  />
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.company_name}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.facility}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.username}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.uploaded}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.remaining}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.total_devices}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.diagnostics}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.ios}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.ios_pass}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.ios_fail}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.android}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.android_pass}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.android_fail}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.data_erasure}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.yes}
                </td>
                <td className="p-3 whitespace-nowrap text-center border-r border-gray-200">
                  {row.no}
                </td>
                <td className="p- relative text-center">
                  <button
                    className="p-2 rounded-full hover:bg-gray-200"
                    // onClick={() => toggleMenu(row.id)}
                  >
                    <img
                      src="/icons/kebab.svg"
                      alt="kebab"
                      className="w-5 h-5"
                    />
                    <span className="hidden">Actions</span>
                  </button>
                  {/* {openMenus[row.id] && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                        Edit
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                        Delete
                      </button>
                    </div>
                  )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
