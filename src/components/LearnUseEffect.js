import React, { useState, useEffect } from "react";

function LearnUseEffect() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(() => {
    alert("Incremented value");
    document.title = `You clicked me ${num} times`;
  }, [num]);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Submit {num}
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Submit {nums}
      </button>
    </>
  );
}

export default LearnUseEffect;
