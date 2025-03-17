import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";

const branches = {
  "Facility (A)": [
    { id: "User132343", password: "U***x**18**", name: "User A" },
    { id: "User132343", password: "U***x**18**", name: "User B" },
    { id: "User132343", password: "U***x**18**", name: "User C" },
  ],
  "Facility (B)": [
    { id: "User132343", password: "U***x**18**", name: "User A" },
    { id: "User132343", password: "U***x**18**", name: "User B" },
  ],
  "Facility (C)": [
    { id: "User132343", password: "U***x**18**", name: "User A" },
    { id: "User132343", password: "U***x**18**", name: "User B" },
    { id: "User132343", password: "U***x**18**", name: "User C" },
  ],
};

export default function CompanyBranches() {
  return (
    <div className="branches my-6">
      <div className="wrapper">
        {Object.entries(branches).map(([facility, users], index) => (
          <div className="mb-4">
            <div className="head bg-[#03B199] flex justify-between items-center py-3 px-6 rounded-md">
              <div className="fname text-white">{facility}</div>
              <div className="actions flex">
                <button className="w-8 h-8 border border-[#fff] rounded-md flex items-center justify-center mr-3 cursor-pointer hover:bg-gray-100">
                  <img
                    src="/icons/pencil-white.svg"
                    alt="pencil"
                    className="w-4 h-4"
                  />
                </button>
                <button className="w-8 h-8 border border-[#FF012F] rounded-md flex items-center justify-center mr- cursor-pointer hover:bg-red-100">
                  <img src="/icons/bin.svg" alt="bin" className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="users">
              {users.map((user) => (
                <div className="user border-b border-[#03B199]">
                  <div className="flex justify-between items-center px-4 py-4 text-sm">
                    <div className="name">{user.name}</div>
                    <div className="">User A</div>
                    <div className="">User ID: {user.id}</div>
                    <div className="">
                      <CustomInput value={user.password} />
                    </div>

                    <div className="actions flex">
                      <button className="w-8 h-8 border border-[#03B199] rounded-md flex items-center justify-center mr-3 cursor-pointer hover:bg-gray-100">
                        <img
                          src="/icons/pencil.svg"
                          alt="pencil"
                          className="w-4 h-4"
                        />
                      </button>
                      <button className="w-8 h-8 border border-[#FF012F] rounded-md flex items-center justify-center mr- cursor-pointer hover:bg-red-100">
                        <img
                          src="/icons/bin.svg"
                          alt="bin"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <CustomButton
          text="Save"
          label="primary"
          className="ml-auto mt-8 w-[25%]"
          size="small"
        />
      </div>
    </div>
  );
}
