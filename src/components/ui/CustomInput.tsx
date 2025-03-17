import React from "react";

interface InputProps {
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  value?: any;
  onBlur?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
  disabled?: boolean;
  label?: string;
  isTextarea?: boolean; // New prop to decide if it's a textarea
  rows?: number; // For textarea
}

const CustomInput: React.FC<InputProps> = ({
  type = "text",
  name,
  id,
  placeholder,
  value,
  disabled,
  onChange,
  onBlur,
  className = "",
  label = "",
  isTextarea = false,
  rows = 4, // Default rows for textarea
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="text-[14px] mb-2 block font-inter text-gray-600 font-medium"
        >
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          onBlur={onBlur}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
          className={`border rounded-[6px] border-[#DADADA] bg-gray-50 px-3 py-2 outline-none resize-none ${className}`}
        />
      ) : (
        <input
          onBlur={onBlur}
          type={type}
          disabled={disabled}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border rounded-[6px] border-[#DADADA] bg-gray-50 px-4 py-2 focus:ring-2 focus:ring-gray-200 focus:outline-none w-full ${className}`}
        />
      )}
    </div>
  );
};

export default CustomInput;
