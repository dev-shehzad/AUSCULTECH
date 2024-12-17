import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Technology from "./pages/technology/Technology";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/technology' element={<Technology/>}/>
        
      </Routes>
    </Router>
  )
}

export default App