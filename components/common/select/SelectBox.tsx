import React, { useState } from "react";
import styled from "@emotion/styled";
import SelectList from "./SelectList";
import { SelectListProps } from "../../../interface/common/select";
import { position, PositionType } from "../../../model/positon";

import Arrow from "../../../assets/img/Vector.png";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";

interface SelectProps<T> extends SelectListProps<T> {
  placeholder: string;
  disable: boolean;
  value?: T;
  mRef?: React.Ref<HTMLInputElement> | null;
}
const SelectBox = <T extends string>({
  placeholder,
  width = "300px",
  disable,
  items,
  value,
  mRef,
  onClickValue,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(
    value || placeholder
  );

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <ItemBox
        width={width}
        disable={disable}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{selectedValue}</p>
        <Image src={Arrow} alt="img" />
      </ItemBox>
      {items.length > 0 && isOpen && (
        <SelectList
          width={width}
          setIsOpen={() => setIsOpen((state) => !state)}
          items={items}
          onClickValue={(value) => {
            onClickValue?.(value);
            setSelectedValue(value);
          }}
        />
      )}
    </OutsideClickHandler>
  );
};

const ItemBox = styled.div<{ width: string; disable: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  padding: 16px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.dark_gray};
  border-radius: 8px;
  margin-bottom: 4px;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  ${({ disable }) => (disable ? "pointer-events: none" : "")};
  color: ${({ disable, theme }) => (disable ? theme.light_gray : theme.black)};
  > h1 {
    font-size: 16px;
  }
`;

export default SelectBox;
