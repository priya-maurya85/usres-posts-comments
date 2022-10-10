import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Link, Route} from "react-router-dom";
import './App.css';
import User from './components/User';
import Post from './components/Post';

function App() {
  return (
   <>
   <h1>This app is about react router -typescript redux toolkit</h1>
    <BrowserRouter>
    <Link to="/users">  User </Link>
    <Switch>
      <Route path="/users">
        <User />
      </Route>
    </Switch>    
    </BrowserRouter>

    <h1> Calling first User compoennt</h1>

    <User />
    <h1> Calling first Posts compoennt</h1>
    <Post />
   </>
  );
}

export default App;
