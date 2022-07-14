import React, { useState } from "react";

import Modal from "react-modal";
import KakaoMap from "./KakaoMap";
import * as S from "./List.styled";

const RoomSortLine = ({
  roomList,
  setRoomList,
  selectedSort,
  setSelectedSort,
  myPosition,
}) => {
  const [isModal, setIsModal] = useState(false);

  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <S.ListItem>
      {SORTLINE.map(value => {
        return (
          <S.Sorting
            key={value.id}
            width="30%"
            color={selectedSort === value.name ? "#F6313F" : "#9c9c9c"}
            onClick={() => {
              if (value.name === "거리순") {
                setSelectedSort("거리순");
                let newArr = [...roomList];
                newArr.sort((a, b) => a.distance - b.distance);
                setRoomList(newArr);
              } else if (value.name === "낮은 가격순") {
                setSelectedSort("낮은 가격순");
                let newArr = [...roomList];
                newArr.sort((a, b) => a.price - b.price);
                setRoomList(newArr);
              } else if (value.name === "높은 가격순") {
                setSelectedSort("높은 가격순");
                let newArr = [...roomList];
                newArr.sort((a, b) => b.price - a.price);
                setRoomList(newArr);
              }
            }}
          >
            {value.name}
          </S.Sorting>
        );
      })}

      <S.Sorting
        width="10%"
        mg="0 0 0 10px"
        onClick={() => setIsModal(!isModal)}
      >
        지도
      </S.Sorting>
      <Modal
        isOpen={isModal}
        style={ModalStyle}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <KakaoMap myPosition={myPosition} roomList={roomList} />
        <S.Button
          width="25px"
          height="100%"
          color="#F6313F"
          backColor="white"
          border="1px solid #F6313F"
          onClick={closeModal}
        >
          닫기
        </S.Button>
      </Modal>
    </S.ListItem>
  );
};

const SORTLINE = [
  { id: 1, name: "거리순" },
  { id: 2, name: "낮은 가격순" },
  { id: 3, name: "높은 가격순" },
];

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    zIndex: 10,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    background: "#ffffe7",
    overflow: "auto",
    top: "20vh",
    left: "30vw",
    right: "20vw",
    bottom: "20vh",
    width: "600px",
    height: "500px",
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    zIndex: 10,
  },
};

export default RoomSortLine;
