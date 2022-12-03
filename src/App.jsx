import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./components/Project";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App