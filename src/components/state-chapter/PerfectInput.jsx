import React, { useState } from 'react';

const PerfectInput = () => {
  const [text, setText] = useState('');
  const onTextChange = (event) => setText(event.target.value);

  return (
    <div>
      <input type="text" value={text} onChange={onTextChange}/>
      <p>{text ? `значение в поле ввода: ${text}` : 'ничего не введено'}</p>
    </div>
  );
}

export default PerfectInput;
