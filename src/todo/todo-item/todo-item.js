import React from 'react';
import styled from 'styled-components';

const TodoItemSyled = styled.li`
  display: flex;
  justify-content: space-between;
`;

const TodoItemButtonStyled = styled.div`
  & button {
    margin-left: 10px;
    border: none;
    background: #4B0082;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 8px;
  }
`;

const TodoItemSpanStyled = styled.span`
  text-decoration: ${props => props.done ? 'line-through': null};
  font-weight: ${props => props.important ? 'bold': null};
`;

const TodoItem = ({item: {name, id, done, important}, handleDeleteItem, changeItemStatus}) => {

  return (
    <TodoItemSyled>
      <TodoItemSpanStyled done={done} important={important} onClick={() => changeItemStatus('done', id)}>{name}</TodoItemSpanStyled>
      <TodoItemButtonStyled>
        <button onClick={() => changeItemStatus('important', id)}>Important</button>
        <button onClick={() => handleDeleteItem(id)}>Delete</button>
      </TodoItemButtonStyled>
    </TodoItemSyled>
  );
};

export default TodoItem;
