"use client";

import React from "react";
import { useState } from "react";

const List = ({ name, id, onEditListName }) => {
  // List-related states:
  const [editInput, setEditInput] = useState("");
  const [editToggle, setEditToggle] = useState(false);

  // Items-related states:
  const [items, setItems] = useState([]);   // Should we make them objects?!
  const [input, setInputs] = useState("");

  const handleEditList = (e) => {
    e.preventDefault();
    if (editInput.trim()) {
      onEditListName(id, editInput);
      setEditToggle(false);
      setEditInput("");
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      {editToggle ? (
        <>
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
        </>
      ) : (
        <>
          <button onClick={() => setEditToggle(true)}>Edit</button>
        </>
      )}
      // HERE, WE ADD THE items.map()
    </div>
  );
};

export default List;
