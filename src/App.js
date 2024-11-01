// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ImagePage from "./components/ImagePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image/:id" element={<ImagePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
