import { useState } from "react";
import Modal from "../Modal";

const PaymentDetails = (props) => {
  const { isOpen, setIsOpen } = props;
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Split payment details">
      <div className="flex">
        <div>Modal</div>
        <div>Modal</div>
        <div>Modal</div>
        <div>Modal</div>
        <div>Modal</div>
        <div>Modal</div>
      </div>
    </Modal>
  );
};

export default PaymentDetails;
