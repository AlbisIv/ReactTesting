// npm i axios
// npm install react-router-dom@6
// npm install @reduxjs/toolkit react-redux
// https://react-redux.js.org/tutorials/quick-start
// https://react-redux.js.org/using-react-redux/usage-with-typescript

import React from 'react';
import logo from './logo.svg';
import './App.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
