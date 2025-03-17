import CustomCheckbox from "./CustomCheckbox";
import KebabDropdown from "./KebabDropdown";

const DynamicTable = ({
  columns,
  data,
}: {
  columns: { key: string; label: string; center?: boolean; info?: boolean }[];
  data: any[];
}) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-[1000px] ">
        {/* <thead className="bg-gray-200 sticky top-0">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="border px-4 py-2 text-left">
                {col}
              </th>
            ))}
          </tr>
        </thead> */}
        <thead className="bg-[#F9F9F9]">
          <tr className=" rounded-[6px] text-[#888888] text-sm ">
            <th className="p-3">
              <CustomCheckbox
                // checked={selectedRows.length === data.length}
                onChange={
                  (e: any) => console.log("object")
                  // setSelectedRows(
                  //   e.target.checked ? data.map((d) => d.id) : []
                  // )
                }
              />
            </th>
            {columns.map((col, index) => (
              <th
                key={index}
                className="p-3 whitespace-nowrap  font-medium text-center"
              >
                {col.label}
                {/* <img src="/icons/info.svg" alt="info" className="ml-2" /> */}
              </th>
            ))}

            {/* Actions Column */}
            <th className="p-3">
              <span className="font-medium">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((row) => (
            <tr
              key={row.id}
              className={` hover:bg-gray-50s transition text-xs even:bg-[#F9F9F9] odd:bg-white `}
            >
              <td className="p-3">
                <CustomCheckbox
                // checked={selectedRows.includes(row.id)}
                // onChange={() => toggleRowSelection(row.id)}
                />
              </td>

              {columns.map((col, index) => (
                <td
                  key={index}
                  className={`p-3 whitespace-nowrap border-r border-[#C9C9C9] ${
                    col.center ? "text-center" : ""
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}

              <td className="p- relative text-center">
                <KebabDropdown
                  options={[
                    {
                      label: "Edit",
                      onClick: () => {},
                      // router.push(`/property/${propertyId}/Residents/edit/${Resident.id}`),
                    },
                    {
                      label: "Delete",
                      onClick: () => {},
                      // onClick: () => handleDelete(unit.id),
                    },
                  ]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
