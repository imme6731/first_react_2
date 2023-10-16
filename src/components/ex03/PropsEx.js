import { FoodMenu } from "./FoodMenu";
import { Intro } from "./Intro";

const foodMenus = [
  {
    id: 0,
    week: "월요일",
    breakfast: "시리얼",
    lunch: "떡볶이",
    dinner: "김치찌개",
  },
  {
    id: 1,
    week: "화요일",
    breakfast: "모닝빵",
    lunch: "라면",
    dinner: "치킨",
  },
  {
    id: 2,
    week: "수요일",
    breakfast: "샌드위치",
    lunch: "돼지국밥",
    dinner: "모듬곱창",
  },
];

const PropsEx = () => {
  return (
    <>
      {/* <Intro name={"최성임"} age={26} job={"취준생"} />
      <Intro name={"김정우"} age={26} job={"아이돌"} />
      <br />
      <br /> */}

      {/* <FoodMenu
        week={foodMenus[0].week}
        breakfast={foodMenus[0].breakfast}
        lunch={foodMenus[0].lunch}
        dinner={foodMenus[0].dinner}
      /> */}

      {/* <FoodMenu menus={foodMenus} /> */}

      {foodMenus.map((food) => (
        <div key={food.id}>
          <h2>{food.week} 메뉴</h2>
          <h3>아침 : {food.breakfast}</h3>
          <h3>점심 : {food.lunch}</h3>
          <h3>저녁 : {food.dinner}</h3>
          <br />
        </div>
      ))}
    </>
  );
};

export default PropsEx;
