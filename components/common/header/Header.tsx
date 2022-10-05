import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/img/JIGI.png";

const Wrapper = styled.header`
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

const Header = () => {
  return (
    <Wrapper>
      <div className="navBox">
        <Image src={Logo} alt="logoImg" />
        <ul>
          <li>
            <Link href={"/"}>역사보기</Link>
          </li>
          <li>
            <Link href={"/"}>기록하기</Link>
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
  );
};

export default Header;
