import React from "react";
import {  Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>

  );
}

export default App;
