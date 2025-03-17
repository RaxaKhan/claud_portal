"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Settings() {
  // Main settings state including all toggles and saved WiFi values.
  const [settings, setSettings] = useState({
    installWithoutTrust: false,
    autoInstallApp: false,
    autoInstallWiFi: false,
    passwordVisible: false,
    autoErasureConnect: false,
    autoActivateIos: false,
    clearDeviceBox: false,
    firmwareFlashIos: false,
    thunderSyncUsb: false,
    enableBatteryCriteria: false,
    autoReplacedPartsDetection: false,
    autoPerformEsnBlacklistCheck: false,
    autoPerformAppleCareWarranty: false,
    autoErasureDeviceFail: false,
    autoPerformSamsungCareWarranty: false,
    autoPerformSimLockCheck: false,
    autoUninstallPass: false,
    autoUninstallFail: false,
    autoErasePass: false,
    autoEraseFail: false,
    autoEraseResults1: false,
    autoEraseResults2: false,
    autoPrintLabelPass: false,
    autoPrintLabelResults: false,
    autoRemoveWifi: false,
    autoPowerOffPass: false,
    // Saved WiFi configuration values.
    wifiSsid: "",
    wifiPassword: "",
  });

  // Draft state for WiFi configuration inputs.
  const [wifiDraft, setWifiDraft] = useState({
    ssid: "",
    password: "",
  });

  // Toggle handler for boolean settings.
  const handleToggle = (key) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [key]: !prev[key] };
      console.log(`Toggled ${key}:`, newSettings[key]);
      console.log("Updated settings:", newSettings);
      return newSettings;
    });
  };

  // Update the WiFi draft as the user types.
  const handleWifiInputChange = (e) => {
    const { name, value } = e.target;
    setWifiDraft((prev) => {
      const newDraft = { ...prev, [name]: value };
      console.log("WiFi Draft Updated:", newDraft);
      return newDraft;
    });
  };

  // Save the WiFi configuration from the draft into the main settings.
  const handleWifiSave = () => {
    setSettings((prev) => {
      const newSettings = {
        ...prev,
        wifiSsid: wifiDraft.ssid,
        wifiPassword: wifiDraft.password,
      };
      console.log("WiFi Configuration Saved:", {
        ssid: newSettings.wifiSsid,
        password: newSettings.wifiPassword,
      });
      return newSettings;
    });
  };

  // Clear the WiFi configuration in both the draft and main settings.
  const handleWifiRemove = () => {
    setWifiDraft({ ssid: "", password: "" });
    setSettings((prev) => {
      const newSettings = {
        ...prev,
        wifiSsid: "",
        wifiPassword: "",
      };
      console.log("WiFi Configuration Removed:", {
        ssid: newSettings.wifiSsid,
        password: newSettings.wifiPassword,
      });
      return newSettings;
    });
  };

  return (
    <div className="p-6 md:p-6 bg-white">
      {/* Container for all settings */}
      <div className="flex flex-col md:flex-row gap-6 ">
        {/* CORE SETTING */}
        <div className="flex-1 rounded-md border border-[#C9C9C9]">
          <h2 className="text-lg font-semibold text-center font-Montserrat bg-[#00B09B] bg-opacity-10 text-[#00B09B] rounded-md py-3 w-full">
            Core Setting
          </h2>
          <div className="p-4 rounded-md">
            {/* WiFi Configuration */}
            <h3 className="font-Montserrat font-semibold text-[18px] text-[#1E1E1E] mb-3">
              WiFi Configuration
            </h3>
            <div className="mb-4">
              <label
                className="block font-regular font-Montserrat text-[16px] text-[#0C0302] mb-1"
                htmlFor="ssid"
              >
                SSID / Username
              </label>
              <input
                id="ssid"
                name="ssid"
                type="text"
                value={wifiDraft.ssid}
                onChange={handleWifiInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00B09B]"
                placeholder=""
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={settings.passwordVisible ? "text" : "password"}
                value={wifiDraft.password}
                onChange={handleWifiInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00B09B]"
                placeholder="Password@123"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => handleToggle("passwordVisible")}
              >
                {settings.passwordVisible ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            {/* WiFi Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={handleWifiRemove}
                className="px-4 py-2 border border-gray-400 text-gray-700 rounded-md"
              >
                Remove
              </button>
              <button
                onClick={handleWifiSave}
                className="px-4 py-2 bg-[#00B09B] text-white rounded-md"
              >
                Save
              </button>
            </div>

            {/* Installation Settings */}
            <h3 className="text-lg mt-6 text-[#1E1E1E] font-[Montserrat]">
              Installation Settings
            </h3>
            {[
              { label: "Auto Install App", key: "autoInstallApp" },
              { label: "Auto Install WiFi", key: "autoInstallWiFi" },
              { label: "Install Without Trust App", key: "installWithoutTrust" },
            ].map(({ label, key }) => (
              <div key={label} className="flex items-center justify-between pt-3">
                <span className="text-[16px] font-[Montserrat] font-medium text-[#888888]">
                  {label}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings[key]}
                    onChange={() => handleToggle(key)}
                  />
                  <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
                </label>
              </div>
            ))}
            {/* Battery Criteria */}
            <h3 className="text-[20px] font-semibold mt-6 mb-3 text-[#1E1E1E] font-[Montserrat]">
              Battery Criteria
            </h3>
          </div>
        </div>

        {/* GENERAL SETTING */}
        <div className="flex-1 rounded-md border border-[#C9C9C9]">
          <h2 className="text-lg font-semibold text-center font-Montserrat bg-[#00B09B] bg-opacity-10 text-[#00B09B] rounded-md py-3 w-full">
            General Setting
          </h2>
          <div className="bg-white p-4 rounded-md">
            {/* Auto Activate iOS Device */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Auto Activate iOS Device
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoActivateIos}
                  onChange={() => handleToggle("autoActivateIos")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Clear Device Box When Device is Disconnected */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Clear Device Box When Device is Disconnected
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.clearDeviceBox}
                  onChange={() => handleToggle("clearDeviceBox")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Firmware Flash (only iOS) */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Firmware Flash (only iOS)
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.firmwareFlashIos}
                  onChange={() => handleToggle("firmwareFlashIos")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Thunder SYNC USB Port Mapping */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Thunder SYNC USB Port Mapping
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.thunderSyncUsb}
                  onChange={() => handleToggle("thunderSyncUsb")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Enable Battery Criteria */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Enable Battery Criteria
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.enableBatteryCriteria}
                  onChange={() => handleToggle("enableBatteryCriteria")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Erasure Setting heading */}
            <div className="text-center -mx-4 font-Montserrat font-semibold bg-[#00B09B] bg-opacity-10 text-[#00B09B] rounded-md py-2 mt-6">
              Erasure Setting
            </div>
            {/* Auto Erasure on Connect */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Auto Erasure on Connect
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoErasureConnect}
                  onChange={() => handleToggle("autoErasureConnect")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Flash Firmware (iOS) */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Flash Firmware (iOS)
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.firmwareFlashIos}
                  onChange={() => handleToggle("firmwareFlashIos")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Automate Validations heading */}
            <div className="text-center -mx-4 font-Montserrat font-semibold bg-[#00B09B] bg-opacity-10 text-[#00B09B] rounded-md py-2 mt-6">
              Automate Validations
            </div>
            {/* Auto Replaced Parts Detection */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Auto Replaced Parts Detection
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoReplacedPartsDetection}
                  onChange={() => handleToggle("autoReplacedPartsDetection")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Perform ESN / Blacklist Check */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Auto Perform ESN / Blacklist Check
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoPerformEsnBlacklistCheck}
                  onChange={() => handleToggle("autoPerformEsnBlacklistCheck")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Perform Apple Care Warranty */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Auto Perform Apple Care Warranty
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoPerformAppleCareWarranty}
                  onChange={() => handleToggle("autoPerformAppleCareWarranty")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Erasure Device(s) Data on Test Fail */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Auto Erasure Device(s) Data on Test Fail
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoErasureDeviceFail}
                  onChange={() => handleToggle("autoErasureDeviceFail")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Perform Samsung Care Warranty */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Auto Perform Samsung Care Warranty
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoPerformSamsungCareWarranty}
                  onChange={() => handleToggle("autoPerformSamsungCareWarranty")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Perform SIM-Lock Check */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] text-[#1E1E1E]">
                Auto Perform SIM-Lock Check
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoPerformSimLockCheck}
                  onChange={() => handleToggle("autoPerformSimLockCheck")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
          </div>
        </div>

        {/* AUTOMATE FUNCTIONS */}
        <div className="border border-[#C9C9C9] bg-opacity-10 text-[#00B09B] max-h-[510px] rounded-md">
          <h2 className="text-lg font-semibold text-center font-Montserrat bg-[#00B09B] bg-opacity-10 text-[#00B09B] rounded-md py-3 w-full">
            Automate Functions
          </h2>
          <div className="bg-white p-4 rounded-md">
            {/* Auto Uninstall App on Test Pass */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Uninstall App on Test Pass
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoUninstallPass}
                  onChange={() => handleToggle("autoUninstallPass")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Uninstall App on Test Fail */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Uninstall App on Test Fail
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoUninstallFail}
                  onChange={() => handleToggle("autoUninstallFail")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Erasure Device(s) Data on Test Pass */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Erasure Device(s) Data on Test Pass
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoErasePass}
                  onChange={() => handleToggle("autoErasePass")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Erasure Device(s) Data on Test Fail */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Erasure Device(s) Data on Test Fail
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoEraseFail}
                  onChange={() => handleToggle("autoEraseFail")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Erasure Device(s) Data on Test Results; Pass or Fail */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Erasure Device(s) Data on Test Results; Pass or Fail
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoEraseResults1}
                  onChange={() => handleToggle("autoEraseResults1")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Erasure Device(s) Data on Test Results; Pass or Fail (duplicate) */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Erasure Device(s) Data on Test Results; Pass or Fail
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoEraseResults2}
                  onChange={() => handleToggle("autoEraseResults2")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Print Label on Test Pass Device(s) */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Print Label on Test Pass Device(s)
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoPrintLabelPass}
                  onChange={() => handleToggle("autoPrintLabelPass")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Print Device(s) Label on Test Results; Pass or Fail */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Print Device(s) Label on Test Results; Pass or Fail
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoPrintLabelResults}
                  onChange={() => handleToggle("autoPrintLabelResults")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Remove Other WiFi Configuration After */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Remove Other WiFi Configuration After
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoRemoveWifi}
                  onChange={() => handleToggle("autoRemoveWifi")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
            {/* Auto Power Off Device(s) on Test Pass */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px] font-[Montserrat] font-medium text-[#888888]">
                Auto Power Off Device(s) on Test Pass
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoPowerOffPass}
                  onChange={() => handleToggle("autoPowerOffPass")}
                />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#00B09B] peer-checked:bg-[#00B09B] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons at the end */}
      <div className="p-4 border-t border-gray-200 flex justify-end gap-4">
        <button className="px-6 py-2 border border-[#00B09B] text-[#00B09B] rounded-md hover:bg-[#00B09B] hover:text-white transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2 bg-[#00B09B] text-white rounded-md hover:bg-[#059D88] transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}
