import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Spotlight from './components/Spotlight/Spotlight';
import NewTabs from './components/NewTabs/NewTabs';
import Helps from './components/Helps/Helps';
import Startup from './components/Startups/Startup';
import Platforms from './components/Platforms/Platforms';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Spotlight />
        <NewTabs />
        <Helps />
        <Startup />
        <Platforms />
      </Router>
    </div>
  );
}

export default App;
