import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";

export default function UploadLicenseModal() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="add-facility">
      <div className="company">
        <label htmlFor="company">Company Name</label>
        <CustomInput
          className="mt-2"
          name="company"
          placeholder="Please enter Company Name"
        />
      </div>
      <div className="facility mt-6">
        <label htmlFor="facility">Facility</label>

        <CustomSelect
          options={[
            { value: "hasnat", label: "Hasnat" },
            { value: "usama", label: "Usama" },
            { value: "yahya", label: "Yahya" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Add Facility"
          className="mt-2"
        />
      </div>
      <div className="facility mt-6">
        <label htmlFor="facility">User</label>
        <CustomSelect
          options={[
            { value: "hasnat", label: "Hasnat" },
            { value: "usama", label: "Usama" },
            { value: "yahya", label: "Yahya" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="User"
          className="mt-2"
        />
      </div>
      <div className="facility mt-6">
        <label htmlFor="facility">Upload License</label>
        <CustomSelect
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="No. of Licenses"
          className="mt-2"
        />
      </div>

      <CustomButton
        text="Add License"
        label="primary"
        className="w-full mt-8"
        size="small"
      />
    </div>
  );
}
