import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './CashRegister/Register';

render((
  <Router>
    <div>
    <Route exact path="/" component={Register}/>
    </div>
  </Router>
), document.getElementById('app'));
