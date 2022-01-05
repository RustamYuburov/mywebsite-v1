import React from 'react';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';

const RouteSwitch = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default RouteSwitch;
