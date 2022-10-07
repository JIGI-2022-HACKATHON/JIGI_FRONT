import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface DefaultTagProps {
  size?: "sm" | "lg";
  color?: "primary" | "blue100" | "blue300" | "blue500" | "blue700" | "blue900";
  onClick?: () => void;
}

const DefaultTag = ({
  size = "sm",
  color = "primary",
  children,
  onClick,
}: PropsWithChildren<DefaultTagProps>) => {
  return (
    <DefaultTagBox
      size={size}
      isClickAble={!!onClick}
      color={color}
      onClick={onClick}
    >
      {children}
    </DefaultTagBox>
  );
};

const TagSizeStyle: Record<
  Required<DefaultTagProps>["size"],
  SerializedStyles
> = {
  sm: css`
    padding: 4px 10px;
    font-size: 12px;
  `,
  lg: css`
    padding: 4px 16px;
    font-size: 18px;
  `,
};

const DefaultTagBox = styled.div<{
  size: Required<DefaultTagProps>["size"];
  color: Required<DefaultTagProps>["color"];
  isClickAble: boolean;
}>`
  width: fit-content;
  font-weight: 500;
  border-radius: 24px;
  ${({ size }) => TagSizeStyle[size]}
  background-color: ${({ theme, color }) => theme[color]};
  color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme, color }) => theme[color]};
  transition: all 0.5s;
  :hover {
    cursor: ${({ isClickAble }) => (isClickAble ? "pointer" : "default")};
    background-color: ${({ isClickAble, theme }) => isClickAble && theme.white};
    color: ${({ isClickAble, theme, color }) => isClickAble && theme[color]};
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default DefaultTag;
