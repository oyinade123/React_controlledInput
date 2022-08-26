import React from 'react'
import LineItem from './LineItem';



const ItemList = ({handleCheck, handleDelete, items }) => {
  return (
    <ul>
      {items.map((x) => (
        <LineItem
          key={x.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          x={x}
        />
      ))}
    </ul>
  );
}

export default ItemList