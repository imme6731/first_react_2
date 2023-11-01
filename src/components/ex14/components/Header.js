import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SHeader = styled.header`
  padding: 20px 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;

const Logo = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 150px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <Nav>
        <li>
          <Link to={"/login"}>로그인</Link>
        </li>
        <li>
          <Link to={"/signup"}>회원가입</Link>
        </li>
      </Nav>
    </SHeader>
  );
};
