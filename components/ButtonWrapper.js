import React from "react";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";

const ButtonWrapper = (props) => {
  const {
    btn1,
    btn2,
    bg1,
    bg2,
    color1,
    color2,
    fontWeight1,
    fontWeight2,
    label,
    margin,
    width1,
    width2,
    setOpenPaySection,
  } = props;

  const funcCheck = setOpenPaySection === undefined;

  function handleSinglePaySection() {
    if (funcCheck) return;
    setOpenPaySection(true);
  }

  function handleMultiPaySection() {
    if (funcCheck) return;
    setOpenPaySection(true);
  }

  return (
    <div className={`${margin}`}>
      <Label>{label}</Label>
      <div
        className={`border border-blue-700 p-2 rounded-lg flex items-center gap-2 `}
      >
        <Button
          cursor={funcCheck ? "default" : "pointer"}
          pointerEvents={funcCheck ? "not-allowed" : "default"}
          onClick={handleSinglePaySection}
          fontWeight={fontWeight1}
          color={color1}
          bg={bg1}
          width={width1}
        >
          {btn1}
        </Button>
        <Button
          cursor={funcCheck ? "default" : "pointer"}
          pointerEvents={funcCheck ? "not-allowed" : "default"}
          onClick={handleMultiPaySection}
          fontWeight={fontWeight2}
          color={color2}
          bg={bg2}
          width={width2}
        >
          {btn2}
        </Button>
      </div>
    </div>
  );
};

export default ButtonWrapper;
