import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = (props) => {
  const { addTask, clearList, editItem, editTasks} =
  useContext(TaskListContext);
  
  const [title, setTitle] = useState("");
  
    const handleChange = (e) => {
      setTitle(e.target.value);
      console.log(title)
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (editItem === null) {
        addTask(title);
        setTitle("");
      } else {
        editTasks(title, editItem.id);
      }
  };
  
    useEffect(() => {
      if (editItem !== null) {
        setTitle(editItem.title)
      } else {
        setTitle("")
      }
    }, [editItem]);
  


  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        onChange={handleChange}
        value={title}
        className="task-input"
        placeholder="Add-task..."
        required
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>

        <button type="submit" className="btn clear-btn" onClick={clearList}>
          {" "}
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
