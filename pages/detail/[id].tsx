import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { QueryClient, useQuery } from "react-query";
import DefaultButton from "../../components/common/button/DefaultButton";
import DefaultTag from "../../components/common/tag/DefaultTag";
import { getAllDetail } from "../../util/api/record";
import { apiPath } from "../../util/apiPath";

const Detail = () => {
  //   const { query } = useRouter();
  //   const path = query.id ? apiPath.record.getDetail(query.id as string) : "";
  //   const { data: detailData } = useQuery(path, () =>
  //     getAllDetail(query.id as string)
  //   );

  const route = useRouter();

  //   console.log(detailData);
  return (
    <Container>
      <Title>
        김의찬님의 <i>10월 1주차</i> 개발일지
      </Title>
      <TagWrapper>
        <div>
          분야 <DefaultTag size="lg">FRONTEND</DefaultTag>
        </div>
        <div>
          프레임워크/라이브러리 <DefaultTag size="lg">REACT</DefaultTag>
        </div>
        <div>
          세부API <DefaultTag size="lg">USESTATE</DefaultTag>
        </div>
      </TagWrapper>
      <TextBox>useState는 비동기적으로 작동합니다.</TextBox>
      <ButtonWrapper>
        <DefaultButton onClick={() => route.push("/record_detail")}>
          뒤로가기
        </DefaultButton>
      </ButtonWrapper>
    </Container>
  );
};

// export const getServerSideProps: GetServerSideProps<
//   {},
//   { id: string }
// > = async ({ params }) => {
//   const queryClient = new QueryClient();
//   const path = params?.id ? apiPath.record.getDetail(params.id) : "";
//   params?.id &&
//     (await queryClient.prefetchQuery(path, () => getAllDetail(params.id)));
//   return {
//     props: {
//       dehydratedState: queryClient,
//     },
//   };
// };

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
