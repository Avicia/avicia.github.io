import './App.css';
import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import About from './Pages/About';
import Sketch from './Pages/Sketch';
import Commission from './Pages/Commission';
import Home from './Pages/Home';
import Header from './Component/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/sketch">
          <Sketch />
        </Route>
        <Route path="/commission">
          <Commission />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
