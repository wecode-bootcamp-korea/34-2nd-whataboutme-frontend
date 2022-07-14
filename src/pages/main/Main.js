import React from "react";
import styled from "styled-components";
import ListCarousel from "./components/listCarousel/ListCarousel";
import Map from "./components/map/Map";

const Main = () => {
  return (
    <MainWrapper>
      <KakaoMap>
        <Map MOTEL_RECOMMEND_INFO={MOTEL_RECOMMEND_INFO} />
      </KakaoMap>
      <MotelList>
        <ListCarousel recommendMotel={MOTEL_RECOMMEND_INFO} />
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
  margin-top: 100px;
`;

const MotelList = styled.div`
  ${({ theme: { variables } }) => variables.area("48%", "")}
  margin-top: 100px;
`;

export default Main;

const MOTEL_RECOMMEND_INFO = [
  {
    id: 1,
    motel_name: "종로 모노모텔",
    image_url:
      "https://images.unsplash.com/photo-1563253814-b3055eafce93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 55000,
    check_in_time: 15,
    check_out_time: 12,
    coordinate: [37.5056747, 127.053984],
  },
  {
    id: 2,
    motel_name: "명동 리호텔",
    image_url:
      "https://images.unsplash.com/photo-1421790735934-58176b8292a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 11000,
    check_in_time: 15,
    check_out_time: 12,
    coordinate: [37.5052517, 127.052864],
  },
  {
    id: 3,
    motel_name: "서울 모텔",
    image_url:
      "https://images.unsplash.com/photo-1523459231854-ec3ba323a2e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80",
    price: 45000,
    check_in_time: 15,
    check_out_time: 12,
    coordinate: [37.5066757, 127.05187],
  },
  {
    id: 4,
    motel_name: "경기 모텔",
    image_url:
      "https://images.unsplash.com/photo-1521828537238-fcecf91b732c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
    price: 75000,
    check_in_time: 15,
    check_out_time: 12,
    coordinate: [37.5057482, 127.050727],
  },
  {
    id: 5,
    motel_name: "청주 모텔",
    image_url:
      "https://images.unsplash.com/photo-1516213590634-5ab996dbdc7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: 55000,
    check_in_time: 15,
    check_out_time: 12,
    coordinate: [37.5068825, 127.053012],
  },
];
