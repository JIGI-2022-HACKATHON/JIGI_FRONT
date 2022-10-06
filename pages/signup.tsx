import React, { useState } from "react";
import styled from "@emotion/styled";
import DefaultInput from "../components/common/input/DefaultInput";

const Signup = () => {
  const [info, setInfo] = useState({
    email: "",
    name: "",
    grade: "",
    password: "",
    position: "",
  });
  return (
    <Wrapper>
      <h1>회원가입</h1>
      <DefaultInput placeholder="@ 이메일" value={info.email} width={"220px"} />
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
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
export default Signup;
