import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { color } from "../../../GlobalStyled";
import { useState } from "react";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const More = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
`;
const Menu = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${color.musicAppColor};
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  z-index: 999;
`;

const MenuWrap = styled.ul`
  position: absolute;
  top: 0;
  left: ${(props) => props.$left};
  width: 100%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20% 0;
  font-size: 30px;
  font-weight: 600;
  color: ${color.musicAppColor};
  transition: 0.5s;
`;
export const Header = () => {
  const [menuLeft, setMenuLeft] = useState("100%");

  const onClickMenu = () => {
    menuLeft === "100%" ? setMenuLeft(0) : setMenuLeft("100%");
  };
  return (
    <SHeader>
      <More>
        <FontAwesomeIcon icon={faChevronDown} />
      </More>
      <Menu onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars} />
      </Menu>

      <MenuWrap $left={menuLeft}>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
      </MenuWrap>
    </SHeader>
  );
};
