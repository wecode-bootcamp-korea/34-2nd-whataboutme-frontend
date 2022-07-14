import React from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

import * as S from "./List.styled";

const KakaoMap = ({ myPosition, roomList }) => {
  return (
    <Map
      center={{ lat: myPosition.lati, lng: myPosition.long }}
      style={{ width: "100%", height: "360px" }}
      level={5}
    >
      {roomList?.map((position, index) => (
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
            <S.CustomBox
              onClick={() => console.log(`navigate(/detail/${position.id})`)}
            >
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
