import React, { useState } from "react";
import "../IncreDecre.css";

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
    <div className="container">
      <label htmlFor="values" className="Value">
        {input}
      </label>
      <button className="btn1" onClick={handleIncrement}>
        INCREMENT
      </button>
      <button className="btn2" onClick={handleDecrement}>
        DECREMENT
      </button>
    </div>
  );
}

export default IncreDecre;
