import React, { useState } from 'react';
import getRandomInteger from '../../utils/functions';
import ChildComponent from './ChildComponent';
import SiblingComponent from './SiblingComponent';

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter((actual) => actual + 1);
  const resetCounter = () => setCounter(0);
  const getRandomNumber = () => setCounter(getRandomInteger()); // что происходит, если передавать функцию, а не результат вызова?
  const decrementCounter = () => {
    if(counter === 0) {
      return;
    } else {
      setCounter((actual) => actual - 1);
    }
  };

  return (
    <>
      <aside className='card'>
        <h2>Counter component</h2>
        <p>{counter}</p>
        <button onClick={incrementCounter} type="button">Увеличить</button>
        <button onClick={resetCounter} type="button">Сбросить</button>
        <button onClick={getRandomNumber} type="button">Случайное значение</button>
        <button onClick={decrementCounter} type="button">Уменьшить</button>
      </aside>
      <hr />
      <ChildComponent count={counter}/>
      <SiblingComponent />
    </>
  );
}

export default ParentComponent;
