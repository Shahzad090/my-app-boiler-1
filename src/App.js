import './App.css';
import 'antd/dist/reset.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Input } from "antd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/contact" element={<Contact />} /> 
        
      </Routes>
    </Router>
  );
}


export default App;
