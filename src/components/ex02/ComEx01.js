export const ComEx01 = () => {
  return (
    <>
      <div>
        <h3>컴포넌트 1번</h3>
      </div>
    </>
  );
};

export const ComEx02 = () => {
  return (
    <>
      <div>
        <h3>컴포넌트 2번</h3>
      </div>
    </>
  );
};

export default ComEx01;
// export default ComEx02;
// => 기본 내보내기는 반드시 파일당 하나만 가능함

// * export를 함수 앞에 붙여서 내보낼 수 있음
// 단, import 할 땐 {}를 이용하여 다중 컴포넌트를 불러 올 수 있음
