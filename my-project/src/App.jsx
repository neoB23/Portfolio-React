import { useState } from 'react'
import Nav from './components/Navigation.jsx'
import Landing from './components/landingpage.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Skill from './components/Skill.jsx'
import Footer from './components/footer.jsx'
import './index.css';



function App() {
  return (
    <>
    <Nav/>
    <Landing/>
    <About/>
    <Skill/>
    <Project/>
    
    <Footer/>
    </>
    
  );
}

export default App
