import React from 'react';
import './App.css';
import HomePage from './components/Homepage'
import {Switch,Route} from 'react-router-dom'
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/countries" component={Countries} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
