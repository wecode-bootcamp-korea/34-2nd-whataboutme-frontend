import React from "react";
import ListCalendarBox from "./ListCalendarBox";
import * as S from "./List.styled";

const ListFiltering = ({
  goFiltering,
  goInitial,
  handleFilter,
  filterings,
  isInitial,
}) => {
  return (
    <S.FilterBox>
      <S.TextLine mg="10px 0" fontSize="16px" fontWeight="600">
        날짜
      </S.TextLine>
      <ListCalendarBox />
      <S.Hr />
      <S.TextLine mg="30px 0 10px 0" fontSize="16px" fontWeight="600">
        상세조건
      </S.TextLine>
      <S.Button
        width="48%"
        height="33px"
        color="#F6313F"
        backColor="white"
        border="1px solid #F6313F"
        onClick={goInitial}
      >
        초기화
      </S.Button>
      <S.Button
        width="48%"
        height="33px"
        mg="0 0 0 4px"
        color="white"
        backColor="#F6313F"
        border="1px solid #F6313F"
        onClick={goFiltering}
      >
        적용
      </S.Button>
      <S.TextLine mg="30px 0 10px 0" fontSize="16px" fontWeight="600">
        이색테마
      </S.TextLine>
      {themeData.map(list => {
        return (
          <S.CheckBoxes key={list.id}>
            <S.CheckBox
              type="radio"
              name="theme"
              value={list.theme}
              defaultChecked={isInitial}
              onClick={e => handleFilter(e)}
            />
            {list.theme}
          </S.CheckBoxes>
        );
      })}
      <S.TextLine mg="30px 0 10px 0" fontSize="16px" fontWeight="600">
        가격
        <S.Span mg="0 10px" color="#f5303f">
          {filterings.price}만원 이하
        </S.Span>
      </S.TextLine>
      <S.InputTag
        type="range"
        name="price"
        max="100"
        min="1"
        width="100%"
        onChange={e => handleFilter(e)}
      />
      <S.TextLine mg="30px 0 10px 0" fontSize="16px" fontWeight="600">
        거리 범위
      </S.TextLine>

      {distanceData.map(list => {
        return (
          <S.Radio key={list.id}>
            <S.InputTag
              type="radio"
              name="distance"
              value={list.val}
              defaultChecked={list.id === 1}
              onChange={e => handleFilter(e)}
            />
            <S.Label htmlFor="default">{list.name}</S.Label>
          </S.Radio>
        );
      })}
    </S.FilterBox>
  );
};

const themeData = [
  { id: 1, theme: "무인텔" },
  { id: 2, theme: "파티룸" },
  { id: 3, theme: "거울룸" },
  { id: 4, theme: "복층룸" },
  { id: 5, theme: "공주룸" },
  { id: 6, theme: "트윈베드" },
  { id: 7, theme: "야외테라스" },
  { id: 8, theme: "바다뷰" },
  { id: 9, theme: "호수뷰" },
  { id: 10, theme: "하늘뷰" },
];

const distanceData = [
  { id: 1, name: "기준거리", val: 1000000 },
  { id: 2, name: "5km", val: 50000 },
  { id: 3, name: "10km", val: 100000 },
  { id: 4, name: "20km", val: 200000 },
];

export default ListFiltering;
