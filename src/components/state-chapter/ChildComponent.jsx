import React from 'react';

const ChildComponent = ({ name = 'stranger', count }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
      <span>{count}</span>
    </div>
  );
}

export default ChildComponent;
