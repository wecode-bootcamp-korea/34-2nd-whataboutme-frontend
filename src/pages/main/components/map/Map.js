import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const { kakao } = window;

const Map = ({ MOTEL_RECOMMEND_INFO }) => {
  const container = useRef(null);

  const options = {
    center: new kakao.maps.LatLng(37.5063506, 127.053634),
    level: 3,
  };
  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options);
    const zoomControl = new kakao.maps.ZoomControl();

    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    MOTEL_RECOMMEND_INFO.map(location => {
      const markerPosition = new kakao.maps.LatLng(
        location.coordinate[0],
        location.coordinate[1]
      );
      return new kakao.maps.Marker({ map, position: markerPosition });
    });
  }, []);

  return <KakaoMap className="map" ref={container} id="map" />;
};

const KakaoMap = styled.div`
  ${({ theme: { variables } }) => variables.area("100%", "550px")}
  border: 0;
  border-radius: ${({ theme: { style } }) => style.radius.regular};
`;

export default Map;
