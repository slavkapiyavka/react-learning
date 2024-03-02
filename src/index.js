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
import LifeCycleClassComponent from './components/lifecycle-chapter/LifeCycleClassComponent';
import LifeCycleFunctionComponent from './components/lifecycle-chapter/LifeCycleFunctionComponent';

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
  fightCrime: function (name) {
    return `${name} fight crime!`;
  },
  allies: ["Spider Man", "Iron Man", "Captain America"]
};

const showComponents = false;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {showComponents && <Header pageTitle={MAIN_PAGE_TITLE} />}
    {showComponents && <List listTitle={QUESTIONS_LIST_TITLE} />}
    {showComponents && <Counter value={INITIAL_VALUE} />}
    {showComponents && <Span year={DATE_EXAMPLE} />}
    {showComponents && <Hero {...superHero} />}
    {showComponents && <Counter />}
    {showComponents && <Card />}
    {showComponents && <Hint text={HINT_TEXT} />}
    {showComponents && <PerfectInput />}
    {showComponents && <ColorButton />}
    {showComponents && <ParentComponent />}
    <LifeCycleClassComponent />
    <LifeCycleFunctionComponent />
  </React.StrictMode>
);
