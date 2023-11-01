import { styled } from "styled-components";

const Banner = styled.section`
  height: 80vh;
  background: url(https://static1.squarespace.com/static/5b9fbfdffcf7fd7add666e17/t/60a673cd895adc5764d02b22/1621521359951/Pride+1.png)
    no-repeat center / cover;
`;
export const Home = () => {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};
