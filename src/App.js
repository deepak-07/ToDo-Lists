import "./styles.css";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faTrash);

export default function App() {
  const [categoryList, setCategoryList] = useState([]);
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
    console.log(category, categoryList);
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
    if (taskHead !== "" && task !== "") {
      setCategory((category) => ({
        ...category,
        tname: taskHead
      }));
      setTaskHead("");
      setDone([]);
    } else {
      alert("Please fill them");
    }
    if (list !== "") {
      setCategory((category) => ({
        ...category,
        ttask: list
      }));
      setList([]);
    } else {
      alert("Please enter task");
    }
    if (taskHead !== "" && task !== "") {
      setCategoryList((categoryList) => [
        ...categoryList,
        { tname: taskHead, ttask: list }
      ]);
    }
    // setCategoryList((categoryList) => [...categoryList, { ttask: list }]);

    console.log(category);
    console.log(categoryList);
  }

  return (
    <div className="App">
      <h1>Bucket List</h1>
      {/* input for task category */}
      <input
        className="taskHeading"
        type="text"
        placeholder="Enter heading"
        value={taskHead}
        onChange={inputHandlerTaskHead}
      />
      {/* input for task  */}
      <input
        className="taskName"
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={inputHandlerTask}
      />
      {/* bottin for adding single task */}
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
      {/* button for saving tasks */}
      <button className="groupTaskbtn" onClick={addGroupTask}>
        Done
      </button>

      <div className="groupTask">
        {/* Displaying all saved task group */}
        {categoryList.map((index) => {
          return (
            <div className="finalCategory">
              <span className="categoryName">{index.tname}</span>
              {index.ttask.map((item) => {
                return <li className="categoryList-Li">{item}</li>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
