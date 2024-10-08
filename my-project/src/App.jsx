import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation.jsx';
import Landing from './components/Hero.jsx';
import AboutAndSkills from './components/AboutAndSkills.jsx';
import Project from './components/Project.jsx';
import Footer from './components/footer.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-and-skills" element={<AboutAndSkills />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

