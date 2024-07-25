import { useState } from 'react'
import Nav from './components/Navigation.jsx'
import Landing from './components/landingpage.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/footer.jsx'
import './index.css';


function App() {
  return (
    <>
    <Nav/>
    <Landing/>
    <About/>
    <Project/>
    <Skills/>
    <Footer/>
    </>
    
  );
}

export default App
