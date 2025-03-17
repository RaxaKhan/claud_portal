import React from "react";

export default function CustomInput({
  id,
  name,
  type = "text",
  placeholder = "",
  className = "",
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  error = false,
  ref,
}) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-label={placeholder || "input field"}
        ref={ref}
        className={`
          text-gray-600 border text-sm px-5 py-3 rounded-md w-full outline-none 
          transition-all duration-200 ease-in-out focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-gray-300"
          }
          focus:ring-1 disabled:bg-gray-100 disabled:cursor-not-allowed
          ${className}
        `}
      />
      {error && <p className="text-red-500 text-xs mt-1">Invalid input</p>}
    </div>
  );
}
