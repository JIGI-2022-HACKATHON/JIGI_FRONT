import styled from "@emotion/styled";
import DefaultButton from "../../components/common/button/DefaultButton";
import DefaultTag from "../../components/common/tag/DefaultTag";

const Detail = () => {
  return (
    <Container>
      <Title>
        안은결님의 <i>10월 2주차</i> 개발일지
      </Title>
      <TagWrapper>
        <div>
          분야 <DefaultTag size="lg">FRONTEND</DefaultTag>
        </div>
        <div>
          프레임워크/라이브러리 <DefaultTag size="lg">FRONTEND</DefaultTag>
        </div>
        <div>
          세부API <DefaultTag size="lg">FRONTEND</DefaultTag>
        </div>
      </TagWrapper>
      <TextBox></TextBox>
      <ButtonWrapper>
        <DefaultButton>뒤로가기</DefaultButton>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 940px;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding: 68px 0 42px 0;
  display: block;
  font-size: 36px;
  font-weight: 500;
  > i {
    font-style: none;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  > div {
    min-width: 300px;
    display: flex;
    font-size: 24px;
    font-weight: 600;
    flex-direction: column;
    gap: 20px;
  }
`;
const TextBox = styled.div`
  margin-top: 48px;
  padding: 16px 18px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 340px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.dark_gray};
`;

const ButtonWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: end;
`;

export default Detail;
