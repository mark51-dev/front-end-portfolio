import React from 'react';
import styled from "styled-components";

const CalendarButtons = styled.div`
  & button {
    border-radius: 5px;
    border: 2px solid #323336;
    color: #d4d5d6;
    background: #282b30;
    cursor: pointer;
    outline: unset;
  }
`;

const Buttons = ({children, setValue}) => {
  return (
    <CalendarButtons>
      <button onClick={() => setValue()}>{children}</button>
    </CalendarButtons>
  );
};

export default Buttons;
