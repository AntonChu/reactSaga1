import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';

import skillsReducer from "../reducers/skills";
import saga from '../sagas';

const reducer = combineReducers({ skills: skillsReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);
export default store;
