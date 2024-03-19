import React, { useEffect, useRef, useState } from 'react';
import ListComponent from './components/list/ListComponent';
import ThemeToggleComponent from './components/ThemeToggleComponent';
import ThemeContext from './contexts/ThemeContext';
import { themes } from './shared/constants';

const App = () => {
  const [theme, setTheme] = useState(themes.auto)
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

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme-mode')

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.dataset.theme = savedTheme

      return
    }

    const preferredColorSchemeLight = window.matchMedia('(prefers-color-scheme: light)').matches
    const preferredColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (preferredColorSchemeLight) {
      setTheme(themes.light)
      document.documentElement.dataset.theme = themes.light

      return
    } else if (preferredColorSchemeDark) {
      setTheme(themes.dark)
      document.documentElement.dataset.theme = themes.dark

      return
    }
  }, [])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeToggleComponent />

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
    </ThemeContext.Provider>
  );
}

export default App;
