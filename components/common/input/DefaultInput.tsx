import React from "react";
import styled from "@emotion/styled";
import { InputProps } from "../../../interface/common/input";

const DefaultInput = ({
  value,
  disable,
  width,
  onChange,
  onFocus,
  placeholder,
}: InputProps) => {
  return (
    <InputBox
      disabled={disable}
      placeholder={placeholder}
      disable={disable}
      width={width}
      value={value}
      onFocus={onFocus}
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
    />
  );
};

const InputBox = styled.input<{ width: string; disable: boolean }>`
  position: relative;
  background-color: ${({ theme, disable }) =>
    disable ? theme.light_gray : theme.white};
  cursor: ${({ disable }) => (!disable ? "text" : "not-allowed")};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  padding: 16px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.dark_gray};
  border-radius: 8px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  color: ${({ disable, theme }) => (disable ? theme.white : theme.black)};
  font-size: 14px;
  ::placeholder {
    font-size: 14px;
    color: ${({ disable, theme }) => (disable ? theme.white : theme.black)};
  }
`;

export default DefaultInput;
