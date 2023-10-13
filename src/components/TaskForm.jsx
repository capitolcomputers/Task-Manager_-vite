import React, { useState, useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = (props) => {
    const { addTask, removeTask } = useContext(TaskListContext);
    const [title, setTitle] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle("");
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
   
    };


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
          Add Item
        </button>

        <button type="submit" className="btn clear-btn">
          {" "}
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
