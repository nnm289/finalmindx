import "./App.css";
import React from "react";
// import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views";
import Active from "./views/active";
import Done from "./views/done";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/active" element={<Active />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </Router>
  );
}

export default App;
