import React from 'react';

const Members = props => {
    console.log(props);
    return (
        <div>
          {props.members.map(member => (
           <div key={member.id}>
             <h2>{member.name}</h2>
             <h4>{member.email}</h4>
             <h4>{member.role}</h4>
           </div>
            ))}
        </div>
    );
};

export default Members;