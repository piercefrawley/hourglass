import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../redux/utils/configureStore';
import routes from '../routes';

require('../styles/App.scss');

const store = configureStore();
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
