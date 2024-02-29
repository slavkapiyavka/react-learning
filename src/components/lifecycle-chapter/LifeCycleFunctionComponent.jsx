import axios from 'axios';
import React, { useEffect, useState } from 'react';

const fetchURL = 'https://jsonplaceholder.typicode.com/todos'

const LifeCycleFunctionComponent = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({})

  const buttonClickHandle = () => {
    setCount((prevState) => prevState + 1)
  }

  useEffect(() => {
    console.log('function component did mount')

    return () => {
      console.log('function component will unmount')
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(`${fetchURL}/${count}`)
        setData({ ...request.data })

      } catch (error) {
        console.error('FC get data error: ', error.message)
      }
    }

    fetchData()
  }, [count])

  useEffect(() => {
    console.log('function component did update with count value: ', count)
  }, [count])

  return (
    <div>
      <p>function component example</p>
      <p>{count}</p>
      <button onClick={buttonClickHandle}>increment counter</button>

      <p>todo id: {data.id}</p>
      <p>todo title: {data.title}</p>
    </div>
  );
}

export default LifeCycleFunctionComponent;
