import React, { useState } from 'react'

const Item = ({ value, id, onEditItemValue, onDeleteItem }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editInput, setEditInput] = useState("");

  const handleEditItem = (e) => {
    e.preventDefault();
    if (editInput.trim()) {
      onEditItemValue(id, editInput);
      setEditToggle(false);
      setEditInput("");
    }
  }

  const handleDeleteItem = (e) => {
    e.preventDefault();
    onDeleteItem(id);
  }

  return (
    <div>
      {editToggle ? (
          <form onSubmit={handleEditItem}>
            <input
              type="text"
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
              placeholder="Edit item"
              required
            />
            <button type="submit" disabled={!editInput.trim()}>
              Confirm
            </button>
          </form>
      ) : (
        <>
          {value}
          <button onClick={() => setEditToggle(true)}>Edit</button>
        </>
      )}
      <button onClick={handleDeleteItem}>Delete</button>
    </div>
  )
}

export default Item
