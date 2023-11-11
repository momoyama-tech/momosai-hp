import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Project from './pages/Project';
import Access from './pages/Access';
import Notes from './pages/Notes';
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
        <Route path="/notes" element={<Notes />} />
      </Routes>
      <Footer />
    </Router>
  
  );
}

export default App;