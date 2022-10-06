import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/img/JIGI.png";

const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="navBox">
          <Image src={Logo} alt="logoImg" />
          <ul>
            <li>
              <Link href={"/"}>역사보기</Link>
            </li>
            <li>
              <Link href={"/record"}>기록하기</Link>
            </li>{" "}
            <li>
              <Link href={"/"}>마이페이지</Link>
            </li>
          </ul>

          <div className="nameBox">
            <p>안녕하세요 {"김의찬"}님</p>
          </div>
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
  top: 0;
  left: 0;
  right: 0;

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
    > .nameBox {
      display: flex;
      align-items: center;
    }
  }
`;

export default Header;
