import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const SBtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 40px 0;
  font-size: 18px;
  li:nth-child(3) {
    width: 50px;
    height: 50px;
    background-color: lightgreen;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #555;
  }
`;

export const BtnWrap = () => {
  return (
    <>
      <SBtnWrap>
        <li>
          <FontAwesomeIcon icon={faShuffle} />
        </li>
        <li>
          <FontAwesomeIcon icon={faBackward} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPause} />
        </li>
        <li>
          <FontAwesomeIcon icon={faForward} />
        </li>
        <li>
          <FontAwesomeIcon icon={faRepeat} />
        </li>
      </SBtnWrap>
    </>
  );
};
