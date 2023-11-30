import React, { useState } from 'react';

const Hint = ({ text }) => {
  const [visibility, setVisibility] = useState(true);
  const onButtonClick = () => setVisibility((actual) => !actual);
  const textStyle = {
    position: 'fixed',
    inset: 0,
    height: 'fit-content',
    background: 'red',
    color: 'white',
    margin: 0,
    padding: '4px 8px',
  }
  const buttonStyle = {
    position: 'fixed',
    right: 0,
    top: 0,
    padding: '4px 8px',
  }

  return (
    <div>
      {visibility && <p style={textStyle}>{text}</p>}
      <button style={buttonStyle} onClick={onButtonClick}>{visibility ? 'скрыть текст' : 'показать текст'}</button>
    </div>
  );
}

export default Hint;
