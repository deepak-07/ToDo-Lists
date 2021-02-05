import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function inputHandler(event) {
    var setTask = event.target.value;
    setTask(setTask);
  }
  function addTask() {}
  return (
    <div className="App">
      <h1>To-Do </h1>

      {/* <h2>Start editing to see some magic happen!</h2> */}

      <input
        type="text"
        placeHolder="Enter your task"
        onChange={inputHandler}
      />
      <button onClick={addTask}> + </button>
    </div>
  );
}
