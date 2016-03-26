import React, { PropTypes } from 'react';
import { fromJS } from 'immutable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import routes from '../routes';
import seizure from '../redux/ducks/seizure';

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
        <Router routes={routes} history={history}/>
      </Provider>
    );
  }
}
