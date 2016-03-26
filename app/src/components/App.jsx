import React, { PropTypes } from 'react';
import { fromJS } from 'immutable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from '../routes';
import seizure from '../redux/ducks/seizure';
import Index from './Index';
import About from './About';
import Counter from './Counter';
import Seizure from './Seizure';

const initialState = fromJS({
  seizure: {
    colors: [],
  },
});

const store = createStore(
  combineReducers({
    ...seizure,
    routing: routerReducer,
  }),
  initialState
);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Index}>
            <Route path="seizure" component={Seizure}/>
            <Route path="counter" component={Counter}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}
