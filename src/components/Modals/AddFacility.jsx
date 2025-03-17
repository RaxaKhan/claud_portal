import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";

export default function AddFacilityModal() {
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
        <CustomInput
          className="mt-2"
          name="facility"
          placeholder="Add Facility"
        />
      </div>

      <CustomButton
        text="Add Facility"
        label="primary"
        className="w-full mt-8"
        size="small"
      />
    </div>
  );
}
