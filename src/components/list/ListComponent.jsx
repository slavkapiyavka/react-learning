import React, { useEffect, useState } from 'react';

const ListComponent = ({ data }) => {
  const [list, setList] = useState([...data])
  const handleButtonClick = (index) => {
    setList((prev) => {
      const upd = [...prev]
      upd[index] = `🤖 ${upd[index]} 🤖`
      return upd
    })
  }

  const superHeroesList = list.map((element, index) => {
    return (
      <li key={index}>
        <p>id: {index}</p>
        <p>name: {element}</p>
        <button
          type="button"
          onClick={() => handleButtonClick(index)}
        >
          {element.includes('🤖') ? 'more robo emojies!' : 'wrap name in robo emojies'}
        </button>
      </li>
    )
  })

  useEffect(() => {
    setList([...data])
  }, [data])

  return (
    <ul>
      {superHeroesList}
    </ul>
  );
}

export default ListComponent;
