export default function CustomCheckbox({ checked, onChange }: any) {
  return (
    <div className="relative w-5 h-5">
      {/* Hidden Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 appearance-none border border-[#888888] rounded-[2px] bg-white checked:bg-[#03B199] checked:border-[#03B199] peer cursor-pointer"
      />
      {/* Custom Checkmark */}
      <label className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className={`w-4 h-4 text-white transition-opacity ${
            checked ? "opacity-100" : "opacity-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </label>
    </div>
  );
}
