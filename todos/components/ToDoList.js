"use client"

import React from 'react'
import { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({name}) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems(values => [...values, newItem]);
      setNewItem("");
    }
  }
  return (
    <div>
      <h1>{name}</h1>
      {items.map((item, index) => (
        <ToDoItem key={index} value = {item} />
      ))}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          required
        />
        <button type="submit" disabled={!newItem.trim()}>Add</button>
      </form>
    </div>
  )
}

export default ToDoList
