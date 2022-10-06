import React, { useState } from "react";
import styled from "@emotion/styled";
import { position, PositionType } from "../model/positon";
import SelectBox from "../components/common/select/SelectBox";
import SelectInput from "../components/common/select/SelectInput";
import getWeekNumber from "../util/function/getWeekNumber";
import DefaultButton from "../components/common/button/DefaultButton";

interface ValueType {
  position: PositionType | "";
  library: string;
  detailApis: string;
}

const Record = () => {
  const [value, setValue] = useState<ValueType>({
    position: "",
    library: "",
    detailApis: "",
  });
  return (
    <Wrapper>
      <div className="title">
        <h1 className="primaryH1">{`${
          new Date().getMonth() + 1
        }월 ${getWeekNumber()}주차`}</h1>
        <h1>개발 기록</h1>
      </div>
      <div className="container">
        <div>
          <h2>분야</h2>
          <SelectBox
            placeholder="분야"
            items={position}
            disable={false}
            onClickValue={(value) =>
              setValue((state) => ({ ...state, position: value }))
            }
          />
        </div>

        <div>
          <h2>프레임워크 / 라이브러리</h2>
          <SelectInput
            placeholder="프레임워크를 입력해주세요."
            disable={!value.position}
            items={position}
            value={value.library}
            onChangeValue={(value) =>
              setValue((state) => ({ ...state, library: value }))
            }
          />
        </div>

        <div>
          <h2>세부 API</h2>
          <SelectInput
            value={value.detailApis}
            placeholder="세부 API를 입력해주세요."
            disable={!value.library}
            items={position}
            onChangeValue={(value) =>
              setValue((state) => ({ ...state, detailApis: value }))
            }
          />
        </div>
        <textarea placeholder="개발 기록을 입력해주세요"></textarea>
      </div>
      <RegisterBox>
        <DefaultButton>기록하기</DefaultButton>
      </RegisterBox>
    </Wrapper>
  );
};

const RegisterBox = styled.div`
  height: 200px;
  margin-top: 40px;
  display: flex;
  justify-content: end;
  > button {
    width: 220px;
    height: 50px;
  }
`;
const Wrapper = styled.div`
  width: 940px;
  margin: 0 auto;
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  > .title {
    width: 290px;
    display: flex;
    justify-content: space-around;
    display: flex;
    > .primaryH1 {
      color: ${({ theme }) => theme.primary};
    }
  }
  > .container {
    position: relative;
    margin-top: 62px;
    flex-wrap: wrap;
    width: 940px;
    display: flex;
    justify-content: space-between;
    > div > h2 {
      margin-bottom: 20px;
    }

    > textarea {
      margin-top: 38px;
      width: 940px;
      border: 1px solid ${({ theme }) => theme.dark_gray};
      height: 393px;
      padding: 18px;
      border-radius: 8px;
      resize: none;
    }
  }
`;
export default Record;
