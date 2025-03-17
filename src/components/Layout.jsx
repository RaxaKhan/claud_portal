// src/components/Layout.jsx
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col ">
      <header className="p-6 border-b border-[#03B199]">
        <div className="w-[95%] mx-auto flex justify-between">
          <Link to="/">
            <h1 className="text-[28px] text-primary uppercase font-bold font-aeonik ">
              R3 Diagnostics
            </h1>
          </Link>

          <div className="">
            <div className="flex">
              <div className="search mr-4">
                <div className="relative w-[320px]">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <img
                      src="/icons/magnifying-glass.svg"
                      alt="magnifying glass"
                    />
                  </span>

                  <input
                    type="text"
                    placeholder="Search anything here"
                    className="w-full pl-11 pr-4 py-2 border rounded-[36px] border-[#DCDCDC] text-[#BBBBBB] outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
              </div>
              <div className="buttons mr-4 flex">
                <button className="w-11 h-11 border border-[#03B199] rounded-[6px] flex items-center justify-center mr-4 cursor-pointer hover:bg-gray-100">
                  <img src="/icons/list.svg" alt="list" className="w-5 h-5" />
                </button>

                <button className="w-11 h-11 border border-[#03B199] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                  <img
                    src="/icons/printer.svg"
                    alt="printer"
                    className="w-5 h-5"
                  />
                </button>
              </div>
              <div className="profile flex">
                <div className="avatar mr-4">
                  <div className="relative w-11 h-11">
                    <img
                      src="/images/avatar.png"
                      alt="User Avatar"
                      className="w-full h-full rounded-[6px] object-cover border border-gray-300"
                    />

                    <span className="absolute top-[-7px] right-[-7px] w-5 h-5 bg-green-500 border-3 border-white rounded-full"></span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-[18px] font-poppins">Hasnat Sajid</div>
                  <div className="email text-[10px] font-poppins">
                    hasnat@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
