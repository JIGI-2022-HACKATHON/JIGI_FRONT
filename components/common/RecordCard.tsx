import styled from "@emotion/styled";
import TagFlow from "./tag/TagFlow";

interface RecordCardProps {
  date: string;
  text: string;
  userInfo?: string;
  tags: [string, string, string];
  onClick?: () => void;
}

const RecordCard = ({
  tags,
  date,
  text,
  userInfo,
  onClick,
}: RecordCardProps) => {
  return (
    <CardWrapper onClick={() => onClick?.()} isOnClick={!!onClick}>
      <TextHeader>
        <p>{date}</p>
        {userInfo && <p>{userInfo}</p>}
      </TextHeader>
      <TagFlow tags={tags}></TagFlow>
      <TextBottom>{text}</TextBottom>
    </CardWrapper>
  );
};

const CardWrapper = styled.div<{ isOnClick: boolean }>`
  ${({ isOnClick }) => isOnClick && "cursor:pointer;"}
  width: 460px;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.25);
`;

const TextHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  > p {
    font-size: 14px;
    font-weight: 400;
  }
`;

const TextBottom = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export default RecordCard;
