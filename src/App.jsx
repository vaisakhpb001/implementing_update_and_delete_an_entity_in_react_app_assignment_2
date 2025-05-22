// src/App.jsx
import React from "react";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Item List with Delete</h1>
      <ItemList />
    </div>
  );
}

export default App;
