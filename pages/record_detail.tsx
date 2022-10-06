import styled from "@emotion/styled";
import { useRouter } from "next/router";
import RecordCard from "../components/common/RecordCard";
import TagFlow from "../components/common/tag/TagFlow";

const RecordDetail = () => {
  const route = useRouter();
  return (
    <Container>
      <h1>개발일지 Detail</h1>
      <TagFlow tags={["FRONTEND", "REACT", "USESTATE"]}></TagFlow>
      <CardWrapper>
        <RecordCard
          date="10월 1주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="useState는 비동기적으로 작동합니다."
          userInfo="대덕 소프트웨어 마이스터고 김의찬"
          onClick={() => {
            route.push("/detail/1");
          }}
        ></RecordCard>
        <RecordCard
          date="10월 2주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="useState 의 state 가 바뀌게 되면 리렌더링이 일어납니다."
          userInfo="대구 소프트웨어 마이스터고 정우재"
          onClick={() => {}}
        ></RecordCard>
        <RecordCard
          date="10월 3주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="useState 는 불변성을 지키기 위해 사용합니다."
          userInfo="대덕 소프트웨어 마이스터고 안은결"
          onClick={() => {}}
        ></RecordCard>
        <RecordCard
          date="10월 2주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="useState"
          userInfo="부산 소프트웨어 마이스터고 박창은"
          onClick={() => {}}
        ></RecordCard>
        <RecordCard
          date="10월 4주차"
          tags={["FRONTEND", "REACT", "USESTATE"]}
          text="ㅁ너라ㅣㅁ너"
          userInfo="광주 소프트웨어 마이스터고 조재영"
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
