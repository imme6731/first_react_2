import { useState } from "react";

export const EventEx = () => {
  const [num, setNum] = useState(0);

  //   const plusHandler = () => {
  //     setNum(num + 1);
  //   };

  //   const minusHandler = () => {
  //     setNum(num - 1);
  //   };
  //   let num = 0;
  //   const plusHanler = () => {
  //     num++;
  //   };

  return (
    <div>
      <h3>클릭할 때 숫자 증감</h3>
      <h3>{num}</h3>

      {/* <button onClick={plusHanler}>+</button>
      <button>-</button> */}

      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};
