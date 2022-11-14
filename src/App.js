import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Spotlight from './components/Spotlight/Spotlight';
import NewTabs from './components/NewTabs/NewTabs';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Spotlight /> */}
        <NewTabs />
      </Router>
    </div>
  );
}

export default App;
