import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './CashRegister/Register';
import Management from './Management/Management';

render((
  <Router>
    <div>
    <Route exact path="/" component={Register}/>
    <Route exact path="/management" component={Management} />
    </div>
  </Router>
), document.getElementById('app'));
