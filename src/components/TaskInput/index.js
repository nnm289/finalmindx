import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./taskinput.css";


const TaskInput = (props) => {
  const [taskName, setTaskName] = useState("");
  const onClickBtn = () => {
    props.onTaskChange(taskName);
    setTaskName("");
  };
  return (
    <div className="input">
      <TextField
        id="standard-basic"
        value={taskName}
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
        variant="standard"
        placeholder="Enter your task here ..."
      />

      <Button
        onClick={onClickBtn}
        className="btn"
        variant="text"
        sx={{
          color: "skyblue",

        }}
      >
        Add
      </Button>
    </div>
  );
};

export default TaskInput;
