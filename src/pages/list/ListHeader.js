import React from "react";

import * as S from "./List.styled";
const ListHeader = ({ getLoc }) => {
  return (
    <S.TextBox width="900px" height="120px" pd="10px 0 0 0">
      <S.TextLine mg="5px 0" color="white" fontSize="35px">
        내주변
      </S.TextLine>
      <S.TextLine mg="30px 0" color="white" fontSize="17px" fontWeight="bold">
        중구 태평로 1가
        <S.Button
          mg="0 10px"
          pd="8px"
          color="white"
          backColor="#ed2f3c"
          fontSize="13px"
          border="none"
          onClick={() => {
            alert("위치를 재설정합니다");
            getLoc().then(() => alert("위치 재설정하였습니다"));
          }}
        >
          내 위치 재설정
        </S.Button>
      </S.TextLine>
    </S.TextBox>
  );
};

export default ListHeader;
