import React from "react";
import "./delete.css";
// import { taskList } from ".todo/src/views/index.js";
import { Button } from "@mui/material";

const Delete = ({onDeleteAll}) => {
  const deleteAll = () => {
    // taskList = [];
  };

  return (
    <div className="delete">
      <Button
        onClick={onDeleteAll}
        className="btn"
        variant="text"
        sx={{
          color: "red",
        }}
      >
        Delete All
      </Button>
    </div>
  );
};
export default Delete;
