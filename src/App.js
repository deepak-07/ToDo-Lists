import "./styles.css";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faTrash);
export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [done, setDone] = useState([]);

  function inputHandler(event) {
    setTask(event.target.value);
  }

  function addTask() {
    setList((oldValue) => [...oldValue, task]);
    setTask(" ");
    console.log(task, list, done);
  }
  function delTask(item) {
    setList((oldValue) => {
      return oldValue.filter((element, index) => {
        return index !== item;
      });
    });
  }

  function checkDone(itemVal, item) {
    setDone((oldValue) => [...oldValue, itemVal]);
    delTask(item);
    console.log("Deleted");
  }
  return (
    <div className="App">
      <h1>Bucket List</h1>

      {/* <h2>Start editing to see some magic happen!</h2> */}

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={inputHandler}
      />
      <button onClick={addTask}> + </button>

      {list.map((itemVal, item) => {
        return (
          <div className="taskName">
            <li key={item}>
              <FontAwesomeIcon icon="trash" onClick={() => delTask(item)} />
              {itemVal}
              <FontAwesomeIcon
                icon="check-circle"
                onClick={() => checkDone(itemVal, item)}
              />
            </li>
          </div>
        );
      })}
      {done.map((items) => {
        return (
          <div className="taskDone">
            <li key={items} style={{ textDecorationLine: "line-through" }}>
              {items}
            </li>
          </div>
        );
      })}
    </div>
  );
}
