import React from "react";
import styled from "@emotion/styled";

interface SelectListProps<T> {
  width?: string;
  onClickValue?: (value: T) => void;
  items: ReadonlyArray<T>;
  setIsOpen: () => void;
}

const SelectList = <T extends string>({
  width = "300px",
  items,
  onClickValue,
  setIsOpen,
}: SelectListProps<T>) => {
  return (
    <Wrapper width={width}>
      {items.map((item, idx) => (
        <div
          className="itemBox"
          key={idx}
          onClick={() => {
            setIsOpen();
            onClickValue?.(item);
          }}
        >
          {item}
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: string }>`
  position: absolute;
  width: ${(props) => props.width};
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 8px;
  max-height: 200px;
  overflow: auto;
  z-index: 1;
  > .itemBox {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 16px;
    height: 32px;
    background-color: ${({ theme }) => theme.white};
  }
  > * + * {
    border-top: 1px solid ${({ theme }) => theme.black};
  }
`;

export default SelectList;
