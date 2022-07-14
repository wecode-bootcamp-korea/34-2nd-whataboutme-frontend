import React, { useState } from "react";
import ListCalendar from "./ListCalendar";
import * as S from "./List.styled";

const ListCalendarBox = () => {
  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [date, setDate] = useState([today, tomorrow]);

  const closeCalendar = () => {
    setIsOpenCalendar(false);
    // console.log("백엔드 전송", date);
  };

  return (
    <>
      <S.TextBox onClick={() => setIsOpenCalendar(!isOpenCalendar)}>
        {date[0].getMonth() +
          1 +
          "." +
          date[0].getDate() +
          "~" +
          (date[1].getMonth() + 1) +
          "." +
          date[1].getDate()}
      </S.TextBox>
      {isOpenCalendar && (
        <ListCalendar
          date={date}
          setDate={setDate}
          closeCalendar={closeCalendar}
        />
      )}
    </>
  );
};

export default ListCalendarBox;
