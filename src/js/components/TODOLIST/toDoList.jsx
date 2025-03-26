import React, { useState, useEffect } from "react";
import "./toDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState("");
  const [allTask, setAllTask] = useState([]);

  const addTask = () => {
    if (tasks !== "") {
      setAllTask(() => [...allTask, tasks]);
      setTasks("");
    }
  };

  const deleteTask = (del) => {
    setAllTask((prev) => {
      return prev.filter( (task) => task !== del);
    });
  };
  const listOfTasks = allTask.map((item, index) => (
    <tr key={index} 
    >{item} ☑️
    <span 
    className="deleteCan"
    onClick={
      () => deleteTask(item)
    }>🗑
    </span>
    </tr>
  ));

  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a tasks"
        onChange={(e) => setTasks(e.target.value)}
        value={tasks}
      />
      <button onClick={addTask}>Add tasks</button>

      <div className="list-one">
       <div className="list-two">
         <div className="list-three">
          <table>{listOfTasks}</table>
         </div>
       </div>
      </div>
    </div>
  );
};

export default ToDoList;
