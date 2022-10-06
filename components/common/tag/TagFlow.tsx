import styled from "@emotion/styled";
import DefaultTag from "./DefaultTag";
import arrow from "../../../assets/img/arrow.png";
interface TagFlowProps {
  tags: [string, string, string];
}

const TagFlow = ({ tags }: TagFlowProps) => {
  return (
    <TagWrapper>
      <DefaultTag>{tags[0]}</DefaultTag>
      <img src={arrow.src}></img>
      <DefaultTag>{tags[1]}</DefaultTag>
      <img src={arrow.src}></img>
      <DefaultTag>{tags[2]}</DefaultTag>
    </TagWrapper>
  );
};
const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

export default TagFlow;
