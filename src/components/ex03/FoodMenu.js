import { Fragment } from "react";

export const FoodMenu = ({ menus }) => {
  //   console.log(menus);
  return (
    <>
      <h2>{menus[0].week} 메뉴</h2>
      <h3>아침 : {menus[0].breakfast}</h3>
      <h3>점심 : {menus[0].lunch}</h3>
      <h3>저녁 : {menus[0].dinner}</h3>
      <hr />

      <h2>{menus[1].week} 메뉴</h2>
      <h3>아침 : {menus[1].breakfast}</h3>
      <h3>점심 : {menus[1].lunch}</h3>
      <h3>저녁 : {menus[1].dinner}</h3>
      <hr />

      <h2>{menus[2].week} 메뉴</h2>
      <h3>아침 : {menus[2].breakfast}</h3>
      <h3>점심 : {menus[2].lunch}</h3>
      <h3>저녁 : {menus[2].dinner}</h3>
      <hr />
    </>
  );
};

// 아무 역할이 없는 div 태그 : extra 태그
// <></> : fragment 태그
