import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";

export default function AddUserModal() {
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
        <CustomInput className="mt-2" name="facility" placeholder="User" />
      </div>

      <CustomButton
        text="Add User"
        label="primary"
        className="w-full mt-8"
        size="small"
      />
    </div>
  );
}
