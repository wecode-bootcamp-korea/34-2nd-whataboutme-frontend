import React, { useState } from "react";
import styled from "styled-components";
import KakaoMap from "./components/kakaomap/KakaoMap";

export default function RoomInfoBox() {
  const [isOpen, setIsOpen] = useState("closed");
  const handleModal = event => {
    setIsOpen("basic");
    event.preventDefault();
    if (isOpen === "basic") setIsOpen("closed");
  };

  const [wasOpen, setWasOpen] = useState("closed");
  const handleModalSummary = event => {
    setWasOpen("price");
    event.preventDefault();
    if (wasOpen === "price") setWasOpen("closed");
  };
  return (
    <InfoContainer>
      <BasicInfo onClick={handleModal}>
        기본 정보
        {isOpen === "basic" && (
          <CardArea>
            <CarInfoTitle>
              주차장 정보
              <CarInfoDesc>
                주차는 객실당 1대 무료 주차 가능합니다.&#40;추가 차량이 있을시
                추가 요금 발생&#41; 체크 인 시간 이전 선주차 불가&#40;무료 주차
                1대 외 차량은 추가 요금 발생&#41;
                특수차량이용시&#40;대형차량,특수차량, 슈퍼카,
                개조차량등&#41;주차가 불가할 수 있으니 호텔로 문의바랍니다. ※
                벤틀리, 롤스로이스, 페라리, 람보르기니 등등 최고급 외제차들은
                주차 불가합니다.
              </CarInfoDesc>
              <CarInfoDesc>총 1대 주차시설 보유</CarInfoDesc>
            </CarInfoTitle>
            <CarInfoTitle>
              지하철 정보
              <CarInfoDesc>2호선 역삼역</CarInfoDesc>
              <CarInfoDesc>객실내부 시설</CarInfoDesc>
              <CarInfoDesc>
                객실은 랜덤배정으로 이미지와 다른 객실이 배정이 될 수 있습니다.
                디럭스&프리미엄 2인기준 스위트&로얄스위트 최대 4인까지 입실
                가능합니다. (2인 외 추가 인원 1인당 2만원씩 추가 요금 발생) 기준
                인원보다는 추가 인원 입실 불가능합니다.(추가 이불 운영
                안합니다.) 신분증 미 지참시 입실이 거부될 수 있습니다.(신분증
                미지참시 취소 환불 불가) 전 객실 Netflix 프리존(무료시청 가능,
                자동 로그인) 전체 건물, 전 객실 금연 구역 운영
              </CarInfoDesc>
            </CarInfoTitle>

            <CarInfoFrontTitle>
              프런트 및 그 외 시설
              <CarInfoDesc>
                로비에 방문하는 고객을 대상으로 간단한 음료가 제공됩니다.
              </CarInfoDesc>
            </CarInfoFrontTitle>

            <KakaoMap />
          </CardArea>
        )}
      </BasicInfo>
      <PriceInfo onClick={handleModalSummary}>
        요금 정보
        {wasOpen === "price" && (
          <PriceArea>
            <PriceImg src="../images/price.jpeg" alt="대실요금정보" />
          </PriceArea>
        )}
      </PriceInfo>
    </InfoContainer>
  );
}

const InfoContainer = styled.div``;
const BasicInfo = styled.button`
  width: 1302px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  border-left: 0px solid white;
  border-right: 0px solid white;
  padding: 20px 0;
  font-size: 30px;
  text-align: left;
  margin: 30px 10px 0 30px;
  /* position: relative; */
`;

const CardArea = styled.div`
  padding: 55px 25px 20px 40px;
  background-color: #f5f5f5;
`;
const CarInfoTitle = styled.ul`
  margin-bottom: 60px;
  font-weight: 700;
  font-size: 25px;
  text-align: left;
`;

const CarInfoDesc = styled.li`
  font-weight: 400;
  font-size: 20px;
  list-style: square;
  text-align: left;
  margin-top: 15px;
`;
const CarInfoFrontTitle = styled.ul`
  margin-bottom: 60px;
  font-weight: 700;
  font-size: 25px;
  text-align: left;
`;

const PriceInfo = styled.div`
  width: 1302px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  border-left: 0px solid white;
  border-right: 0px solid white;
  padding: 20px 0;
  font-size: 30px;
  text-align: left;
  margin: 30px 10px 0 30px;
`;
const PriceArea = styled.div`
  padding: 55px 25px 20px 40px;
  background-color: #f5f5f5;
  font-size: 25px;
  text-align: center;
`;

const PriceImg = styled.img`
  width: 870px;
  height: 900px;
`;
