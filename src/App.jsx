import React, { useEffect, useRef, useState } from 'react';
import ListComponent from './components/list/ListComponent';

const App = () => {
  const [heroes, setHeroes] = useState([
    "Spider Man",
    "Iron Man",
    "Captain America"
  ])
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  const handleFocus = () => inputRef.current.focus()
  const handleInputChange = (event) => setInputValue(event.target.value)
  const handleInputKeyUp = (event) => {
    if (event.key === 'Enter' && inputValue) {
      event.preventDefault()

      setHeroes((prev) => [...prev, inputValue])

      setInputValue('')
    }
  }

  useEffect(() => {
    handleFocus()
  }, [])

  return (
    <main className='main'>
      <div className='add-hero-controls'>
        <button
          type="button"
          onClick={handleFocus}
        >
          set focus
        </button>
        <input
          type="text"
          ref={inputRef}
          onChange={handleInputChange}
          onKeyUp={handleInputKeyUp}
          value={inputValue}
        />
      </div>

      <ListComponent data={heroes} />
    </main>
  );
}

export default App;
