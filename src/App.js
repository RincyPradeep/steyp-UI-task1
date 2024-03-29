import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
