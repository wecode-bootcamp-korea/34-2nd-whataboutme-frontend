import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const { kakao } = window;

const Map = ({ rooms }) => {
  const container = useRef(null);

  const options = {
    center: new kakao.maps.LatLng(37.5063506, 127.053634),
    level: 3,
  };
  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options);
    const zoomControl = new kakao.maps.ZoomControl();

    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    rooms?.map(location => {
      const markerPosition = new kakao.maps.LatLng(
        location.latitude,
        location.longtitude
      );
      return new kakao.maps.Marker({ map, position: markerPosition });
    });
  }, []);

  return (
    <>
      <SlideTitle color="#f5303f">내 주변</SlideTitle>
      <KakaoMap className="map" ref={container} id="map" />
    </>
  );
};
const SlideTitle = styled.h2`
  @font-face {
    font-family: "GangwonEduPowerExtraBoldA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  color: ${props => props.color};
  font-family: "GangwonEduPowerExtraBoldA";

  font-size: ${({ theme: { style } }) => style.fontSizes.xxl};
  margin-bottom: 10px;
`;
const KakaoMap = styled.div`
  ${({ theme: { variables } }) => variables.area("100%", "550px")}
  border: 0;
  border-radius: ${({ theme: { style } }) => style.radius.regular};
`;

export default Map;
