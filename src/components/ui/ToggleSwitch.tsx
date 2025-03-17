import { useState } from "react";

interface ToggleProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleProps> = ({ isChecked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="w-8 h-4 bg-gray-300 rounded-full peer-checked:bg-[#2CCA6D] transition-all duration-300"></div>
      <div className="absolute left-[2px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:left-[calc(100%-14px)]"></div>
    </label>
  );
};

export default ToggleSwitch;
