import { useState } from "react";
import Modal from "../Modal";

const SinglePaySplit = (props) => {
  const { isOpen, setIsOpen } = props;
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Payments">
      <div className="flex">
        <div>Modal</div>
        <div>Modal</div>
      </div>
    </Modal>
  );
};

export default SinglePaySplit;
