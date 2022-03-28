import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { StyleModal } from "./StyledComponents";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Modal({ isOpen, setIsOpen, title, children }) {
  // const[Open, setOpen] = useState(false)
  //   if(!isOpen) return
  return (
    <div className="modal-container z-50 bg-blue-200 fixed inset-0 w-[100%] min-h-full h-[100vh] grid place-content-center px-6">
      {/* <div className="modal-bg"></div> */}
      <div className="modal-wrapper overflow-auto bg-white rounded-lg">
        <div className="modal-title fixed w-[580px] mx-auto right-1/2 transform translate-x-1/2 grid place-content-center">
          <span className="text-blue-700 font-semibold pt-4">
            {title || ""}
          </span>
          <span
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute right-0 top-1/3 font-extrabold"
          >
            <IoIosCloseCircleOutline className="text-red font-extrabold text-2xl"/>
          </span>
        </div>
        <div className="card-container bg-white px-4 rounded-lg pt-14 min-h-[250px] max-h-[500px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
