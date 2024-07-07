import { BrowserRouter } from "react-router-dom";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Services from './components/Services';
import Hero from './components/Hero';
import Tech from './components/Tech';
import Works from './components/Works';
import StarCanvas from './components/canvas/Stars';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function App() {

  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Services />
        <div className="relative z-0">
          <Contact />
          <StarCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
