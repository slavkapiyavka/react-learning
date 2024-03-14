import React, { useContext } from 'react';
import './styles.css';
import { themes } from '../../shared/constants';
import ThemeContext from '../../contexts/ThemeContext';

const ThemeToggleComponent = () => {
  const [theme, setTheme] = useContext(ThemeContext)

  const onThemeToggleClick = (theme) => {
    setTheme(theme)
    window.localStorage.setItem('theme-mode', theme)
    document.documentElement.dataset.theme = theme
  }

  const onResetThemeClick = () => {
    setTheme(themes.auto)
    window.localStorage.removeItem('theme-mode')
    document.documentElement.removeAttribute('data-theme')
  }

  return (
    <div className="toggle-wrapper">
      <div>
        <p>current theme mode is "{theme}"</p>
      </div>
      <div>
        <div>
          <span>change theme mode or </span>
          <button onClick={onResetThemeClick}>reset theme</button>
        </div>

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
