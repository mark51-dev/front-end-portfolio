import React from 'react';
import styled from 'styled-components';

const TableHeadingStyled = styled.th`
  padding: 20px 0;
  font-family: montserrat;
  font-size: 14px;
  background-color: #483D8B;
  color: white;
`;


const TableHeading = ({listItem, handleOnClick, orderBy, sortBy}) => {
  const getAllCellsNames = () => {
    return Object.keys(listItem[0]).map((item, idx) => {
      return (
          <TableHeadingStyled key={idx}>
            <span onClick={(e) => handleOnClick(e)}>{`${item}`}</span>
            <span> {`${sortBy === item ? orderBy: ''}`}</span>
          </TableHeadingStyled>
      );
    });
  };
  return (
    <React.Fragment>
      <thead>
        <tr>
          {getAllCellsNames()}
        </tr>
      </thead>
    </React.Fragment>
  );
};

export default TableHeading;
