import './style.css';
import React from 'react';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
import Home from "./Home";
import NavBar from "./navBar";
function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;

