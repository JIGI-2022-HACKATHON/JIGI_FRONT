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
          <DefaultTag>1학년</DefaultTag>
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
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="ㅁ너라ㅣㅁ너"
          userInfo="대덕 소프트웨어 마이스터고 안은결"
          onClick={() => {}}
        ></RecordCard>
        <RecordCard
          date="10월 2주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="ㅁ너라ㅣㅁ너"
          userInfo="대덕 소프트웨어 마이스터고 안은결"
        ></RecordCard>
        <RecordCard
          date="10월 2주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="ㅁ너라ㅣㅁ너"
          userInfo="대덕 소프트웨어 마이스터고 안은결"
        ></RecordCard>
        <RecordCard
          date="10월 2주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="ㅁ너라ㅣㅁ너"
          userInfo="대덕 소프트웨어 마이스터고 안은결"
        ></RecordCard>
        <RecordCard
          date="10월 2주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="ㅁ너라ㅣㅁ너"
          userInfo="대덕 소프트웨어 마이스터고 안은결"
        ></RecordCard>
        <RecordCard
          date="10월 2주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="ㅁ너라ㅣㅁ너"
          userInfo="대덕 소프트웨어 마이스터고 안은결"
        ></RecordCard>
        <RecordCard
          date="10월 2주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="ㅁ너라ㅣㅁ너"
          userInfo="대덕 소프트웨어 마이스터고 안은결"
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
