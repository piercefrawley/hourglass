import { BEGIN, COMMIT, REVERT } from 'redux-optimist';
import { fromJS } from 'immutable';
import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-simple-promise';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
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

export default function configureStore(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      promiseMiddleware(null, null, optimistTransformer),
    )
  )
}
