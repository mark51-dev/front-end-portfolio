import React from 'react';
import TodoItem from "../todo-item";
import styled from 'styled-components';

const TodoListStyled = styled.ul`
  padding: 0 4px;
  font-family: montserrat;
  font-size: 14px;
`;

const TodoList = ({todoList, handleDeleteItem, changeItemStatus, search}) => {
  const todoItems = () => {
    const searchResult = search !== '' ? todoList
        .filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1): todoList;
    return searchResult.map(item => {
      return (
          <TodoItem item={item} key={item.id} handleDeleteItem={handleDeleteItem} changeItemStatus={changeItemStatus}/>
        );
      });
    };

  return (
      <TodoListStyled>
        {todoItems()}
      </TodoListStyled>
    );
  }
;

export default TodoList;
