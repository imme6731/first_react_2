import { styled } from "styled-components";
import { fontSize } from "../../../GlobalStyled";

const SHeader = styled.header`
  padding: 20px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h3`
  font-size: 24px;
  font-weight: 900;
`;
const MenuWrap = styled.ul`
  display: flex;
  font-size: ${fontSize.menu};
  font-weight: 700;
  li {
    margin-left: 10%;
  }
  li:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>LOGO</Logo>
      <MenuWrap>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </MenuWrap>
    </SHeader>
  );
};
