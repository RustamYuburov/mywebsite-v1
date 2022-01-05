import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RouteSwitch from './RouteSwitch';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouteSwitch />
      </BrowserRouter>
    </div>
  );
}

export default App;
