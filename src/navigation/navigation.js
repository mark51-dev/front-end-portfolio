import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, NavLink, Switch, Link} from "react-router-dom";

const NavigationStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  
  li {
    margin-right: 10px;
    
  }
  
  a {
    color: black;
    font-weight: 700;
    font-family: montserrat;
    text-decoration: none;
    transition: .3s;
  }
  
  a:hover {
    color: #8A2BE2;
  }
`;

const Navigation = () => {
  const navigation = [
    {
      path: '/',
      name: 'Orgranizer'
    },
    {
      path: '/table',
      name: 'Sort table'
    },
    {
      path: '/todo',
      name: 'Todo'
    }
  ];

  const navList = navigation.map(item => <li><Link to={item.path}>{item.name}</Link></li>);

  return (
    <nav>
      <NavigationStyled>
        {navList}
      </NavigationStyled>
    </nav>
  );
};

export default Navigation;
