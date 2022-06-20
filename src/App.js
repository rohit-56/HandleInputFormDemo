import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import IncreDecre from "./components/IncreDecre";
import FormSubmit from "./components/FormSubmit";
import Todolist from "./components/Todolist";
import LearnUseEffect from "./components/LearnUseEffect";
import ImplCarousel from "./components/learnCarousel/ImplCarousel";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/formSubmit" element={<FormSubmit />} />

            <Route exact path="/increDecre" element={<IncreDecre />} />

            <Route exact path="/todolist" element={<Todolist />} />

            <Route exact path="/learnUseEffect" element={<LearnUseEffect />} />
            <Route exact path="/learnCarousel" element={<ImplCarousel />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
