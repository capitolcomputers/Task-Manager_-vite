import React, { useContext } from "react";

import { TaskListContext } from '../context/TaskListContext';
import Tasks from './Tasks';

const TaskList = (props) => {
const { tasks } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length > 0 ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Tasks key={task.id} task={task} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Task Available! 🤔</div>
      )}
    </div>
  );
}

export default TaskList;