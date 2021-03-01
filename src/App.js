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
import Footer from './Component/Footer';
import LandingPage from './Pages/Landing';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  emailjs.init("user_IAmfWoSw7kvklzY9uZFf9");
  AOS.init();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/portfolio">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/about">
          <Header />
          <About />
          <Footer />
        </Route>
        <Route path="/sketch">
          <Header />
          <Sketch />
          <Footer />
        </Route>
        <Route path="/commission">
          <Header />
          <Commission />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
