import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import News from './pages/News';
import Project from './pages/Project';
import Access from './pages/Access';
import './App.css'; 

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/project" element={<Project />} />
        <Route path="/access" element={<Access />} />
      </Routes>
    </Router>
  );
}

export default App;