import React from 'react';
import styled from 'styled-components';
import moment from "moment";

const CalendarItemWrapper = styled.div`
  width: 142.2px;
  height: 100px;
  background: ${props => props.activeDay.day() === 6 || props.activeDay.day() === 0 ? '#282b30': '#20242b'};
  text-align: right;
  border-right: 1px solid #323336;
  border-bottom: 1px solid #323336;
  font-family: moserrat;
  padding: 8px 11px;
  box-sizing: border-box;
  color: ${props => moment().isSame(props.activeDay, 'day') ? '#ed4636': '#54575c'};
`;

const CalendarItem = ({day}) => {
  return (
    <CalendarItemWrapper activeDay={day}>
      {day.date()}
    </CalendarItemWrapper>
  );
};

export default CalendarItem;
