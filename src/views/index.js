import React, { useState } from "react";
import Header from "../components/Header";
import Task from "../components/Task";
import TaskInput from "../components/TaskInput";
import Delete from "../components/Delete";


function All() {
  const [taskList, setTaskList] = useState([]);
  const onTaskChange = (task) => {
    let newArr = [...taskList];
    newArr.push({ isDone: false, taskName: task });
    setTaskList(newArr);
  };

  const onChecked = (checked, index) => {
    let newArr = [...taskList];
    newArr[index].isDone = checked;
    setTaskList(newArr);
  };

  const deleteAll = ()=>{
    setTaskList([])
  }

console.log(taskList);
  return (
    <div>
      <Header></Header>
      <TaskInput onTaskChange={onTaskChange} />

      <div className="task-list">
        {taskList.map((task, index) => (
          <Task
            title={task.taskName}
            isDone={task.isDone}
            key={index}
            index={index}
            onChecked={onChecked}
          />
        ))}
       
      </div>
<Delete onDeleteAll = {deleteAll}></Delete>
    </div>
  );
}

export default All


