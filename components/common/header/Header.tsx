import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/img/JIGI.png";
import { useRouter } from "next/router";

const Header = () => {
  const route = useRouter();

  // const token = localStorage.getItem("accessToken");
  return (
    <>
      <Wrapper>
        <div className="navBox">
          <Image
            src={Logo}
            alt="logoImg"
            onClick={() => route.push("/")}
            style={{ cursor: "pointer" }}
          />

          <ul>
            <li>
              <Link href={"/history"}>역사보기</Link>
            </li>
            <li>
              <Link href={"/record"}>기록하기</Link>
            </li>{" "}
            <li>
              <Link href={"/mypage"}>마이페이지</Link>
            </li>
          </ul>
          {/* {token ? (
            <div className="nameBox">
              안녕하세요 <i className="name">{"김의찬"}</i> 님
            </div>
          ) : (
            <div>
              <p>로그인</p>
              <p>회원가입</p>
            </div>
          )} */}
        </div>
      </Wrapper>
      <Box></Box>
    </>
  );
};

const Box = styled.div`
  height: 68px;
`;
const Wrapper = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;

  background-color: ${({ theme }) => theme.white};

  height: 60px;
  border: solid 1px #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);

  > .navBox {
    display: flex;
    width: 940px;
    justify-content: space-between;

    > ul {
      color: ${({ theme }) => theme.black};
      display: flex;
      align-items: center;
      width: 352px;
      justify-content: space-between;
    }
    > div {
      display: flex;
      align-items: center;
      > p {
        font-size: 16px;
        font-weight: 400;
        padding: 0 12px;
        cursor: pointer;
      }
      > i {
        color: ${({ theme }) => theme.primary};
        font-style: none;
      }
      * + * {
        border-left: 1px solid black;
      }
    }
  }
`;

export default Header;
