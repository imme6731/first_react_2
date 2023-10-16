const users = [
  {
    id: 0,
    name: "김정우",
    age: 26,
  },
  {
    id: 1,
    name: "이마크",
    age: 25,
  },
  {
    id: 2,
    name: "김도영",
    age: 28,
  },
];

export const IntroEx = () => {
  return (
    <div>
      {users.map((man) => (
        <div key={man.id}>
          <h2>자기소개</h2>
          <h3>이름 : {man.name}</h3>
          <h3>나이 : {man.age}</h3>
          <br />
        </div>
      ))}
    </div>
  );
};

export default IntroEx;
