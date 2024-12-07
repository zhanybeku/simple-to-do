"use client";
import React from "react";
import { useState } from "react";
import ToDoList from "./ToDoList";

const DisplayToDoLists = () => {
  const [showForm, setShowForm] = useState(false);
  const [listName, setListName] = useState("");
  const [toDoLists, setToDoLists] = useState([]);

  const createNew = () => {
    setShowForm(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoLists((values) => [...values, listName])
    setListName("");
    setShowForm(false);
  };

  return (
    <div>
      {toDoLists.map((name, index) => (
        <ToDoList key={index} name={name} />
      ))}
      <div className="lists">
        {showForm && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              placeholder="Enter list name"
              required
            />
            <button type="submit" disabled={!listName.trim()}>Create</button>
          </form>
        )}
      </div>
      <button onClick={createNew}>Add New List</button>
    </div>
  );
};

export default DisplayToDoLists;
