import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from './pages/Contact';
import About from "./pages/About";
import './App.css';

function App() {
  return (
  
    <Router>
    <Switch>
        <Route exact path={["/","/reactportfolio"]} component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        
    </Switch>
    </Router>

    
  );
}

export default App;
