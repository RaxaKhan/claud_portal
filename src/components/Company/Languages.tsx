import React from "react";

export default function Languages() {
  return (
    <div className="languages border border-[#F0F0F0] px-4 py-4 rounded-md w-[35%] font-poppins">
      <div className="text-[#181818] font-lg font-semibold mb-4">
        Select Language
      </div>

      <div className="langs">
        <div className="border border-[#DCDCDC] rounded-lg flex items-center justify-between px-4 py-2 mb-2">
          <div className="flex items-center">
            <div className="icon mr-2">
              <img src="/flags/en.png" alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="text">
              <h3 className="text-xs font-semibold text-[#222222]">English</h3>
              <h6 className="text-[10px] text-[#A8B0BC]">EN</h6>
            </div>
          </div>
          <div className="">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="hidden peer" />
              <div className="w-[18px] h-[18px] border-2 border-[#A3A3A3] rounded-full flex items-center justify-center peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-[#00B09B] "></div>
            </label>

            {/* <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="option" className="hidden peer" />
                    <div className="w-5 h-5 border-2 border-[#A3A3A3] rounded-full flex items-center justify-center peer-checked:border-white peer-checked:bg-black">
                      <div className="w-3 h-3 bg-[#00B09B] rounded-full"></div>
                    </div>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="option" className="hidden peer" />
                    <div className="w-5 h-5 border-2 border-[#A3A3A3] rounded-full flex items-center justify-center peer-checked:border-white peer-checked:bg-[#00B09B]">
                      <div className="w-3 h-3 rounded-full peer-checked:bg-black"></div>
                    </div>
                  </label> */}
          </div>
        </div>
        <div className="border border-[#DCDCDC] rounded-lg flex items-center justify-between px-4 py-2 mb-2">
          <div className="flex items-center">
            <div className="icon mr-2">
              <img src="/flags/es.png" alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="text">
              <h3 className="text-xs font-semibold text-[#222222]">Español</h3>
              <h6 className="text-[10px] text-[#A8B0BC]">ES</h6>
            </div>
          </div>
          <div className="">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="hidden peer" />
              <div className="w-[18px] h-[18px] border-2 border-[#A3A3A3] rounded-full flex items-center justify-center peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-[#00B09B] "></div>
            </label>
          </div>
        </div>
        <div className="border border-[#DCDCDC] rounded-lg flex items-center justify-between px-4 py-2 mb-2">
          <div className="flex items-center">
            <div className="icon mr-2">
              <img src="/flags/it.png" alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="text">
              <h3 className="text-xs font-semibold text-[#222222]">Italiano</h3>
              <h6 className="text-[10px] text-[#A8B0BC]">IT</h6>
            </div>
          </div>
          <div className="">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="hidden peer" />
              <div className="w-[18px] h-[18px] border-2 border-[#A3A3A3] rounded-full flex items-center justify-center peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-[#00B09B] "></div>
            </label>
          </div>
        </div>
        <div className="border border-[#DCDCDC] rounded-lg flex items-center justify-between px-4 py-2 mb-2">
          <div className="flex items-center">
            <div className="icon mr-2">
              <img src="/flags/de.png" alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="text">
              <h3 className="text-xs font-semibold text-[#222222]">Deutsch</h3>
              <h6 className="text-[10px] text-[#A8B0BC]">DE</h6>
            </div>
          </div>
          <div className="">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="hidden peer" />
              <div className="w-[18px] h-[18px] border-2 border-[#A3A3A3] rounded-full flex items-center justify-center peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-[#00B09B] "></div>
            </label>
          </div>
        </div>
        <div className="border border-[#DCDCDC] rounded-lg flex items-center justify-between px-4 py-2 mb-2">
          <div className="flex items-center">
            <div className="icon mr-2">
              <img src="/flags/fr.png" alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="text">
              <h3 className="text-xs font-semibold text-[#222222]">Français</h3>
              <h6 className="text-[10px] text-[#A8B0BC]">FR</h6>
            </div>
          </div>
          <div className="">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="hidden peer" />
              <div className="w-[18px] h-[18px] border-2 border-[#A3A3A3] rounded-full flex items-center justify-center peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-[#00B09B] "></div>
            </label>
          </div>
        </div>
        <div className="border border-[#DCDCDC] rounded-lg flex items-center justify-between px-4 py-2 mb-2">
          <div className="flex items-center">
            <div className="icon mr-2">
              <img src="/flags/pt.png" alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="text">
              <h3 className="text-xs font-semibold text-[#222222]">
                Portugues
              </h3>
              <h6 className="text-[10px] text-[#A8B0BC]">PT</h6>
            </div>
          </div>
          <div className="">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="hidden peer" />
              <div className="w-[18px] h-[18px] border-2 border-[#A3A3A3] rounded-full flex items-center justify-center peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-[#00B09B] "></div>
            </label>
          </div>
        </div>
        <div className="border border-[#DCDCDC] rounded-lg flex items-center justify-between px-4 py-2 mb-2">
          <div className="flex items-center">
            <div className="icon mr-2">
              <img src="/flags/ar.png" alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="text">
              <h3 className="text-xs font-semibold text-[#222222]">Arabic</h3>
              <h6 className="text-[10px] text-[#A8B0BC]">AR</h6>
            </div>
          </div>
          <div className="">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="hidden peer" />
              <div className="w-[18px] h-[18px] border-2 border-[#A3A3A3] rounded-full flex items-center justify-center peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-[#00B09B] "></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
