import { styled } from "styled-components";
import { baseLayoutSize, fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;
const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 30%;
  height: 400px;
  background: url(${(props) => props.$bgImg}) no-repeat center/cover;
  &:hover {
    opacity: 50%;
  }
`;

export const Section_2 = () => {
  return (
    <Section>
      <h3>두번째 섹션</h3>
      <ConWrap>
        <Con $bgImg="https://i.namu.wiki/i/_V2f_omsbCV-y-47VBOBTqf7pUEG9F-qMimkbMdRXPJEQ-lRHwb5Mm0MigQqKXTlNq3CtqIAK5cvzVPYSihuzg.webp"></Con>
        <Con $bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDF9vuryD_KhADRXlVKLVEKi7PG_hhGXmBw&usqp=CAU"></Con>
        <Con $bgImg="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2020/02/27/416e66a5-3c24-414f-9d97-3e667d3297b0.jpg"></Con>
      </ConWrap>
    </Section>
  );
};
