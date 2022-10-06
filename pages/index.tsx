import type { GetServerSideProps, NextPage } from "next";
import styled from "@emotion/styled";
import JIGI from "../assets/img/BigLogo.png";
import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "react-query";
import DefaultButton from "../components/common/button/DefaultButton";
import { useState, useEffect } from "react";
import MainIMG from "../assets/img/main.png";
import SelectBox from "../components/common/select/SelectBox";
import { getCurrentWeek } from "../util/api/record";
import { apiPath } from "../util/apiPath";
import { position, PositionType } from "../model/positon";
import Card from "../components/main/Card";
import { useRouter } from "next/router";
import { grade, GradeType } from "../model/grade";

const Home: NextPage = () => {
  const [value, setValue] = useState<PositionType>("FRONTEND");
  const [gradeValue, setGradeVallue] = useState<GradeType>("FIRST");
  const path = apiPath.record.getCurrentWeek("FIRST", value);
  const router = useRouter();
  const { data: recordList } = useQuery(path, () =>
    getCurrentWeek("FIRST", value)
  );
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
  useEffect(() => {
    if (value == "FRONTEND") setViewArray(array);
    else if (value == "BACKEND") setViewArray(array2);
  }, [value]);
  return (
    <Wrapper>
      <div className="top">
        <div className="introduce_container">
          <p>자신의 개발을 기록하고, 자신의 성장을 확인해보세요!</p>
          <Image src={JIGI} alt="img" />
          <div className="buttonBox">
            <DefaultButton
              color="dark_gray"
              onClick={() => router.push(true ? "/my_page" : "/signin")}
            >
              자신의 역사 확인하기
            </DefaultButton>
            <DefaultButton color="primary">자신의 기록 남기기</DefaultButton>
          </div>
        </div>
        <img
          src={MainIMG.src}
          alt="img"
          style={{ width: "300px", height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="bottom">
        <div className="keyword_container">
          <div className="head">
            <h1>이번 주 인기 키워드</h1>
            <SelectBox
              width={"122px"}
              items={position}
              value={value}
              onClickValue={setValue}
              placeholder={"FRONT_END"}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const queryKey = apiPath.record.getCurrentWeek("FIRST", "FRONTEND");
  const cookie = context.req ? context.req.headers.cookie : "";
  console.log("cookie");
  await queryClient.prefetchQuery(queryKey, () =>
    getCurrentWeek("FIRST", "FRONTEND")
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      // cookies:
    },
  };
};

const Wrapper = styled.div`
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
    padding-bottom: 100px;
    > .keyword_container {
      margin: 0 auto;
      width: 940px;
      height: 464px;
      > .head {
        display: flex;
        gap: 14px;

        > h1 {
          font-size: 28px;
        }
      }
      > main {
        margin-top: 40px;
        display: flex;
        gap: 20px;
      }
    }
  }
`;
export default Home;
