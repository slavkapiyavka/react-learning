import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './components/List';
import Counter from './components/Counter';

const QUESTIONS_LIST_TITLE = 'Questions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <List listTitle={QUESTIONS_LIST_TITLE} />
    <Counter />
  </React.StrictMode>
);
