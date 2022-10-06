import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface DefaultButtonProps {
  onClick?: () => void;
  color?: "dark_gray" | "primary";
}

const DefaultButton = ({
  onClick,
  color = "primary",
  children,
}: PropsWithChildren<DefaultButtonProps>) => {
  return (
    <DefualtButtonContainer onClick={onClick} color={color}>
      {children}
    </DefualtButtonContainer>
  );
};

const DefualtButtonContainer = styled.div<{
  color: Required<DefaultButtonProps>["color"];
}>`
  width: 165px;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ theme, color }) => theme[color]};
  border: 2px solid ${({ theme, color }) => theme[color]};
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    filter: opacity(0.8);
  }
`;

export default DefaultButton;
