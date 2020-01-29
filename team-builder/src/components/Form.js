import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChange = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({id: Date.now(), name:'', email:'', role:''});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name</label>
        <input 
          id='name'
          type='text'
          placeholder='Enter Team Member'
          onChange = {handleChange}
          name='name'
          value={member.name}
        /> 
      <label htmlFor='email'>Email</label>
        <input 
          id='email'
          type='email'
          placeholder='Enter Your Email'
          onChange = {handleChange}
          name='email'
          value={member.email}
        />
      <label htmlFor='role'>Role</label> 
        <input 
          id='role'
          type='text'
          placeholder='Enter Role'
          name='role'
          onChange = {handleChange}
          value={member.role}
        />
      <button type='submit'>Add Member</button>
    </form>
  )
}

export default Form; 