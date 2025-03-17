import { Upload } from "lucide-react";

export default function ImageUploader() {
  return (
    <label className="w-full h-[124px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-500">
      <Upload size={24} className="text-gray-500 mb-2" />
      <span className="text-sm text-gray-600">Upload logo File</span>
      <input type="file" className="hidden" />
    </label>
  );
}
