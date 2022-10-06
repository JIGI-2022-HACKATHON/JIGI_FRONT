import styled from "@emotion/styled";
import DefaultTag from "../common/tag/DefaultTag";
import React from "react";
interface CardProps {
  idx: number;
  title: string;
  tags: string[];
}
const Card = ({ idx, tags, title }: CardProps) => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <p>{idx}</p>
          <h1>{title}</h1>
        </header>
        <div className="tagBox">
          {tags.map((tag, idx) => {
            const colorNumber = [
              "blue100",
              "blue300",
              "blue500",
              "blue700",
              "blue900",
            ] as const;
            const color = colorNumber[idx];
            return (
              <DefaultTag key={idx} size="lg" color={color}>
                {tag}
              </DefaultTag>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
const Wrapper = styled.div`
  width: 300px;
  padding: 24px 24px;
  box-shadow: 0px 0px 10px 5px rgba(112, 112, 112, 0.25);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  > .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 129px;
    height: 319px;
    > header {
      > p {
        text-align: center;
        font-weight: 600;
        font-size: 32px;
        color: ${({ theme }) => theme.primary};
        margin-bottom: 4px;
      }
      > h1 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 20px;
      }
    }
    > .tagBox {
      width: 129px;
      height: 217px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 8px;
    }
  }
`;
