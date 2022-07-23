import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ModalOne from "./ModalOne";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoomInfoBox from "./RoomInfoBox";
import ListCalendarBox from "../list/ListCalendarBox";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);

  const [bottomPage, setBottomPage] = useState("객실안내");
  const [room, setRoom] = useState({});
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   fetch(`http://10.58.1.238:8080/products/${params.id}`, {
  //     method: "GET",
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setRoom(data.product);
  //       // console.log(data);
  //     });
  // }, []);
  // console.log(room);

  useEffect(() => {
    fetch(`/data/detailData.json`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setRoom(data);
      });
  }, []);

  // const modalClose = () => {
  //   setIsModal(!isModal);
  // };

  // function openModal() {
  //   setIsOpen(true);
  // }

  console.log(room);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    centerMod: true,
  };
  return (
    <Container>
      <Maintop>
        <AsideImages>
          <AsideImage src={room.image && room.image[0].image} alt="roomImg" />
          <StyledSlider {...settings}>
            {room.images?.map((list, idx) => (
              <SliderImage
                key={list.id}
                src={list.image}
                alt="room1"
                onClick={() => setImageIndex(idx)}
              />
            ))}
          </StyledSlider>
        </AsideImages>
        <AsideContent>
          <AsideRoom>{room.name}</AsideRoom>
          <MainText>{room.address}</MainText>
          <br />
          <MainText fontSize="20px" color="orange">
            추천해요
          </MainText>
          <MainText>리뷰 700개</MainText>
          <br />
          <MainText>{room.add}</MainText>
          <Div onClick={() => setIsOpen(!modalIsOpen)}>넷플릭스 프리존</Div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={styleModal}
          >
            <ModalOne />
            <ModalClose onClick={() => setIsOpen(false)}>X</ModalClose>
          </Modal>
        </AsideContent>
      </Maintop>
      <UnderBottom>
        <SideTab>
          <RoomInfo onClick={() => setBottomPage("객실안내")}>
            객실안내/예약
          </RoomInfo>
          <RoomInfo onClick={() => setBottomPage("숙소정보")}>
            숙소정보
          </RoomInfo>
        </SideTab>
        {/* {console.log(bottomPage)} */}
        {bottomPage === "객실안내" && (
          <DailyContentBox>
            {/* ㅁㄴㅇㅁㄴㅇㅁㄴ */}
            <CalendarBox>
              <ListCalendarBox />
            </CalendarBox>

            {room.rooms?.map(oneroom => {
              return (
                <RoomOption key={oneroom.id}>
                  <OptionImg src={oneroom.image} />
                  <InformationRoom>
                    <RoomType>{oneroom.name}</RoomType>
                    <OptionText>숙박</OptionText>
                    <RoomPrice>
                      <ReservationRoom
                        fontSize="22px"
                        color="#ffff"
                        backColor="#f7323f"
                        fontWeight="bold"
                        mgr="8px"
                      >
                        예약
                      </ReservationRoom>
                      <ReservationRoom>
                        {Number(oneroom.price).toLocaleString()}
                      </ReservationRoom>
                    </RoomPrice>
                    <InOutTime>
                      <RoomCheckout>
                        <RoomCheck>입실시간</RoomCheck>
                        <RoomTime>21시간부터</RoomTime>
                      </RoomCheckout>
                      <RoomCheckout>
                        <RoomCheck>퇴실시간</RoomCheck>
                        <RoomTime>익일 12시부터</RoomTime>
                      </RoomCheckout>
                    </InOutTime>
                    <button
                      type="button"
                      onClick={() => {
                        alert("예약완료");
                      }}
                    >
                      숙박예약
                    </button>
                  </InformationRoom>
                </RoomOption>
              );
            })}
          </DailyContentBox>
        )}
        {bottomPage === "숙소정보" && <RoomInfoBox />}
      </UnderBottom>
    </Container>
  );
};

const Container = styled.div`
  @font-face {
    font-family: "YUniverse-L";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_yuniverse@1.0/YUniverse-L.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "YUniverse-L";
  font-weight: bolder;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
`;

