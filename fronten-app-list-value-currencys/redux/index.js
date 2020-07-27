import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducer';
import { rootEpic } from './epics';
import { ENV } from '../utils/constants';
import { composeWithDevTools } from 'redux-devtools-extension';

const packageJSON = require('../package.json');
const { version } = packageJSON;

import Immutable from 'immutable';

export default (initialState, { isServer, req, debug, storeKey }) => {
  const isProd = ENV === 'production';
  const epicMiddleware = createEpicMiddleware();
  const middleWares = [epicMiddleware];
  const isClient = typeof window !== 'undefined';
  let store = null;

  if (!isProd && isClient) {
    const logger = createLogger({
      collapsed: true,
      stateTransformer: state => {
        const values = {};
        const keys = Object.keys(state);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = state[key];

          values[key] = Immutable.Map.isMap(value) ? value.toJS() : value;
        }

        return values;
      },
    });
    middleWares.push(logger);
  }

  const reduxMiddleware = composeWithDevTools(applyMiddleware(...middleWares));

  if (isClient) {
    const { persistReducer, persistStore } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const immutableTransform = require('redux-persist-transform-immutable');

    const persistConfig = {
      transforms: [immutableTransform()],
      key: `root:${version}`,
      storage,
      timeout: 0,
    };

    store = createStore(persistReducer(persistConfig, reducer), Immutable.fromJS(initialState), reduxMiddleware);
    store.__persistor = persistStore(store);
  } else {
    store = createStore(reducer, Immutable.fromJS(initialState), reduxMiddleware);
  }

  epicMiddleware.run(rootEpic);

  return store;
};
