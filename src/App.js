import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import IncreDecre from "./components/IncreDecre";
import FormSubmit from "./components/FormSubmit";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/formSubmit" element={<FormSubmit />} />

            <Route exact path="/increDecre" element={<IncreDecre />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
