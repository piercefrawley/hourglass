import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import DevTools from './DevTools';
import configureStore from '../redux/utils/configureStore';
import routes from '../routes';

require('../styles/app.scss');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router routes={routes} history={history}/>
          <div className="hidden">
            <DevTools />
          </div>
        </div>
      </Provider>
    );
  }
}
