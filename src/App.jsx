import { useState } from "react";
import viteLogo from "/vite.svg";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
