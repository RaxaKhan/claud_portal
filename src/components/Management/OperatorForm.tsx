import React, { useState } from "react";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import CustomSelect from "../ui/CustomSelect";
import ImageUploader from "../ui/Uploaders/ImageUploader";

export default function OperatorForm() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <div className="flex gap-4 my-6">
        <div className="form border border-[#F0F0F0] px-4 py-4 rounded-md w-[65%] font-poppins">
          <div className="flex gap-4">
            <div className="form-item w-[50%]">
              <label htmlFor="name" className="text-sm">
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
                className="mt-1"
              />
            </div>
            <div className="form-item w-[50%]">
              <label htmlFor="name" className="text-sm">
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
                placeholder="Select Facility"
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="form-item w-[50%]">
              <label htmlFor="name" className="text-sm">
                Operator Name
              </label>

              <CustomSelect
                options={[
                  { value: "hasnat", label: "Hasnat" },
                  { value: "usama", label: "Usama" },
                  { value: "yahya", label: "Yahya" },
                ]}
                value={selectedValue}
                onChange={setSelectedValue}
                placeholder="Select Operator"
                className="mt-1"
              />
            </div>
            <div className="form-item w-[50%]">
              <label htmlFor="name" className="text-sm">
                Created By
              </label>

              <CustomSelect
                options={[
                  { value: "hasnat", label: "Hasnat" },
                  { value: "usama", label: "Usama" },
                  { value: "yahya", label: "Yahya" },
                ]}
                value={selectedValue}
                onChange={setSelectedValue}
                placeholder="Created By"
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="form-item w-[50%]">
              <label htmlFor="name" className="text-sm">
                Working Days
              </label>

              <CustomSelect
                options={[
                  { value: "hasnat", label: "Hasnat" },
                  { value: "usama", label: "Usama" },
                  { value: "yahya", label: "Yahya" },
                ]}
                value={selectedValue}
                onChange={setSelectedValue}
                placeholder="5 days"
                className="mt-1"
              />
            </div>
            <div className="form-item w-[50%]">
              <label htmlFor="name" className="text-sm">
                Working Hours
              </label>

              <CustomSelect
                options={[
                  { value: "hasnat", label: "Hasnat" },
                  { value: "usama", label: "Usama" },
                  { value: "yahya", label: "Yahya" },
                ]}
                value={selectedValue}
                onChange={setSelectedValue}
                placeholder="40 hours"
                className="mt-1"
              />
            </div>
          </div>

          <div className="border border-[#F0F0F0] gap-3 mt-4 rounded-md">
            <div className="head flex justify-between">
              <h2 className="text-[13px] flex-1 border-r border-b border-[#00000021] font-medium text-center py-3 text-[#0C0302]">
                Days
              </h2>
              <h2 className="text-[13px] flex-1 border-r border-b border-[#00000021] font-medium text-center py-3 text-[#0C0302]">
                Start Time
              </h2>
              <h2 className="text-[13px] flex-1 border-b border-[#00000021] font-medium text-center py-3 text-[#0C0302]">
                End Time
              </h2>
            </div>
            <div className="first-col flex justify-between">
              <div className="text-[13px] flex-1 border-r border-b border-[#00000021] font- text-center text-[#0C0302]">
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  Saturday
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  Sunday
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  Monday
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  Tuesday
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  Wednesday
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  Thursday
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  Friday
                </div>
              </div>
              <div className="text-[13px] flex-1 border-r border-b border-[#00000021] font- text-center text-[#0C0302]">
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-between px-7">
                    <p>---</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-between px-7">
                    <p>---</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-between px-7">
                    <p>9:00 PM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-between px-7">
                    <p>9:00 PM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-between px-7">
                    <p>9:00 PM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-between px-7">
                    <p>9:00 PM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-between px-7">
                    <p>9:00 PM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
              </div>
              <div className="text-[13px] flex-1 border-r border-b border-[#00000021] font- text-center text-[#0C0302]">
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-around">
                    <p>---</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-around">
                    <p>---</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-around">
                    <p>5:00 AM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-around">
                    <p>5:00 AM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-around">
                    <p>5:00 AM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-around">
                    <p>5:00 AM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
                <div className="text-[13px] border-b border-[#00000021]  text-center py-3 text-[#0C0302]">
                  <div className="flex justify-around">
                    <p>5:00 AM</p>
                    <img src="/icons/pencil-underline.svg" alt="pencil" />
                  </div>
                </div>
              </div>
            </div>
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

              <div className="flex justify-between mt-4 font-poppins">
                <CustomButton
                  text="Delete"
                  label="danger"
                  size="xs"
                  className="px-5"
                />
                <CustomButton
                  text="Delete"
                  label="secondary"
                  size="xs"
                  className="px-5"
                />
                <CustomButton
                  text="Delete"
                  label="primary"
                  size="xs"
                  className="px-5"
                />
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
