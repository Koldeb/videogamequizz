import React from 'react';
import Router from './config/router';
import Stars from './components/Stars';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Stars />
      <Router />
    </div>
  );
}

export default App;
