import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./DropDown.css";
import axios from "axios";

function DropDown() {
  const access_token = "727tuFSLrlj8sqd6azaAyz5JYjmhupmw";

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="/">
              Enterprise Product Development
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Data Science
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Salesforce
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Cloud
            </a>
          </li>
        </ul>
        <button
          onClick={(res) => {
            axios
              .get(
                "https://api.baserow.io/api/database/rows/table/73411/?user_field_names=true",
                {
                  headers: {
                    Authorization: `Token ${access_token}`,
                  },
                }
              )
              .then((res) => {
                console.log(res.data);
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          submit
        </button>
      </div>
    </>
  );
}

export default DropDown;
