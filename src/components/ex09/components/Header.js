import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
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
  background-color: #555;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Header = () => {
  return (
    <SHeader>
      <More>
        <FontAwesomeIcon icon={faChevronDown} />
      </More>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
    </SHeader>
  );
};
