"use client";
import React, { useState, useEffect } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// Device Card Component
const DeviceCard = ({ device }) => {
  const [activeTab, setActiveTab] = useState("device"); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const results = [
    { testCode: "ios-001", testName: "Accelerometer Test", result: "fail" },
    { testCode: "ios-002", testName: "Audio Input", result: "Pass" },
    { testCode: "ios-003", testName: "Auto Audio", result: "Fail" },
    { testCode: "ios-004", testName: "Audio Output", result: "Fail" },
    { testCode: "ios-005", testName: "Buttons Test", result: "Pass" },
    { testCode: "ios-006", testName: "Accelerometer Test", result: "fail" },
    { testCode: "ios-007", testName: "Audio Input", result: "Pass" },
    { testCode: "ios-008", testName: "Auto Audio", result: "Fail" },
    { testCode: "ios-009", testName: "Audio Output", result: "Fail" },
    { testCode: "ios-005", testName: "Buttons Test", result: "Pass" },
    { testCode: "ios-006", testName: "Accelerometer Test", result: "fail" },
    { testCode: "ios-007", testName: "Audio Input", result: "Pass" },
    { testCode: "ios-008", testName: "Auto Audio", result: "Fail" },
    { testCode: "ios-009", testName: "Audio Output", result: "Fail" },
    { testCode: "ios-005", testName: "Buttons Test", result: "Pass" },
    { testCode: "ios-006", testName: "Accelerometer Test", result: "fail" },
    { testCode: "ios-007", testName: "Audio Input", result: "Pass" },
    { testCode: "ios-008", testName: "Auto Audio", result: "Fail" },
    { testCode: "ios-009", testName: "Audio Output", result: "Fail" },
    { testCode: "ios-005", testName: "Buttons Test", result: "Pass" },
    // Add more results as needed...
  ];
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden mb-4">
    
      <div className="bg-teal-500 text-white py-1 px-3 flex items-center justify-between">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2 h-5 w-5 border-2 border-white" />
          <div className="bg-white rounded-full h-6 w-6 flex items-center justify-center text-black font-bold mr-2">1</div>
          <span className="font-semibold text-sm">Apple iPhone 12 Pro Max</span>
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 bg-red-500 rounded-full mr-1"></div>
          <div className="h-4 w-4 bg-black"></div>
        </div>
      </div>
  
      <div className="grid grid-cols-4 gap-2">
        <div
          className={`px-4 py-1 text-center font-medium text-sm rounded-b-lg cursor-pointer ${
            activeTab === 'device' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('device')}
        >
          Device
        </div>
        <div
          className={`px-4 py-1 text-center font-medium text-sm rounded-b-lg cursor-pointer ${
            activeTab === 'results' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('results')}
        >
          Results
        </div>
        <div
          className={`px-4 py-1 text-center font-medium text-sm rounded-b-lg cursor-pointer ${
            activeTab === 'manual' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('manual')}
        >
          Manual
        </div>
        <div
          className={`px-4 py-1 text-center font-medium text-sm rounded-b-lg cursor-pointer ${
            activeTab === 'issues' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('issues')}
        >
          Issues
        </div>
      </div>

      {activeTab === 'device' && (
         <div className="flex w-full">

         <div className="flex-1 p-4">
           <div className="p-1 flex gap-1 w-full">

             <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 rounded">
               <span className="text-xs font-semibold whitespace-nowrap">Make</span>
               <span className="text-xs">{device.make}</span>
             </div>
 
             <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 rounded">
               <span className="text-xs font-semibold whitespace-nowrap">Model</span>
               <span className="text-xs">{device.model}</span>
             </div>
           </div>
 
           <div className="p-1 grid grid-cols-2 gap-1">
             <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 rounded">
               <span className="text-xs font-semibold whitespace-nowrap">IMEI 1</span>
               <span className="text-xs">{device.imei1}</span>
             </div>
             <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 rounded">
               <span className="text-xs font-semibold whitespace-nowrap">IMEI 2</span>
               <span className="text-xs">{device.imei2}</span>
             </div>
           </div>
       
           <div className="p-1 grid grid-cols-2 gap-1">
             <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 rounded">
               <span className="text-xs font-semibold whitespace-nowrap">Serial No.</span>
               <span className="text-xs">{device.serialNo}</span>
             </div>
             <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 rounded">
               <span className="text-xs font-semibold">Color</span>
               <span className="text-xs">{device.color}</span>
             </div>
           </div>
       
           <div className="p-1 grid grid-cols-3 gap-1">
             <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 rounded">
               <span className="text-xs font-semibold whitespace-nowrap">Storage</span>
               <span className="text-xs">{device.storage}</span>
             </div>
             <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 rounded">
               <span className="text-xs font-semibold whitespace-nowrap">Region</span>
               <span className="text-xs">{device.region}</span>
             </div>
             <div className="bg-gray-100 px-2 py-1 flex items-center gap-2 rounded">
               <span className="text-xs font-semibold whitespace-nowrap">OS Version</span>
               <span className="text-xs">{device.osVersion}</span>
             </div>
           </div>
       
           <div className="p-1 grid grid-cols-2 gap-1">
             <div className="bg-gray-100 px-2 py-1 flex items-center justify-between rounded">
               <span className="text-xs font-semibold">Firmware</span>
               <span className="text-xs">{device.firmware}</span>
             </div>
             <div className="bg-gray-100 px-2 py-1 flex items-center justify-between rounded">
               <span className="text-xs font-semibold">Build Version</span>
               <span className="text-xs">{device.buildVersion}</span>
             </div>
           </div>
       
           <div className="p-1 grid grid-cols-2 gap-1">
             <div className="bg-gray-100 px-2 py-1 flex items-center justify-between rounded">
               <span className="text-xs font-semibold">Sales Model</span>
               <span className="text-xs">{device.salesModel}</span>
             </div>
             <div className="bg-gray-100 px-2 py-1 flex items-center justify-between rounded">
               <span className="text-xs font-semibold">Model Number</span>
               <span className="text-xs">{device.modelNumber}</span>
             </div>
           </div>
       
           <div className="p-1 grid grid-cols-5 gap-1">
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">iCloud</span>
               <span className={`text-xs font-semibold ${device.icloud === "Off" ? "text-red-500" : "text-green-500"}`}>{device.icloud}</span>
             </div>
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">FMI</span>
               <span className={`text-xs font-semibold ${device.fmi === "Off" ? "text-red-500" : "text-green-500"}`}>{device.fmi}</span>
             </div>
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">ESN</span>
               <span className={`text-xs font-semibold ${device.esn === "Yes" ? "text-green-500" : "text-red-500"}`}>{device.esn}</span>
             </div>
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">MDM</span>
               <span className={`text-xs font-semibold ${device.mdm === "Yes" ? "text-green-500" : "text-red-500"}`}>{device.mdm}</span>
             </div>
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">Carrier</span>
               <span className="text-xs text-white">{device.carrier}</span>
             </div>
           </div>
           
           <div className="p-1 grid grid-cols-5 gap-1">
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">Jailbreak</span>
               <span className={`text-xs font-semibold ${device.jailbreak === "Yes" ? "text-green-500" : "text-red-500"}`}>{device.jailbreak}</span>
             </div>
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">Warranty</span>
               <span className={`text-xs font-semibold ${device.warranty === "Yes" ? "text-green-500" : "text-red-500"}`}>{device.warranty}</span>
             </div>
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">FRP</span>
               <span className={`text-xs font-semibold ${device.frp === "Off" ? "text-red-500" : "text-green-500"}`}>{device.frp}</span>
             </div>
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">Rooted</span>
               <span className={`text-xs font-semibold ${device.rooted === "Yes" ? "text-green-500" : "text-red-500"}`}>{device.rooted}</span>
             </div>
             <div className="bg-teal-500 px-2 py-1 flex flex-col items-center justify-center rounded">
               <span className="text-xs font-semibold text-white">SIM Lock</span>
               <span className="text-xs text-white">{device.simLock}</span>
             </div>
           </div>
 
           <div className="p-1 grid grid-cols-2 gap-1">
             <div className="bg-teal-500 px-2 py-1 flex items-center justify-between rounded">
               <div className="flex space-x-1">
                 <div className="h-4 w-4 bg-red-500 border border-gray-300"></div>
                 <div className="h-4 w-4 bg-green-500 border border-gray-300"></div>
                 <div className="h-4 w-4 bg-green-500 border border-gray-300"></div>
                 <div className="h-4 w-4 bg-green-500 border border-gray-300"></div>
                 <div className="h-4 w-4 bg-green-500 border border-gray-300"></div>
               </div>
               <div className="text-right">
                 <span className="text-xs font-semibold text-white">OEM Parts</span>
               </div>
             </div>
             <div className="bg-teal-500 px-2 py-1 flex items-center justify-between rounded">
               <div className="text-left">
                 <div className="text-xs font-semibold text-white">Health: {device.batteryHealth}</div>
                 <div className="text-xs text-white">Cycle Count: {device.cycleCount}</div>
               </div>
               <div className="text-right">
                 <span className="text-xs font-semibold text-white">Battery</span>
               </div>
             </div>
           </div>
           
           <div className="p-1 grid grid-cols-1 gap-1">
             <div className="bg-white px-2 py-1 flex items-center justify-between rounded border border-gray-300">
               <span className="text-xs text-gray-500">Add Comment</span>
               <span className="text-xs text-teal-500 font-semibold">Grade {device.grade}</span>
             </div>
           </div>
         </div>
 
          <div className="w-12 bg-teal-500 text-white rounded-r-lg p-3 flex flex-col justify-between">
           <div className="flex flex-col gap-6">
             <div className="flex items-center justify-center">
               <span className="text-xs">AC</span>
             </div>
             <div className="flex items-center justify-center">
               <span className="text-xs">S</span>
             </div>
             <div className="flex items-center justify-center">
               <span className="text-xs">EN</span>
             </div>
             <div className="flex items-center justify-center">
               <span className="text-xs">EX</span>
             </div>
             <div className="flex items-center justify-center">
               <span className="text-xs">SI</span>
             </div>
             <div className="flex items-center justify-center">
               <ReplayIcon className="text-white h-4 w-4" />
             </div>
             <div className="flex items-center justify-center">
               <span className="text-xs">Light</span>
             </div>
             <div className="flex items-center justify-center">
               <PowerSettingsNewIcon className="text-white h-4 w-4" />
             </div>
           </div>
          </div>

          
          </div> 

      
    )}



    {activeTab === 'results' && (
        <div className="flex flex-col w-full">
          <div className="flex-grow flex w-full">
            <div className="flex-1 flex flex-col bg-white relative">
              <div className="bg-[#6AA4AB] text-white mt-2">
                <table className="w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="w-1/4 py-2 px-2 text-left text-xs font-medium">Test Code</th>
                      <th className="w-2/4 py-2 px-2 text-left text-xs font-medium">Test Name</th>
                      <th className="w-1/4 py-2 px-2 text-left text-xs font-medium">Result</th>
                    </tr>
                  </thead>
                </table>
              </div>

              {/* Scrollable Results Section */}
              <div className="overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-steal-500 scrollbar-track-steal-200">
                <table className="w-full table-fixed border-collapse">
                  <tbody>
                    {results.map((result, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#CDE1E3] bg-opacity-35'}>
                        <td className="w-1/4 py-1.5 px-2 text-xs border-b border-gray-200">{result.testCode}</td>
                        <td className="w-2/4 py-1.5 px-2 text-xs border-b border-gray-200">{result.testName}</td>
                        <td className={`w-1/4 py-1.5 px-2 text-xs border-b border-gray-200 ${
                          result.result === 'Pass' ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {result.result}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* sidebar */}
        <div className="w-10 h-[50%] mt-14 mb-10 ml-2 mr-0 bg-teal-500 text-white rounded-l-lg p-3 flex flex-col justify-center gap-2">
          <div className="flex flex-col">
           {["AC", "S", "EN", "EX", "SI"].map((label) => (
            <button
              key={label}
              className="flex items-center justify-center text-xs font-bold py-3 hover:bg-teal-600 transition"
              onClick={() => console.log(`${label} clicked`)}
             >
              {label}
            </button>
             ))}
          </div>
        </div>
      </div>

        {/* footer */}
       <div className="bg-teal-500 flex justify-between items-center px-3 py-2">
      <div className="flex items-center space-x-3">
        <div className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        </div>
        <div className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <div className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        </div>
      </div> 
      <div className="text-white flex items-center">
        <span className="text-xs mr-1">Results: 1/44</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="text-white text-xs">
        Pushing Other Configuration
      </div>
    </div>
        </div>
      )}
      </div>
  );
};

// Main Home Component
const Home = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Create mock devices
    const mockDevices = Array(2).fill().map((_, index) => ({
      id: index + 1,
      make: "Samsung",
      model: "Galaxy S20 Ultra Pro Max",
      imei1: "352913117900253D",
      imei2: "352913117900253D",
      serialNo: "123456789123456",
      color: "SPACE GREY",
      storage: "32 GB",
      region: "Pakistan",
      osVersion: "16.8.01",
      firmware: "16.0.9",
      buildVersion: "19H386",
      salesModel: "A1688",
      modelNumber: "MN122",
      icloud: "Off",
      fmi: "Off",
      esn: "Yes",
      mdm: "Yes",
      carrier: "Verizon",
      jailbreak: "Yes",
      warranty: "Yes",
      frp: "Off",
      rooted: "Yes",
      simLock: "Unlock",
      batteryHealth: "100%",
      cycleCount: "1523",
      grade: "A",
    }));

    setDevices(mockDevices);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {devices.map(device => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default Home;