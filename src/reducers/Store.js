import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { persistStore } from "redux-persist";
import creaSagaMiddleware from 'redux-saga';
import  rootSaga  from '../reducers/rootSaga'


const sagaMiddleware = creaSagaMiddleware();

const middlewares = [thunk,sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };