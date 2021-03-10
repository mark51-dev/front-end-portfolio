import React from 'react';
import styled from 'styled-components';
import Buttons from "./buttons";


const CalendarHeadWrapper = styled.div`
  background: #20242b;
  font-size: 18px;
  font-family: montserrat;
  border-bottom: 1px solid #404043;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
`;

const CalendarMonth = styled.div`
  color: #d4d5d6;
`;


const CalendarButtons = styled.div`
  display: flex;
`;


const CalendarHead = ({nameOfMonth, previus, next, today}) => {
  return (
    <CalendarHeadWrapper>
      <CalendarMonth>
        {nameOfMonth.format('MMMM')} {nameOfMonth.format('YYYY')}
      </CalendarMonth>
      <CalendarButtons>
        <Buttons setValue={previus}>&#60;</Buttons>
        <Buttons setValue={today}>Today</Buttons>
        <Buttons setValue={next}>&#62;</Buttons>
      </CalendarButtons>
    </CalendarHeadWrapper>
  );
};

export default CalendarHead;
