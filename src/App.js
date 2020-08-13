import React from 'react';
import './App.css';
import HomePage from './components/Homepage'
import {Switch,Route, Link} from 'react-router-dom'
import Countries from './components/Countries';
import ReduxCircle from './components/ReduxCircle';
import Details from './components/Details';
import LoginPage from './components/Login';
import Tree from './components/Tree';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/tree"> goto Tree</Link>
        <br/>
        <Link to="/login"> goto login</Link>
      </nav>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/tree" component={Tree} />
        <Route path="/redux" component={ReduxCircle} />
        <Route path="/countries" component={Countries} />
        <Route path="/country/:id" component={Details} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
