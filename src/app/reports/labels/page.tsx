"use client";
import React, { useState, useRef } from "react";

function LabelContent() {
  
  const logo = "/images/Default-logo.png";
  const template = "/images/template.png";
  const placeholder = "/images/upload-logo.png";

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

  function UploadLogo() {
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      fileInputRef.current?.click();
    };

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

  const LABELS = [
    "Make", "Model", "IMEI no.1", "IMEI no.2", "Serial no.",
    "Version", "Battery", "Blocklist", "Region", "Color",
    "Quantity", "Jailbreak", "Condition", "Sale Price", "Comment",
    "Tester", "Date & Time", "Logo", "Invoice ID", "Barcode",
    "Team", "Port No.", "Station Id", "Facility", "Batch Id",
    "Re", "Result", "Manual1", "Manual2", "R3 Logo",
    "Test Code", "Extra1", "Extra2", "Extra3", "Extra4"
  ];

  function chunkArray<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  function ElementsGrid({
    rows,
    toggles,
    handleToggle,
  }: {
    rows: string[][];
    toggles: Record<string, boolean>;
    handleToggle: (label: string) => void;
  }) {
    function ToggleButton({ label }: { label: string }) {
      const [isOn, setIsOn] = useState(true);

      return (
        <div
          onClick={() => {
            setIsOn(!isOn);
            handleToggle(label);
          }}
          className={`
            relative inline-block
            w-6 h-3
            rounded-full
            cursor-pointer
            transition-colors
            ${isOn ? "bg-[#2CCA6D]" : "bg-gray-300"}
          `}
        >
          <div
            className={`
              absolute
              w-2 h-2
              bg-white
              rounded-full
              transform
              transition-all
              top-1/2 -translate-y-1/2
              ${isOn ? "left-[14px]" : "left-[2px]"}
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
                  <ToggleButton label={label} />
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

        {/* Bottom rows */}
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
          <p className="col-span-2 mt-1">
            Comment: Something else. You can track your next ride, see who's calling,
            check your flight status, and so much more.
          </p>
        </div>
      </div>
    );
  }

  const [toggles, setToggles] = useState(
    LABELS.reduce<Record<string, boolean>>((acc, label) => {
      acc[label] = false;
      return acc;
    }, {})
  );

  const handleToggle = (label: string) => {
    setToggles((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const rows = chunkArray(LABELS, 5);

  return (
    <div className="flex w-full bg-[#ffffff]">
      {/* LEFT SECTION */}
      <div className="w-1/2 border-r border-gray-300 p-4">
        {/* (Removed the Label/Report buttons) */}

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

        {/* Default Logo / Custom Logo / Comment / Operator Note */}
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

          {/* Comment & Operator Note */}
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
  );
}

function ReportContent() {
  const logo = "/images/r3-logo.png";
  const center = "/images/center.png";
  const report = "/images/report.png";
  const placeholder = "/images/upload-logo.png";

  function ToggleButton() {
    const [isOn, setIsOn] = useState(true);

    return (
      <div
        onClick={() => setIsOn(!isOn)}
        className={`
          relative inline-block
          w-6 h-3
          rounded-full
          cursor-pointer
          transition-colors
          ${isOn ? "bg-[#2CCA6D]" : "bg-gray-300"}
        `}
      >
        <div
          className={`
            absolute
            w-2 h-2
            bg-white
            rounded-full
            transform
            transition-all
            top-1/2 -translate-y-1/2
            ${isOn ? "left-[14px]" : "left-[2px]"}
          `}
        />
      </div>
    );
  }

  function UploadLogo() {
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      fileInputRef.current?.click();
    };

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
          w-[100px] h-[82px]
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

  return (
    <div className="flex w-full">
      {/* LEFT SECTION */}
      <div className="w-1/2 border-r bg-[#ffffff] p-4">
        {/* (Removed the Label/Report buttons) */}

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

        {/* Print Reports */}
        <h3 className="text-[13px] font-semibold font-[Montserrat] mb-2">
          Print Reports
        </h3>
        <div className="border border-gray-300 p-4 rounded-md mb-6">
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            {/* 1) Comprehensive Report */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                Comprehensive Report
              </span>
              <ToggleButton />
            </div>

            {/* 2) Data Erasure Report */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                Data Erasure Report
              </span>
              <ToggleButton />
            </div>

            {/* 3) Battery Info Report */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                Battery Info Report
              </span>
              <ToggleButton />
            </div>

            {/* 4) Part Info Report */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                Part Info Report
              </span>
              <ToggleButton />
            </div>

            {/* 5) Device Info Report */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                Device Info Report
              </span>
              <ToggleButton />
            </div>

            {/* 6) Diagnostics Reports */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                Diagnostics Reports
              </span>
              <ToggleButton />
            </div>
          </div>
        </div>

        {/* Default Logo / Custom Logo / Comment / Operator Note */}
        <div className="flex items-start gap-4">
          {/* Default Logo */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                Default Logo
              </span>
              <ToggleButton />
            </div>
            <div className="border border-gray-300 w-[100px] h-[82px] rounded-md bg-white flex items-center justify-center">
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

          {/* Comment & Operator Note */}
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
      <div className="w-1/2 px-4">
        {/* Selected Template */}
        <h3 className="text-[12] font-regular mb-1 pt-2">Select Template</h3>
        <div className="border border-gray-300 p-4 w-full overflow-x-auto rounded-[4px] mb-7">
          <h3 className="text-[12px] font-[Montserrat] font-semibold mb-2">
            Select Template
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative w-fit">
              <span className="absolute -top-3 right-0 text-[10px] text-gray-500">
                Left
              </span>
              <div className="border border-[#00B09B] rounded-[6px] flex items-center justify-center w-[80px] h-[100px]">
                <img
                  src={center}
                  alt="Template 1"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <div className="relative w-fit">
              <span className="absolute -top-3 right-0 text-[10px] text-gray-500">
                Right
              </span>
              <div className="border border-gray-600 rounded-[6px] flex items-center justify-center w-[80px] h-[100px]">
                <img
                  src={center}
                  alt="Template 2"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <div className="relative w-fit">
              <span className="absolute -top-3 right-0 text-[10px] text-gray-500">
                Center
              </span>
              <div className="border border-gray-600 rounded-[6px] flex items-center justify-center w-[80px] h-[100px]">
                <img
                  src={center}
                  alt="Template 3"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <div className="relative w-fit">
              <span className="absolute -top-3 right-0 text-[10px] text-gray-500">
                Blank
              </span>
              <div className="border border-gray-600 rounded-[6px] flex items-center justify-center w-[80px] h-[100px]" />
            </div>
          </div>
        </div>

        {/* Email & WhatsApp row */}
        <div className="flex flex-wrap gap-6 mb-4">
          {/* Email Report */}
          <div className="flex flex-col">
            <div className="flex items-center gap-6 mb-1">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                Email Report
              </span>
              <ToggleButton />
            </div>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="
                border border-gray-300 rounded-md
                px-2 py-1
                w-[240px]
                text-[12px] font-[Montserrat]
                outline-none focus:outline-none focus:ring-0
              "
            />
          </div>

          {/* WhatsApp Report */}
          <div className="flex flex-col">
            <div className="flex items-center gap-6 mb-1">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                WhatsApp Report
              </span>
              <ToggleButton />
            </div>
            <input
              type="text"
              placeholder="Phone number"
              className="
                border border-gray-300 rounded-md
                px-2 py-1
                w-[240px]
                text-[12px] font-[Montserrat]
                outline-none focus:outline-none focus:ring-0
              "
            />
          </div>
        </div>

        {/* CSV, Excel, PDF toggles for Email & WhatsApp */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-[12px] font-[Montserrat] text-[#000000]">
              CSV
            </span>
            <ToggleButton />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[12px] font-[Montserrat] text-[#000000]">
              Excel
            </span>
            <ToggleButton />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[12px] font-[Montserrat] text-[#000000]">
              PDF
            </span>
            <ToggleButton />
          </div>

          <div className="flex items-center gap-4 ml-14">
            <div className="flex items-center gap-1">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                CSV
              </span>
              <ToggleButton />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                Excel
              </span>
              <ToggleButton />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[12px] font-[Montserrat] text-[#000000]">
                PDF
              </span>
              <ToggleButton />
            </div>
            </div>
            </div>
 
             {/* Container for the three images */}
             <div className="p-4 flex gap-4 items-start">
              {/* Left column: two smaller images stacked */}
              <div className="flex flex-col gap-4">
              {/* Page 01 */}
             <div
             className="
               relative w-[120px] h-[160px] rounded-sm overflow-hidden
               border border-[#076873]
               bg-[#076873]/10
             "
           >
             {/* Centered label (bold) */}
             <span
               className="
                 absolute top-1/2 left-1/2
                 -translate-x-1/2 -translate-y-1/2
                 text-sm font-bold text-gray-700
               "
             >
               Page 01
             </span>
             <img
               src={report}
               alt="Page 01"
               className="w-full h-full object-cover"
             />
           </div>
       
           {/* Page 02 */}
           <div
             className="
               relative w-[120px] h-[160px] rounded-sm overflow-hidden
               border border-[#BBBBBB]
             "
             >
             {/* Centered label (normal) */}
             <span
               className="
                 absolute top-1/2 left-1/2
                 -translate-x-1/2 -translate-y-1/2
                 text-sm font-normal text-gray-700
               "
              >
               Page 02
             </span>
             <img
               src={report}
               alt="Page 02"
               className="w-full h-full object-cover"
             />
           </div>
         </div>
       
         <div
           className="
             relative w-[350px] h-[500px]
             border border-gray-300
             rounded-sm overflow-hidden
           "
           >
           <img
             src={report}
             alt="Large Report"
             className="w-full h-full object-cover"
           />
           </div>
          </div>
 
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
         );
       }


       export default function Page() {
        // Example: A simple tab state to switch between Label/Report
        const [activeTab, setActiveTab] = useState<"label" | "report">("label");

        return (
            <div className="bg-[#ffffff] m-2">
              {/* Tab buttons */}
              <div className="flex p-3">
                {/* LABEL button */}
                <button
                  onClick={() => setActiveTab("label")}
                  className={`
                    flex items-center gap-2
                    px-4 py-2
                    border border-[#00B09B]
                    leading-none
                    rounded-l-md
                    rounded-r-none
                    transition
                    ${
                      activeTab === "label"
                        ? "bg-[#00B09B] text-white"
                        : "bg-[#ffffff] text-black"
                    }
                  `}
                >
                  {/* Icon for Label */}
                  <span className="w-4 h-4 flex items-center justify-center">
                    <img
                      src="/images/label.png"
                      alt="Label Icon"
                      className="object-contain"
                      
                    />
                  </span>
                  <span>Label</span>
                </button>
        
                {/* REPORT button */}
                <button
                  onClick={() => setActiveTab("report")}
                  className={`
                    flex items-center gap-2
                    px-4 py-2
                    border border-[#00B09B]
                    leading-none
                    rounded-l-none
                    rounded-r-md
                    transition
                    ${
                      activeTab === "report"
                        ? "bg-[#00B09B] text-white"
                        : "bg-[#ffffff] text-black"
                    }
                  `}
                >
                  {/* Icon for Report */}
                  <span className="w-4 h-4 flex items-center justify-center">
                    <img
                      src="/images/shape.png"
                      alt="Report Icon"
                      className="object-contain"
                    />
                  </span>
                  <span>Report</span>
                </button>
              </div>
        
              {/* Conditionally render Label or Report content */}
              {activeTab === "label" && <LabelContent />}
              {activeTab === "report" && <ReportContent />}
            </div>
          );
        }