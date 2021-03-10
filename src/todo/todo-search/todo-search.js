import React from 'react';
import styled from 'styled-components';

const TodoSearchStyled = styled.div`
  & input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 20px;
    transition: .3s;
    font-family: montserrat;
    padding: 15px 15px;
    box-sizing: border-box;
  }
 
  & input::placeholder {
    font-size: 12px;
    padding-left: 2px;
  }
  
  & input:focus {
    outline-color: lightblue;
  }
`;

const TodoSearch = ({handleSearchItem, handleAddItem}) => {
  return (
    <TodoSearchStyled>
      <input type="text" onKeyUp={handleAddItem} onChange={(e) => handleSearchItem(e)} placeholder="Enter your todo name"/>
    </TodoSearchStyled>
  );
};

export default TodoSearch;
