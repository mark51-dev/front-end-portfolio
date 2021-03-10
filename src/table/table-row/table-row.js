import React from 'react';
import styled from 'styled-components';

const TableRowStyled = styled.tr`
  td {
    padding: 15px 0;
    font-family: montserrat;
    font-size: 12px;
  }

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableRow = ({listItem}) => {
  const getAllItems = () => {
    return listItem.map((item, idx) => {
      return (
        <TableRowStyled key={idx}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
        </TableRowStyled>
      );
    });
  };
  return (
    <tbody>
     {getAllItems()}
    </tbody>
  );
};

export default TableRow;
