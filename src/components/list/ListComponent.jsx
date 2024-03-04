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
      <li key={index} className='list-element'>
        <p className='list-element__id'>id: {index}</p>
        <p className='list-element__name'>name: {element}</p>
        <button
          className='list-element__button'
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
    <ul className='list'>
      {superHeroesList}
    </ul>
  );
}

export default ListComponent;
