import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';
import Articulos from '../pages/Articulos';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/inicio">
              <Inicio/>
          </Route>
          <Route exact path="/articulos">
              <Articulos/>
          </Route>
          <Route exact path="/contacto">
              <Contacto/>
          </Route>
          <Route path="/">
              <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
