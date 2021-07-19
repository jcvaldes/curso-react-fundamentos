import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp value={123}/>
  </React.StrictMode>,
  document.getElementById('root')
);
