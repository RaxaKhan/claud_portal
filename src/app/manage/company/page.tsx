"use client";
import Languages from "@/components/Company/Languages";
import CustomButton from "@/components/ui/CustomButton";
import CustomInput from "@/components/ui/CustomInput";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import ImageUploader from "@/components/ui/Uploaders/ImageUploader";
import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function page() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="w-[95%] mx-auto py-4">
      <div className="wrapper bg-white py-2 px-3 rounded-[10px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#181818] font-poppins font-semibold text-lg">
            Business Profile
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

        <div className="flex gap-4 my-6">
          <div className="form border border-[#F0F0F0] px-4 py-4 rounded-md w-[65%] font-poppins">
            <div className="flex gap-4">
              <div className="form-item w-[50%]">
                <label htmlFor="name" className="text-sm">
                  Business Name
                </label>
                <CustomInput
                  name="name"
                  placeholder="Business Name"
                  className="mt-1 text-sm"
                />
              </div>
              <div className="form-item w-[50%]">
                <label htmlFor="name" className="text-sm">
                  T/A Name
                </label>
                <CustomInput
                  name="name"
                  placeholder="T/A Name"
                  className="mt-1 text-sm"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="form-item w-full">
                <label htmlFor="name" className="text-sm">
                  Address
                </label>
                <CustomInput
                  name="name"
                  placeholder="Address"
                  className="mt-1 text-sm"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="form-item w-full">
                <label htmlFor="name" className="text-sm">
                  Address
                </label>
                <CustomInput
                  name="name"
                  placeholder="Address"
                  className="mt-1 text-sm"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <div className="form-item w-[25%]">
                <label htmlFor="name" className="text-sm">
                  City / Town
                </label>
                <CustomInput
                  name="name"
                  placeholder="City / Town"
                  className="mt-1 text-sm"
                />
              </div>
              <div className="form-item w-[25%]">
                <label htmlFor="name" className="text-sm">
                  State / County
                </label>
                <CustomInput
                  name="name"
                  placeholder="State / County"
                  className="mt-1 text-sm"
                />
              </div>
              <div className="form-item w-[25%]">
                <label htmlFor="name" className="text-sm">
                  Post Code
                </label>
                <CustomInput
                  name="name"
                  placeholder="Post Code"
                  className="mt-1 text-sm"
                />
              </div>
              <div className="form-item w-[25%]">
                <label htmlFor="name" className="text-sm">
                  Country
                </label>
                <CustomInput
                  name="name"
                  placeholder="Country"
                  className="mt-1 text-sm"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <div className="form-item w-[50%]">
                <label htmlFor="name" className="text-sm">
                  Phone Number
                </label>
                <CustomInput
                  name="name"
                  placeholder="+92"
                  className="mt-1 text-sm"
                />
              </div>
              <div className="form-item w-[50%]">
                <label htmlFor="name" className="text-sm">
                  Email
                </label>
                <CustomInput
                  name="name"
                  placeholder="@gmail.com"
                  className="mt-1 text-sm"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <div className="form-item w-[50%]">
                <label htmlFor="name" className="text-sm">
                  Your Website
                </label>
                <CustomInput
                  name="name"
                  placeholder="www."
                  className="mt-1 text-sm"
                />
              </div>
              <div className="form-item w-[50%]">
                <label htmlFor="name" className="text-sm">
                  Send Report by Email
                </label>
                <CustomInput
                  name="name"
                  placeholder="@gmail.com"
                  className="mt-1 text-sm"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="form-item w-[25%]">
                <label htmlFor="name" className="text-sm">
                  Upload Logo
                </label>

                <ImageUploader />
              </div>
              <div className="form-item w-[25%]">
                <label htmlFor="name" className="text-sm">
                  Current Logo
                </label>

                <div className="border h-[124px] flex items-center rounded-md">
                  <div
                    className="w-full  p-4 "
                    style={{
                      background: `url(/r3-logo.svg)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>
              <div className="form-item w-[50%]">
                <div className="">
                  <label htmlFor="name" className="text-sm">
                    Send Report by Whatsapp
                  </label>
                  <CustomInput
                    name="name"
                    placeholder="@gmail.com"
                    className="mt-1 text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="name" className="text-sm">
                    Add Details to
                  </label>

                  <div className="flex justify-between my-3 border border-[#BABABA] rounded-lg px-2 py-2">
                    <div className="flex mr-">
                      <p className="text-xs mr-2">Invoice</p>
                      <ToggleSwitch
                        isChecked={isEnabled}
                        onChange={() => setIsEnabled(!isEnabled)}
                      />
                    </div>
                    <div className="flex mr-">
                      <p className="text-xs mr-2">Label</p>
                      <ToggleSwitch
                        isChecked={isEnabled}
                        onChange={() => setIsEnabled(!isEnabled)}
                      />
                    </div>
                    <div className="flex mr-">
                      <p className="text-xs mr-2">Reports</p>
                      <ToggleSwitch
                        isChecked={isEnabled}
                        onChange={() => setIsEnabled(!isEnabled)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Languages />
        </div>
        <div className="text-right">
          <div className="flex justify-end">
            <CustomButton
              text="Cancel"
              size="small"
              className="mr-4"
              label="secondary"
            />
            <CustomButton text="Save" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

 