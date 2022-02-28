import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <VendingMachine/>
      </Route>
      <Route exact path="/Chips">
        <Chips/>
      </Route>
      <Route exact path="/Soda">
        <Soda/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
