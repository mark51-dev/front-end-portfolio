import React from 'react';
import moment from "moment";
import styled from 'styled-components';

const WeekDaysWrapper = styled.div`
  display: flex;
  width: 995px;
  color: #d4d5d6;
  border-bottom: 1px solid #404043;
  text-align: right;
  padding: 10px 5px;
  box-sizing: border-box;
  font-family: montserrat;
  background: #20242b;
  > div {
    width: 145px;
  }
`;

const OrganizerWeekdays = () => {

  const weekDays = Array(7).fill(undefined)
      .map((_, index) => <div key={index}>
        {moment().startOf('week').add(1 + index, 'day')
        .format('ddd')}
      </div>);
  return (
    <WeekDaysWrapper>
      {weekDays}
    </WeekDaysWrapper>
  );
};

export default OrganizerWeekdays;
