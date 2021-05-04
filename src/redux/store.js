import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

export const configureStore = (initialState, reducer = rootReducer) => {
  const middlewares = [thunk]
  const isDevelopment = process.env.NODE_ENV === 'development'
  if (isDevelopment) {
    middlewares.push(logger)
  }

  const finalCreateStore = applyMiddleware(...middlewares)(createStore)
  const store = finalCreateStore(
    reducer,
    initialState,
    isDevelopment
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
  return store
}

export const configurePersistor = (store) => persistStore(store);
