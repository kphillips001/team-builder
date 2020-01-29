import React, { useState } from "react";

const Form = props => {
  const [team, setTeam] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChanges = e => {
    setTeam({
      ...team,
      [e.target.name]: e.target.name
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(team);
    setTeam({name:'', email:'', role: ''});
  };

  return (
    <form>
      
    </form>
  )
}

export default Form; 