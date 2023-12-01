import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import List from './components/List';
import Counter from './components/Counter';
import Span from './components/props-chapter/Span';
import Hero from './components/props-chapter/Hero';
import Card from './components/state-chapter/Card';
import Hint from './components/state-chapter/Hint';
import PerfectInput from './components/state-chapter/PerfectInput';
import ColorButton from './components/state-chapter/ColorButton';
import ParentComponent from './components/state-chapter/ParentComponent';

const MAIN_PAGE_TITLE = 'WELCOME';
const QUESTIONS_LIST_TITLE = 'Questions';
const DATE_EXAMPLE = new Date().getFullYear();
const INITIAL_VALUE = 42;
const HINT_TEXT = 'этот текст можно скрыть';
const superHero = {
  age: 30,
  name: "Flying knight",
  isActive: true,
  stats: {
    strength: 100,
    speed: 80,
    intelligence: 90
  },
  fightCrime: function(name) {
    return `${name} fight crime!`;
  },
  allies: ["Spider Man", "Iron Man", "Captain America"]
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header pageTitle={MAIN_PAGE_TITLE}/>
    <List listTitle={QUESTIONS_LIST_TITLE} />
    <Counter value={INITIAL_VALUE}/>
    <Span year={DATE_EXAMPLE}/>
    <Hero {...superHero}/>
    <Counter />
    <Card />
    <Hint text={HINT_TEXT}/>
    <PerfectInput/>
    <ColorButton />
    <ParentComponent />
  </React.StrictMode>
);
