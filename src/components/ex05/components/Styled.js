import { Component } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
`;

export const Sytled = () => {
  return (
    <div>
      <Box $bgColor="gold"></Box>
      <Box $bgColor="salmon"></Box>
    </div>
  );
};

// *styled-Component에 props를 이용하여 배경색 설정
// => styled의 배경색에 props 작성
// => 태그 안에 위에 작성한 props명을 작성하여 값 작성
// => ${(props) => props.$bgColor};
// => props명 앞에 $ 기호 넣어주기 (console 오류 안남)
