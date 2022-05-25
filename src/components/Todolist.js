import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./todolist.css";

function Todolist() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInput = () => {
    const newList = [input, ...list];
    setList(newList);
    setInput("");
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="main_div">
      <Box
        sx={{
          width: 500,
          height: 600,
          backgroundColor: "pink",
          //   "&:hover": {
          //     backgroundColor: "black",
          //     opacity: [0.9, 0.8, 0.7],
          //   },
          marginTop: 15,
          marginBottom: 20,
        }}
      >
        <div className="">
          <h1>To Do List</h1>
          <input
            type="text"
            onChange={handleOnChange}
            placeholder="Add To Do Work"
            value={input}
          />
          <Button variant="contained" onClick={handleInput}>
            Contained
          </Button>
          <ul>{list}</ul>
        </div>
      </Box>
    </div>
  );
}

export default Todolist;
