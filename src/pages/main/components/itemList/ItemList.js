import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ItemList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <SlideList onClick={() => navigate(`/detail/${data.id}`)}>
      <ListImg src={`${data.image_url}`} alt="motelListItem" />
      <ListInfo>
        <MotelName>{data.name}</MotelName>
        <MotelLodgingWrapper>
          <MotelLodging>숙박</MotelLodging>
          <MotelPrice>
            {data.price.toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}
          </MotelPrice>
        </MotelLodgingWrapper>
        <MotelCheckIn>
          <MotelCheckInTitle>입실 시간</MotelCheckInTitle>
          <MotelCheckInTime>19시부터</MotelCheckInTime>
        </MotelCheckIn>
        <MotelCheckOut>
          <MotelCheckOutTitle>퇴실 시간</MotelCheckOutTitle>
          <MotelCheckOutTime>익일 12시</MotelCheckOutTime>
        </MotelCheckOut>
      </ListInfo>
    </SlideList>
  );
};

const SlideList = styled.div`
  cursor: pointer;
  @font-face {
    font-family: "YUniverse-L";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_yuniverse@1.0/YUniverse-L.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "YUniverse-L";
`;

const ListImg = styled.img`
  ${({ theme: { variables } }) => variables.area(`100%`, `200px`)}
  border: 0;
  /* border-radius: ${({ theme: { style } }) => style.radius.regular}; */
`;

const ListInfo = styled.div`
  ${({ theme: { variables } }) => variables.area(`100%`, `110px`)}
  padding: 10px;
  margin-top: 5px;
  border: 0;
  /* border-radius: ${({ theme: { style } }) => style.radius.regular}; */
  background-color: ${({ theme: { style } }) => style.colors.white};
`;

const MotelName = styled.h3`
  font-size: ${({ theme: { style } }) => style.fontSizes.xl};
  margin-bottom: 10px;
  font-weight: bold;
`;

const MotelLodgingWrapper = styled.div`
  ${({ theme: { variables } }) => variables.flexSet(``, `space-between`, ``)}
`;

const MotelLodging = styled.span`
  font-size: ${({ theme: { style } }) => style.fontSizes.lg};
  margin-bottom: 5px;
`;

const MotelPrice = styled(MotelLodging)``;

const MotelCheckIn = styled(MotelLodgingWrapper)``;

const MotelCheckInTitle = styled(MotelLodging)``;

const MotelCheckInTime = styled(MotelLodging)``;

const MotelCheckOut = styled(MotelLodgingWrapper)``;

const MotelCheckOutTitle = styled(MotelLodging)``;

const MotelCheckOutTime = styled(MotelLodging)``;

export default ItemList;
