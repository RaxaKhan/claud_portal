"use client";
import React from "react";
import DateRangePicker from "../ui/DateRangePicker";

export default function TopBar() {
  return (
    <div className="w-full">
      <div className="wrapper h-[4.4rem] flex items-center border-b border-[#E3E3E3] px-6">
        <div className="search relative w-[320px]">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <img src="/icons/magnifying-glass.svg" alt="magnifying glass" />
          </span>

          <input
            type="text"
            placeholder="Search anything here"
            className="w-full pl-11 pr-4 py-2 border rounded-[6px] border-[#E3E3E3] text-[#9A9A9A] font-poppins text-[13px] outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div className="date-range-selector">{/* <DateRangePicker /> */}</div>

        <div className="actions flex flex-1 justify-end">
          <div className="settings  mr-3">
            <button className="w-11 h-11 border border-[#00B09B] border-opacity-20 rounded-[6px] flex justify-center items-center hover:bg-gray-50">
              <img src="/icons/settings-t.svg" alt="settings" />
            </button>
          </div>
          <div className="notifications mr-3">
            <button className="w-11 h-11 border border-[#00B09B] border-opacity-20 rounded-[6px] flex justify-center items-center hover:bg-gray-100">
              <img src="/icons/bell-t.svg" alt="notifications" />
            </button>
          </div>
          <div className="whatsapp mr-3">
            <button className="w-11 h-11 border border-[#00B09B] hover:bg-[#95C93E] hover:bg-opacity-20 border-opacity-20 rounded-[6px] flex justify-center items-center">
              <img src="/icons/whatsapp-t.svg" alt="whatsapp" />
            </button>
          </div>

          <div className="avatar mr-4">
            <div className="relative w-11 h-11">
              <img
                src="/images/avatar.png"
                alt="User Avatar"
                className="w-full h-full rounded-full object-cover border border-gray-300"
              />

              <span className="absolute bottom-[-1px] right-[0px] w-[14px] h-[14px] bg-green-500 border-2 border-white rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
