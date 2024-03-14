import React, { useEffect, useState } from 'react';
import './styles.css';
import { themes } from './../../shared/constants'

const ThemeToggleComponent = () => {
  const [theme, setTheme] = useState(themes.auto)

  const onThemeToggleClick = (theme) => {
    setTheme(theme)
    window.localStorage.setItem('theme-mode', theme)
    document.documentElement.dataset.theme = theme
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme-mode')

    if (savedTheme) {
      setTheme(savedTheme)

      return
    }

    const preferredColorSchemeLight = window.matchMedia('(prefers-color-scheme: light)').matches
    const preferredColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (preferredColorSchemeLight) {
      setTheme(themes.light)
      // document.documentElement.dataset.theme = themes.light

      return
    } else if (preferredColorSchemeDark) {
      setTheme(themes.dark)
      // document.documentElement.dataset.theme = themes.dark

      return
    }
  }, [])

  return (
    <div className="toggle-wrapper">
      <div>
        <p>current theme mode is "{theme}"</p>
      </div>
      <div>
        <p>change theme mode</p>

        {Object.values(themes).map((theme) => (
          <button
            key={theme}
            onClick={() => onThemeToggleClick(theme)}
          >
            {theme}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeToggleComponent;
