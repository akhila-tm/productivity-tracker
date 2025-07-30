import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  /*Function to add tasks */
  const addTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, newTask]);
    setNewTask("");
  };
  /*Function to delete tasks */
  const deleteTask = (i) => {
    let updatedTasks = taskList.filter((_, index) => i !== index);
    setTaskList(updatedTasks);
  };
  return (
    <Home
      newTask={newTask}
      setNewTask={setNewTask}
      addTask={addTask}
      taskList={taskList}
      deleteTask={deleteTask}
    />
  );
}

export default App;
