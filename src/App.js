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

  //taking task input
  function inputHandler(event) {
    setTask(event.target.value);
  }

  //task adding to list
  function addTask() {
    if (task !== "") {
      setList((oldValue) => [...oldValue, task]);
      setTask("");
    } else alert("Please enter any task");
    console.log(task, list, done);
  }

  //deleting task from the list
  function delTask(item) {
    setList((oldValue) => {
      return oldValue.filter((element, index) => {
        return index !== item;
      });
    });
  }

  //checking the task which are done
  function checkDone(itemVal, item) {
    setDone((oldValue) => [...oldValue, itemVal]);
    delTask(item);
    console.log("Deleted");
  }
  return (
    <div className="App">
      <h1>Bucket List</h1>

      <input
        className="taskName"
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={inputHandler}
      />
      <button className="addTaskbtn" onClick={addTask}>
        {" "}
        +{" "}
      </button>

      {/* displaying the tasks */}
      {list.map((itemVal, item) => {
        return (
          <div className="allTask">
            <li key={item}>
              <FontAwesomeIcon
                icon="trash"
                className="fontAwesome"
                onClick={() => delTask(item)}
              />
              {itemVal}
              <FontAwesomeIcon
                className="fontAwesome"
                icon="check-circle"
                onClick={() => checkDone(itemVal, item)}
              />
            </li>
          </div>
        );
      })}

      {/* displaying completed tasks */}
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
