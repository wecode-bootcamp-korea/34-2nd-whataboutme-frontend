import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListCarousel from "./components/listCarousel/ListCarousel";
import Map from "./components/map/Map";

const Main = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("data/listData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setRooms(data);
      });
  }, []);

  return (
    <MainWrapper>
      <KakaoMap>
        <Map rooms={rooms} />
      </KakaoMap>

      <MotelList>
        <ListCarousel recommendMotel={rooms} />
        <Div>
          <MainImg src="images/mainImg.jpeg" />
        </Div>
      </MotelList>
    </MainWrapper>
  );
};
const MainWrapper = styled.div`
  ${({ theme: { variables } }) => variables.flexSet(``, `space-between`, ``)};
  padding: 0 10%;
  background-color: #f6f6f6;
`;

const KakaoMap = styled.div`
  ${({ theme: { variables } }) => variables.area("50%", "")}
  margin-top: 50px;
  margin-right: 50px;
`;

const MotelList = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  ${({ theme: { variables } }) => variables.area("48%", "")}
  margin-top: 50px;
`;

const MainImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const Div = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  margin-top: 35px;
`;

export default Main;
