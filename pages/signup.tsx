import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import DefaultInput from "../components/common/input/DefaultInput";
import SelectBox from "../components/common/select/SelectBox";
import { position } from "../model/positon";
import DefaultButton from "../components/common/button/DefaultButton";
import { instance } from "../util/api/instance";
import { userAgent } from "next/server";
import { AxiosError } from "axios";
const Signup = () => {
  const router = useRouter();
  const [info, setInfo] = useState({
    email: "",
    name: "",
    grade: "",
    password: "",
    field: "",
  });

  enum grade {
    "1학년" = "FIRST",
    "2학년" = "SECOND",
    "3학년" = "",
  }

  function gradeChange(grade: string): string {
    if (grade == "1학년") return "FIRST";
    else if (grade == "2학년") return "SECOND";
    return "THIRD";
  }

  const signUp = async (userData: any) => {
    try {
      await instance.post("/join", userData);
      router.push("/signin");
    } catch (error: any) {
      alert(error.response.data.msg);
    }

    // if (data.code == 200) {
    //   router.push("/signin");
    // } else {
    //   alert(data.msg);
    // }
  };

  return (
    <Wrapper>
      <div className="container">
        <h1>회원가입</h1>
        <DefaultInput
          placeholder="@ 이메일"
          value={info.email}
          width={"220px"}
          onChange={(value) => {
            setInfo((state) => ({ ...state, email: value }));
          }}
        />
        <div className="box">
          <DefaultInput
            placeholder="이름"
            value={info.name}
            width={"105px"}
            onChange={(value) => {
              setInfo((state) => ({ ...state, name: value }));
            }}
          />
          <SelectBox
            items={["1학년", "2학년", "3학년"]}
            placeholder="학년"
            value={info.grade}
            width={"105px"}
            onClickValue={(value) => {
              setInfo((state) => ({
                ...state,
                grade: gradeChange(info.grade),
              }));
            }}
          />
        </div>
        <DefaultInput
          placeholder="비밀번호"
          type="password"
          value={info.password}
          width={"220px"}
          onChange={(value) => {
            setInfo((state) => ({ ...state, password: value }));
          }}
        />
        <SelectBox
          items={position}
          placeholder="분야"
          value={info.field}
          width={"220px"}
          onClickValue={(value) => {
            setInfo((state) => ({ ...state, field: value }));
          }}
        />
        <DefaultButton
          onClick={() => {
            signUp(info);
          }}
        >
          회원가입
        </DefaultButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 680px;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 120px;
  background: #ffffff;
  box-shadow: 8px 8px 10px 3px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  > .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    > .box {
      width: 220px;
      display: flex;
      justify-content: space-between;
    }
  }
`;
export default Signup;
