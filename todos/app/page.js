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
    setLists((current) => [newList, ...current]);
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
      <form
        onSubmit={handleAddList}
        className="flex flex-col items-center justify-center mt-8 mb-4 p-6 rounded-lg w-full max-w-md mx-auto"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter list name"
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-500 disabled:opacity-50"
        >
          Add List
        </button>
      </form>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-16 gap-8">
        {lists.map((list, index) => (
          <div key={list.id}>
            <List
              name={list.name}
              id={list.id}
              onEditListName={handleEditListName}
            />
            <button
              className="w-full bg-red-400 hover:bg-red-500 text-white rounded-md py-2 mt-2"
              onClick={() => handleDeleteList(list.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
