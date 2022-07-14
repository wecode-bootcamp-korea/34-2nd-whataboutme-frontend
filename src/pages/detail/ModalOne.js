// import { f∆aCircleXmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";

import styled from "styled-components";

export default function ModalOne() {
  return (
    <NetflixBtn>
      <EventBtn>진행중인 이벤트</EventBtn>
      <BigEvent>
        <EventListBtn>넷플릭스 프리존</EventListBtn>
        <FreeZoneDay>
          <p>넷플릭스 프리존</p>
          <br />
          <p>진행기간</p>
          <p>일, 월, 화, 수, 목 , 금, 토, 공휴일, 공휴일 전날</p>
          {/* <button onClick={modalClose}>닫기</button> */}
        </FreeZoneDay>
      </BigEvent>
    </NetflixBtn>
  );
}

const NetflixBtn = styled.div``;

const EventBtn = styled.div`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 20px;
`;
const BigEvent = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 30px;
  background-color: pink;
  /* width: 300px;
  height: 340px; */
`;
const EventListBtn = styled.div`
  font-size: 24px;
  color: #ffff;
  text-align: left;
`;
const FreeZoneDay = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;

  p {
    font-size: 20px;
    color: grey;
  }
`;
