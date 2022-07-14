import React from "react";
import { useNavigate } from "react-router-dom";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

import * as S from "./List.styled";

const KakaoMap = ({ myPosition, roomList }) => {
  const navigate = useNavigate();
  return (
    <Map
      center={{ lat: myPosition.lati, lng: myPosition.long }}
      style={{ width: "100%", height: "460px" }}
      level={5}
    >
      {roomList?.map(position => (
        <>
          <MapMarker
            key={position.id}
            position={{
              lat: position.latitude,
              lng: position.longtitude,
            }}
            image={{
              src: "images/list/marker.png",
              size: {
                width: 25,
                height: 25,
              },
            }}
            title={position.name}
          />
          <CustomOverlayMap
            position={{
              lat: position.latitude,
              lng: position.longtitude,
            }}
          >
            <S.CustomBox onClick={() => navigate(`/detail/${position.id}`)}>
              <S.CustomText color="red" fontWeight="bold">
                {position.name}
              </S.CustomText>
              <S.CustomText color="black">
                {position.price.toLocaleString()}
              </S.CustomText>
            </S.CustomBox>
          </CustomOverlayMap>
        </>
      ))}
    </Map>
  );
};

export default KakaoMap;
