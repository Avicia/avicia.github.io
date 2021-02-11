import './App.css';
import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import About from './Pages/About';
import Social from './Pages/Social';
import Contact from './Pages/Contact';
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
        <Route path="/social">
          <Social />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
