"use client";
import { useState, useRef } from "react";

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const inputRef = useRef(null);

  // Format date to display (YYYY-MM-DD)
  const formatDate = (date: string) =>
    date ? new Date(date).toISOString().split("T")[0] : "";

  // Open native date picker
  const handleInputClick = () => {
    if (inputRef.current) inputRef.current.showPicker();
  };

  return (
    <div className="relative w-64">
      {/* Invisible Input to Trigger Date Pickers */}
      <input
        type="text"
        readOnly
        value={
          startDate && endDate
            ? `${startDate} → ${endDate}`
            : "Select Date Range"
        }
        className="w-full p-2 border rounded cursor-pointer text-gray-700"
        onClick={handleInputClick}
      />

      {/* Hidden Native Inputs */}
      <div className="absolute top-full left-0 flex gap-2 mt-2 bg-white p-3 shadow-lg border rounded">
        {/* Start Date */}
        <input
          type="date"
          ref={inputRef}
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            if (endDate && new Date(e.target.value) > new Date(endDate))
              setEndDate("");
          }}
          className="border p-2 rounded"
        />

        {/* End Date */}
        <input
          type="date"
          value={endDate}
          min={startDate} // Ensure end date is after start date
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
}
