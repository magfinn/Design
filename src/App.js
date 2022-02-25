import './App.css';
import Nav from './components/Navigation';
import Project from './components/Project';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  return(
    <div>
      <Nav />
    <main>
      <About />
      <Project />
    </main>
    </div>
  );
  }

export default App;
