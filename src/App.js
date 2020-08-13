import React from 'react';
import './App.css';
import HomePage from './components/Homepage'
import {Switch,Route, Link} from 'react-router-dom'
import Countries from './components/Countries';
import ReduxCircle from './components/ReduxCircle';
import Details from './components/Details';
import LoginPage from './components/Login';
import Tree from './components/Tree';
import { useSelector } from 'react-redux';
import { userLoggedIn } from './store/user/selector';

function App() {
  const loggedIn = useSelector(userLoggedIn)
  return (
    <div className="App">
      <nav>
        <Link to="/tree"> goto Tree</Link>
        <br/>
        { !loggedIn ? <Link to="/login"> goto login</Link> : "login"}
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
