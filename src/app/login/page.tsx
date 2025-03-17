"use client";
import React from "react";

import CustomButton from "@/components/ui/CustomButton";

export default function page() {
  return (
    <div className="login h-screen">
      <div className="md:flex">
        <div className="showcase bg-gradient-to-l from-[#96C93D] to-[#00B09B] w-[60%] h-[95vh] rounded-4xl m-5 flex items-center justify-center hidden md:flex">
          <img
            src="/images/login-image.svg"
            alt="login image"
            className="w- h-[80vh] rounded-lg object-cover"
          />
        </div>

        <div className="login-form p-6 md:m-10 w-full md:w-[30%]">
          <div className="text-[#03B199] font-bold text-[28px] font-aeonik uppercase">
            R3 Diagnostics
          </div>

          <div className="flex  h-[55vh]">
            <div className="w-full sm:w-[90%]">
              <div className="font-poppins font-semibold text-[28px] mt-24 mb-6">
                Sign in
              </div>

              <div className="username font-poppins my-2">
                <label className="block text-sm mb-1" htmlFor="username">
                  Username
                </label>

                <div className="flex items-center border border-[#A8B0BC] rounded-[6px] p-1">
                  <span className="text-gray-500 mx-2">
                    <img src="/icons/user.svg" alt="user icon" />
                  </span>
                  <input
                    type="text"
                    placeholder="Please enter your Name"
                    className="flex-1 text-sm p-1 outline-none rounded-lg text-[#A8B0BC] "
                  />
                </div>
              </div>
              <div className="password font-poppins my-4">
                <label className="block text-sm mb-1" htmlFor="password">
                  Password
                </label>

                <div className="flex items-center border border-[#A8B0BC] rounded-[6px] p-1">
                  <span className="text-gray-500 mx-2">
                    <img src="/icons/lock.svg" alt="lock icon" />
                  </span>
                  <input
                    type="password"
                    placeholder="Please enter your Password"
                    className="flex-1 text-sm p-1 outline-none rounded-lg text-[#A8B0BC] "
                  />
                </div>
              </div>

              {/* <button
                type="submit"
                className="bg-[#03B199] text-white rounded-[8px] w-full p-2 cursor-pointer hover:opacity-90  mt-8"
              >
                Sign in
              </button> */}

              <CustomButton
                text="Sign in"
                label="primary"
                className="w-full mt-8"
                size="small"
                onClick={() => console.log("pummm")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
