import type { NextPage } from "next";
import styled from "@emotion/styled";
import JIGI from "../assets/img/BigLogo.png";
import Head from "next/head";
import Image from "next/image";
import DefaultButton from "../components/common/button/DefaultButton";
import MainIMG from "../assets/img/main.png";
import SelectBox from "../components/common/select/SelectBox";
import { position } from "../model/positon";
import { useState } from "react";
import DefaultTag from "../components/common/tag/DefaultTag";
import Card from "../components/main/Card";
const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const item = [];

  return (
    <Wrapper>
      <div className="top">
        <div className="introduce_container">
          <p>자신의 개발을 기록하고, 자신의 성장을 확인해보세요!</p>
          <Image src={JIGI} alt="img" />
          <div className="buttonBox">
            <DefaultButton color="dark_gray">
              자신의 역사 확인하기
            </DefaultButton>
            <DefaultButton color="primary">자신의 기록 남기기</DefaultButton>
          </div>
        </div>
        <Image src={MainIMG} alt="img" width={300} layout="fixed" />
      </div>
      <div className="bottom">
        <div className="keyword_container">
          <div className="head">
            <h1>이번 주 인기 키워드</h1>
            <SelectBox
              disable={false}
              width={"122px"}
              items={position}
              placeholder={"FRONT_END"}
            />
          </div>
          <main>{/* <Card /> */}</main>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 100px;
  > .top {
    position: relative;
    margin: 0 auto;
    margin-top: 54px;
    width: 940px;
    height: 256px;
    display: flex;
    > .introduce_container {
      margin-top: 80px;
      width: 944px;
      margin: 0 auto;
      height: 161px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      > .buttonBox {
        width: 322px;
        display: flex;
        justify-content: space-between;
      }
      > p {
        color: ${({ theme }) => theme.light_gray};
      }
    }
  }
  > .bottom {
    background-color: ${({ theme }) => theme.background_gray};
    padding-top: 68px;
    > .keyword_container {
      margin: 0 auto;
      width: 940px;
      height: 464px;
      > .head {
        width: 362px;
        display: flex;
        justify-content: space-between;
        > h1 {
          font-size: 28px;
        }
      }
    }
  }
`;
export default Home;
