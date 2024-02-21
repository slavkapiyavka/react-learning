import axios from 'axios';
import React, { useEffect, useState } from 'react';

const fetchURL = 'https://jsonplaceholder.typicode.com/todos/1'

const LifeCycleFunctionComponent = () => {
  const [count, setCount] = useState(0)

  const buttonClickHandle = () => setCount((prevState) => prevState + 1)

  useEffect(() => {
    console.log('FC: component is mounted')

    axios.get(fetchURL)
      .then((response) => console.log('FC get data: ', response.data))
      .catch((error) => console.error('FC get data error', error.message))

    return () => {
      console.log('FC: component will be unmounted')
    }
  }, [])

  useEffect(() => {
    if (count % 2 === 0) {
      console.log('FC: count value is changed: ', count)
    }
  }, [count])

  return (
    <div>
      <p>function component example</p>
      <p>{count}</p>
      <button onClick={buttonClickHandle}>increment counter</button>
    </div>
  );
}

export default LifeCycleFunctionComponent;
