import React, { useState } from 'react';
import getRandomColor from '../../utils/functions'

const ColorButton = () => {
  const [color, setColor] = useState('#000');
  const textStyle = {
    color,
    fontSize: '24px',
  }
  const onButtonClick = () => setColor(getRandomColor())

  return (
    <button onClick={onButtonClick}>
      <span style={textStyle}>нажми чтобы поменять цвет кнопки</span>
    </button>
  );
}

export default ColorButton;
