import Calendar from "react-calendar";

import * as S from "./List.styled";
import "react-calendar/dist/Calendar.css";

function ListCalendar({ date, setDate, closeCalendar }) {
  return (
    <S.CalendarBox>
      <Calendar onChange={setDate} value={date} selectRange={true} />
      <S.Button
        width="100%"
        height="33px"
        color="#F6313F"
        backColor="white"
        border="1px solid #F6313F"
        onClick={closeCalendar}
      >
        선택
      </S.Button>
    </S.CalendarBox>
  );
}

export default ListCalendar;
