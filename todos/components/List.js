"use client";

import React from "react";
import { useState } from "react";
import Item from "./Item";

const List = ({ name, id, onEditListName }) => {
  // List-related states:
  const [editInput, setEditInput] = useState("");
  const [editToggle, setEditToggle] = useState(false);

  // Items-related states:
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [idCount, setIdCount] = useState(0);

  const handleEditList = (e) => {
    e.preventDefault();
    if (editInput.trim()) {
      onEditListName(id, editInput);
      setEditToggle(false);
      setEditInput("");
    }
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: idCount,
      value: input,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setIdCount((idCount) => idCount + 1);
    setInput("");
  };

  const handleEditItem = (id, newValue) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {editToggle ? (
        <form onSubmit={handleEditList}>
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            placeholder="Edit list name"
            required
          />
          <button type="submit" disabled={!editInput.trim()}>
            Confirm
          </button>
        </form>
      ) : (
        <>
          <h3>{name}</h3>
          <button onClick={() => setEditToggle(true)}>Edit</button>
        </>
      )}

      {items.map((item, index) => (
        <Item
          key={item.id}
          value={item.value}
          id={item.id}
          onEditItemValue={handleEditItem}
          onDeleteItem={handleDeleteItem}
        />
      ))}

      <form onSubmit={handleItemSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new item"
          required
        />
        <button type="submit" disabled={!input.trim()}>
          Add
        </button>
      </form>
    </div>
  );
};

export default List;
