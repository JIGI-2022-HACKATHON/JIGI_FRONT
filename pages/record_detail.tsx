import styled from "@emotion/styled";
import RecordCard from "../components/common/RecordCard";
import TagFlow from "../components/common/tag/TagFlow";

const RecordDetail = () => {
  return (
    <Container>
      <h1>개발일지 Detail</h1>
      <TagFlow tags={["FRONTEND", "REACT", "USESTATE"]}></TagFlow>
      <CardWrapper>
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
          onClick={() => {}}
        ></RecordCard>
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
          onClick={() => {}}
        ></RecordCard>
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
          onClick={() => {}}
        ></RecordCard>
      </CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 940px;
  margin: 0 auto;
  > h1 {
    font-size: 40px;
    font-weight: 600;
    margin: 48px 0 16px 0;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
`;

export default RecordDetail;
