import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import NewsReducers from './News/NewsReducers';

const rootReducer = combineReducers({
  news: NewsReducers,
});

const middleware = applyMiddleware(ReduxThunk, logger);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
