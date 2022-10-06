import React, { useState } from "react";
import styled from "@emotion/styled";
import DefaultButton from "../components/common/button/DefaultButton";
import DefaultInput from "../components/common/input/DefaultInput";
import { instance } from "../util/api/instance";
import { useRouter } from "next/router";
const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const signIn = async (email: string, password: string) => {
    const { data } = await instance.post("/login", { email, password });
    router.push("/");
    console.log(data);

    localStorage.setItem("access_token", data.accessToken);
  };
  return (
    <Wrapper>
      <div className="container">
        <h1>로그인</h1>
        <div className="inputBox">
          <DefaultInput
            value={email}
            disable={false}
            placeholder="@ 이메일"
            width="300px"
            onChange={(value) => setEmail(value)}
          />
          <DefaultInput
            type="password"
            disable={false}
            placeholder="비밀번호"
            width="300x"
            value={password}
            onChange={(value) => setPassword(value)}
          />
        </div>
        <DefaultButton
          onClick={() => {
            signIn(email, password);
          }}
        >
          로그인
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
  flex-direction: column;
  margin: 0 auto;
  margin-top: 120px;
  background: #ffffff;
  box-shadow: 8px 8px 10px 3px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  > .container {
    width: 360px;
    height: 321px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > .inputBox {
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
export default SignIn;
