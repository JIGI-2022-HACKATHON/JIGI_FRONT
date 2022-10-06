import React, { useState } from "react";
import styled from "@emotion/styled";
import DefaultTag from "../components/common/tag/DefaultTag";
import RecordCard from "../components/common/RecordCard";
import SelectBox from "../components/common/select/SelectBox";
import { GetServerSideProps } from "next";
import { apiPath } from "../util/apiPath";
import { grade, GradeType } from "../model/grade";
import { useQuery } from "react-query";
import { getMyPage } from "../util/api/user";
const Mypage = () => {
  const [gradeValue, setGradeValue] = useState<GradeType>("FIRST");
  const myInfoPath = apiPath.user.mypage(gradeValue);
  const { data: myInformationData } = useQuery(myInfoPath, () =>
    getMyPage(gradeValue)
  );

  console.log(myInformationData);
  return (
    <Container>
      <TitleName>김의찬</TitleName>
      <OtherInfo>
        <div>
          대덕 소프트웨어 마이스터고
          <DefaultTag>2학년</DefaultTag>
        </div>
        <SelectBox
          items={grade}
          onClickValue={setGradeValue}
          placeholder="학년을 선택해주세요"
          width="220px"
        ></SelectBox>
      </OtherInfo>
      <RecordCardWrapper>
        <RecordCard
          date="10월 2주차"
          tags={["FRONTEND", "NEXTJS", "GETSERVERSIDEPROPS"]}
          text="getServerSideProps 는 SSR 을 위한 함수입니다."
          onClick={() => {}}
        ></RecordCard>
        <RecordCard
          date="9월 2주차"
          tags={["DEVOPS", "CI/CD", "GITHUB_ACTION"]}
          text="github action 으로 ci/cd 를 편하게 할 수 있습니다."
        ></RecordCard>
        <RecordCard
          date="7월 2주차"
          tags={["FRONTEND", "REACT", "POTAL"]}
          text="포탈은 root 가 아닌 다른 테그를 만들어줍니다."
        ></RecordCard>
        <RecordCard
          date="5월 4주차"
          tags={["FRONTEND", "REACT", "AXIOS"]}
          text="interceptor 을 사용하여 access 및 refrash를 할 수 있습니다."
        ></RecordCard>
        <RecordCard
          date="5월 1주차"
          tags={["FRONTEND", "BABEL", "TREESHACKING"]}
          text="BABEL 5 에서는 tree shaking 이 별도의 설정없이 자동으로 이루어집니다."
        ></RecordCard>
        <RecordCard
          date="4월 4주차"
          tags={["FRONTEND", "REACT", "ESBUILD"]}
          text="ESBUILD 는 BABEL 보다 빌드속도가 100배 빠릅니다"
        ></RecordCard>
      </RecordCardWrapper>
    </Container>
  );
};

// export const getServerSideProps:GetServerSideProps = ()=>{
//   const path = apiPath.user.mypage
//   return ({

//   })

// }

const Container = styled.div`
  width: 940px;
  margin: 0 auto;
`;
const TitleName = styled.div`
  font-size: 48px;
  font-weight: 600;
  margin-top: 48px;
`;
const OtherInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > div {
    font-size: 20px;
    align-items: center;
    font-weight: 400;
    display: flex;
    gap: 8px;
  }
`;

const RecordCardWrapper = styled.div`
  margin-top: 48px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default Mypage;
