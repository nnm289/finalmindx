import React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./task.css"
function Task(props) {
  let style = "none";
  if (props.isDone) {
    style = "line-through";
  }
  return (
    <div className="task">
      <Checkbox
        checked={props.isDone}
        onChange={(event) => {
          console.log(event.target.checked);
          props.onChecked(event.target.checked, props.index);
        }}
        sx={{
          color: "skyblue",
          "&.Mui-checked": {
            color: "skyblue",
          },
        
        }}
      />
      <span style={{ textDecoration: style }}>{props.title}</span>
    </div>
  );
}
export default Task;
