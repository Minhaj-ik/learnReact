import React from 'react';

const State = ({ states }) => {
  return (
    <div>
      {states.map((state) => (
        <div key={state.id}>
          <h4>{state.name}</h4>
          <h4>{state.language}</h4>
        </div>
      ))}
    </div>
  );
};

export default State;
