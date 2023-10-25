import { styled } from "styled-components";
import { Header } from "./Header";
import { Section } from "./Section";
import { PlayTime } from "./PlayTime";
import { color } from "../../../GlobalStyled";
import { BtnWrap } from "./BtnWrap";
import { UserCon } from "./UserCon";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #555;
  color: white;
`;
const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: ${color.musicAppColor};
  padding: 50px 20px;
  position: relative;
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <Container>
        <Header />
        <Section />
        <PlayTime />
        <BtnWrap />
        <UserCon />
      </Container>
    </Wrap>
  );
};
