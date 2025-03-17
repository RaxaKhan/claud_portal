"use client";
import React, { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
  disabled?: boolean;
}

export default function CustomSelect({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  error = false,
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={selectRef}>
      {/* Select Box */}
      <button
        type="button"
        className={`
          ${className} w-full text-left px-4 py-3 border rounded-lg text-sm flex justify-between items-center 
          transition-all duration-200 outline-none focus:ring-2 cursor-pointer
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-gray-300"
          }
          ${
            disabled
              ? "bg-gray-100 cursor-not-allowed text-gray-400"
              : "bg-white"
          }
          shadow-sm hover:shadow-lg relative
          
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span>
          {selectedOption ? (
            selectedOption.label
          ) : (
            <span className="text-gray-500">{placeholder}</span>
          )}
        </span>
        <span
          className={`ml-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <img
            src="/icons/arrow-down.svg"
            alt="arrow down"
            className="w-5 h-5"
          />
        </span>
      </button>

      {/* Dropdown Menu with Smooth Animation */}
      <div
        className={`absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto z-50 transform transition-all duration-200 origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <ul className="py-2">
          {options.length > 0 ? (
            options.map((option) => (
              <li
                key={option.value}
                className={`
                  px-4 py-3 cursor-pointer text-sm flex items-center gap-2 
                  hover:bg-blue-100 transition-all duration-150
                  ${value === option.value ? "bg-blue-200 font-medium" : ""}
                `}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {/* {option.icon && <span>{option.icon}</span>} */}
                {option.label}
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-gray-500">No options available</li>
          )}
        </ul>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs mt-1">Invalid selection</p>}
    </div>
  );
}
