import React from "react";

function ShowForm(props) {
  return (
    <div className="container">
      <label>{props.name}</label>
      <label>{props.email}</label>
      <label>{props.number}</label>
    </div>
  );
}

export default ShowForm;
