"use client";

import React, { useState, useRef } from "react";

const logo = "/images/Default-logo.png";
const template = "/images/template.png";
const placeholder = "/images/upload-logo.png";

/* --------------------------------------------
   1) A small reusable toggle for "Select Label 1,"
      "Default Logo," etc. 
-------------------------------------------- */
function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`
        relative inline-block w-8 h-4 rounded-full mr-1 cursor-pointer transition-colors
        ${isOn ? "bg-green-400" : "bg-gray-300"}
      `}
    >
      <div
        className={`
          absolute top-[2px] w-3 h-3 bg-white rounded-full transition-all
          ${isOn ? "left-[18px]" : "left-[2px]"}
        `}
      />
    </div>
  );
}

/* --------------------------------------------
   2) A separate upload component for "Custom Logo"
-------------------------------------------- */
function UploadLogo() {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Open file dialog
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  // Show chosen image in preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPreview(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      onClick={handleClick}
      className="
        border border-gray-300
        w-[103px] h-[82px]
        rounded-md
        bg-white
        flex items-center justify-center
        cursor-pointer
      "
    >
      {preview ? (
        <img
          src={preview}
          alt="Uploaded"
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <img
          src={placeholder}
          alt="Placeholder"
          className="max-w-full max-h-full object-contain"
        />
      )}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

/* --------------------------------------------
   3) "Elements" grid: 35 labels => 7 rows × 5 columns
-------------------------------------------- */
const LABELS = [
  "Make", "Model", "IMEI no.1", "IMEI no.2", "Serial no.",
  "Version", "Battery", "Blocklist", "Region", "Color",
  "Quantity", "Jailbreak", "Condition", "Sale Price", "Comment",
  "Tester", "Date & Time", "Logo", "Invoice ID", "Barcode",
  "Team", "Port No.", "Station Id", "Facility", "Batch Id",
  "Re", "Result", "Manual1", "Manual2", "R3 Logo",
  "Test Code", "Extra1", "Extra2", "Extra3", "Extra4"
];

// Helper: chunk labels into arrays of size=5
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/* --------------------------------------------
   4) ElementsGrid - a component that shows
      the toggles for all 35 labels in a grid
-------------------------------------------- */
function ElementsGrid({
  rows,
  toggles,
  handleToggle,
}: {
  rows: string[][];
  toggles: Record<string, boolean>;
  handleToggle: (label: string) => void;
}) {
  // A toggle specifically for the Elements grid
  function ElementToggle({ label }: { label: string }) {
    const isOn = toggles[label];
    return (
      <div
        onClick={() => handleToggle(label)}
        className={`
          relative inline-block w-8 h-4 rounded-full mr-1 cursor-pointer transition-colors
          ${isOn ? "bg-green-400" : "bg-gray-300"}
        `}
      >
        <div
          className={`
            absolute top-[2px] w-3 h-3 bg-white rounded-full transition-all
            ${isOn ? "left-[18px]" : "left-[2px]"}
          `}
        />
      </div>
    );
  }

  return (
    <>
      <h3 className="text-[13px] font-semibold mb-2">Elements</h3>
      <div className="border border-gray-200 p-3 rounded-md mb-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-2 mb-2">
            {row.map((label) => (
              <div key={label} className="flex items-center gap-1 overflow-hidden">
                <ElementToggle label={label} />
                <span className="text-[12px] font-regular text-[#000000] truncate">
                  {label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

/* --------------------------------------------
   5) PreviewLabel - the dotted container for
      the label preview
-------------------------------------------- */
function PreviewLabel() {
  return (
    <div className="border-2 border-dotted border-[#00B09B] p-4 rounded-md mb-6 w-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {/* Logo box */}
          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-sm">
            <img
              src="/images/company-logo.png"
              alt="Company or ShopLogo"
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-sm text-gray-600">Company or ShopLogo</span>
        </div>

        {/* Right side: Device title + color */}
        <div className="text-right">
          <h2 className="font-semibold text-base">
            Apple iPhone 16 Pro Max
          </h2>
          <p className="text-gray-600 text-sm">Golden</p>
        </div>
      </div>

      {/* Middle row: Barcode */}
      <div className="flex justify-center my-4">
        <img
          src="/images/barcode.png"
          alt="Barcode"
          className="h-12 object-contain"
        />
      </div>

      <div className="flex justify-between text-sm mb-3">
        <span>IMEI no: 123451432425423</span>
        <span>S/N : EC3124G42</span>
      </div>

      {/* Bottom rows: details in two-column grid with proper spacing */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <p>Condition: 10/10</p>
        <p>Battery Health : 100%</p>
        <p>Version: iOS 18</p>
        <p>Blocklist : No</p>
        <p>Region: USA</p>
        <p>QTY : 10</p>
        <p>Date & Time: 18-04-2024</p>
        <p>Jain Break: No</p>
        <p>Software: iOS</p>

        {/* Comment spans full width */}
        <p className="col-span-2 mt-1">
          Comment: Something else. You can track your next ride, see who's calling,
          check your flight status, and so much more.
        </p>
      </div>
    </div>
  );
}
 
export default function Page() {
  // For the "Elements" grid, store toggles in one object
  const [toggles, setToggles] = useState(
    LABELS.reduce<Record<string, boolean>>((acc, label) => {
      acc[label] = false;
      return acc;
    }, {})
  );

  // Flip a single label’s toggle
  const handleToggle = (label: string) => {
    setToggles((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Split labels into rows of 5
  const rows = chunkArray(LABELS, 5);

  return (
    <div className="bg-[#f3f3f3] min-h-screen p-2">
      <div className="flex w-full min-h-screen bg-[#ffffff] font-[Montserrat] rounded-[10px] ">
        {/* LEFT SECTION */}
        <div className="w-1/2 border-r border-gray-300 p-4">
          {/* Buttons: Label / Report */}
          <div className="flex items-center p-2 mb-2">
            <button
              className="
                flex items-center gap-2
                px-4 py-2
                border border-[#00B09B]
                bg-[#00B09B] text-white
                leading-none
                rounded-l-md rounded-r-none
                hover:bg-opacity-90
                transition
              "
            >
              <span className="w-4 h-4 bg-white text-[#00B09B] rounded-sm flex items-center justify-center">
                L
              </span>
              <span>Label</span>
            </button>

            <button
              className="
                flex items-center gap-2
                px-4 py-2
                border border-[#00B09B]
                bg-transparent text-[#00B09B]
                leading-none
                rounded-l-none rounded-r-md
                hover:bg-[#00B09B] hover:text-white
                transition
              "
            >
              <span className="w-4 h-4 bg-[#00B09B] text-white rounded-sm flex items-center justify-center">
                R
              </span>
              <span>Report</span>
            </button>
          </div>

          {/* Three dropdown fields (Select Language, Orientation, Date Format) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-2">
            {/* 1) Select Language */}
            <div>
              <label className="block text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                Select Language:
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-2 w-[15px] h-[14px] border border-[#00B09B] bg-white" />
                <select
                  className="
                    pl-8 pr-8 py-2
                    border border-gray-300
                    rounded-md w-full
                    appearance-none
                    focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                    text-[10px] font-[Montserrat] text-[#A8B0BC]
                  "
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>

            {/* 2) Select Orientation */}
            <div>
              <label className="block text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                Select Orientation:
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-2 w-[15px] h-[14px] border border-[#00B09B] bg-white" />
                <select
                  className="
                    pl-8 pr-8 py-2
                    border border-gray-300
                    rounded-md w-full
                    appearance-none
                    focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                    text-[10px] font-[Montserrat] text-[#A8B0BC]
                  "
                >
                  <option>Portrait</option>
                  <option>Landscape</option>
                </select>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>

            {/* 3) Date Format */}
            <div>
              <label className="block text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                Date Format:
              </label>
              <div className="relative flex items-center">
                <select
                  className="
                    pl-3 pr-8 py-2
                    border border-gray-300
                    rounded-md w-full
                    appearance-none
                    focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                    text-[10px] font-[Montserrat] text-[#A8B0BC]
                  "
                >
                  <option value="" disabled hidden>
                    -- Select Format --
                  </option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                </select>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Label Settings */}
          <h3 className="text-lg font-semibold mb-2">Label Settings</h3>
          <div className="border border-gray-300 p-4 rounded-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Default Printer */}
              <div>
                <label className="block text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                  Default Printer
                </label>
                <div className="relative">
                  <select
                    className="
                      pl-8 pr-8 py-2
                      border border-gray-300
                      rounded-md w-full
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                      text-[10px] font-[Montserrat] text-[#A8B0BC]
                    "
                  >
                    <option>Printer A</option>
                    <option>Printer B</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Select Label 1 */}
              <div>
                <label className="text-sm flex justify-between items-center text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                  Select Label 1
                  <ToggleButton />
                </label>
                <div className="relative">
                  <select
                    className="
                      pl-8 pr-8 py-2
                      border border-gray-300
                      rounded-md w-full
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                      text-[10px] font-[Montserrat] text-[#A8B0BC]
                    "
                  >
                    <option>Label 1</option>
                    <option>Label 2</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Select Label 2 */}
              <div>
                <label className="text-sm flex justify-between items-center text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                  Select Label 2
                  <ToggleButton />
                </label>
                <div className="relative">
                  <select
                    className="
                      pl-8 pr-8 py-2
                      border border-gray-300
                      rounded-md w-full
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                      text-[10px] font-[Montserrat] text-[#A8B0BC]
                    "
                  >
                    <option>Label 2</option>
                    <option>Label 2</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Secondary Printer */}
              <div>
                <label className="text-sm flex justify-between items-center text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                  Secondary Printer
                  <ToggleButton />
                </label>
                <div className="relative">
                  <select
                    className="
                      pl-8 pr-8 py-2
                      border border-gray-300
                      rounded-md w-full
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                      text-[10px] font-[Montserrat] text-[#A8B0BC]
                    "
                  >
                    <option>Dymo 450 xl</option>
                    <option>Dymo 450 xs</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Another select label 1 */}
              <div>
                <label className="text-sm flex justify-between items-center text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                  Select Label 1
                  <ToggleButton />
                </label>
                <div className="relative">
                  <select
                    className="
                      pl-8 pr-8 py-2
                      border border-gray-300
                      rounded-md w-full
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                      text-[10px] font-[Montserrat] text-[#A8B0BC]
                    "
                  >
                    <option>Label 1</option>
                    <option>Label 2</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Another select label 2 */}
              <div>
                <label className="text-sm flex justify-between items-center text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                  Select Label 2
                  <ToggleButton />
                </label>
                <div className="relative">
                  <select
                    className="
                      pl-8 pr-8 py-2
                      border border-gray-300
                      rounded-md w-full
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                      text-[10px] font-[Montserrat] text-[#A8B0BC]
                    "
                  >
                    <option>Label 2</option>
                    <option>Label 2</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barcode (3 Limit) */}
          <h3 className="text-[13] font-semibold font-[Montserrat] mb-2">Barcode (3 Limit)</h3>
          <div className="border border-gray-300 p-4 rounded-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* #1 */}
              <div>
                <label className="text-sm flex justify-between items-center text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                  Select Barcode
                  <ToggleButton />
                </label>
                <div className="relative">
                  <select
                    className="
                      pl-8 pr-8 py-2
                      border border-gray-300
                      rounded-md w-full
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                      text-[10px] font-[Montserrat] text-[#A8B0BC]
                    "
                  >
                    <option>IMEI Number 2</option>
                    <option>IMEI Number 2</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* #2 */}
              <div>
                <label className="text-sm flex justify-between items-center text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                  Select Barcode
                  <ToggleButton />
                </label>
                <div className="relative">
                  <select
                    className="
                      pl-8 pr-8 py-2
                      border border-gray-300
                      rounded-md w-full
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                      text-[10px] font-[Montserrat] text-[#A8B0BC]
                    "
                  >
                    <option>IMEI Number 2</option>
                    <option>IMEI Number 2</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
              {/* #3 */}
              <div>
                <label className="text-sm flex justify-between items-center text-[12] font-regular text-[#000000] mb-1 font-[Montserrat]">
                  Select Barcode
                  <ToggleButton />
                </label>
                <div className="relative">
                  <select
                    className="
                      pl-8 pr-8 py-2
                      border border-gray-300
                      rounded-md w-full
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-[#00B09B]
                      text-[10px] font-[Montserrat] text-[#A8B0BC]
                    "
                  >
                    <option>IMEI Number 2</option>
                    <option>IMEI Number 2</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top row: Default Logo, Custom Logo, Comment & Operator Note */}
          <div className="flex items-start gap-4">
            {/* Default Logo */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-[Montserrat] text-[#000000]">
                  Default Logo
                </span>
                <ToggleButton />
              </div>
              <div className="border border-gray-300 w-[102px] h-[82px] rounded-md bg-white flex items-center justify-center">
                <img
                  src={logo}
                  alt="Default Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Custom Logo */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-[Montserrat] text-[#000000]">
                  Custom Logo
                </span>
                <ToggleButton />
              </div>
              <UploadLogo />
            </div>

            {/* Comment & Operator Note stacked */}
            <div className="flex flex-col gap-4">
              {/* Comment */}
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-[Montserrat] text-[#000000]">
                    Comment
                  </span>
                  <ToggleButton />
                </div>
                <textarea
                  className="
                    border border-gray-300 rounded-md p-2
                    focus:outline-none resize-none overflow-hidden
                    w-[278px] h-[31px]
                  "
                  placeholder="Type here..."
                />
              </div>

              {/* Operator Note */}
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-[Montserrat] text-[#000000]">
                    Operator Note
                  </span>
                  <ToggleButton />
                </div>
                <textarea
                  className="
                    border border-gray-300 rounded-md p-2
                    focus:outline-none resize-none overflow-hidden
                    w-[278px] h-[31px]
                  "
                  placeholder="Type here..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-1/2 px-3">
          {/* Selected Template */}
          <h3 className="text-[13] font-semibold mb-1">Selected Template</h3>
          <div className="border border-gray-300 p-4 w-full overflow-x-auto rounded-[4px] mb-7">
            {/* 5-column grid, 4 items => 1 blank space */}
            <div className="grid grid-cols-5 gap-4">
              <div className="border border-[#00B09B] flex items-center justify-center">
                <img
                  src={template}
                  alt="Template 1"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="border border-gray-600 flex items-center justify-center">
                <img
                  src={template}
                  alt="Template 2"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="border border-gray-600 flex items-center justify-center">
                <img
                  src={template}
                  alt="Template 3"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="border border-gray-600 flex items-center justify-center">
                <img
                  src={template}
                  alt="Template 4"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* 5th column is empty */}
            </div>
          </div>

            {/* Elements grid */}
          <ElementsGrid rows={rows} toggles={toggles} handleToggle={handleToggle} />

           {/* Preview Label */}
          <PreviewLabel />

          {/* Buttons (Reset / Print Labels) */}
          <div className="flex justify-end gap-4">
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
              Reset
            </button>
            <button className="bg-[#00B09B] text-white px-4 py-2 rounded-md hover:bg-[#059D88] transition">
            Print Labels
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}