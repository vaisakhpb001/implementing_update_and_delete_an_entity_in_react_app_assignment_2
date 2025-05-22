// src/components/ItemList.jsx
import React, { useEffect, useState } from "react";
import Item from "./Item";

const API_URI = "http://localhost:3000/items"; // or wherever your db.json is serving

const ItemList = () => {
  const [items, setItems] = useState([]);

  // Fetch items from the server
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URI);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };

  // Delete item handler
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setItems(items.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete item:", await response.text());
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ItemList;
