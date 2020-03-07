import React from 'react';
import './css/App.css';
import "animate.css/animate.min.css";
import Main from './pages/index';
import { Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Switch>
           <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
