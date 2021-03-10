import React, {useState, useEffect} from 'react';
import TableHeading from "./table-heading";
import TableRow from "./table-row/table-row";
import styled from 'styled-components';
import _ from 'lodash';

const TableStyled = styled.table`
  border-collapse: collapse;
  width: 800px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.05);
`;

const Table = () => {
  // eslint-disable-next-line no-unused-vars
  const [listItem, setListItem] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [orderBy, setOrderBy] = useState('desc');
  const [sortBy, setSortBy] = useState('id');

  useEffect(() => {
    _fetchAllItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function _fetchAllItems() {
    const itemList = await fetch('http://www.filltext.com/?rows=10&id=%7Bindex%7D&fname=%7BfirstName%7D&lname=%7BlastName%7D&phone=%7Bphone%7D&email=%7Bemail%7D&pretty=true').then(res => res.json());
    const res = _.orderBy(itemList, sortBy, orderBy);
    setListItem(res);
  }


  const handleOnClick = (e) => {
    const targetToSort = e.target.innerText;
    const res = _.orderBy(listItem, targetToSort, orderBy);
    setListItem(res);
    setSortBy(targetToSort);
    const selectedOrder = orderBy === 'desc' ? 'asc': 'desc';
    setOrderBy(selectedOrder);
  };

  return (
    <React.Fragment>
      {listItem.length ? <TableStyled>
        <TableHeading listItem={listItem} handleOnClick={handleOnClick} sortBy={sortBy} orderBy={orderBy}/>
        <TableRow listItem={listItem}/>
      </TableStyled>: <div>LIST IS EMPTY</div>}
    </React.Fragment>
  );
};


export default Table;
