import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./List.styled";

const RoomLists = ({ roomList }) => {
  const navigate = useNavigate();
  return (
    <S.Lists>
      {roomList?.map(list => {
        return (
          <S.ListItem
            key={list.id}
            backColor="#fdfbf5"
            height="250px"
            borderBtm="1px solid #ebebeb"
            onClick={() => navigate(`/detail/${list.id}`)}
          >
            <S.ListImg
              // src={`/images/list/img${list.id}.jpeg`}
              src={list.image}
              width="160px"
              height="200px"
              mg="20px 0 0 10px"
            />
            {/* <S.ListImg src={list.image} /> */}

            <S.TextBox width="430px" mg="10px">
              <S.TextLine mg="10px" fontSize="22px" fontWeight="bold">
                {list.name}
              </S.TextLine>
              <S.TextLine mg="10px">
                {list.distance}m | {list.address}
              </S.TextLine>
              <S.TextLine mg="133px 10px">
                {list.themes?.map(val => {
                  return (
                    <S.TextLine
                      key={val}
                      mg="5px 7px 0 0"
                      color="f5303f"
                      fontSize="13px"
                    >
                      🌠 {val}
                    </S.TextLine>
                  );
                })}
              </S.TextLine>
              <S.Price>
                <S.TextLine mg="7px">숙박</S.TextLine>
                <S.Span pd="3px" color="white" backColor="#f5303f">
                  예약
                </S.Span>
                <S.TextLine mg="7px" fontSize="22px" fontWeight="bold">
                  {list.price.toLocaleString()}원
                </S.TextLine>
              </S.Price>
            </S.TextBox>
          </S.ListItem>
        );
      })}
    </S.Lists>
  );
};

export default RoomLists;
