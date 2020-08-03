import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import DataScience from './pages/DataScience';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/data-science">
            <DataScience />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
