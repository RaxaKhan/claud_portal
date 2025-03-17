"use client";
import React from "react";

interface CustomButtonProps {
  text?: string | React.ReactNode;
  label?:
    | "primary"
    | "standard"
    | "light"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default"
    | "null";
  size?: "small" | "medium" | "large" | "xs";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const disabledStyles = "opacity-50 cursor-not-allowed";

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  label = "primary",
  size = "medium",
  onClick,
  icon,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const [ripples, setRipples] = React.useState<{ x: number; y: number }[]>([]);
  const [lastClickTime, setLastClickTime] = React.useState(0);

  const labelColors = {
    primary: "bg-[#03B199]",
    standard: "bg-[#95C93E]",
    light: "bg-gray-200",
    secondary: "bg-white",
    success: "bg-green-600",
    danger: "bg-red-600",
    warning: "bg-yellow-600",
    info: "bg-teal-600",
    default: "bg-[#102634]",
    null: "bg-transparent",
  };

  const labelHoverColors = {
    primary: "hover:bg-white",
    standard: "hover:bg-[#95C93E]",
    light: "hover:bg-gray-300",
    secondary: "hover:bg-[#03B199]",
    success: "hover:bg-green-700",
    danger: "hover:bg-red-700",
    warning: "hover:bg-yellow-700",
    info: "hover:bg-teal-700",
    default: "hover:bg-[#102634]",
    null: "hover:bg-transparent",
  };

  const labelTextColors = {
    primary: "text-white",
    standard: "text-white",
    light: "text-black",
    secondary: "text-[#03B199]",
    success: "text-white",
    danger: "text-white",
    warning: "text-black",
    info: "text-white",
    default: "text-white",
    null: "text-black",
  };

  const textHoverColors = {
    primary: "hover:text-[#03B199]",
    standard: "text-white",
    light: "text-black",
    secondary: "hover:text-white",
    success: "text-white",
    danger: "text-white",
    warning: "text-black",
    info: "text-white",
    default: "text-white",
    null: "text-black",
  };

  const borderColors = {
    primary: "border-[#03B199]",
    standard: "",
    light: "text-black",
    secondary: "hover:text-white",
    success: "text-white",
    danger: "text-white",
    warning: "text-black",
    info: "text-white",
    default: "text-white",
    null: "text-black",
  };

  const sizeClasses = {
    xs: "px-3 py-[0.4rem]",
    small: "px-4 py-2",
    medium: "px-5 py-3",
    large: "px-6 py-3",
  };

  const textClasses = {
    xs: "text-sm",
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const handleButtonClick = (e: any) => {
    if (disabled) return;

    const currentTime = Date.now();
    if (currentTime - lastClickTime < 300) return; // Prevent multiple rapid clicks
    setLastClickTime(currentTime);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipples((prevRipples) => [...prevRipples, { x, y }]);

    // Remove the ripple after the animation ends
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 600);

    if (onClick) {
      onClick(e);
    }
  };

  const bgColor = labelColors[label];
  const sizeClass = sizeClasses[size];
  const textSize = textClasses[size];
  const textColor = labelTextColors[label];
  const hoverColor = labelHoverColors[label];
  const textHoverColor = textHoverColors[label];
  const borderColor = borderColors[label];

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} ${sizeClass} ${bgColor} ${textColor} ${textHoverColor} ${
        borderColor ? `border ${borderColor}` : ""
      } relative overflow-hidden flex justify-center items-center cursor-pointer ${
        label !== "null" && "shadow-md"
      }  ${disabled ? disabledStyles : ""} ${
        label !== "null" && label === "secondary"
          ? "border border-gray-400"
          : ""
      } ${label !== "null" ? "rounded-[7px]" : ""} ${hoverColor} `}
      onClick={handleButtonClick}
    >
      {/* Render Ripples */}
      <span className="absolute inset-0">
        {ripples.map((ripple, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-white opacity-50 animate-ripple"
            style={{
              top: ripple.y - 50 + "px",
              left: ripple.x - 50 + "px",
              width: "100px",
              height: "100px",
            }}
          ></span>
        ))}
      </span>

      {icon && <span className={`${text && "mr-2"}`}>{icon}</span>}
      {text && (
        <span
          className={`${textSize} font-poppins whitespace-nowrap ${
            "font-medium"
            // size === "small" && "font-medium"
          } `}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default CustomButton;
