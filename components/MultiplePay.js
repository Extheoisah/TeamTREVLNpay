import { useState } from "react";
import { Button } from "../ui/Button";

import AddMultiple from "./AddMultiple";
import { ImportFile } from "./ImportFile";

const MultiplePay = (props) => {
  const [openImports, setOpenImport] = useState(false);
  const [openAddMultiple, setOpenAddMultiple] = useState(false);

  return (
    <>
      <div className="relative border border-blue-700 mt-12 rounded-lg px-2 py-8">
        <label className="text-blue-700 absolute -top-3 bg-white px-1">
          Recipient
        </label>
        <div className="flex items-center justify-center gap-x-5">
          <Button
            onClick={() => {setOpenAddMultiple(true), setOpenImport(false)}}
            padding="0.75rem 2rem"
          >
            Add recipient
          </Button>
          <Button onClick={() => {setOpenAddMultiple(false), setOpenImport(true)}} padding="0.75rem 2rem">
            Import CSV
          </Button>
        </div>
      </div>
      {openImports && <ImportFile />}
      {openAddMultiple && <AddMultiple />}
    </>
  );
};

export default MultiplePay;
