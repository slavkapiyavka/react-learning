import React, { useState } from 'react';

const SiblingComponent = () => {
  const REDEV_TITLE = 'REDEV';
  const [text, setText] = useState('text sample');
  const onChangeTextButtonClick = () => setText(REDEV_TITLE);
  const checkTextValue = () => text === REDEV_TITLE;

  return (
    <div>
      <p>Текущий текст: {text}</p>
      <button onClick={onChangeTextButtonClick} type="button">
        {checkTextValue() ? 'молодец!' : 'изменить текст на REDEV' }
      </button>
    </div>
  );
}

export default SiblingComponent;
