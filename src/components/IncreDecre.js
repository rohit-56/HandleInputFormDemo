import React, { useState } from "react";
import "../IncreDecre.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function IncreDecre(props) {
  const [input, setInput] = useState("0");

  const handleIncrement = () => {
    const val = input.valueOf(input);
    console.log(parseInt(val, 10) + 1);
    setInput(parseInt(val, 10) + 1);
  };

  const handleDecrement = () => {
    const val = input.valueOf(input);
    if (val === 0) alert("Limit Exceeded");
    else setInput(parseInt(val, 10) - 1);
  };

  return (
    <>
      <Box
        sx={{
          width: 400,
          height: 400,
          backgroundColor: "pink",
          "&:hover": {
            backgroundColor: "black",
            opacity: [0.9, 0.8, 0.7],
          },
          marginTop: 15,
          marginLeft: 70,
        }}
        className="main_div"
      >
        <div className="center_div">
          <h1>{input}</h1>
          <div className="btn_div">
            <Button variant="contained" onClick={handleIncrement}>
              <AddIcon />
            </Button>
            <Button variant="contained" onClick={handleDecrement}>
              <RemoveIcon />
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}

export default IncreDecre;
