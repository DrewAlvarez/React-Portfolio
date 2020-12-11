import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./components/Contact";
import Resume from "./pages/Resume"
import './App.css';

function App() {
  return (
    <Router basename="/">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
