import { styled } from "styled-components";
import { Header } from "./Header";
import { Section } from "./Section";

const Wrap = styled.div`
  width: 390px;
  height: auto;
  padding: 30px 30px;
  background-color: #555;
  margin: 100px auto;
  border-radius: 20px;
`;
export const MusicApp = () => {
  return (
    <Wrap>
      <Header />
      <Section />
    </Wrap>
  );
};
