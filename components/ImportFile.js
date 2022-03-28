import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { useDropzone } from "react-dropzone";
import OpenHeaders from "./Modals/OpenHeaders";

export function ImportFile() {
  const [openHeaders, setOpenHeaders] = useState(false);
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: ".xlsx, .doc",
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <>
      <div className="border border-blue-300 rounded-xl px-4 py-4 mt-6">
        <p className="text-center text-blue-700 font-semibold text-lg">
          Import file
        </p>
        <p
          onClick={() => setOpenHeaders(true)}
          className="cursor-pointer text-left font-medium text-sm text-blue-700 mt-4"
        >
          Click here to see required headers
        </p>
        <section className="my-2 grid place-items-center">
          <div
            className="border border-dashed rounded-lg px-4 py-8 bg-blue-200 grid place-items-center w-full"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Image
              src="/icons/share.svg"
              alt="share"
              width={"100%"}
              height={"100%"}
            />
            <p className="text-center text-grey-700 mt-1">
              Drag and drop file here, or <br /> click to select files
            </p>
          </div>
          <aside className="border border-blue-200 p-1 rounded-md mt-4">
            <ul className="text-grey-700">{acceptedFileItems}</ul>
          </aside>
          <Button margin="0.5rem">Import</Button>
        </section>
      </div>
      {openHeaders && <OpenHeaders setIsOpen={setOpenHeaders} />}
    </>
  );
}
