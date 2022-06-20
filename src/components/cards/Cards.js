import React from "react";
import Logo from "../../Logo/hexaviewLogo.jpg";

function Cards(props) {
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <img src={Logo} className="card-img-top" alt="logo" />
      <div className="card-body">
        <h5 className="card-title">Card title {props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Cards;
