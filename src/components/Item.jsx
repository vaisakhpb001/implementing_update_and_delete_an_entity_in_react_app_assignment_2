// src/components/Item.jsx
import React from "react";

const Item = ({ item, onDelete }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>{item.name}</span>
      <button onClick={() => onDelete(item.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
};

export default Item;
