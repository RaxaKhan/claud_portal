import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";

export default function FiltersModal() {
  return (
    <div className="add-facility">
      <div className="flex gap-4">
        <div className="company w-[50%]">
          {/* <label htmlFor="company">Company Name</label> */}

          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            className=""
            // onChange={(e) => e.target}
            placeholder="Company Name"
          />
        </div>
        <div className="company w-[50%]">
          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            className=""
            // onChange={(e) => e.target}
            placeholder="Facility"
          />
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <div className="company w-[70%]">
          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            // onChange={(e) => e.target}
            placeholder="User"
          />
        </div>
        <div className="company w-[50%]">
          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            // onChange={(e) => e.target}
            placeholder="Uploaded"
          />
        </div>
        <div className="company w-[50%]">
          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            // onChange={(e) => e.target}
            placeholder="Remaining"
          />
        </div>
        <div className="company w-[50%]">
          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            // onChange={(e) => e.target}
            placeholder="Total Devices"
          />
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <div className="company w-[50%]">
          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            // onChange={(e) => e.target}
            placeholder="iOS"
          />
        </div>
        <div className="company w-[50%]">
          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            // onChange={(e) => e.target}
            placeholder="Android"
          />
        </div>
        <div className="company w-[50%]">
          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            // onChange={(e) => e.target}
            placeholder="Data Erasure"
          />
        </div>
        <div className="company w-[50%]">
          <CustomSelect
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
            // value={row.credit_dates}
            // onChange={(e) => e.target}
            placeholder="Pass/Fail"
          />
        </div>
      </div>

      <CustomButton
        text="Apply Filters"
        label="primary"
        className="w-full mt-8"
        size="small"
      />
    </div>
  );
}
