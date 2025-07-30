import React from "react";
import { FaTrash } from "react-icons/fa6";

const Home = ({ newTask, setNewTask, addTask, taskList, deleteTask }) => {
  return (
    <div className="homePage">
      <h1>Productivity Tracker</h1>
      <form className="">
        <div className="inputField ">
          <input
            type="text"
            className="form-control"
            required
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="addButton">
          <button
            type="submit"
            className="btn btn-success"
            onClick={(e) => addTask(e)}
          >
            Add Task
          </button>
        </div>
      </form>
      <div className="tasklist">
        {taskList.length > 0 && (
          <ul className="list-group">
            {taskList.map((item, index) => (
              <li className="list-group-item" key={index}>
                <div className="taskItem">
                  {item}
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteTask(index)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
