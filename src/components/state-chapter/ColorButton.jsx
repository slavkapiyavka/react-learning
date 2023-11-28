import React, { useState } from 'react';

const ColorButton = () => {
  const [color, setColor] = useState('#000');
  const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
  const textStyle = {
    color,
    'font-size': '24px',
  }
  const onButtonClick = () => setColor(getRandomColor())

  return (
    <button onClick={onButtonClick}>
      <span style={textStyle}>нажми чтобы поменять цвет кнопки</span>
    </button>
  );
}

export default ColorButton;
