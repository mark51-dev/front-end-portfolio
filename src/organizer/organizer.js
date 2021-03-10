import React, {useState} from 'react';
import moment from "moment";
import styled from 'styled-components';
import Calendar from "./calendar";
import OrganizerWeekdays from "./organizer-weekdays";
import CalendarHead from "./calendar-head";

const OrganizerWrapper = styled.div`
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  width: 995px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Organizer = () => {
  const [currentMoment, setCurrentMoment] = useState(moment());
  const [month, setMonth] = useState(0);
  const previus = () => {
    setMonth((prev) => ++prev);
  };

  const today = () => {
    setMonth(() => 0);
  };

  const next = () => {
    setMonth((prev) => --prev);
  };

  const selectedMonth = currentMoment.clone().subtract(month, 'months').startOf('month');
  const startOfMonth = selectedMonth.startOf('week');
  const daysOfMonth = Array(35).fill(undefined).map((_, index) => moment(startOfMonth).add(index + 1, 'day'));
  return (
    <OrganizerWrapper>
      <CalendarHead nameOfMonth={currentMoment.clone().subtract(month, 'months')} previus={previus} next={next} today={today}/>
      <OrganizerWeekdays />
      <Calendar daysOfMonth={daysOfMonth} />
    </OrganizerWrapper>
  );
};

export default Organizer;
