import React from 'react';
import { Route } from 'react-router';
import Index from './components/Index';
import About from './components/About';
import Counter from './components/Counter';
import Seizure from './components/Seizure';

const routes = (
  <Route path="/" component={Index}>
    <Route path="seizure" component={Seizure}/>
    <Route path="counter" component={Counter}/>
  </Route>
);

export default routes;
