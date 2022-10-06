import styled from "@emotion/styled";
import DefaultTag from "../common/tag/DefaultTag";
import React from "react";
interface CardProps {
  item: { idx: number; title: string; tags: string[] };
}
const Card = ({ item }: CardProps) => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <p>{item.idx}</p>
          <h1>{item.title}</h1>
        </header>
        <div className="tagBox">
          {item.tags.map((tag, idx) => (
            <DefaultTag key={idx} size="lg">
              {tag}
            </DefaultTag>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
const Wrapper = styled.div`
  width: 300px;
  height: 383px;
  box-shadow: 0px 0px 10px 5px rgba(112, 112, 112, 0.25);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 129px;
    height: 319px;
    > header {
      > p {
        text-align: center;
        font-size: 32px;
        color: ${({ theme }) => theme.primary};
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
