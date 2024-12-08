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
    <div className="border-2 border-blue-100 rounded-lg pl-2 pr-2">
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
          <h3 className="font-bold text-xl mt-3">{name}</h3>
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

      <form onSubmit={handleItemSubmit} className="flex items-center justify-between mb-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new item"
          required
          className="flex-grow border-2 border-blue-200 rounded-md px-2 py-1"
        />
        <button type="submit" disabled={!input.trim()} className="bg-blue-400 hover:bg-blue-500 hover:cursor-pointer text-white w-[64px] h-9 mr-[6px] ml-3 rounded-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default List;
