import React, { useState } from "react";
import { addItem, toggleBought, removeItem, editItem } from "./ShoppingListFunctions";

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
  
    return (
      <div className="container">
        <h1>Shopping List</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Add a new item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="add-btn" onClick={() => addItem(newItem, items, setItems, setNewItem)}>Add</button>
        </div>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className={item.isBought ? "bought" : ""}
              onClick={() => toggleBought(item.id, items, setItems)}
            >
              <span>{item.name}</span>
              <div className="button-group">
                <button className="remove-btn" onClick={(e) => { e.stopPropagation(); removeItem(item.id, items, setItems); }}>Remove</button>
                <button className="edit-btn" onClick={(e) => { e.stopPropagation(); editItem(item.id, items, setItems); }}>Edit</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ShoppingList;
