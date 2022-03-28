import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import { SelectInput } from "./StyledComponents";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";

const CustomSelect = ({ placeholder, label, value, onChange }) => {
  return (
    <SelectInput>
      <div className="flex flex-col">
        <Label>{label}</Label>
        <Input placeholder={placeholder} className="w-full" padding="1rem 86px" value={value} onChange={onChange} />
      </div>
      <div className="select">
        <MySelect />
      </div>
    </SelectInput>
  );
};

export const MySelect = () => {
  const [selectedItem, setSelectedItem] = useState("BTC");

  return (
    <div className=" w-[76px] h-[58px] px-2 py-2 border-r border-blue-300 flex items-center">
      <Listbox value={selectedItem} onChange={(e) => {
        setSelectedItem(e);
      }}>
        <div className="relative mt-1">
          <Listbox.Button className="flex items-center justify-center gap-x-1 pl-2">
            <span className="font-semibold text-blue-700">{selectedItem}</span>
            <span className="text-blue-700">
              <IoChevronDown />
            </span>
          </Listbox.Button>
          <div className="pl-0 absolute pt-2 top-[2rem] -left-[0.3rem] w-[72px] flex flex-col items-center">
            <Listbox.Options>
              <div className="border w-[76px] rounded-md flex flex-col gap-y-1 py-2 items-center border-blue-300">
                <Listbox.Option value="BTC">
                  <span className="text-grey-700 font-semibold">BTC</span>
                </Listbox.Option>
                <Listbox.Option value="USD">
                  <span className="text-grey-700 font-semibold">USD</span>
                </Listbox.Option>
              </div>
            </Listbox.Options>
          </div>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomSelect;
