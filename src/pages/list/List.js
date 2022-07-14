import React, { useState, useEffect } from "react";
import ListHeader from "./ListHeader";
import RoomSortLine from "./RoomSortLine";
import RoomLists from "./RoomLists";
import ListFiltering from "./ListFiltering";
import { getDistance } from "geolib";

import * as S from "./List.styled";

const List = () => {
  const [roomList, setRoomList] = useState([]);
  const [realList, setRealList] = useState();
  const [selectedSort, setSelectedSort] = useState("거리순");
  const [filterings, setFilterings] = useState({
    themes: "",
    price: "100",
    distance: "100000",
  });
  const [myPosition, setMyPosition] = useState({ lati: "", long: "" });

  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  async function getLoc() {
    let obj = { ...myPosition };
    try {
      let position = await getPosition();

      obj.lati = position.coords.latitude;
      obj.long = position.coords.longitude;

      setMyPosition(obj);
    } catch (err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);

      obj.userLat = 37.50591;
      obj.userLng = 127.05401;

      setMyPosition(obj);
    }
  }

  useEffect(() => {
    getLoc();
  }, []);

  // useEffect(() => {
  //   if (!myPosition.lati) return;
  //   fetch("data/listData.json", {
  //     method: "GET",
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       data.forEach(list => {
  //         list.distance = getDistance(
  //           {
  //             latitude: myPosition.lati,
  //             longitude: myPosition.long,
  //             // latitude: 37.50591,
  //             // longitude: 127.05401,
  //           },
  //           {
  //             latitude: Number(list.latitude),
  //             longitude: Number(list.longtitude),
  //           }
  //         );
  //       });

  //       data.sort((a, b) => a.distance - b.distance);

  //       setRoomList(data);
  //       setRealList(data);
  //     });
  // }, [myPosition]);

  useEffect(() => {
    fetch("http://10.58.1.238:8080/products", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        data.products.map(list => {
          list.distance = getDistance(
            {
              latitude: myPosition.lati,
              longitude: myPosition.long,
              // latitude: 37.50591,
              // longitude: 127.05401,
            },
            {
              latitude: Number(list.latitude),
              longitude: Number(list.longtitude),
            }
          );
          return list;
        });

        data.products.sort((a, b) => a.distance - b.distance);

        setRoomList(data.products);
        setRealList(data.products);
      });
  }, [myPosition]);

  const goFiltering = () => {
    let newArr = [...realList];
    filterings.themes &&
      (newArr = newArr.filter(val => val.themes.includes(filterings.themes)));
    newArr = newArr.filter(val => val.price < filterings.price * 10000);
    newArr = newArr.filter(val => val.distance < filterings.distance);
    setRoomList(newArr);
    setSelectedSort("거리순");
  };

  const goInitial = () => {
    window.location.replace("/list");
  };

  const handleFilter = e => {
    const { value, name } = e.target;
    setFilterings({ ...filterings, [name]: value });
  };

  return (
    <>
      {/* 헤더 */}
      <S.ListCotainer backColor="#F6313F">
        <ListHeader getLoc={getLoc} />
      </S.ListCotainer>

      {/* 메인 */}
      <S.ListCotainer backColor="white" mg="50px 0 0 0">
        {/* 필터링  */}
        <ListFiltering
          goFiltering={goFiltering}
          goInitial={goInitial}
          handleFilter={handleFilter}
          filterings={filterings}
        />
        {/* 리스트 */}
        <S.ListBox>
          <RoomSortLine
            roomList={roomList}
            setRoomList={setRoomList}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            myPosition={myPosition}
          />
          {myPosition.lati ? (
            <RoomLists roomList={roomList} />
          ) : (
            <S.ListItem direction="column" alItem="center">
              <S.ListImg
                src="images/list/loading.gif"
                alt="loading..."
                mg="60px 0"
              />
            </S.ListItem>
          )}
        </S.ListBox>
      </S.ListCotainer>
    </>
  );
};

export default List;
