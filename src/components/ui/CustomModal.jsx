import React, { useRef } from "react";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title?: string;
//   children: React.ReactNode;
// }

const Modal = ({ isOpen, onClose, title, children, width = "max-w-md" }) => {
  const modalRef = useRef(null);
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
      onClick={handleBackdropClick} // Detect clicks on backdrop
    >
      {/* Modal Content */}
      <div
        ref={modalRef} // Attach ref to modal content
        className={`bg-white p-6 rounded-2xl shadow-lg w-full ${width} transform transition-all scale-95 animate-fadeIn`}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl cursor-pointer"
          >
            <img src="/icons/x.svg" alt="" className="w-7 h-7" />
          </button>
        </div>

        {/* Body */}
        <div className="mt-4">{children}</div>

        {/* Footer (Optional) */}
        {/* <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
