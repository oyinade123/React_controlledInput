import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ handleCheck, handleDelete, x }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={x.checked}
        onChange={() => handleCheck(x.id)}
      />
      <label
        style={x.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(x.id)}
        htmlFor="text"
      >
        {x.item}
      </label>
      <FaTrashAlt role="button" aria-label={`Delete ${x.item}`} onClick={() => handleDelete(x.id)} />
    </li>
  );
};

export default LineItem;