const Maintop = styled.div`
  ${props => props.theme.variables.flexSet(``, `space-between`, `flex-start`)}
  width: 70%;
  height: 700px;
  /* ${props => props.theme.variables.area("50%", "700px")} */
`;

const AsideImages = styled.div`
  display: flex;
  flex-direction: column;
`;

const AsideImage = styled.img`
  ${props => props.theme.variables.area("600px", "500px")}
  object-fit: cover;
`;
const StyledSlider = styled(Slider)`
  /* background-color: yellow; */
  width: 598px;
  height: 110px;
  /* border-radius: 9px; */
  margin-top: 20px;

  .slick-next::before {
    color: black;
  }

  .slick-prev::before {
    color: black;
  }
`;

const SliderImage = styled.img`
  width: 150px;
  height: 110px;
  /* border-radius: 5px; */
  /* cursor: pointer;
  color: black; */
`;

const AsideContent = styled.div`
  ${props => props.theme.variables.area("45%", "500px")}
  margin: 18px;
  position: relative;

  button {
    margin-top: 30px;
    font-size: 22px;
    width: 470px;
    height: 48px;
    color: #ffff;
    text-align: left;
    border-radius: 8px;
    background-color: cadetblue;
  }
`;
const AsideRoom = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
`;
const styleModal = {
  overlay: {
    background: "rgba(0,0,0,0.56)",
    overflow: "hidden scroll",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  content: {
    width: "400px",
    height: "500px",
    position: "absolute",

    // top: "200px",
    // left: "50%",
    // transform: "translate(-50%,0)",
    display: "flex",
    justifyContent: "center",
    background: "#FFFF",
    overflow: "auto",
    top: "19vh",
    left: "38vw",
    right: "38vw",
    bottom: "19vh",
    borderRadius: "14px",
    outline: "none",
    zIndex: 10,
  },
};

const ModalClose = styled.button`
  width: 20px;
  height: 25px;
`;
const UnderBottom = styled.div`
  /* width: 90%; */
`;
const SideTab = styled.div`
  font-size: 30px;
`;

const RoomInfo = styled.span`
  margin-right: 25px;
  cursor: pointer;
`;
const DailyContentBox = styled.div``;
const DailyBox = styled.button`
  cursor: pointer;
  font-size: 30px;
  background-color: #ffff;
  margin: 32px 0px;
  padding: 0 0 0 36px;
`;
const RoomOption = styled.div`
  display: flex;
  width: 800px;
  margin: 5px 0;
  justify-content: center;

  gap: 20px;
  border: 3px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
`;
const OptionImg = styled.img`
  ${props => props.theme.variables.area("440px", "290px")}
  padding: 10px;
`;
const InformationRoom = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  display: inline;
  /* margin-left: 50px; */
  padding-top: 30px;

  button {
    ${props => props.theme.variables.area("300px", "50px")}
    background-color: #f7323f;
    font-size: 30px;
    border-radius: 8px;
    border: none;
    color: white;
    position: absolute;
    top: 220px;
  }
`;

const RoomType = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  padding-top: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const OptionText = styled.div`
  font-size: 24px;
  padding-top: 9px;
  text-align: center;
  position: absolute;
  top: 60px;
  bottom: 30px;
`;
const RoomPrice = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  font-size: 25px;
`;
const ReservationRoom = styled.div`
  display: inline-block;
  margin-right: ${props => props.mgr};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  background-color: ${props => props.backColor};
  font-size: ${props => props.fontSize};
`;
const RoomCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 10px 0;
  /* margin: 140px 0 0 0; */
`;
const RoomCheck = styled.div``;
const RoomTime = styled.div``;

const MainText = styled.span`
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 19px;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`;

const InOutTime = styled.div`
  margin-top: 120px;
`;

const Div = styled.div`
  width: 200px;
  padding: 7px;
  background-color: #f7323f;
  font-size: 30px;
  border-radius: 8px;
  border: none;
  color: white;
  text-align: center;
  cursor: pointer;
`;

const CalendarBox = styled.div`
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  margin: 10px 0;
  user-select: none;
`;

export default Detail;
