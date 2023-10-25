import { styled } from "styled-components";

const SSection = styled.section`
  max-width: 300px;
  width: 100%;
  margin: 50px auto;
`;
const AlbumCover = styled.div`
  height: 320px;
  background: url(${(props) => props.$coverImg}) no-repeat center / cover;
  border-radius: 10%;
  box-shadow: 0 5px 5px 5px #121212;
  margin: 0 auto;
`;
const Song = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
`;
const Singer = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: lightgray;
`;
export const Section = () => {
  return (
    <SSection>
      <AlbumCover $coverImg="https://i.namu.wiki/i/M-MpJafSvIf5n5k-t4F3yhKyGXA9-zc_H4IS0ZrPCDBzIhNZqcMOtcqlrs7jG9f_qAZN847HFY9HD9A6hy7uYw.webp" />
      <Song>Fact Check (불가사의; 不可思議)</Song>
      <Singer>NCT 127</Singer>
    </SSection>
  );
};
