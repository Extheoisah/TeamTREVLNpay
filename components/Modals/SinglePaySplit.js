import { useState } from "react";
import Modal from "../Modal";
import { Label } from "../../ui/Label";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";

const SinglePaySplit = (props) => {
  const { isOpen, setIsOpen } = props;
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Split Payment Details">
      <div className="flex flex-col">
        <div className="flex flex-col mb-6">
          <Label>Username</Label>
          <Input placeholder="Enter recipient username" />
        </div>
        <label className="text-blue-700 text-xs font-medium">Ratio</label>
        <div className="border relative rounded-lg border-blue-700 px-1 py-1">
          <div className="flex items-center justify-between gap-x-4">
            <div className="relative">
              <label className="text-blue-700 font-semibold absolute bottom-0 border-r py-[0.5rem] px-2">
                BTC
              </label>
              <Input
                placeholder="50%"
                padding="0.5rem 0.5rem 0.5rem 5rem"
                width="150px"
              />
            </div>
            <div className="relative">
              <label className="text-blue-700 font-semibold absolute bottom-0 border-r py-[0.5rem] px-2 ">
                USD
              </label>
              <Input
                placeholder="50%"
                padding="0.5rem 0.5rem 0.5rem 5rem"
                width="150px"
              />
            </div>
          </div>
        </div>
        <div className="grid place-items-center mt-8 mb-4">
          <Button padding="0.5rem 3rem">Continue</Button>
        </div>
      </div>
    </Modal>
  );
};

export default SinglePaySplit;
