"use client";
import React, { useState } from "react";
import List from "@components/List";

const Home = () => {
  const [lists, setLists] = useState([]);
  const [idCount, setIdCount] = useState(0);
  const [input, setInput] = useState("");

  const handleAddList = (e) => {
    e.preventDefault();
    const newList = {
      id: idCount,
      name: input,
    };
    setLists((current) => [...current, newList]);
    setIdCount((count) => count + 1);
    setInput("");
  };

  const handleEditListName = (id, newName) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === id ? { ...list, name: newName } : list
      )
    );
  };

  const handleDeleteList = (id) => {
    setLists((prevLists) => prevLists.filter((list) => list.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleAddList}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter list name"
          required
        />
        <button type="submit" disabled={!input.trim()}>
          Add List
        </button>
      </form>

      {lists.map((list, index) => (
        <div key={list.id}>
          <List
            name={list.name}
            id={list.id}
            onEditListName={handleEditListName}
          />
          <button onClick={() => handleDeleteList(list.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
