import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import NewsReducers from './News/newsReducers';
import newsSaga from './News/newsSagas';

const rootReducer = combineReducers({
  news: NewsReducers,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, logger);

const store = createStore(rootReducer, composeWithDevTools(middleware));

sagaMiddleware.run(newsSaga);

export default store;
