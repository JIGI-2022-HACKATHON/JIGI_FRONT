import React from "react";
import styled from "@emotion/styled";
import SelectList from "./SelectList";
import { SelectListProps } from "../../../interface/common/select";
import { position, PositionType } from "../../../model/positon";
import DefaultInput from "../input/DefaultInput";
import { useState } from "react";
import { useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import searchList from "../../../util/function/searchList";
interface SelectProps<T> extends SelectListProps<T> {
  placeholder: string;
  disable: boolean;
  value: string;
  onChangeValue?: (value: string) => void;
}

const SelectInput = <T extends string>({
  placeholder,
  disable,
  items,
  value,
  width = "300px",
  onChangeValue,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsOpen(!disable);
    disable && onChangeValue?.("");
  }, [disable]);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <DefaultInput
        value={value}
        onChange={onChangeValue}
        width={width}
        disable={disable}
        placeholder={placeholder}
        onFocus={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <SelectList
          items={searchList(value, items)}
          setIsOpen={() => {
            setIsOpen(!isOpen);
          }}
          onClickValue={(value) => onChangeValue?.(value)}
        />
      )}
    </OutsideClickHandler>
  );
};

const Wrapper = styled.div``;

export default SelectInput;
