import './App.css';
import Nav from './components/Navigation';
import Project from './components/Project';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  return(
    <div>
      <Nav></Nav>
    <main>
      <About></About>
    </main>
    </div>
  );
  }

export default App;
