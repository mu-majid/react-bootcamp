import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// sagaMiddleware.run();

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)

export default { store, persistor };