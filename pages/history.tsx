import React from "react";
import styled from "@emotion/styled";
import Img from "../assets/img/history.png";
import Image from "next/image";
import { position } from "../model/positon";
import SelectBox from "../components/common/select/SelectBox";

const History = () => {
  return (
    <Wrapper>
      <div className="top">
        <div className="introduce_container">
          <div>
            <h1>History</h1>
            <p>지금까지의 인기 키워드를 확인해보세요.</p>
          </div>
          <Image src={Img} alt="img" />
        </div>
      </div>
      <div className="bottom">
        <div className="history_container">
          <div className="fillterBox">
            <SelectBox
              disable={false}
              items={["2022년", "2021년", "2020년"]}
              width={"122px"}
              placeholder="2022년"
            />
            <SelectBox
              disable={false}
              items={[]}
              width={"122px"}
              placeholder="10월"
            />
            <SelectBox
              disable={false}
              items={position}
              width={"122px"}
              placeholder="FRONTEND"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > .top {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    > .introduce_container {
      display: flex;
      display: center;
      justify-content: space-between;
      width: 938px;
      height: 214px;
      > div {
        display: flex;
        justify-content: center;
        gap: 24px;
        flex-direction: column;
        > p {
          color: ${({ theme }) => theme.light_gray};
        }
      }
    }
  }
  > .bottom {
    background-color: ${({ theme }) => theme.background_gray};
    > .history_container {
      display: flex;
      justify-content: end;
      margin: 0 auto;
      padding-top: 119px;
      width: 939px;
      height: 435px;
      > .fillterBox {
        width: 406px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
export default History;
