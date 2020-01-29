import React, { useState } from 'react';
import Form from './components/Form'; 
import Members from './components/Members';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: Date.now(),
      name: 'Kevin',
      email: 'knphillips01@gmail.com',
      role: 'Full Stack Web Developer',
    }
  ])

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember])
  }
  
  return (
    <div>
      <h1>My Team Members</h1>
      <Form addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  )
}

export default App;
