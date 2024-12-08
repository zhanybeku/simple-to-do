import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const Item = ({ value, id, onEditItemValue, onDeleteItem }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editInput, setEditInput] = useState("");
  const [done, setDone] = useState(false);

  const handleEditItem = (e) => {
    e.preventDefault();
    if (editInput.trim()) {
      onEditItemValue(id, editInput);
      setEditToggle(false);
      setEditInput("");
    }
  };

  const handleDeleteItem = (e) => {
    e.preventDefault();
    onDeleteItem(id);
  };

  const changeDone = () => {
    setDone((current) => !current);
  };

  return (
    <div>
      {editToggle ? (
        <form
          onSubmit={handleEditItem}
          className="flex items-center mx-3 my-1 p-1 border-2 border-blue-100 rounded-md"
        >
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            placeholder="Edit item"
            required
            className="flex-grow border-2 border-blue-200 rounded-md px-2"
          />
          <button
            type="submit"
            disabled={!editInput.trim()}
            className="bg-green-300 ml-3 px-3 rounded-md"
          >
            Confirm
          </button>
        </form>
      ) : (
        <div
          className={`flex justify-between items-center ml-2 mr-3 my-1 p-1 border-2 ${
            done ? "border-green-200" : "border-blue-100"
          } rounded-md ${done && "bg-green-100"}`}
        >
          <div className="flex items-center">
            <div className="mr-2 flex items-center justify-start">
              {done ? (
                <MdCheckBox
                  size={20}
                  color="green"
                  className="ml-2 mr-2 cursor-pointer"
                  onClick={changeDone}
                />
              ) : (
                <MdCheckBoxOutlineBlank
                  size={20}
                  className="ml-2 mr-2 cursor-pointer"
                  onClick={changeDone}
                />
              )}
            </div>
            <p> {value}</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setEditToggle(true)}
              className="bg-blue-400 hover:bg-blue-500 rounded-md ml-2 p-1"
            >
              <MdEdit size={20} color="white" />
            </button>
            <button
              onClick={handleDeleteItem}
              className="bg-red-500 hover:bg-red-600 rounded-md ml-2 p-1"
            >
              <MdDelete size={20} color="white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
