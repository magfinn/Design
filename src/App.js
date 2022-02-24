import './App.css';
import Nav from './components/Navigation'
import Project from './components/Project'
import React, { useState } from 'react';

function App() {
  const [projects] = useState([
    {
      name: 'Club Hub Kids',
      description: 'Website for after-school programs and summer camps in the Sacramento Valley.',
    },
    {
      name: 'Destination Unknown',
      description: 'A road trip planner with maps, weather, budget, and event schedule within the United States.'
    },
    {
      name: 'Bubble Space',
      description: 'A social media platform where you can hear from people like you with opinions like yours and like them'
    },
    {
      name: 'Pencil It In',
      description: 'A simple and easy to use daily web-based planner.'
    },
    {
      name: 'Password Generator',
      description: 'A web-based random password generator.'
    }
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
        <Project
        project={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
        ></Project>
  )
};

return (
  <div>
    <Nav />
    <main>
      <Project />
    </main>
  </div>
);

export default App;
