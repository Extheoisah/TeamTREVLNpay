import React from "react";
import { Label } from "../ui/Label";
import { MdLibraryAdd } from "react-icons/md";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

const AddMultiple = () => {
  return (
    <form className="grid place-items-center">
      <div className="border border-blue-700 rounded-lg px-3 pb-6 mt-7 md:min-w-[350px] relative">
        <div className="flex flex-col my-4">
          <Label>Lightning address</Label>
          <Input placeholder="Enter lightning address" />
        </div>
        <div className="flex flex-col my-4">
          <Label>Amount</Label>
          <Input placeholder="Enter amount" />
        </div>
        <div className="flex flex-col my-4">
          <Label>Ratio</Label>
          <Input placeholder="0.5" />
        </div>
        <div className="flex items-center my-4 gap-x-1 md:gap-x-2 absolute -bottom-7 rounded-md bg-blue-700 px-1 right-3 cursor-pointer">
          <MdLibraryAdd className="text-white" />
          <Label fontSize="0.875rem" color="#fff">
            Add another recipient
          </Label>
        </div>
      </div>
      <Button margin="3rem 0" padding="0.75rem 6rem">
        Send
      </Button>
    </form>
  );
};

export default AddMultiple;
