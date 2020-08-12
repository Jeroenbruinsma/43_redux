import React from 'react';
import './App.css';
import HomePage from './components/Homepage'
import {Switch,Route} from 'react-router-dom'
import Countries from './components/Countries';
import ReduxCircle from './components/ReduxCircle';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/redux" component={ReduxCircle} />
        <Route path="/countries" component={Countries} />
        <Route path="/country/:id" component={Details} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
