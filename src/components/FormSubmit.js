import React, { useState } from "react";
import ShowForm from "./ShowForm";

function FormSubmit() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleEvent = (event) => {
    const { name, value } = event.target;

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>
        Hello {input.name} ,{input.email}, {input.number}
      </h1>
      <form onClick={submitForm}>
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          name="name"
          value={input.name}
          onChange={handleEvent}
        />
        <input
          type="text"
          placeholder="ENTER YOUR EMAIL"
          name="email"
          value={input.email}
          onChange={handleEvent}
        />

        <input
          type="text"
          placeholder="ENTER YOUR NUMBER"
          name="number"
          value={input.number}
          onChange={handleEvent}
        />
        <button className="btn-btn primary">SUBMIT DETAILS</button>
      </form>
    </>
  );
}

export default FormSubmit;
