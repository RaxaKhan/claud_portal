import React, { useState } from "react";
import CustomSelect from "../ui/CustomSelect";
import CustomButton from "../ui/CustomButton";

export default function Filters() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="filters flex gap-3 justify-center">
      <div className="filter">
        <CustomSelect
          options={[
            { value: "hasnat", label: "Hasnat" },
            { value: "usama", label: "Usama" },
            { value: "yahya", label: "Yahya" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Facility"
          className="px-[8px] py-[8px]"
        />
      </div>
      <div className="filter">
        <CustomSelect
          options={[
            { value: "hasnat", label: "Hasnat" },
            { value: "usama", label: "Usama" },
            { value: "yahya", label: "Yahya" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Vendor"
          className="px-[8px] py-[8px]"
        />
      </div>
      <div className="filter">
        <CustomSelect
          options={[
            { value: "hasnat", label: "Hasnat" },
            { value: "usama", label: "Usama" },
            { value: "yahya", label: "Yahya" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Operator"
          className="px-[8px] py-[8px]"
        />
      </div>
      <div className="filter">
        <CustomSelect
          options={[
            { value: "hasnat", label: "Hasnat" },
            { value: "usama", label: "Usama" },
            { value: "yahya", label: "Yahya" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Team"
          className="px-[8px] py-[8px]"
        />
      </div>
      <div className="filter">
        <CustomSelect
          options={[
            { value: "hasnat", label: "Hasnat" },
            { value: "usama", label: "Usama" },
            { value: "yahya", label: "Yahya" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Batch"
          className="px-[8px] py-[8px]"
        />
      </div>
      <div className="filter">
        <CustomSelect
          options={[
            { value: "hasnat", label: "Hasnat" },
            { value: "usama", label: "Usama" },
            { value: "yahya", label: "Yahya" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Station"
          className="px-[8px] py-[8px]"
        />
      </div>
      <div className="filter">
        <CustomSelect
          options={[
            { value: "hasnat", label: "Hasnat" },
            { value: "usama", label: "Usama" },
            { value: "yahya", label: "Yahya" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Invoice"
          className="px-[8px] py-[8px]"
        />
      </div>

      <button className="py-1 bg-primary text-white flex items-center px-4 rounded-md hover:bg-opacity-85">
        <img src="/icons/filter.svg" className="mr-2" />
        <span className="text-sm">Apply Filter</span>
      </button>

      <button className="py-1 bg-secondary text-white flex items-center px-4 rounded-md hover:bg-opacity-85">
        <img src="/icons/search.svg" className="mr-2" />
        <span className="text-sm">Bulk Search</span>
      </button>
    </div>
  );
}
