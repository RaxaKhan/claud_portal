import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";

// interface DropdownProps {
//   options: string[];
//   onChange?: (selected: string) => void;
//   placeholder?: string;
//   selectedOption?: string;
//   label?: string;
//   error?: string;
//   width?: string | number; // Custom width for the dropdown items
//   height?: string | number;
// }

const CustomDropdown = ({
  options,
  onChange,
  selectedOption,
  placeholder = "Select an option",
  label,
  error,
  width = "100%",
  height = "3rem",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = (useRef < HTMLDivElement) | (null > null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // <div className="w-full z-[1000] relative">
    <div className="w-full relative" style={{ width }}>
      {label && (
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          id={`${label}-label`}
        >
          {label}
        </label>
      )}
      <div ref={dropdownRef} className="relative w-full">
        {/* Dropdown button */}
        <button
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={label ? `${label}-label` : undefined}
          className={`w-full bg-white text-left text-gray-700 border border-[#DADADA] px-3 py-2 h-[3rem] rounded-[3px] focus:outline-none flex justify-between items-center ${
            error ? "border-red-500" : ""
          }`}
          style={{ height }}
        >
          <span className={selectedOption ? "text-gray-900" : "text-gray-400"}>
            {selectedOption || placeholder}
          </span>
          <ChevronDown
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Dropdown options */}
        {isOpen && (
          <div
            className="absolute w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-64  z-[10000]"
            role="listbox"
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#94A3B8 #F1F5F9",
            }}
          >
            <div className="max-h-64 overflow-y-auto z-[100000]">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(option)}
                  role="option"
                  aria-selected={selectedOption === option}
                  className={`px-4 py-2.5 cursor-pointer flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150 ${
                    index !== options.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  } ${selectedOption === option ? "bg-blue-50" : ""}`}
                  style={{
                    padding: "0 1rem",
                    height,
                  }}
                >
                  <span
                    className={`truncate ${
                      selectedOption === option
                        ? "text-blue-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {option}
                  </span>
                  {selectedOption === option && (
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 ml-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
