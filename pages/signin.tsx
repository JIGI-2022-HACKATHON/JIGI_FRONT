import React, { useState } from "react";
import SelectList from "../components/common/select/SelectList";
import { position, PositionType } from "../model/positon";
import SelectBox from "../components/common/select/SelectBox";
const signIn = () => {
  const [value, setValue] = useState<PositionType | "">("");
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <SelectBox
        placeholder="분야"
        disable={true}
        value={value}
        setIsOpen={() => {
          setIsOpen(!isOpen);
        }}
        items={position}
      />
    </>
  );
};

export default signIn;
