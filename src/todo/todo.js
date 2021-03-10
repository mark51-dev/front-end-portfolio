import React, {useState, useCallback} from 'react';
import TodoList from "./todo-list";
import TodoSearch from "./todo-search";
import styled from 'styled-components';

const TodoStyled = styled.div`
  width: 650px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.05);
  box-sizing: border-box;
  padding: 20px;
`;

const Todo = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      name: 'Todo item 0',
      done: false,
      important: false
    },
    {
      id: 1,
      name: 'Todo item 1',
      done: false,
      important: false
    },
    {
      id: 2,
      name: 'Todo item 2',
      done: false,
      important: false
    },
    {
      id: 3,
      name: 'Todo item 3',
      done: false,
      important: false
    },
  ]);
  const [search, setSearch] = useState('');

  const changeItemStatus = (nameProp, id) => {
    const selectedItemIndex = todoList.findIndex(item => item.id === id);
    const objectCopy = {...todoList[selectedItemIndex]};
    objectCopy[nameProp] = !objectCopy[nameProp];
    const newList = [...todoList.slice(0, selectedItemIndex), ...[objectCopy], ...todoList.slice(selectedItemIndex + 1)];
    setTodoList(newList);
  };

  const handleDeleteItem = (id) => {
    const listItem = todoList.filter(item => item.id !== id);
    setTodoList(listItem);
  };

  const handleSearchItem = (e) => {
    const targetValue = e.target.value;
    setSearch(targetValue);
  };

  const handleAddItem = (e) => {
    if (e.keyCode === 13 && e.target.value !== '') {
      const newItem = {id: Math.floor(Math.random() * 100000), name: e.target.value, done: false, important: false};
      setTodoList(prevState => prevState.concat([newItem]));
      console.log(todoList);
      setSearch(e.target.value = '');
    }
  };

  return (
    <TodoStyled>
      <TodoSearch handleSearchItem={handleSearchItem} handleAddItem={handleAddItem}/>
      {todoList.length ? <TodoList search={search} todoList={todoList} handleDeleteItem={handleDeleteItem}
                                   changeItemStatus={changeItemStatus}/> : <div>List is empty</div>}
    </TodoStyled>
  );
};

export default Todo;
