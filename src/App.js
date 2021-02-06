import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function inputHandler(event) {
    setTask(event.target.value);
  }
  function addTask() {
    setList((oldValue) => [...oldValue, task]);
    setTask(" ");
    console.log(task, list);
  }
  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* <h2>Start editing to see some magic happen!</h2> */}

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={inputHandler}
      />
      <button onClick={addTask}> + </button>

      {list.map((item) => {
        return <li key={item}> {item} </li>;
      })}
    </div>
  );
}
