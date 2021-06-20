import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';
import rootSagas from "./root.sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

sagaMiddleware.run(rootSagas);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)

export default { store, persistor };