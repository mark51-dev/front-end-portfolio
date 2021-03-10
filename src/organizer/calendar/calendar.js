import React from 'react';
import styled from 'styled-components';
import CalendarItem from "./calendar-item";

const CalendarWrapper = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
`;


const Calendar = ({daysOfMonth}) => {
  const day = daysOfMonth.map((day, index) => {
    return <CalendarItem day={day} key={index}/>;
  });
  return (
    <CalendarWrapper>
      {day}
    </CalendarWrapper>
  );

};

export default Calendar;
