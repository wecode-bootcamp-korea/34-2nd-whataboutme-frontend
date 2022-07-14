import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const KakaoMap = () => {
  const container = useRef(null);

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
  }, []);

  return <MapWrapper className="map" ref={container} />;
};

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

export default KakaoMap;

const MapWrapper = styled.div`
  width: 1240px;
  height: 238px;
`;
