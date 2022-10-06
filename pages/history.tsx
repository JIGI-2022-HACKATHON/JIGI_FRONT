import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Img from "../assets/img/history.png";
import Image from "next/image";
import { position, PositionType } from "../model/positon";
import SelectBox from "../components/common/select/SelectBox";
import { grade, GradeType } from "../model/grade";
import Card from "../components/main/Card";

const History = () => {
  const array = [
    { title: "REACT", tags: ["useState", "useEffect", "useRef", "portal"] },
    {
      title: "NEXT",
      tags: ["getServerSideProps", "dehydrate", "useQuery", "getStaticPaths"],
    },
    { title: "TYPESCRIPT", tags: ["interface", "enum", "Generic", "extends"] },
  ];
  const array2 = [
    {
      title: "SPRING BOOT",
      tags: ["DI", "AOC", "portal", ""],
    },
    {
      title: "NEST.JS",
      tags: ["getServerSideProps", "dehydrate", "useQuery", "getStaticPaths"],
    },
    { title: "DJANGO", tags: ["interface", "enum", "Generic", "extends"] },
  ];
  const [viewArray, setViewArray] = useState([]);
  const [value, setValue] = useState<PositionType>("FRONTEND");
  useEffect(() => {
    if (value == "FRONTEND") setViewArray(array);
    else if (value == "BACKEND") setViewArray(array2);
  }, [value]);
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
          <main>
            {viewArray?.map((record, idx) => (
              <Card
                idx={idx + 1}
                title={record.title}
                tags={record.tags}
                key={idx}
              />
            ))}
          </main>
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
    padding-bottom: 200px;
    > .history_container {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding-top: 119px;
      width: 939px;
      height: 435px;
      > .fillterBox {
        position: absolute;
        right: 0px;
        width: 406px;
        display: flex;
        justify-content: space-between;
      }
    }
    main {
      position: absolute;
      margin-top: 80px;
      display: flex;
      gap: 20px;
    }
  }
`;
export default History;
