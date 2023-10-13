import React, { useContext } from "react";

import { TaskListContext } from '../context/TaskListContext';
import Tasks from './Tasks';

const TaskList = (props) => {
const { tasks } = useContext(TaskListContext);

  return (
    <ul className="list">
    {tasks.map((task) => {
        return <Tasks key={task.id} task={task} />
    })}
    </ul>
  )
}

export default TaskList;