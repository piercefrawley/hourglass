import { BEGIN, COMMIT, REVERT } from 'redux-optimist';
import { fromJS } from 'immutable';
import { persistState } from 'redux-devtools';
import { routerReducer } from 'react-router-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-simple-promise';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import DevTools from '../../components/DevTools';
import seizure from '../ducks/seizure';

const optimistTransformer = (action, id, status) => {
  let type;
  if (status === '_RESOLVED') {
    type = COMMIT;
  } else if (status === '_REJECTED') {
    type = REVERT;
  } else {
    type = BEGIN;
  }
  return { ...action, optimist: { type, id } };
};

const loggerMiddleware = createLogger({
    stateTransformer: object => fromJS(object).toJS(),
    actionTransformer: object => fromJS(object).toJS(),
    collapsed: true,
    logErrors: false,
  });

const reducer = combineReducers({
    seizure: seizure,
    routing: routerReducer,
  },
);

const getDebugSessionKey = () => {
  // Default to ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&#])\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
};

const enhancer = (store) => compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    promiseMiddleware(null, null, optimistTransformer),
  ),
  DevTools.instrument(),
  persistState(getDebugSessionKey()),
)(store);


export default function configureStore(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    enhancer,
  )
}
