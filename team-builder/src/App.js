import React, { useState } from 'react';
import Form from './components/Form'; 
import './App.css';

function App() {
  const [teams, setTeams] = useState([
    {
      id: Date.now(),
      name: 'Kevin',
      email: 'knphillips01@gmail.com',
      role: 'Full Stack Web Developer',
    }
  ])
  
  return (
    <div>
      <Form />
    </div>
  )
}

export default App;
