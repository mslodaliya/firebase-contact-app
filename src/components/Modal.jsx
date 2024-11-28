import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div
          
          className="grid place-items-center backdrop-blur absolute top-0 z-40 h-screen w-screen"
        >
          <div className="min-h-[200px] max-w-[80%] m-auto relative z-50 bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
