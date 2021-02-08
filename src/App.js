import "./styles.css";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faTrash);

export default function App() {
  const [category, setCategory] = useState({ tname: "", ttask: [] });
  const [taskHead, setTaskHead] = useState("");
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [done, setDone] = useState([]);

  //taking heading of task
  function inputHandlerTaskHead(event) {
    setTaskHead(event.target.value);
  }

  //taking task input
  function inputHandlerTask(event) {
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

  //saving category
  function addGroupTask() {
    setCategory((category) => ({
      ...category,
      tname: taskHead
    }));
    setCategory((oldValue) => ({
      ...oldValue,
      // tname: taskHead
      ttask: list
    }));
    setTaskHead("");
    setList([]);

    console.log(category);
  }

  return (
    <div className="App">
      <h1>Bucket List</h1>

      <input
        className="taskHeading"
        type="text"
        placeholder="Enter heading"
        value={taskHead}
        onChange={inputHandlerTaskHead}
      />
      <input
        className="taskName"
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={inputHandlerTask}
      />
      <button className="addTaskbtn" onClick={addTask}>
        +
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
      <button className="groupTaskbtn" onClick={addGroupTask}>
        Done
      </button>

      <div className="groupTask">
        <span className="subHead"> {category.tname}</span>
        {category.ttask.map((index) => {
          return (
            <div key={index}>
              <li>{index}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
}
