import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';

ReactDOM.render(
  <React.StrictMode>
    <PrimeraApp saludo="Hola, soy jarvis"/>
    <CounterApp value={123}/>
  </React.StrictMode>,
  document.getElementById('root')
);
