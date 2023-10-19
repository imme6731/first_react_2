import { styled } from "styled-components";
import { baseLayoutSize, fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  height: 70vh;
  background-color: lightgreen;
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
    font-weight: 700;
    margin-top: 100px;
  }
`;

export const Section_1 = () => {
  return (
    <Section>
      <h3>첫번째 섹션</h3>
    </Section>
  );
};
