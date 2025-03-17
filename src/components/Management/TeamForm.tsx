import React, { useState } from "react";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import CustomSelect from "../ui/CustomSelect";
import ImageUploader from "../ui/Uploaders/ImageUploader";

export default function TeamForm() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <div className="flex gap-4 my-6">
        <div className="form border border-[#F0F0F0] px-4 py-4 rounded-md w-[65%] font-poppins">
          <div className="flex gap-4">
            <div className="form-item w-[50%]">
              <label htmlFor="name" className="text-sm">
                Facility Name
              </label>
              <CustomInput
                name="name"
                placeholder="Facility Name"
                className="mt-1 text-sm"
              />
            </div>
            <div className="form-item w-[50%]">
              <label htmlFor="name" className="text-sm">
                Created By
              </label>
              <CustomInput
                name="name"
                placeholder="Created By"
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
            <div className="form-item w-[50%]"></div>
          </div>
        </div>

        {/* Right side forms */}
        <div className="w-[35%]">
          <div className="languages border border-[#F0F0F0] px-4 py-4 rounded-md  font-poppins">
            <div className="text-[#181818] font-lg font-semibold mb-4">
              Generate User Login
            </div>

            <div className="generate-login">
              <div className="flex gap-4 mt-4">
                <div className="form-item w-full">
                  <label htmlFor="name" className="text-sm">
                    User name
                  </label>
                  <CustomInput
                    name="name"
                    placeholder="Enter User name"
                    className="mt-1 text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-3">
                <div className="form-item w-full">
                  <label htmlFor="name" className="text-sm">
                    Password
                  </label>
                  <CustomInput
                    name="name"
                    placeholder="Password"
                    className="mt-1 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="languages border border-[#F0F0F0] px-4 py-4 rounded-md  font-poppins mt-4">
            <div className="text-[#181818] font-lg font-semibold mb-4">
              Transfer License
            </div>

            <div className="generate-login">
              <div className="facility mt-6">
                <label htmlFor="facility" className="text-sm">
                  Main Facility
                </label>

                <CustomSelect
                  options={[
                    { value: "hasnat", label: "Hasnat" },
                    { value: "usama", label: "Usama" },
                    { value: "yahya", label: "Yahya" },
                  ]}
                  value={selectedValue}
                  onChange={setSelectedValue}
                  placeholder="Main Facility"
                  className="mt-2"
                />
              </div>
              <div className="facility mt-3">
                <label htmlFor="facility" className="text-sm">
                  Facility
                </label>

                <CustomSelect
                  options={[
                    { value: "hasnat", label: "Hasnat" },
                    { value: "usama", label: "Usama" },
                    { value: "yahya", label: "Yahya" },
                  ]}
                  value={selectedValue}
                  onChange={setSelectedValue}
                  placeholder="Facility"
                  className="mt-2"
                />
              </div>
              <div className="facility mt-3">
                <label htmlFor="facility" className="text-sm">
                  Number Count
                </label>

                <CustomSelect
                  options={[
                    { value: "hasnat", label: "Hasnat" },
                    { value: "usama", label: "Usama" },
                    { value: "yahya", label: "Yahya" },
                  ]}
                  value={selectedValue}
                  onChange={setSelectedValue}
                  placeholder="Number of License"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
}
