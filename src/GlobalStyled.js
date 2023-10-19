import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const baseLayoutSize = {
  padding: "150px 15%",
};

export const fontSize = {
  title: "80px",
  menu: "18px",
  desc: "16px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
