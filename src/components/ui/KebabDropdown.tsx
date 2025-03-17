import {
  Eye,
  KeyRound,
  MessageSquareText,
  Pencil,
  Trash2,
  Wrench,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs"; // Kebab icon from react-icons

type KebabDropdownOption = {
  label: string;
  onClick: (e: any) => void;
  icon?: React.ReactNode;
};

type KebabDropdownProps = {
  options: KebabDropdownOption[];
  className?: string;
};

export default function KebabDropdown({
  options,
  className = "",
}: KebabDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  // Toggle dropdown menu visibility
  // const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleMenu = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY, // Ensure it's positioned correctly even when scrolling
        left: rect.left + window.scrollX - 50,
      });
    }
    setIsOpen((prev) => !prev);
  };

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        {/* <BsThreeDotsVertical className="text-gray-600 w-5 h-5" /> */}
        <img src="/icons/kebab-t.svg" alt="kebab icon" className=" w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed mt-2 w-max bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          style={{ top: position.top, left: position.left }}
        >
          {options.map((option, index) => {
            console.log(option?.label.trim().toLowerCase());
            return (
              <button
                key={index}
                onClick={(e) => {
                  option.onClick(e);
                  setIsOpen(false);
                }}
                className="w-full flex flex-col text-left px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-100 focus:outline-none"
              >
                {/* {option.label} */}
                <div className="flex items-center">
                  {!option.icon ? (
                    // {
                    <span className="mr-3">
                      {option.label.trim().toLowerCase() === "view" ? (
                        <Eye className="w-5 h-5 " />
                      ) : option.label.trim().toLowerCase() === "edit" ? (
                        <Pencil className="w-5 h-5 " />
                      ) : option.label.trim().toLowerCase() === "delete" ? (
                        <Trash2 className="w-5 h-5 " />
                      ) : option.label.trim().toLowerCase() === "message" ? (
                        <MessageSquareText className="w-5 h-5 " />
                      ) : option.label.trim().toLowerCase() ===
                        "permissions" ? (
                        <KeyRound className="w-5 h-5 " />
                      ) : (
                        ""
                      )}
                    </span>
                  ) : (
                    option.icon
                  )}
                  <span className="font-semibold font-inter text-sm">
                    {option.label}
                  </span>
                </div>
                {/* {selectedValue === option.value && (
                    <AiOutlineCheck className="ml-auto text-green-500" />
                  )} */}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
